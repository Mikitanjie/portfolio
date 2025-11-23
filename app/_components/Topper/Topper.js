// app/_components/Topper/Topper.js
'use client';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const scrollToSection = (event, id) => {
  event.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
};

const Topper = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  const lastScrollRef = useRef(0);
  const tickingRef = useRef(false);

  /* --------------------------------------------------
     ONLY scroll up → show
     scroll down → hide
  -------------------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const current = window.scrollY;
        const last = lastScrollRef.current;

        // Always show at the top
        if (current <= 50) {
          setNavVisible(true);
        }
        // hide on scroll down
        else if (current > last && current > 120) {
          setNavVisible(false);
        }
        // show on scroll up
        else if (current < last) {
          setNavVisible(true);
        }

        lastScrollRef.current = current;
        tickingRef.current = false;
      });
    };

    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navItemStyle =
    'text-white hover:text-emerald-400 active:scale-90 text-lg font-semibold cursor-pointer';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transform: navVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.35s ease',
        willChange: 'transform'
      }}
    >
    <nav
      className="navbar-animated-bg w-full h-[75px] flex justify-between items-center px-4 md:px-8"
    >
      <div className="navbar-matrix" />
      <div className="navbar-green-overlay" />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 z-[5]">
        <a onClick={(e) => scrollToSection(e, 'Home')} className={navItemStyle}>Home</a>
        <a onClick={(e) => scrollToSection(e, 'Projects')} className={navItemStyle}>Projects</a>
        <a onClick={(e) => scrollToSection(e, 'About')} className={navItemStyle}>About</a>
        <a onClick={(e) => scrollToSection(e, 'Skills')} className={navItemStyle}>Skills</a>
        <a onClick={(e) => scrollToSection(e, 'Contacts')} className={navItemStyle}>Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-[5]">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-2xl active:scale-90"
        >
          <FaBars />
        </button>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="text-white hover:text-emerald-400 active:scale-125 text-2xl z-[5]"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm z-[99999]
          flex flex-col items-center justify-start pt-24
          space-y-8 text-white text-3xl font-semibold
          transition-all duration-300 ease-in-out
          ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-4xl active:scale-90 transition-transform duration-200 hover:text-emerald-400"
        >
          <FaTimes />
        </button>

        <a 
          onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Home'); }} 
          className="hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110 active:scale-95"
          style={{ 
            animation: menuOpen ? 'fadeInDown 0.3s ease-out 0.1s both' : 'none'
          }}
        >
          Home
        </a>
        <a 
          onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Projects'); }} 
          className="hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110 active:scale-95"
          style={{ 
            animation: menuOpen ? 'fadeInDown 0.3s ease-out 0.2s both' : 'none'
          }}
        >
          Projects
        </a>
        <a 
          onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'About'); }} 
          className="hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110 active:scale-95"
          style={{ 
            animation: menuOpen ? 'fadeInDown 0.3s ease-out 0.3s both' : 'none'
          }}
        >
          About
        </a>
        <a 
          onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Skills'); }} 
          className="hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110 active:scale-95"
          style={{ 
            animation: menuOpen ? 'fadeInDown 0.3s ease-out 0.4s both' : 'none'
          }}
        >
          Skills
        </a>
        <a 
          onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Contacts'); }} 
          className="hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110 active:scale-95"
          style={{ 
            animation: menuOpen ? 'fadeInDown 0.3s ease-out 0.5s both' : 'none'
          }}
        >
          Contact
        </a>
      </div>
    </nav>
    </div>
  );
};

export default Topper;
