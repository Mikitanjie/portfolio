import Image from "next/image";
import React, { useContext } from 'react';
import Link from "next/link";
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="promarg">

    <div className={`flex ml-12 font-semibold text-medium ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} >
      <div className="order-1 flex justify md:w-1/2 lg:w-1/2">
      <Link href="http://www.mytravelpal.xyz/" target="_blank" passHref>
              <Image
                className="prjt-image hover:scale-110 mt-7 mb-7 object-cover active:scale-90"
                style=""
                src="/Projectpic.png"
                alt="Project image"
                width={500}
                height={500}
              />
            </Link>
      </div>
      <div className="order-2 md:w-1/2 lg:w-3/4">
        <p className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ fontSize: '30px'}}>What is Travelpal? </p>
        <p className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ fontSize: '20px' }}>Travelpal is a social platform that simplifies travel planning and social connection, providing a comprehensive solution for users to plan a trip with new or previous buddies. </p>
        <p className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ fontSize: '30px'}}>We did it!</p>
        <p className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ fontSize: '20px'}}>Idea, pitch, implementation and shipped to production in 2 weeks.Worked in a remote team of 4 people, across different geographies.</p>
        <p className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ fontSize: '30px'}}>Lessons learned...</p>
        <p className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ fontSize: '20px'}}>This project has taught me a lot to work efficiently as team although remotely, front and backend development and new code. It also taught me a lot about myself.</p>
      </div>
    </div>
    </div>
  );
}

export default Projects;
