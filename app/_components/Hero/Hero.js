import Image from "next/image";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="relative h-46 gridcontent-center" style={{ marginTop: '150px', marginBottom: '350px'}}>
      <div className="col-span-2 relative z-10">
        <h1 className="font-semibold mb-2 mt-12 ml-11 text-3xl text-emerald-600">Hi, I&apos;m Michael</h1>
        <br />
        <h1 className="animate- font-semibold text-5xl mb-4 ml-11 pr-12 text-emerald-600">Enthusiastic Web Developer</h1>
        <div className="ml-11">
          <Button text="Click Here" />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 flex justify-end items-center z-0">
        <Image
          className="relative left-[-90px] rounded-full scale-150 border-2 border-emerald-600 "
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
