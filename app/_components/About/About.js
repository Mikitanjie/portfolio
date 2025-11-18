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
      className={`w-full flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-10 font-semibold ${
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

      <div className="relative w-full max-w-md lg:max-w-lg">
        <div className="relative border-2 rounded-md overflow-hidden" style={{ borderColor: '#01a123' }}>
          <Image
            className="object-cover w-full h-auto"
            src={images[activeImageIndex]}
            alt="About Images"
            width={800}
            height={600}
            priority
          />

          <button
            type="button"
            onClick={prevImage}
            className="absolute top-1/2 -translate-y-1/2 left-2 hover:scale-125 active:scale-90 transition-transform"
            style={{ color: '#01a123' }}
          >
            <FaArrowLeft size={26} />
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute top-1/2 -translate-y-1/2 right-2 hover:scale-125 active:scale-90 transition-transform"
            style={{ color: '#01a123' }}
          >
            <FaArrowRight size={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
