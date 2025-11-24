// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5; // Max 5 requests per window per IP

function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(ip) || [];
  
  // Remove old requests outside the window
  const recentRequests = userRequests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  // Remove potentially dangerous characters and trim
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .substring(0, 5000); // Limit length
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Rate limiting
    const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || 'unknown';
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        message: 'Too many requests. Please try again later.',
      });
    }

    // Log environment variable status (without exposing values) - only in development
    if (process.env.NODE_ENV === 'development') {
      console.log('=== CONTACT FORM API CALLED ===');
      console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
      console.log('CONTACT_EMAIL exists:', !!process.env.CONTACT_EMAIL);
    }
    
    // Validate environment variables
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Missing email configuration: RESEND_API_KEY or CONTACT_EMAIL not set');
      }
      return res.status(500).json({
        message: 'Server configuration error. Please contact the administrator.',
      });
    }

    // Validate and sanitize request body
    let { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    // Sanitize inputs
    name = sanitizeInput(name);
    email = sanitizeInput(email).toLowerCase();
    message = sanitizeInput(message);

    // Validate email format
    if (!validateEmail(email)) {
      return res.status(400).json({
        message: 'Please provide a valid email address',
      });
    }

    // Validate field lengths
    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({
        message: 'Name must be between 2 and 100 characters',
      });
    }

    if (message.length < 10 || message.length > 5000) {
      return res.status(400).json({
        message: 'Message must be between 10 and 5000 characters',
      });
    }

    // Escape HTML in user input for email body
    function escapeHtml(text) {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return text.replace(/[&<>"']/g, m => map[m]);
    }

    // Prepare email payload with sanitized data
    const emailPayload = {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `New Contact Form Message from ${escapeHtml(name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
      text: `From: ${email}\n\nMessage: ${message}`,
    };

    if (process.env.NODE_ENV === 'development') {
      console.log('Sending email to Resend API...');
    }

    // Send email using Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Resend API error:', {
          status: response.status,
          statusText: response.statusText,
          data: data,
        });
      }
      throw new Error(data.message || `Resend API error: ${response.status} ${response.statusText}`);
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Email sent successfully:', data.id);
    }
    
    return res.status(200).json({
      message: 'Thanks for contacting me. I will get back to you shortly!',
    });

  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('=== EMAIL SEND ERROR ===');
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return res.status(500).json({
      message: 'Sorry but something went wrong. Please try again later, I am working on it to fix this!',
    });
  }
}
