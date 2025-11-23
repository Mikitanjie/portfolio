'use client'

import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './_components/ThemeContext/ThemeContext';
import Hero from './_components/Hero/Hero';
import Projects from './_components/Projects/Projects';
import About from './_components/About/About';
import Skills from './_components/Skills/Skills';
import Footer from './_components/Footer/Footer';
import Languages from './_components/Languages/Languages';
import Particles from './_components/Particles/Particles';
import Tools from './_components/Tools/Tools';
import Libraries from './_components/Libraries/Libraries';
import ContactForm from './_components/ContactForm/ContactForm';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(
      "%c🧑🏼‍💻 Curious to know what else I can do? HIRE ME!",
      "color: green; font-size:16px;"
    );
  }, []);

  const titleStyle = {
    color: theme === 'light' ? 'black' : 'rgb(1, 161, 35)',
    animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
    filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Particles />

      {/* SECTION: Home */}
      <div id="Home"></div>
      <div className="text-center text-4xl sm:text-5xl font-semibold pt-24 pb-16 fade-in-up">
        <span style={titleStyle}>Happy to see you here!</span>
      </div>

      <Hero />

      {/* SECTION: Projects */}
      <div id="Projects" className="text-center text-4xl sm:text-5xl font-semibold pt-32 pb-20 fade-in-up">
        <span style={titleStyle}>Projects</span>
      </div>

      <Projects />

      <div className="text-center text-3xl sm:text-4xl font-semibold pt-20 pb-20">
        <span style={titleStyle} className="flex justify-center gap-1">
          More Projects coming soon
          <span className="dot1">.</span>
          <span className="dot2">.</span>
          <span className="dot3">.</span>
        </span>
      </div>

      {/* SECTION: About */}
      <div id="About" className="text-center text-4xl sm:text-5xl font-semibold pt-28 pb-12 fade-in-up">
        <span style={titleStyle}>About me</span>
      </div>

      <About />

      {/* SECTION: Skills (Programming Languages) */}
      <div id="Skills" className="text-center text-4xl sm:text-5xl font-semibold pt-32 pb-16 fade-in-up">
        <span style={titleStyle}>Programming &amp; Markup Languages</span>
      </div>

      <Tools />

      {/* SECTION: DevOps */}
      <div className="text-center text-4xl sm:text-5xl font-semibold pt-32 pb-16 fade-in-up">
        <span style={titleStyle}>DevOps &amp; Deployment</span>
      </div>

      <Skills />

      {/* SECTION: Frameworks */}
      <div className="text-center text-4xl sm:text-5xl font-semibold pt-32 pb-16 fade-in-up">
        <span style={titleStyle}>Frameworks &amp; Other</span>
      </div>

      <Libraries />

      {/* SECTION: Languages */}
      <div className="text-center text-4xl sm:text-5xl font-semibold pt-32 pb-16 fade-in-up">
        <span style={titleStyle}>Languages</span>
      </div>

      <Languages />

      {/* SECTION: Contact */}
      <div id="Contacts" className="text-center text-4xl sm:text-5xl font-semibold pt-32 pb-12 fade-in-up">
        <span style={titleStyle}>Feel free to send me a message!</span>
      </div>

      <ContactForm />

      <div className="mt-20"></div>
      <Footer />
    </div>
  );
}
