'use client'

import { createContext, useState, useEffect } from 'react';

// Create a context for the theme
export const ThemeContext = createContext();

// Create a provider for the theme context
export function ThemeProvider({ children }) {
  // Use state to keep track of the current theme
  const [theme, setTheme] = useState('light'); // Default theme is light

  // On mount, we check if the user has a preference in localStorage
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.setAttribute('data-theme', localTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
