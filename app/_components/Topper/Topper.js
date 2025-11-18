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
  const lastScrollRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const tickingRef = useRef(false);

  const navItemStyle =
    'text-white hover:text-emerald-400 active:scale-90 text-lg font-semibold cursor-pointer';

  // Scroll hide/show (hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        const current = window.scrollY;
        const last = lastScrollRef.current;

        if (current > last && current > 120) {
          setNavVisible(false);
        } else {
          setNavVisible(true);
        }

        lastScrollRef.current = current;
        tickingRef.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show navbar when mouse is near top (desktop only)
  useEffect(() => {
    const revealOnHover = (e) => {
      // only apply on non-touch desktop widths
      if (window.innerWidth <= 768) return;
      if (e.clientY <= 60) {
        setNavVisible(true);
      }
    };

    window.addEventListener('mousemove', revealOnHover);
    return () => window.removeEventListener('mousemove', revealOnHover);
  }, []);

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
      {/* MATRIX BACKGROUND element (CSS handles the image & animation) */}
      <div className="navbar-matrix" />

      {/* GREEN FILTER OVERLAY */}
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
        <button onClick={() => setMenuOpen(true)} className="text-white text-2xl active:scale-90">
          <FaBars />
        </button>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="text-white hover:text-emerald-400 active:scale-125 text-2xl z-[5]"
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[99999] flex flex-col items-center justify-center space-y-8 text-white text-3xl font-semibold">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-4xl active:scale-90"
          >
            <FaTimes />
          </button>

          <a onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Home'); }}>Home</a>
          <a onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Projects'); }}>Projects</a>
          <a onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'About'); }}>About</a>
          <a onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Skills'); }}>Skills</a>
          <a onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Contacts'); }}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Topper;
