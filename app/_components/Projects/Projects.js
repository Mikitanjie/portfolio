import Image from "next/image";
import React, { useContext } from 'react';
import Link from "next/link";
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="promarg">
      <div className={`flex ml-12 font-semibold text-medium`} >
        <div className="order-1 flex justify md:w-1/2 lg:w-1/2">
        <Link href="https://www.travelpal.rest/" target="_blank" passHref>
                <Image
                  className="prjt-image mt-6 mb-7 object-cover active:scale-75"
                  style=""
                  src="/Projectpic.png"
                  alt="Project image"
                  width={500}
                  height={500}
                />
              </Link>
        </div>
          <div className="order-2 mt-1 md:w-1/2 lg:w-3/4">
          <p
            className={`${theme === 'light' ? 'text-[#4a79fa]' : ''}`}
            style={{
              fontSize: '40px',
              color: theme === 'dark' ? '#01a123' : undefined
            }}>
            Travelpal
          </p>
            <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontSize: '19px' }}>Travelpal is a social platform that simplifies travel planning and social connection, providing a comprehensive solution for users to plan a trip with new or previous buddies. </p>
            <br/>

            <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontSize: '23px'}}>We did it!</p>

            <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontSize: '19px'}}>Idea, pitch, implementation and shipped to production in 2 weeks.Worked in a remote team of 4 people, across different geographies.</p>
            <br/>

            <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontSize: '23px'}}>Lessons learned</p>

            <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontSize: '19px'}}>This project has taught me a lot to work efficiently as team although remotely, front and backend development and new code. It also taught me a lot about myself.</p>
          </div>
      </div>
        <div className={`flex ml-12 mt-14 font-semibold text-medium ${theme === 'light' ? 'text-black' : 'text-white'}`} >
          <div className="order-1 flex justify md:w-1/2 lg:w-1/2">
          <Link href="https://www.donvitoantipasti.com/" target="_blank" passHref>
                  <Image
                    className="prjt-image mt-6 mb-7 object-cover active:scale-75"
                    style=""
                    src="/vitopasti.png"
                    alt="project image"
                    width={500}
                    height={500}
                  />
                </Link>
          </div>
            <div className="order-2 md:w-1/2 lg:w-3/4">
            <p
              className={`${theme === 'light' ? 'text-[#4a79fa]' : ''}`}
              style={{
                fontSize: '40px',
                color: theme === 'dark' ? '#01a123' : undefined
              }}>
              DonVito-Antipasti
            </p>
              <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontSize: '19px' }}>A solo journey from concept to production in just two days, DonVito Antipasti is a testament to streamlined, efficient web development. Crafting this simple yet elegant page for a celebrated Salzburg antipasti shop, I managed all aspects of development and deployment with ease. </p>
              <br/>

              <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontSize: '23px'}}>Accomplished!</p>

              <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontSize: '19px'}}>Crafted and launched single-handedly, the DonVito Antipasti website stands as a clear reflection of straightforward and effective web development.</p>
              <br/>

              <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontSize: '23px'}}>Lessons learned</p>

              <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontSize: '19px'}}>The project honed my full-stack development skills and emphasized the value of autonomy in web development. It was a straightforward task that reinforced my proficiency and taught me the power of simplicity in design and execution.</p>
            </div>
        </div>
    </div>

  );
}

export default Projects;
