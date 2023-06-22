import Image from "next/image";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="h-56 grid grid-cols-3 gap-4 content-center ">
      <div className="col-span-2">
        <h1 className="font-semibold mb-2 mt-11 ml-11 text-3xl text-green-500">Michael Catania,</h1>
        <br />
        <h1 className="font-semibold text-5xl mb-8 ml-11 pr-12 text-green-500">Fullstack Web Developer</h1>
        <div className="ml-11 mt-4">
          <Button text="Click Here" />
        </div>
      </div>
      <div className="flex justify-end items-center">
        <Image
          className="relative rounded-full mt-6 mb-0 mr-8"
          src="/ProfilePic.png"
          alt="Picture of the author"
          width={300}
          height={150}
        />
      </div>
    </div>
  );
}

export default Hero;
