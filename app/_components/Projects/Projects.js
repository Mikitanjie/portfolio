import Image from "next/image";
import React, { useContext } from 'react';
import Link from "next/link";
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      {/* Project 1 - Travelpal */}
      <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20 md:mb-24 fade-in-up`}>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Link href="https://www.travelpal.rest/" target="_blank" passHref className="group block">
            <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-4">
                <span className="text-white text-lg font-semibold">Visit Project →</span>
              </div>
              <Image
                className="prjt-image object-cover transition-transform duration-300 group-hover:scale-110"
                src="/Projectpic.png"
                alt="Travelpal - Social travel planning platform project screenshot"
                width={500}
                height={500}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Link>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h3
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'light' ? 'text-[#4a79fa]' : 'text-[#01a123]'
            }`}
          >
            Travelpal
          </h3>
          <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            Travelpal is a social platform that simplifies travel planning and social connection, providing a comprehensive solution for users to plan a trip with new or previous buddies.
          </p>
          
          <div className="mt-6 space-y-3">
            <h4 className={`text-2xl font-semibold ${theme === 'light' ? 'text-[#4a79fa]' : 'text-emerald-400'}`}>
              We did it!
            </h4>
            <p className={`text-base leading-relaxed ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>
              Idea, pitch, implementation and shipped to production in 2 weeks. Worked in a remote team of 4 people, across different geographies.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <h4 className={`text-2xl font-semibold ${theme === 'light' ? 'text-[#4a79fa]' : 'text-emerald-400'}`}>
              Lessons learned
            </h4>
            <p className={`text-base leading-relaxed ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>
              This project has taught me a lot to work efficiently as team although remotely, front and backend development and new code. It also taught me a lot about myself.
            </p>
          </div>
        </div>
      </div>

      {/* Project 2 - DonVito-Antipasti */}
      <div className={`flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-20 md:mb-24 fade-in-up`}>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Link href="https://www.donvitoantipasti.com/" target="_blank" passHref className="group block">
            <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-4">
                <span className="text-white text-lg font-semibold">Visit Project →</span>
              </div>
              <Image
                className="prjt-image object-cover transition-transform duration-300 group-hover:scale-110"
                src="/vitopasti.png"
                alt="DonVito Antipasti - Salzburg antipasti shop website project screenshot"
                width={500}
                height={500}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Link>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h3
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'light' ? 'text-[#4a79fa]' : 'text-[#01a123]'
            }`}
          >
            DonVito-Antipasti
          </h3>
          <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            A solo journey from concept to production in just two days, DonVito Antipasti is a testament to streamlined, efficient web development. Crafting this simple yet elegant page for a celebrated Salzburg antipasti shop, I managed all aspects of development and deployment with ease.
          </p>
          
          <div className="mt-6 space-y-3">
            <h4 className={`text-2xl font-semibold ${theme === 'light' ? 'text-[#4a79fa]' : 'text-emerald-400'}`}>
              Accomplished!
            </h4>
            <p className={`text-base leading-relaxed ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>
              Crafted and launched single-handedly, the DonVito Antipasti website stands as a clear reflection of straightforward and effective web development.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <h4 className={`text-2xl font-semibold ${theme === 'light' ? 'text-[#4a79fa]' : 'text-emerald-400'}`}>
              Lessons learned
            </h4>
            <p className={`text-base leading-relaxed ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>
              The project honed my full-stack development skills and emphasized the value of autonomy in web development. It was a straightforward task that reinforced my proficiency and taught me the power of simplicity in design and execution.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Projects;
