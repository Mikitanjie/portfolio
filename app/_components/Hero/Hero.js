import Image from "next/image";
import Link from 'next/link';
import Button from "../Button/Button";
import { useContext } from 'react';
import { ThemeContext } from '../../_components/ThemeContext/ThemeContext';


const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="relative h-46 gridcontent-center w-full flex md:flex-row flex-col-reverse items-center">
      <div className="herodiv col-span-2 relative z-10 w-full md:w-1/2 mr-4">
      <h1 className="font-semibold mb-2 mt-12 ml-11 text-6xl animated-gradient-text">
          Hi, I&apos;m Michael
        </h1>
        <br />
        <h1 className="font-semibold mb-2 ml-11 text-6xl animated-gradient-text">
          Web Developer
        </h1>
        <div className="ml-11">
        <a
          href="/resume.pdf"
          download
          className={`underline-on-hover inline-flex justify-center px-1 py-2 active:scale-90 text-fontStyle ${theme === 'light' ? 'text-black' : 'text-white'}`}
        >
            Download my CV
          </a>
        <Button text="Connect on LinkedIn" href="https://www.linkedin.com/in/mc16/" />
        <Button text="Follow me on Github" href="https://github.com/Mikitanjie" />
      </div>
      </div>
      <div className="flex justify-end items-center w-full md:w-1/2 ml-10 md:mr-11">
        <Image
          className="responsive-image"
          src="/ProfilePic.png"
          alt="Picture of the author"
          width={350}
          height={350}
          priority={true}
        />
      </div>
    </div>
  );
}

export default Hero;
