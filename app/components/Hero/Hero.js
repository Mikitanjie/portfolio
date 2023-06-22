import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-56 grid grid-cols-3 gap-4 content-center ">
      <div>
      <h1 className="font-semibold mt-11 ml-11 text-3xl text-green-500">Michael Catania,</h1>
      <br/>
      <h1 className="font-semibold text-5xl ml-11 pr-12 text-green-500">Fullstack Web Developer</h1>
      </div>
        <Image className="relative rounded-full ml-80 mt-6 mb-0"
          src="/ProfilePic.png"
          alt="Picture of the author"
          width={300}
          height={200}
        />
    </div>
  );
}

export default Hero;
