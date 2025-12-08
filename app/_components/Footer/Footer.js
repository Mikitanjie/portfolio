import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer id="Contacts" className="w-full dark:bg-gray-900 px-6 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10">

        <div className="flex flex-col items-center gap-4">
          <span
            className="text-2xl font-semibold text-center"
            style={{ color: theme === 'light' ? 'white' : 'rgb(52, 211, 153)' }}
          >
            Get in touch
          </span>

          <h2 
            className={`text-base font-bold uppercase text-center follow-me-futuristic ${theme === 'light' ? '' : 'text-gray-300'}`}
            style={{ 
              letterSpacing: '0.2em'
            }}
          >
            <span>
            Follow me
            </span>
          </h2>

          <div className="flex gap-6 dark:text-gray-100">
            <Link href="https://github.com/Mikitanjie" target="_blank" rel="noopener noreferrer">
              <AiFillGithub
                size="2.8rem"
                className="active:scale-50 hover:text-emerald-600 transition-transform duration-150"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/mc16/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin
                size="2.8rem"
                className="active:scale-50 hover:text-emerald-600 transition-transform duration-150"
              />
            </Link>
          </div>
        </div>

        <hr className="w-full border dark:border-emerald-600 animate-pulse" />

        <div className="flex flex-col items-center gap-3">
        <span className="text-sm text-emerald-600 text-center">
          © 2025 - Michael Catania
        </span>
          <Link 
            href="/privacy" 
            className="text-xs text-emerald-600 hover:text-emerald-400 hover:underline transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
