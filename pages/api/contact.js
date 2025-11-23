export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Validate environment variables
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error('Missing email configuration: RESEND_API_KEY or CONTACT_EMAIL not set');
      return res.status(500).json({
        message: 'Server configuration error. Please contact the administrator.',
      });
    }

    // Validate request body
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    // Send email using Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>', // You can verify your domain later
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
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      throw new Error(data.message || 'Failed to send email');
    }
    
    console.log('Email sent successfully:', data.id);
    
    return res.status(200).json({
      message: 'Thanks for contacting me. I will get back to you shortly!',
    });

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
    });
    
    return res.status(500).json({
      message: 'Sorry but something went wrong. Please try again later, I am working on it to fix this!',
    });
  }
}
