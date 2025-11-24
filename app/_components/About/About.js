import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React, { useState, useContext } from 'react';
import Image from 'next/image';
import { ThemeContext } from '../../_components/ThemeContext/ThemeContext';

const About = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { theme } = useContext(ThemeContext);

  const images = [
    "/ProjectB.jpg",
    "/ProjectP.jpg",
    "/ProjectA.jpg"
  ];

  const nextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((activeImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      id="About"
      className={`w-full flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-10 font-semibold fade-in-up ${
        theme === 'light' ? 'text-black' : 'text-white'
      }`}
    >
      <div className="w-full lg:w-1/2 text-base sm:text-lg leading-relaxed max-w-2xl">
        <p>
          Hello, my name is Michael Catania, I&apos;m a passionate introvert who believes that it&apos;s never too late to learn something from scratch.
        </p>
        <br />
        <p>
          Born in Southern Germany to a Portuguese mother and Italian father, I have lived in several European countries. I started working at an early age and mostly learned things by doing. I always thought programming was too abstract and complicated for me, so I never really got into it.
        </p>
        <br />
        <p>
          This was the case until 2020, when I found myself playing a lot of video games - probably too much! It was then that I wondered if I could one day make my own video game and finally understand the magic world of web and app development.
        </p>
        <br />
        <p>
          I started exploring tutorials on the web, developing skills and learning how to code. I recently completed Le Wagon&apos;s intensive Full Stack Web Development course and I&apos;m now looking for a full-time role to help a company solve challenges, achieve their goals and keep learning!
        </p>
        <br />
        <p>
          Please do not hesitate to contact me if you have any questions or would like to discuss my qualifications further.
        </p>
      </div>

      <div className="relative w-full max-w-md lg:max-w-lg group">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
        <div className="relative border-2 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-emerald-500/20" style={{ borderColor: '#01a123' }}>
          <Image
            className="object-cover w-full h-auto transition-transform duration-500"
            src={images[activeImageIndex]}
            alt={`About Michael Catania - Image ${activeImageIndex + 1} showcasing development work and interests`}
            width={800}
            height={600}
            loading={activeImageIndex === 0 ? "eager" : "lazy"}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <button
            type="button"
            onClick={prevImage}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
            style={{ color: '#01a123' }}
          >
            <FaArrowLeft size={24} />
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
            style={{ color: '#01a123' }}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
