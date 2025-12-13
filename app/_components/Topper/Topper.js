// app/_components/Topper/Topper.js
'use client';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';
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
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const navbarParticlesRef = useRef(null);

  // Focus management for mobile menu
  useEffect(() => {
    if (menuOpen && closeButtonRef.current) {
      // Focus close button when menu opens
      closeButtonRef.current.focus();
    } else if (!menuOpen && menuButtonRef.current) {
      // Return focus to menu button when menu closes
      menuButtonRef.current.focus();
    }
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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

  // Navbar particles effect (only for dark theme)
  useEffect(() => {
    if (theme !== 'dark') return;

    const canvas = navbarParticlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const navbarHeight = 75;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = navbarHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    let particles = [];
    let animationFrameId;

    const createParticles = () => {
      particles = [];
      // More particles for a richer effect
      const particleCount = 25;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speedX: (Math.random() * 0.5 - 0.25) * 0.5, // Slower horizontal movement
          speedY: (Math.random() * 0.5 - 0.25) * 0.5, // Slower vertical movement
          size: Math.random() * 1.5 + 0.5, // Smaller particles (0.5-2px)
          opacity: Math.random() * 0.5 + 0.3, // Subtle opacity
        });
      }
    };

    createParticles();

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle with green color
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = `rgba(16, 185, 129, ${p.opacity})`; // emerald-400 with opacity
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    }

    drawParticles();

    const intervalId = setInterval(createParticles, 3 * 60 * 1000); // Regenerate every 3 minutes

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      clearInterval(intervalId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

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
      style={{
        backgroundClip: 'unset',
        WebkitBackgroundClip: 'unset'
      }}
    >
      {theme === 'dark' && (
        <>
          <div className="navbar-matrix" />
          <div className="navbar-green-overlay" />
          {/* Navbar particles canvas (dark theme) */}
          <canvas
            ref={navbarParticlesRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          />
        </>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 z-[5]" aria-label="Main navigation">
        <a 
          onClick={(e) => scrollToSection(e, 'Home')} 
          onKeyDown={(e) => e.key === 'Enter' && scrollToSection(e, 'Home')}
          className={navItemStyle}
          role="button"
          tabIndex={0}
          aria-label="Navigate to Home section"
        >
          Home
        </a>
        <a 
          onClick={(e) => scrollToSection(e, 'Projects')} 
          onKeyDown={(e) => e.key === 'Enter' && scrollToSection(e, 'Projects')}
          className={navItemStyle}
          role="button"
          tabIndex={0}
          aria-label="Navigate to Projects section"
        >
          Projects
        </a>
        <a 
          onClick={(e) => scrollToSection(e, 'About')} 
          onKeyDown={(e) => e.key === 'Enter' && scrollToSection(e, 'About')}
          className={navItemStyle}
          role="button"
          tabIndex={0}
          aria-label="Navigate to About section"
        >
          About
        </a>
        <a 
          onClick={(e) => scrollToSection(e, 'Skills')} 
          onKeyDown={(e) => e.key === 'Enter' && scrollToSection(e, 'Skills')}
          className={navItemStyle}
          role="button"
          tabIndex={0}
          aria-label="Navigate to Skills section"
        >
          Skills
        </a>
        <a 
          onClick={(e) => scrollToSection(e, 'Contacts')} 
          onKeyDown={(e) => e.key === 'Enter' && scrollToSection(e, 'Contacts')}
          className={navItemStyle}
          role="button"
          tabIndex={0}
          aria-label="Navigate to Contact section"
        >
          Contact
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-[5]">
        <button
          ref={menuButtonRef}
          onClick={() => setMenuOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setMenuOpen(true);
            }
          }}
          className="text-white text-2xl active:scale-90 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black rounded"
          aria-label="Open mobile menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="text-white hover:text-emerald-400 text-2xl z-[5] transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <HiOutlineMoon size={28} /> : <HiOutlineSun size={28} />}
      </button>

      {/* Mobile Menu */}
      <nav 
        id="mobile-menu"
        className={`fixed inset-0 bg-black bg-opacity-95 backdrop-blur-md z-[99999]
          flex flex-col items-center justify-start pt-24
          space-y-8 text-white text-3xl font-semibold
          transition-all duration-300 ease-in-out
          ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        style={{
          animation: menuOpen ? 'slideInFromRight 0.3s ease-out' : 'none'
        }}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <button
          ref={closeButtonRef}
          onClick={() => setMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setMenuOpen(false);
            } else if (e.key === 'Escape') {
              setMenuOpen(false);
            }
          }}
          className="absolute top-6 right-6 text-4xl active:scale-90 transition-all duration-200 hover:text-emerald-400 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black rounded"
          style={{
            animation: menuOpen ? 'scaleIn 0.3s ease-out 0.1s both' : 'none'
          }}
          aria-label="Close mobile menu"
        >
          <FaTimes />
        </button>

        <a 
          onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Home'); }} 
          onKeyDown={(e) => { if (e.key === 'Enter') { setMenuOpen(false); scrollToSection(e, 'Home'); } }}
          className="px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
          style={{ 
            color: theme === 'light' ? 'rgb(30, 30, 30)' : 'white',
            backgroundColor: theme === 'light' ? 'rgba(1, 161, 35, 0.5)' : 'transparent',
            border: theme === 'light' ? '2px solid rgba(1, 161, 35, 0.7)' : 'none',
            textShadow: theme === 'light' ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.5)',
            animation: menuOpen ? 'fadeInDown 0.3s ease-out 0.1s both' : 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = theme === 'light' ? 'rgba(1, 161, 35, 0.65)' : 'rgba(16, 185, 129, 0.2)';
            e.target.style.borderColor = theme === 'light' ? 'rgba(1, 161, 35, 0.9)' : 'rgba(16, 185, 129, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = theme === 'light' ? 'rgba(1, 161, 35, 0.5)' : 'transparent';
            e.target.style.borderColor = theme === 'light' ? 'rgba(1, 161, 35, 0.7)' : 'transparent';
          }}
          role="button"
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Navigate to Home section"
        >
          Home
        </a>
        <a 
          onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Projects'); }} 
          onKeyDown={(e) => { if (e.key === 'Enter') { setMenuOpen(false); scrollToSection(e, 'Projects'); } }}
          className="px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
          style={{ 
            color: theme === 'light' ? 'rgb(30, 30, 30)' : 'white',
            backgroundColor: theme === 'light' ? 'rgba(1, 161, 35, 0.15)' : 'transparent',
            border: theme === 'light' ? '2px solid rgba(1, 161, 35, 0.3)' : 'none',
            textShadow: theme === 'light' ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.5)',
            animation: menuOpen ? 'fadeInDown 0.3s ease-out 0.2s both' : 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = theme === 'light' ? 'rgba(1, 161, 35, 0.25)' : 'rgba(16, 185, 129, 0.2)';
            e.target.style.borderColor = theme === 'light' ? 'rgba(1, 161, 35, 0.5)' : 'rgba(16, 185, 129, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = theme === 'light' ? 'rgba(1, 161, 35, 0.15)' : 'transparent';
            e.target.style.borderColor = theme === 'light' ? 'rgba(1, 161, 35, 0.3)' : 'transparent';
          }}
          role="button"
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Navigate to Projects section"
        >
          Projects
        </a>
        <a 
          onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'About'); }} 
          onKeyDown={(e) => { if (e.key === 'Enter') { setMenuOpen(false); scrollToSection(e, 'About'); } }}
          className="px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
          style={{ 
            color: theme === 'light' ? 'rgb(30, 30, 30)' : 'white',
            backgroundColor: theme === 'light' ? 'rgba(1, 161, 35, 0.15)' : 'transparent',
            border: theme === 'light' ? '2px solid rgba(1, 161, 35, 0.3)' : 'none',
            textShadow: theme === 'light' ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.5)',
            animation: menuOpen ? 'fadeInDown 0.3s ease-out 0.3s both' : 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = theme === 'light' ? 'rgba(1, 161, 35, 0.25)' : 'rgba(16, 185, 129, 0.2)';
            e.target.style.borderColor = theme === 'light' ? 'rgba(1, 161, 35, 0.5)' : 'rgba(16, 185, 129, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = theme === 'light' ? 'rgba(1, 161, 35, 0.15)' : 'transparent';
            e.target.style.borderColor = theme === 'light' ? 'rgba(1, 161, 35, 0.3)' : 'transparent';
          }}
          role="button"
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Navigate to About section"
        >
          About
        </a>
        <a 
          onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Skills'); }} 
          onKeyDown={(e) => { if (e.key === 'Enter') { setMenuOpen(false); scrollToSection(e, 'Skills'); } }}
          className="px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
          style={{ 
            color: theme === 'light' ? 'rgb(30, 30, 30)' : 'white',
            backgroundColor: theme === 'light' ? 'rgba(1, 161, 35, 0.15)' : 'transparent',
            border: theme === 'light' ? '2px solid rgba(1, 161, 35, 0.3)' : 'none',
            textShadow: theme === 'light' ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.5)',
            animation: menuOpen ? 'fadeInDown 0.3s ease-out 0.4s both' : 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = theme === 'light' ? 'rgba(1, 161, 35, 0.25)' : 'rgba(16, 185, 129, 0.2)';
            e.target.style.borderColor = theme === 'light' ? 'rgba(1, 161, 35, 0.5)' : 'rgba(16, 185, 129, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = theme === 'light' ? 'rgba(1, 161, 35, 0.15)' : 'transparent';
            e.target.style.borderColor = theme === 'light' ? 'rgba(1, 161, 35, 0.3)' : 'transparent';
          }}
          role="button"
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Navigate to Skills section"
        >
          Skills
        </a>
        <a 
          onClick={(e) => { setMenuOpen(false); scrollToSection(e, 'Contacts'); }} 
          onKeyDown={(e) => { if (e.key === 'Enter') { setMenuOpen(false); scrollToSection(e, 'Contacts'); } }}
          className="px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
          style={{ 
            color: theme === 'light' ? 'rgb(30, 30, 30)' : 'white',
            backgroundColor: theme === 'light' ? 'rgba(1, 161, 35, 0.15)' : 'transparent',
            border: theme === 'light' ? '2px solid rgba(1, 161, 35, 0.3)' : 'none',
            textShadow: theme === 'light' ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.5)',
            animation: menuOpen ? 'fadeInDown 0.3s ease-out 0.5s both' : 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = theme === 'light' ? 'rgba(1, 161, 35, 0.25)' : 'rgba(16, 185, 129, 0.2)';
            e.target.style.borderColor = theme === 'light' ? 'rgba(1, 161, 35, 0.5)' : 'rgba(16, 185, 129, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = theme === 'light' ? 'rgba(1, 161, 35, 0.15)' : 'transparent';
            e.target.style.borderColor = theme === 'light' ? 'rgba(1, 161, 35, 0.3)' : 'transparent';
          }}
          role="button"
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Navigate to Contact section"
        >
          Contact
        </a>
      </nav>
    </nav>
    </div>
  );
};

export default Topper;
