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

        // hide on scroll down
        if (current > last && current > 120) {
          setNavVisible(false);
        }
        // show on scroll up
        else {
          setNavVisible(true);
        }

        lastScrollRef.current = current;
        tickingRef.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navItemStyle =
    'text-white hover:text-emerald-400 active:scale-90 text-lg font-semibold cursor-pointer';

  return (
    <nav
      className={`
        navbar-animated-bg
        fixed top-0 left-0 right-0 z-[9999]
        w-full h-[75px]
        flex justify-between items-center px-4 md:px-8
        ${navVisible ? 'nav-visible' : 'nav-hidden'}
      `}
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
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[99999]
            flex flex-col items-center justify-start pt-24
            space-y-8 text-white text-3xl font-semibold">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-4xl active:scale-90"
          >
            <FaTimes />
          </button>

          <a onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Home'); }} className="hover:text-emerald-400">Home</a>
          <a onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Projects'); }} className="hover:text-emerald-400">Projects</a>
          <a onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'About'); }} className="hover:text-emerald-400">About</a>
          <a onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Skills'); }} className="hover:text-emerald-400">Skills</a>
          <a onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Contacts'); }} className="hover:text-emerald-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Topper;
