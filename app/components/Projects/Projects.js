import Image from "next/image";
import React from 'react';
import Link from "next/link";


const Projects = () => {
  return (
    <div className="mt-24 mb-24" style={{ marginBottom: '250px' }}>
      <section>
        <header className="bg-emerald-600 space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6"style={{ marginTop: '250px' }}>
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Projects</h2>
          </div>
        </header>
        <ul className="bg-emerald-700 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
          <li className="project in projects">
            <div>
              <h3 className="text-lg font-semibold">Travelpal</h3>
              <Link href="http://www.mytravelpal.xyz/" target="_blank" passHref>
                <Image
                  style=""
                  src="/Projectpic.png"
                  alt="Picture of the author"
                  width={450}
                  height={450}
                />
              </Link>
              <div>
              <p style={{ fontSize: '17px', marginTop: '5x' }}>Web app creation:
              </p>
              <br />
              <p style={{ fontSize: '15px', marginTop: '-5px' }}>Idea, pitch, implementation and shipped to production in 2 weeks.
              </p>
              <br />
              <p style={{ fontSize: '15px', marginTop: '-5px' }}>Worked in a team of 4 people across different geographies.</p>
              </div>
            </div>
          </li>
          <li className="flex"></li>
        </ul>
      </section>
    </div>
  );
}

export default Projects;
