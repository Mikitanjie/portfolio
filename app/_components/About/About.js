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
    <div id="About" className={`flex ml-12 font-semibold text-medium ${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ marginBottom: '90px' }}>
      <div className="w-1/2" style={{ width: '100%', marginTop: '-50px'}}>
        <br />
        <br />
        <br />
        <div className="w-[600px] mt-14 text-lg">
          <p>
            Hello, my name is Michael Catania, I&apos;m a passionate introvert who believes that it is never too late to learn something from scratch.

          </p>
          <br />
          <p>
          Born in southern Germany from a Portuguese mother and Italian father, I have lived in few countries around Europe.
          I started working at an early age and mostly learnt things by doing. I always thought programming was something too abstract and complicated for me so never digged deep into it.
          </p>
          <br />
          <p>
            This was the case until 2020 when due to lockdown I found myself playing video games a lot - yes probably too much! It was then when I wondered if I could one day also create my own videogame and finally understand the magic world of web and app development.
          </p>
          <br />
          <p>
          I started exploring tutorials on the web, developing skills and learning how to code. Recently, I have completed Le Wagon&apos;s intensive Full Stack Web Development course and I&apos;m now looking for a full-time role to help a company solve challenges, achieve their goals and keep learning!
          </p>
          <br />
          <p>
            Please feel free to contact me if you have any questions or would like to discuss any of my qualifications further.
          </p>
        </div>
      </div>
      <div id="carousel" style={{position: 'relative', marginTop: '100px', marginRight: '45px'}}>
      <div className="group border-2" style={{ borderColor: '#01a123' }}>
        <Image
          id='img'
          className="object-cover hover-effect group-hover:grayscale-0 custom-width"
          src={images[activeImageIndex]}
          alt="Picture of the author"
          width={600}
          height={800}
        />
        <button
          type="button"
          className="hover:scale-150 active:scale-90 absolute top-0 left-0 inline-flex justify-center bg-transparent px-4 py-2 focus:outline-offset-0"
          id="prevBtn"
          onClick={prevImage}
          style={{ color: '#01a123' }}
        >
          <FaArrowLeft size={23} />
        </button>
        <button
          type="button"
          className="hover:scale-150 active:scale-90 absolute top-0 right-0 inline-flex justify-center bg-transparent px-4 py-2 focus:outline-offset-0"
          id="nextBtn"
          onClick={nextImage}
          style={{ color: '#01a123' }}
        >
          <FaArrowRight size={23} />
        </button>
      </div>
      </div>
    </div>
  );
};

export default About;
