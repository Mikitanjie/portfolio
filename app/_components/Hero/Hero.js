import Image from "next/image";
import Button from "../Button/Button";
import { useContext } from 'react';
import { ThemeContext } from '../../_components/ThemeContext/ThemeContext';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="relative h-46 gridcontent-center  w-full flex md:flex-row flex-col-reverse items-center">
      <div className="col-span-2 relative z-10 w-full md:w-1/2 mr-4">
        <h1
          className="font-semibold mb-2 mt-12 ml-11 text-6xl"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(5, 150, 105)',
          }}
        >
          Hi, I&apos;m Michael
        </h1>
        <br />
        <h1
          className="animate- font-semibold text-6xl mb-4 ml-11 pr-12"
          style={{
            color: theme === 'light' ? 'black' : 'rgb(5, 150, 105)',
          }}
        >
          Frontend Web Developer
        </h1>
        <div className="ml-11">
        <Button text="Send me a message" href="mailto:cataniamike16@gmail.com"/>
        <Button text="Connect on LinkedIn" href="https://www.linkedin.com/in/mc16/" />
        <Button text="Follow me on Github" href="https://github.com/Mikitanjie" />
      </div>
      </div>
      <div className="flex justify-end items-center w-full md:w-1/2 ml-10 md:mr-11">
        <Image
          className="responsive-image"
          src="/ProfilePic.png"
          alt="Picture of the author"
          width={350}  /* Set these according to your needs */
          height={350}
          priority={true}
        />
      </div>
    </div>
  );
}

export default Hero;
