import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Button = ({ text, href }) => {
  const { theme } = useContext(ThemeContext);

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="hero-action-button inline-flex justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 active:scale-90"
      >
        {text}
      </a>
    );
  }
};

export default Button;
