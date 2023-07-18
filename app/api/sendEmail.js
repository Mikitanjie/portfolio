// import nodemailer from "nodemailer";

// // Node.js will automatically import the process object
// const user = process.env.EMAIL_USER;
// const pass = process.env.EMAIL_PASSWORD;

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     // process a POST request
//     const { name, email, message } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: user,  // updated here
//         pass: pass   // updated here
//       }
//     });

//     const mailOptions = {
//       from: email,
//       to: user,  // updated here, assuming you want to send the email to yourself
//       subject: 'New message from contact form',
//       text: `
//         You received a new message from your contact form.

//         Name: ${name}
//         Email: ${email}
//         Message: ${message}
//       `
//     };

//     transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         res.status(500).send({
//           message: 'Error occurred, message not sent.',
//           error: error.message,
//         });
//       } else {
//         res.status(200).send({
//           message: 'Email sent: ' + info.response,
//         });
//       }
//     });
//   } else {
//     // Handle any other HTTP method
//     res.status(200).json({ message: 'Contact API reachable.' });
//   }
// }
