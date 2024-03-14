'use client'

import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './_components/ThemeContext/ThemeContext';
import Hero from './_components/Hero/Hero';
import Topper from './_components/Topper/Topper';
import Projects from './_components/Projects/Projects';
import About from './_components/About/About';
import Skills from './_components/Skills/Skills';
import Footer from './_components/Footer/Footer';
import Languages from './_components/Languages/Languages';
import Particles from './_components/Particles/Particles';
import Tools from './_components/Tools/Tools';
import Libraries from './_components/Libraries/Libraries';
import ContactForm from './_components/ContactForm/ContactForm';

// This is the Home page component
export default function Home() {
  // Get the theme from the context
  const { theme,toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("%c🧑🏼‍💻 Curious to know what else I can do? HIRE ME!", "color: green; font-size:16px;");
  }, []);

  return (
    <div>
      <Particles />
      <Topper />
      <div className="text-center text-5xl font-semibold pt-20 relative" style={{ marginTop: '5px', marginBottom: '320px'}}>
      <span
          className="bg-clip-text"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(1, 161, 35)',
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
          Happy to see you here!</span>
      </div>
        <Hero />
        <div className="text-center text-5xl font-semibold relative" style={{ marginTop: '300px', marginBottom: '230px'}}>
        <span
          className="bg-clip-text"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(1, 161, 35)',
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
          Projects</span>
      </div>
        <Projects />
        <div className="text-center flex justify-end font-semibold text-4xl pt-40 relative" style={{marginBottom: '200px', marginRight: '42px'}}>
        <span
          className="bg-clip-text"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(1, 161, 35)',
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
          More Projects coming soon
          <span className="dot1">.</span>
          <span className="dot2">.</span>
          <span className="dot3">.</span>
          </span>
      </div>
        <div className="text-center text-5xl font-semibold" style={{ marginTop: '250px', marginBottom: '25px'}}>
        <span
          className="bg-clip-text"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(1, 161, 35)',
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
          About me</span>
      </div>
        <About />
        <div id="Skills" className="text-center text-5xl font-semibold pt-40" style={{ marginBottom: '220px'}}>
        <span
          className="bg-clip-text"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(1, 161, 35)',
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
         Programming & Markup Languages</span>
      </div>
        <Tools />
        <div id="Skills" className="text-center text-5xl font-semibold pt-40" style={{marginTop: '300px', marginBottom: '200px'}}>
        <span
          className="bg-clip-text "
          style={{
            color: theme === 'light' ? 'black' : 'rgb(1, 161, 35)',
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
         DevOps & Deployment
        </span>
      </div>
        <Skills />
        <div id="Skills" className="text-center text-5xl font-semibold pt-40" style={{marginTop: '300px', marginBottom: '170px'}}>
        <span
          className="bg-clip-text"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(1, 161, 35)',
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
          Frameworks & other</span>
      </div>
        <Libraries />
        <div id="Skills" className="text-center text-5xl font-semibold pt-40" style={{marginTop: '-70px', marginBottom: '50px'}}>
        <span
          className="bg-clip-text"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(1, 161, 35)',
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
          Languages</span>
      </div>
        <Languages />
        <div id="Skills" className="text-center text-5xl font-semibold pt-40" style={{marginTop: '-70px', marginBottom: '50px'}}>
        <span
          className="bg-clip-text"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(1, 161, 35)',
            animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
            filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
          }}
        >
          Feel free to send me a message!</span>
      </div>
        <ContactForm />
        <Footer />
    </div>
  );
}
