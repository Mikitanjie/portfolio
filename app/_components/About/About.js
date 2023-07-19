'use client'

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
    <div id="About" className={`flex ml-11 font-lg text-medium ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ marginBottom: '90px' }}>
      <div className="w-1/2">
        <br />
        <br />
        <br />
        <div className="w-[600px] mt-24 mr-11 font-lg text-lg">
          <p>
            I am a passionate technologist with a background in various industries and countries around Europe.
            I have always been fascinated by technology and the possibilities it opens up.
          </p>
          <br />
          <p>
            After many years of working in different industries, I decided to pursue my dream of becoming a web developer.
            I recently completed LeWagon web development bootcamp, and I am now ready to take on a new challenge in tech.
          </p>
          <br />
          <p>
            I am a quick learner and I am always eager to take on new challenges. I am also a team player and I enjoy working with others to achieve common goals. I am confident that I have the skills and experience necessary to be successful in a web development career.
          </p>
          <br />
          <p>
            I am excited to start my new journey as a web developer. I am looking forward to working on challenging projects and learning new things. I am also looking forward to meeting new people and collaborating with them on exciting projects.
          </p>
          <br />
          <p>
            Please feel free to contact me if you have any questions or would like to discuss my qualifications further.
          </p>
        </div>
      </div>
      <div id="carousel" className="hover:grayscale-0" style={{position: 'relative', marginLeft: '160px', marginTop: '100px'}}>
          <div className=" border-4 border-emerald-600 ">
            <Image className="object-cover" src={images[activeImageIndex]} alt="Picture of the author" width={600} height={800} />
          </div>
          <div>
            <button
              type="button"
              className="hover:scale-150 active:scale-90 absolute top-0 left-0 inline-flex justify-center bg-transparent px-4 py-2 text-emerald-600 focus:outline-offset-0"
              id="prevBtn"
              onClick={prevImage}
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              className="hover:scale-150 active:scale-90 absolute top-0 right-0 inline-flex justify-center bg-transparent px-4 py-2 text-emerald-600 focus:outline-offset-0"
              id="nextBtn"
              onClick={nextImage}
            >
              <FaArrowRight />
            </button>
          </div>
      </div>
    </div>
  );
};

export default About;
