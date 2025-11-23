import { useState, useContext } from 'react';
import '../../globals.css';
import { ThemeContext } from '../ThemeContext/ThemeContext';

function ContactForm() {
  const { theme } = useContext(ThemeContext);
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const inputTextColor = theme === 'light' ? 'rgb(30, 30, 30)' : 'rgb(255, 255, 255)';
  const placeholderColor = theme === 'light' ? 'rgba(30, 30, 30, 0.6)' : 'rgba(255, 255, 255, 0.6)';

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('');
    setTouched({ name: true, email: true, message: true });

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Validate all fields
    const newErrors = {};
    Object.keys(data).forEach(key => {
      const error = validateField(key, data[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

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
        event.target.reset();
        setErrors({});
        setTouched({});
      } else {
        setStatus(result.message || 'Sorry but something went wrong. Please try again later, I am working on it to fix this!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Sorry but something went wrong. Please try again later, I am working on it to fix this!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      className="contact-form fade-in-up" 
      onSubmit={handleSubmit}
      style={{ 
        width: '50vw', 
        maxWidth: '50vw', 
        margin: '0 auto',
        '--input-text-color': inputTextColor,
        '--placeholder-color': placeholderColor
      }}
    >
      <div className="w-full flex flex-col items-center">
        <input 
          className={`input-field ${errors.name && touched.name ? 'border-red-500' : ''}`}
          name="name" 
          placeholder="Your name" 
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.name && touched.name && (
          <p className="text-red-500 text-sm mt-1 text-center">{errors.name}</p>
        )}
      </div>
      
      <div className="w-full flex flex-col items-center">
        <input 
          className={`input-field ${errors.email && touched.email ? 'border-red-500' : ''}`}
          name="email" 
          type="email" 
          placeholder="Your email" 
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && touched.email && (
          <p className="text-red-500 text-sm mt-1 text-center">{errors.email}</p>
        )}
      </div>
      
      <div className="w-full flex flex-col items-center">
        <textarea 
          className={`textarea-field ${errors.message && touched.message ? 'border-red-500' : ''}`}
          name="message" 
          placeholder="Your message" 
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.message && touched.message && (
          <p className="text-red-500 text-sm mt-1 text-center">{errors.message}</p>
        )}
      </div>
      
      <button 
        className="submit-button" 
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
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
