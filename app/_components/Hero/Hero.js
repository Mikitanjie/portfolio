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
      <div className="absolute bottom-0 flex justify-end items-center z-0 image-container">
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
