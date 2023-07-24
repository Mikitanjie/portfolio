import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Button = ({ text, href }) => {
  const { theme } = useContext(ThemeContext);

  if (href) {
    return (
      <button
        type="button"
        className="underline-on-hover text-emerald-600 inline-flex justify-center px-4 py-2 focus:outline-offset-0 transform transition-transform duration-150 active:scale-90"
      >
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`}
        >
          {text}
        </a>
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className="underline-on-hover text-emerald-600 inline-flex justify-center px-4 py-2 focus:outline-offset-0 transform transition-transform duration-150 active:scale-90"
      >
        <span className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`}>
          {text}
        </span>
      </button>
    );
  }
};

export default Button;
