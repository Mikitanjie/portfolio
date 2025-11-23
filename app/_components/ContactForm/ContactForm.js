import { useState } from 'react';
import '../../globals.css';

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(''); // Clear previous status

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(result.message || 'Thanks for contacting me. I will get back to you shortly!');
        // Reset form on success
        event.target.reset();
      } else {
        setStatus(result.message || 'Sorry but something went wrong. Please try again later, I am working on it to fix this!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Sorry but something went wrong. Please try again later, I am working on it to fix this!');
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
