import Image from "next/image";
import React from 'react';


const Projects = () => {
  return (
    <div className="mt-12">
      <section>
        <header className="bg-sky-500 space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Projects</h2>
          </div>
        </header>
        <ul className="bg-sky-900 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
          <li className="project in projects">
            <div>
             <Image
                style= ""
                src="/Projectpic.png"
                alt="Picture of the author"
                width={200}
                height={150}
            />
          </div>
          </li>
          <li className="flex">
          </li>
        </ul>
      </section>
          </div>
      )
    }

export default Projects;
