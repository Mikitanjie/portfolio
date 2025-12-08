import { useState, useContext } from 'react';
import '../../globals.css';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import Toast from '../Toast/Toast';

function ContactForm() {
  const { theme } = useContext(ThemeContext);
  const [status, setStatus] = useState('');
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  
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
    if (name === 'message') {
      setMessageLength(value.length);
    }
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
        const successMessage = result.message || 'Thanks for contacting me. I will get back to you shortly!';
        setToast({ message: successMessage, type: 'success' });
        event.target.reset();
        setErrors({});
        setTouched({});
        setMessageLength(0);
        setStatus(''); // Clear old status
      } else {
        const errorMessage = result.message || 'Sorry but something went wrong. Please try again later, I am working on it to fix this!';
        setToast({ message: errorMessage, type: 'error' });
        setStatus(''); // Clear old status
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = 'Sorry but something went wrong. Please try again later, I am working on it to fix this!';
      setToast({ message: errorMessage, type: 'error' });
      setStatus(''); // Clear old status
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
      aria-label="Contact form"
    >
      <div className="w-full flex flex-col items-center">
        <label htmlFor="name" className="sr-only">Your name</label>
      <input 
          id="name"
          className={`input-field ${errors.name && touched.name ? 'border-red-500' : ''}`}
        name="name" 
        placeholder="Your name" 
          onBlur={handleBlur}
          onChange={handleChange}
          aria-label="Your name"
          aria-required="true"
          aria-invalid={errors.name && touched.name ? 'true' : 'false'}
          aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
        />
        {errors.name && touched.name && (
          <p id="name-error" className="text-red-500 text-sm mt-1 text-center" role="alert">{errors.name}</p>
        )}
      </div>
      
      <div className="w-full flex flex-col items-center">
        <label htmlFor="email" className="sr-only">Your email</label>
      <input 
          id="email"
          className={`input-field ${errors.email && touched.email ? 'border-red-500' : ''}`}
        name="email" 
        type="email" 
        placeholder="Your email" 
          onBlur={handleBlur}
          onChange={handleChange}
          aria-label="Your email"
          aria-required="true"
          aria-invalid={errors.email && touched.email ? 'true' : 'false'}
          aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
        />
        {errors.email && touched.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1 text-center" role="alert">{errors.email}</p>
        )}
      </div>
      
      <div className="w-full flex flex-col items-center">
        <label htmlFor="message" className="sr-only">Your message</label>
      <textarea 
          id="message"
          className={`textarea-field ${errors.message && touched.message ? 'border-red-500' : ''}`}
        name="message" 
        placeholder="Your message" 
          onBlur={handleBlur}
          onChange={handleChange}
          aria-label="Your message"
          aria-required="true"
          aria-invalid={errors.message && touched.message ? 'true' : 'false'}
          aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
          maxLength={5000}
      />
        <div className="w-full flex justify-between items-center mt-1">
          {errors.message && touched.message && (
            <p id="message-error" className="text-red-500 text-sm text-center" role="alert">{errors.message}</p>
          )}
          <p className={`text-xs ml-auto ${messageLength > 4500 ? 'text-orange-500' : 'text-gray-400'}`}>
            {messageLength}/5000
          </p>
        </div>
      </div>
      
      <button 
        className="submit-button" 
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : 'Send Message'}
      </button>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
          duration={toast.type === 'success' ? 5000 : 0}
        />
      )}
    </form>
  );
}

export default ContactForm;
