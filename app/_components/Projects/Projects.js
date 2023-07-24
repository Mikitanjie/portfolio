import Image from "next/image";
import React, { useContext } from 'react'; // import useContext
import Link from "next/link";
import { ThemeContext } from '../ThemeContext/ThemeContext'; // import ThemeContext

const Projects = () => {
  const { theme } = useContext(ThemeContext); // get the current theme

  return (
    <div id="Projects" style={{ marginBottom: '350px', marginTop: '50px'}}>
      <section>
      <br/>
      <br/>
      <br/>
      <br/>
        <ul className="transparent p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-4 gap-4 text-sm leading-6">
          <li className="  project in projects">
            <div>
              <div className="project-hover">
              <h3 className={theme === 'light' ? 'text-black' : 'text-emerald-600'} style={{ fontSize: '3em', fontWeight: 'bold' }} // adjust the value as needed
              >Travelpal
              </h3>
              <Link href="http://www.mytravelpal.xyz/" target="_blank" passHref>
                <Image
                  className="hover:scale-110 mt-7 mb-7 object-cover active:scale-90"
                  style=""
                  src="/Projectpic.png"
                  alt="Picture of the author"
                  width={450}
                  height={450}
                />
              </Link>
              </div>
            </div>
          </li>
          <li className="project description" style={{ marginTop: '39px', marginLeft: '29px' }}>
              <div>
              <br />
              <p className= {`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ fontSize: '30px', marginTop: '-18px' }}>What is Travelpal?</p>
              <br />
              <p className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ fontSize: '20px', marginTop: '-15px' }}>Travelpal is a social platform that simplifies travel planning and social connection, providing a comprehensive solution for users to plan a trip with new or previous buddies. </p>
              </div>
            </li>
            <li className="  project description" style={{ marginTop: '45px', marginLeft: '29px' }}>
              <div>
              <p className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ fontSize: '30px', marginTop: '-18x' }}>We did it!</p>
              <br />
              <p className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ fontSize: '20px', marginTop: '-15px' }}>Idea, pitch, implementation and shipped to production in 2 weeks.Worked in a remote team of 4 people, across different geographies.</p>              </div>
            </li>
            <li className="  project description" style={{ marginTop: '45px', marginLeft: '29px' }}>
              <div>
              <p className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ fontSize: '30px'}}>Lessons learned...</p>
              <br />
              <p className={`lighting-effect ${theme === 'light' ? 'text-black' : 'text-emerald-600'}`} style={{ fontSize: '20px', marginTop: '-15px' }}>This project has taught me a lot to work efficiently as team although remotely, front and backend development and new code. It also taught me a lot about myself.</p>
              </div>
            </li>
          <li className="flex"></li>
        </ul>
        <br/>
        <br/>
        <br/>
      </section>
    </div>
  );
}

export default Projects;
