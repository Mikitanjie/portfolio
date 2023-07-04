import React from 'react';
import Image from 'next/image';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Button from './components/Button/Button';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Languages from './components/Languages/Languages';

export default function Home() {
  return (
    <div className="bg-emerald-505">
      <Header />
      <div className="text-center mt-5 text-5xl font-extrabold pt-40 relative">
        <span
          className="bg-clip-text text-transparent text-violet-500"
          style={{
            animation: 'lightingEffect 2s linear infinite',
            filter: 'drop-shadow(0 0 20px green)',
          }}
        >
          Welcome to my portfolio
        </span>
      </div>
      <div className="pt-40">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Languages />
        <Footer />
      </div>

    </div>
  );
}
