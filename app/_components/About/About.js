'use client'

import React, { useState } from 'react';
import Image from 'next/image';


  const About = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    "/ProjectP.jpg",
    "/ProjectB.jpg",
    "/ProjectA.jpg",
    "/ProfilePic.png"
  ];

  const nextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((activeImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="About" className="flex mb-24 ml-11 font-lg text-medium text-emerald-600" style={{ marginBottom: '120px' }}>
      <div className="w-1/2">
        <br />
        <br />
        <br />
        <br />
        <h1>About Me</h1>
        <div className="mt-12 mr-11 font-lg text-lg text-white">
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
            If you are looking for a talented and passionate web developer, I encourage you to contact me.
            Please feel free to contact me if you have any questions or would like to discuss my qualifications further.
          </p>
        </div>
      </div>
      <div id="carousel" style={{ marginTop: '50px' }}>
          <Image src={images[activeImageIndex]} alt="Picture of the author" width={600} height={800} />
        <button id="prevBtn" onClick={prevImage}>Prev</button>
        <button id="nextBtn" onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default About;
