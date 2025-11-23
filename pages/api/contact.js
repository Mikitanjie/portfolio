export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Log environment variable status (without exposing values)
    console.log('=== CONTACT FORM API CALLED ===');
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    console.log('CONTACT_EMAIL exists:', !!process.env.CONTACT_EMAIL);
    console.log('CONTACT_EMAIL value:', process.env.CONTACT_EMAIL || 'NOT SET');
    
    // Validate environment variables
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error('Missing email configuration: RESEND_API_KEY or CONTACT_EMAIL not set');
      return res.status(500).json({
        message: 'Server configuration error. Please contact the administrator.',
      });
    }

    // Validate request body
    const { name, email, message } = req.body;
    
    console.log('Request body:', { name, email, message: message?.substring(0, 50) + '...' });
    
    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    // Prepare email payload
    const emailPayload = {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `From: ${email}\n\nMessage: ${message}`,
    };

    console.log('Sending email to Resend API...');
    console.log('Email payload (sanitized):', {
      ...emailPayload,
      to: emailPayload.to,
    });

    // Send email using Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    });

    console.log('Resend API response status:', response.status);
    
    const data = await response.json();
    console.log('Resend API response data:', data);

    if (!response.ok) {
      console.error('Resend API error:', {
        status: response.status,
        statusText: response.statusText,
        data: data,
      });
      throw new Error(data.message || `Resend API error: ${response.status} ${response.statusText}`);
    }
    
    console.log('Email sent successfully:', data.id);
    
    return res.status(200).json({
      message: 'Thanks for contacting me. I will get back to you shortly!',
    });

  } catch (error) {
    console.error('=== EMAIL SEND ERROR ===');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Full error:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
    
    return res.status(500).json({
      message: 'Sorry but something went wrong. Please try again later, I am working on it to fix this!',
    });
  }
}
