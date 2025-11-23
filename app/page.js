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
import ParallaxLayers from './_components/ParallaxLayers/ParallaxLayers';
import ScrollProgress from './_components/ScrollProgress/ScrollProgress';
import ScrollToTop from './_components/ScrollToTop/ScrollToTop';
import SectionWrapper from './_components/SectionWrapper/SectionWrapper';
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
    color: theme === 'light' ? 'rgb(0, 100, 0)' : 'rgb(1, 161, 35)',
    animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
    filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
  };

  return (
    <div className="w-full flex flex-col items-center">
      <ScrollProgress />
      <Particles />
      <ParallaxLayers />
      <ScrollToTop />

      {/* SECTION: Home */}
      <div id="Home"></div>
      <div className="text-center text-4xl sm:text-5xl font-semibold pt-24 pb-16 fade-in-up">
        <span style={titleStyle}>Happy to see you here!</span>
      </div>

      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      {/* SECTION: Projects */}
      <SectionWrapper>
        <div id="Projects" className="text-center text-4xl sm:text-5xl font-semibold pt-32 pb-20">
          <span style={titleStyle}>Projects</span>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <Projects />
      </SectionWrapper>

      <div className="text-center text-3xl sm:text-4xl font-semibold pt-20 pb-20">
        <span style={titleStyle} className="flex justify-center gap-1">
          More Projects coming soon
          <span className="dot1">.</span>
          <span className="dot2">.</span>
          <span className="dot3">.</span>
        </span>
      </div>

      {/* SECTION: About */}
      <SectionWrapper>
        <div id="About" className="text-center text-4xl sm:text-5xl font-semibold pt-28 pb-12">
          <span style={titleStyle}>About me</span>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <About />
      </SectionWrapper>

      {/* SECTION: Skills (Programming Languages) */}
      <SectionWrapper>
        <div id="Skills" className="text-center text-4xl sm:text-5xl font-semibold pt-32 pb-16">
          <span style={titleStyle}>Programming &amp; Markup Languages</span>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <Tools />
      </SectionWrapper>

      {/* SECTION: DevOps */}
      <SectionWrapper>
        <div className="text-center text-4xl sm:text-5xl font-semibold pt-32 pb-16">
          <span style={titleStyle}>DevOps &amp; Deployment</span>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <Skills />
      </SectionWrapper>

      {/* SECTION: Frameworks */}
      <SectionWrapper>
        <div className="text-center text-4xl sm:text-5xl font-semibold pt-32 pb-16">
          <span style={titleStyle}>Frameworks &amp; Other</span>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <Libraries />
      </SectionWrapper>

      {/* SECTION: Languages */}
      <SectionWrapper>
        <div className="text-center text-4xl sm:text-5xl font-semibold pt-32 pb-16">
          <span style={titleStyle}>Languages</span>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <Languages />
      </SectionWrapper>

      {/* SECTION: Contact */}
      <SectionWrapper>
        <div id="Contacts" className="text-center text-4xl sm:text-5xl font-semibold pt-32 pb-12">
          <span style={titleStyle}>Feel free to send me a message!</span>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <ContactForm />
      </SectionWrapper>

      <div className="mt-20"></div>
      <Footer />
    </div>
  );
}
