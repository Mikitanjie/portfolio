import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Button = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className="underline-on-hover text-emerald-600 inline-flex justify-center px-4 py-2 focus:outline-offset-0 transform transition-transform duration-150 active:scale-90">
      <a
        href="mailto:cataniamike16@gmail.com"
        className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`}
      >
        Send me a message
      </a>
    </button>
  );
};

export default Button;
