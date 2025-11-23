'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[9998] p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        backgroundColor: theme === 'light' ? 'rgba(34, 197, 94, 0.9)' : 'rgba(1, 161, 35, 0.9)',
        color: 'white',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
}

