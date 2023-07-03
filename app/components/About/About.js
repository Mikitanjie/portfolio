import React from 'react';
import Image from 'next/image';

const About = () => {
  const textContent = `After many years of working in different industries and countries around Europe, dreaming about the perfect career, being a technology passionate person, I have decided to become a web developer and I recently completed Le Wagon web development bootcamp and I'm ready to take on a new challenge in tech.
  After many years of working in different industries and countries around Europe, dreaming about the perfect career, being a technology passionate person, I have decided to become a web developer and I recently completed Le Wagon web development bootcamp and I'm ready to take on a new challenge in tech.
  After many years of working in different industries and countries around Europe, dreaming about the perfect career, being a technology passionate person, I have decided to become a web developer and I recently completed Le Wagon web development bootcamp and I'm ready to take on a new challenge in tech.
  After many   After many`;

  return (
    <div className="flex mb-24 ml-11 font-bold text-medium text-blue-500">
      <div className="w-1/2">
        <h1>About Me</h1>
        <div className="mt-12 mr-11 font-bold text-lg text-white">
          {textContent}
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        <Image
          className="mr-11 mt-1 w-96 h-94 "
          src="/ProfilePic.png"
          alt="Picture of the author"
          width={240}
          height={240}
        />
      </div>
    </div>
  );
};

export default About;
