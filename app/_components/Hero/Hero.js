import Image from "next/image";
import Button from "../Button/Button";
import { useContext } from 'react';
import { ThemeContext } from '../../_components/ThemeContext/ThemeContext';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="relative w-full overflow-x-hidden flex md:flex-row flex-col-reverse items-center md:gap-28 lg:gap-32 xl:gap-40">

      {/* LEFT COLUMN */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col">

        {/* This wrapper restores the EXACT original horizontal position */}
        <div className="flex flex-col ml-6 sm:ml-10 md:ml-11">

          <h1 className="font-semibold mb-2 mt-12 text-5xl sm:text-6xl animated-gradient-text">
            Hi, I&apos;m Michael
          </h1>

          <h1 className="font-semibold mb-4 text-5xl sm:text-6xl animated-gradient-text">
            Web Developer
          </h1>

          {/* Buttons EXACTLY under the headings */}
          <div className="flex flex-row gap-6 mt-4 items-center flex-wrap">

            <a
              href="https://drive.google.com/uc?export=download&id=1DPcpHRBLi8_mvWXWW9H-gSJzCngb5JUx"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline-on-hover inline-flex justify-center px-1 py-2 active:scale-90 text-fontStyle ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              Download my CV
            </a>

            <Button text="Connect on LinkedIn" href="https://www.linkedin.com/in/mc16/" />
            <Button text="Follow me on Github" href="https://github.com/Mikitanjie" />
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:justify-end items-center w-full md:w-1/2 px-6 sm:px-10 md:px-4 lg:px-6 mt-6 md:mt-0">
        <Image
          className="responsive-image"
          src="/ProfilePic.png"
          alt="Michael Catania, Full Stack Web Developer - Professional portrait"
          width={350}
          height={350}
          priority={true}
        />
      </div>

    </div>
  );
};

export default Hero;
