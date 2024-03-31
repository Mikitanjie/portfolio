import { useState } from 'react';
import '../../globals.css';

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('/pages/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus('Thanks for contacting me. I will get back to you shortly!');
    } else {
      setStatus('Sorry but something went wrong. Please try again later, Iam working on it to fix this!');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input className="input-field" name="name" placeholder="Your name" required />
      <input className="input-field" name="email" type="email" placeholder="Your email" required />
      <textarea className="textarea-field" name="message" placeholder="Your message" required />
      <button className="submit-button" type="submit">Send</button>
      {status && <div style={{ color: 'red' }}>{status}</div>}
    </form>
  );
}

export default ContactForm;
