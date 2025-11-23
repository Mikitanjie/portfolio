import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Validate environment variables
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

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'Outlook365',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASSWORD,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

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
    
    // Return user-friendly error message
    return res.status(500).json({
      message: 'Sorry but something went wrong. Please try again later, I am working on it to fix this!',
    });
  }
}
