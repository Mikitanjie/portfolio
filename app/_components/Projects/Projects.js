import Image from "next/image";
import React, { useContext, useState } from 'react';
import Link from "next/link";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import ImageLightbox from '../ImageLightbox/ImageLightbox';
import { use3DTilt } from '../use3DTilt/use3DTilt';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxUrl, setLightboxUrl] = useState(null);
  const tiltRef1 = use3DTilt();
  const tiltRef2 = use3DTilt();
  const tiltRef3 = use3DTilt();
  
  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      {/* Project 1 - Cut Create */}
      <div className={`flex flex-col md:flex-row items-start gap-8 md:gap-12 mb-20 md:mb-24 fade-in-up`}>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start pt-16 md:pt-20">
          <div className="group block w-full">
            <div 
              ref={tiltRef1}
              className="relative overflow-hidden rounded-lg hover:shadow-2xl cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => {
                setLightboxImage('/cutcreate.png');
                setLightboxUrl('https://www.cutcreate.at/');
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-4 pointer-events-none">
                <span className="text-white text-lg font-semibold transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">Click to enlarge →</span>
              </div>
              <Image
                className="prjt-image object-cover"
                src="/cutcreate.png"
                alt="CUT & CREATE - Salzburg creative workshop website project screenshot"
                width={500}
                height={500}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ pointerEvents: 'none' }}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h3
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'light' ? 'text-[#4a79fa]' : 'text-[#01a123]'
            }`}
          >
            CUT & CREATE
          </h3>
          <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            A full-stack website for a Salzburg creative workshop, built with Next.js and a headless WordPress CMS. Integrated GraphQL API, custom post types, and ACF fields to enable dynamic content management while preserving a custom frontend design.
          </p>
          
          <div className="mt-6 space-y-3">
            <h4 className={`text-2xl font-semibold ${theme === 'light' ? 'text-[#4a79fa]' : 'text-emerald-400'}`}>
              Accomplished!
            </h4>
            <p className={`text-base leading-relaxed ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>
              Delivered a production website with WordPress-powered blog and projects sections. Solved GraphQL schema mismatches, SSL certificate issues, and image optimization challenges. Implemented ISR for performance and type-safe API integration with TypeScript.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <h4 className={`text-2xl font-semibold ${theme === 'light' ? 'text-[#4a79fa]' : 'text-emerald-400'}`}>
              Lessons learned
            </h4>
            <p className={`text-base leading-relaxed ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>
              This project taught me the complexities of headless CMS integration, from debugging GraphQL queries to handling deployment edge cases. Merging static components with dynamic content required careful architecture planning. The experience highlighted the importance of robust error handling and type safety when working with external APIs.
            </p>
          </div>

          <div className="mt-6 space-y-2">
            <p className={`text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>
              Tech Stack:
            </p>
            <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-500'}`}>
              Next.js 16 • TypeScript • GraphQL • WordPress • WPGraphQL • ACF • Tailwind CSS • Vercel
            </p>
          </div>

          <div className="mt-6">
            <Link 
              href="https://www.cutcreate.at/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                theme === 'light' 
                  ? 'bg-[#4a79fa] text-white hover:bg-[#3a69ea]' 
                  : 'bg-emerald-500 text-white hover:bg-emerald-600'
              }`}
            >
              Visit Project →
            </Link>
          </div>
        </div>
      </div>

      {/* Project 2 - Travelpal */}
      <div className={`flex flex-col md:flex-row items-start gap-8 md:gap-12 mb-20 md:mb-24 fade-in-up`}>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start pt-16 md:pt-20">
          <div className="group block w-full">
            <div 
              ref={tiltRef2}
              className="relative overflow-hidden rounded-lg hover:shadow-2xl cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => {
                setLightboxImage('/Projectpic.png');
                setLightboxUrl('https://www.travelpal.rest/');
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-4 pointer-events-none">
                <span className="text-white text-lg font-semibold transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">Click to enlarge →</span>
              </div>
              <Image
                className="prjt-image object-cover"
                src="/Projectpic.png"
                alt="Travelpal - Social travel planning platform project screenshot"
                width={500}
                height={500}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ pointerEvents: 'none' }}
              />
            </div>
          </div>
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

          <div className="mt-6">
            <Link 
              href="https://www.travelpal.rest/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                theme === 'light' 
                  ? 'bg-[#4a79fa] text-white hover:bg-[#3a69ea]' 
                  : 'bg-emerald-500 text-white hover:bg-emerald-600'
              }`}
            >
              Visit Project →
            </Link>
          </div>
        </div>
      </div>

      {/* Project 3 - DonVito-Antipasti */}
      <div className={`flex flex-col md:flex-row-reverse items-start gap-8 md:gap-12 mb-20 md:mb-24 fade-in-up`}>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end pt-16 md:pt-20">
          <div className="group block w-full">
            <div 
              ref={tiltRef3}
              className="relative overflow-hidden rounded-lg hover:shadow-2xl cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => {
                setLightboxImage('/vitopasti.png');
                setLightboxUrl('https://www.donvitoantipasti.com/');
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-4 pointer-events-none">
                <span className="text-white text-lg font-semibold transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">Click to enlarge →</span>
              </div>
              <Image
                className="prjt-image object-cover"
                src="/vitopasti.png"
                alt="DonVito Antipasti - Salzburg antipasti shop website project screenshot"
                width={500}
                height={500}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ pointerEvents: 'none' }}
              />
            </div>
          </div>
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

          <div className="mt-6">
            <Link 
              href="https://www.donvitoantipasti.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                theme === 'light' 
                  ? 'bg-[#4a79fa] text-white hover:bg-[#3a69ea]' 
                  : 'bg-emerald-500 text-white hover:bg-emerald-600'
              }`}
            >
              Visit Project →
            </Link>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          image={lightboxImage}
          alt="Project screenshot"
          projectUrl={lightboxUrl}
          onClose={() => {
            setLightboxImage(null);
            setLightboxUrl(null);
          }}
        />
      )}
    </div>

  );
}

export default Projects;
