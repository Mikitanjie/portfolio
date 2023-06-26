import Image from "next/image";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className=" mt-16 h-56 grid grid-cols-3 gap-4 content-center ">
      <div className="col-span-2">
        <h1 className="font-semibold mb-2 mt-12 ml-11 text-3xl text-green-500">Michael Catania,</h1>
        <br />
        <h1 className="font-semibold text-5xl mb-4 ml-11 pr-12 text-green-500">Fullstack Web Developer</h1>
        <div className="ml-11">
          <Button text="Click Here" />
        </div>
      </div>
      <div className="flex justify-end items-center">
        <Image
          className="relative w-60 h-60 rounded-full"
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
