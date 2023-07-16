import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../_components/ThemeContext/ThemeContext';

const handleClick = (event, elementId) => {
  event.preventDefault();

      // Special case for 'Home' button
      if (elementId === 'Home') {
        window.scrollTo({
          top: 60,
          behavior: 'smooth'
        });
        return;
      }
      // Special case for 'Home' button
      if (elementId === 'Projects') {
        window.scrollTo({
          top: 940,
          behavior: 'smooth'
        });
        return;
      }
      // Special case for 'Home' button
      if (elementId === 'About') {
        window.scrollTo({
          top: 1800,
          behavior: 'smooth'
        });
        return;
      }
          // Special case for 'Home' button
      if (elementId === 'Skills') {
        window.scrollTo({
          top: 3000,
          behavior: 'smooth'
        });
        return;
      }


  const element = document.getElementById(elementId);
  const rect = element.getBoundingClientRect();
  const absoluteTop = rect.top + window.scrollY;
  window.scrollTo({
    top: absoluteTop - 100,
    behavior: 'smooth'
  });
};

const Header = () => {
  const {theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="nav fixed top-0 left-0 right-0 z-50" style={{ backgroundImage: `url(https://e0.pxfuel.com/wallpapers/170/477/desktop-wallpaper-matrix-miscellanea-miscellaneous-numbers-binary-code.jpg)`, background: 'cover', backgroundPosition: '152%' }}>
      <div className="flex justify-between h-16 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
          </div>
          <div className="hidden md:block">
            <div className="ml-1 flex items-baseline space-x-4">
              <a onClick={(event) => handleClick(event, 'Home')} className="text-white hover:text-emerald-600 px-4 py-2 text-md font-bold" href="#Home">
                Home
              </a>
              <a onClick={(event) => handleClick(event, 'About')} className="text-white hover:text-emerald-600 px-3 py-2 text-md font-bold" href="#About">
                About Me
              </a>
              <a onClick={(event) => handleClick(event, 'Projects')} className="text-white hover:text-emerald-600 px-3 py-2 text-md font-bold" href="#Projects">
                Projects
              </a>
              <a onClick={(event) => handleClick(event, 'Skills')} className="text-white hover:text-emerald-600 px-3 py-2 text-md font-bold" href="#Skills">
                Skills
              </a>
              <a
                onClick={(event) => handleClick(event, 'Contacts')}
                href="#Contacts"
                className="text-white hover:text-emerald-600 px-3 py-2 text-md font-bold"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="text-white hover:text-emerald-600 px-3 py-2 text-md font-bold" style={{ marginLeft: '874px'}}>
            <button onClick={toggleTheme}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <div className="ml-3 relative"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
