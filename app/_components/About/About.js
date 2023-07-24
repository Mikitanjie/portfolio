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
    <div id="About" className={`flex ml-12 font-semibold text-medium ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ marginBottom: '90px' }}>
      <div className="w-1/2" style={{marginTop: '-50px'}}>
        <br />
        <br />
        <br />
        <div className="w-[600px] mt-24 mr-11 font-semibold text-lg">
          <p>
            Hello, my name is <span>Michael Catania</span> and I am  based in <span>Austria</span>.
          </p>
          <br />
          <p>
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
      <div id="carousel" style={{position: 'relative', marginLeft: '168px', marginTop: '100px'}}>
        <div className="group border-2 border-emerald-600">
          <Image id='img' className="object-cover hover-effect group-hover:grayscale-0" src={images[activeImageIndex]} alt="Picture of the author" width={600} height={800} />
          <button
            type="button"
            className="hover:scale-150 active:scale-90 absolute top-0 left-0 inline-flex justify-center bg-transparent px-4 py-2 text-emerald-600 focus:outline-offset-0"
            id="prevBtn"
            onClick={prevImage}
          >
            <FaArrowLeft size={23} />
          </button>
          <button
            type="button"
            className="hover:scale-150 active:scale-90 absolute top-0 right-0 inline-flex justify-center bg-transparent px-4 py-2 text-emerald-600 focus:outline-offset-0"
            id="nextBtn"
            onClick={nextImage}
          >
            <FaArrowRight size={23} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
