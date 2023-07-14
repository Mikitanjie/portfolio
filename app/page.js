'use client'

import React, { useContext } from 'react';
import { ThemeContext } from './_components/ThemeContext/ThemeContext';
import Image from 'next/image';
import Hero from './_components/Hero/Hero';
import Header from './_components/Header/Header';
import Projects from './_components/Projects/Projects';
import About from './_components/About/About';
import Button from './_components/Button/Button';
import Skills from './_components/Skills/Skills';
import Footer from './_components/Footer/Footer';
import Languages from './_components/Languages/Languages';

export default function Home() {
  // Get the theme from the context
  const { toggleTheme } = useContext(ThemeContext);

  // Call this function when you want to switch themes
  const onSomeEvent = () => {
    toggleTheme();
  };


  return (
    <div>
      <Header />
      <div className="text-center text-5xl font-extrabold pt-20 relative">
        <span
          className="bg-clip-text text-emerald-600"
          style={{
            animation: 'lightingEffect 2s linear infinite',
            filter: 'drop-shadow(0 0 20px green)',
          }}
        >Welcome to my portfolio</span>
      </div>
      <div className="pt-40">
        <Hero />
        <Projects />
        <About />
        <div id="Skills" className="text-center text-5xl font-extrabold pt-40 relative" style={{ marginBottom: '200px'}}>
        <span
          className="bg-clip-text text-emerald-600"
          style={{
            animation: 'lightingEffect 2s linear infinite',
            filter: 'drop-shadow(0 0 10px green)',
          }}
        >Skills & Languages</span>
      </div>
        <Skills />
        <Languages />
        <Footer />
      </div>

    </div>
  );
}
