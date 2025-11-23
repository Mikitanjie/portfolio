import { useState } from 'react';
import '../../globals.css';

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('/api/contact', {
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
    <form className="contact-form fade-in-up" onSubmit={handleSubmit}>
      <input 
        className="input-field" 
        name="name" 
        placeholder="Your name" 
        required 
      />
      <input 
        className="input-field" 
        name="email" 
        type="email" 
        placeholder="Your email" 
        required 
      />
      <textarea 
        className="textarea-field" 
        name="message" 
        placeholder="Your message" 
        required 
      />
      <button className="submit-button" type="submit">
        Send Message
      </button>
      {status && (
        <div 
          className="mt-4 p-3 rounded-lg text-center transition-all"
          style={{ 
            color: status.includes('Thanks') ? '#10B981' : '#ef4444',
            background: status.includes('Thanks') 
              ? 'rgba(16, 185, 129, 0.1)' 
              : 'rgba(239, 68, 68, 0.1)',
            border: `1px solid ${status.includes('Thanks') ? '#10B981' : '#ef4444'}`
          }}
        >
          {status}
        </div>
      )}
    </form>
  );
}

export default ContactForm;
