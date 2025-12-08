'use client'

import React, { useContext, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { ThemeContext } from './_components/ThemeContext/ThemeContext';
import Hero from './_components/Hero/Hero';
import ScrollProgress from './_components/ScrollProgress/ScrollProgress';
import ScrollToTop from './_components/ScrollToTop/ScrollToTop';
import SectionWrapper from './_components/SectionWrapper/SectionWrapper';
import Footer from './_components/Footer/Footer';
import SkeletonLoader from './_components/SkeletonLoader/SkeletonLoader';

// Dynamic imports for below-the-fold components (lazy loading)
const Projects = dynamic(() => import('./_components/Projects/Projects'), {
  loading: () => (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 space-y-8">
      <SkeletonLoader type="title" className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkeletonLoader type="project" />
        <SkeletonLoader type="project" />
      </div>
    </div>
  ),
});

const About = dynamic(() => import('./_components/About/About'), {
  loading: () => (
    <div className="w-full px-6 py-12 space-y-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 space-y-4">
          <SkeletonLoader type="text" />
          <SkeletonLoader type="text" />
          <SkeletonLoader type="text" className="w-3/4" />
        </div>
        <SkeletonLoader type="image" className="w-full lg:w-1/2" />
      </div>
    </div>
  ),
});

const Tools = dynamic(() => import('./_components/Tools/Tools'), {
  loading: () => (
    <div className="w-full px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {[...Array(12)].map((_, i) => (
          <SkeletonLoader key={i} type="circle" />
        ))}
      </div>
    </div>
  ),
});

const Skills = dynamic(() => import('./_components/Skills/Skills'), {
  loading: () => (
    <div className="w-full px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {[...Array(12)].map((_, i) => (
          <SkeletonLoader key={i} type="circle" />
        ))}
      </div>
    </div>
  ),
});

const Libraries = dynamic(() => import('./_components/Libraries/Libraries'), {
  loading: () => (
    <div className="w-full px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {[...Array(12)].map((_, i) => (
          <SkeletonLoader key={i} type="circle" />
        ))}
      </div>
    </div>
  ),
});

const Languages = dynamic(() => import('./_components/Languages/Languages'), {
  loading: () => (
    <div className="w-full px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[...Array(8)].map((_, i) => (
          <SkeletonLoader key={i} type="card" />
        ))}
      </div>
    </div>
  ),
});

const ContactForm = dynamic(() => import('./_components/ContactForm/ContactForm'), {
  loading: () => (
    <div className="w-full px-6 py-12" style={{ width: '50vw', maxWidth: '50vw', margin: '0 auto' }}>
      <div className="space-y-4">
        <SkeletonLoader type="text" className="h-12" />
        <SkeletonLoader type="text" className="h-12" />
        <SkeletonLoader type="text" className="h-32" />
        <SkeletonLoader type="text" className="h-12 w-1/3 mx-auto" />
      </div>
    </div>
  ),
});

// Heavy components with no SSR (canvas-based animations)
const Particles = dynamic(() => import('./_components/Particles/Particles'), {
  ssr: false,
});

const ParallaxLayers = dynamic(() => import('./_components/ParallaxLayers/ParallaxLayers'), {
  ssr: false,
});

export default function Home() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
    console.log(
      "%c🧑🏼‍💻 Curious to know what else I can do? HIRE ME!",
      "color: green; font-size:16px;"
    );
    }
  }, []);

  const titleStyle = useMemo(() => ({
    color: theme === 'light' ? 'rgb(0, 100, 0)' : 'rgb(1, 161, 35)',
    animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
    filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
  }), [theme]);

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
        <div id="Contacts" className="text-center text-4xl sm:text-5xl font-semibold pt-48 pb-12">
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
