'use client';

import React, { useContext, useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const scrollToSection = (event, id) => {
  event.preventDefault();

  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - 70;

  window.scrollTo({
    top,
    behavior: 'smooth',
  });
};

const Topper = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemStyle =
    'text-white hover:text-emerald-400 active:scale-90 text-lg font-semibold cursor-pointer';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full h-[55px] flex justify-between items-center px-4 md:px-8"
      style={{
        backgroundImage:
          'url(https://e0.pxfuel.com/wallpapers/170/477/desktop-wallpaper-matrix-miscellanea-miscellaneous-numbers-binary-code.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* LEFT: Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <a
          onClick={(e) => scrollToSection(e, 'Home')}
          className={navItemStyle}
        >
          Home
        </a>
        <a
          onClick={(e) => scrollToSection(e, 'Projects')}
          className={navItemStyle}
        >
          Projects
        </a>
        <a
          onClick={(e) => scrollToSection(e, 'About')}
          className={navItemStyle}
        >
          About
        </a>
        <a
          onClick={(e) => scrollToSection(e, 'Skills')}
          className={navItemStyle}
        >
          Skills
        </a>
        <a
          onClick={(e) => scrollToSection(e, 'Contacts')}
          className={navItemStyle}
        >
          Contact
        </a>
      </div>

      {/* MIDDLE: Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-2xl active:scale-90"
        >
          <FaBars />
        </button>
      </div>

      {/* RIGHT: Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="text-white hover:text-emerald-400 active:scale-125 text-2xl"
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8 text-white text-3xl font-semibold">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-4xl active:scale-90"
          >
            <FaTimes />
          </button>

          <a
            onClick={(e) => {
              setMenuOpen(false);
              scrollToSection(e, 'Home');
            }}
            className="hover:text-emerald-400"
          >
            Home
          </a>

          <a
            onClick={(e) => {
              setMenuOpen(false);
              scrollToSection(e, 'Projects');
            }}
            className="hover:text-emerald-400"
          >
            Projects
          </a>

          <a
            onClick={(e) => {
              setMenuOpen(false);
              scrollToSection(e, 'About');
            }}
            className="hover:text-emerald-400"
          >
            About
          </a>

          <a
            onClick={(e) => {
              setMenuOpen(false);
              scrollToSection(e, 'Skills');
            }}
            className="hover:text-emerald-400"
          >
            Skills
          </a>

          <a
            onClick={(e) => {
              setMenuOpen(false);
              scrollToSection(e, 'Contacts');
            }}
            className="hover:text-emerald-400"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Topper;
