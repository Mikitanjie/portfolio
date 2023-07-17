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
import Particles from './_components/Particles/Particles';

export default function Home() {
  // Get the theme from the context
  const { theme,toggleTheme } = useContext(ThemeContext);

  // Call this function when you want to switch themes
  const onSomeEvent = () => {
    toggleTheme();
  };


  return (
    <div>
      <Particles />
      <Header />
      <div className="hover:scale-110 text-center text-5xl font-extrabold pt-20 relative" style={{ marginTop: '15px', marginBottom: '110px'}}>
      <span
          className="bg-clip-text underline-on-hover"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(52, 211, 153)', // Use the RGB value for 'emerald-600' color in Tailwind CSS
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
          Welcome to my portfolio</span>
      </div>
      <div className="pt-40">
        <Hero />
        <div className="hover:scale-110 text-center text-5xl font-extrabold relative" style={{ marginTop: '200px', marginBottom: '110px'}}>
        <span
          className="bg-clip-text underline-on-hover"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(52, 211, 153)', // Use the RGB value for 'emerald-600' color in Tailwind CSS
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
          Projects</span>
      </div>
        <Projects />
        <div id="Skills" className="flex justify-end text-center text-5xl font-extrabold pt-40 relative" style={{marginTop: '-500px', marginBottom: '400px', marginRight: '30px'}}>
        <span
          className="bg-clip-text underline-on-hover"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(52, 211, 153)', // Use the RGB value for 'emerald-600' color in Tailwind CSS
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
          More Projects coming sono
          <span className="dot1">.</span>
          <span className="dot2">.</span>
          <span className="dot3">.</span>
          </span>
      </div>
        <div className="hover:scale-110 text-center text-5xl font-extrabold relative" style={{ marginTop: '250px', marginBottom: '-45px'}}>
        <span
          className="bg-clip-text underline-on-hover"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(52, 211, 153)', // Use the RGB value for 'emerald-600' color in Tailwind CSS
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
          About me</span>
      </div>
        <About />
        <div id="Skills" className="hover:scale-110 text-center text-5xl font-extrabold pt-40 relative" style={{marginTop: '300px', marginBottom: '200px'}}>
        <span
          className="bg-clip-text underline-on-hover"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(52, 211, 153)', // Use the RGB value for 'emerald-600' color in Tailwind CSS
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
          Skills & Languages</span>
      </div>
        <Skills />
        <Languages />
        <Footer />
      </div>
    </div>
  );
}
