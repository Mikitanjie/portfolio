import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Validate environment variables
    // Note: APP_PASSWORD can be an App Password or regular password
    if (!process.env.EMAIL_USER || !process.env.APP_PASSWORD) {
      console.error('Missing email configuration: EMAIL_USER or APP_PASSWORD not set');
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

    // Create transporter with explicit Outlook SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASSWORD,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
      // Add timeout to prevent hanging
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Prepare mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Message from ${name}`,
      text: `From: ${email}\n\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email using async/await
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    return res.status(200).json({
      message: 'Thanks for contacting me. I will get back to you shortly!',
    });

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      response: error.response,
      stack: error.stack,
    });
    
    // Return user-friendly error message
    // In production, don't expose internal error details
    return res.status(500).json({
      message: 'Sorry but something went wrong. Please try again later, I am working on it to fix this!',
    });
  }
}
