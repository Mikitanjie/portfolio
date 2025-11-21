import { useContext } from 'react';
import Image from 'next/image';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Tools = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center w-full px-4 py-8">
      <div
        className="
          grid
          mx-auto
          grid-cols-[repeat(auto-fit,minmax(120px,1fr))]
          gap-6
          place-items-center
          w-full
          max-w-6xl
        "
      >

        <div className="animate-pulse hover:animate-none">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-75"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              width={80}
              height={80}
            />
          </a>
        </div>

        <div className="animate-pulse hover:animate-none">
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-75"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="HTML5"
              width={80}
              height={80}
            />
          </a>
        </div>

        <div className="animate-pulse hover:animate-none">
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-75"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="CSS3"
              width={80}
              height={80}
            />
          </a>
        </div>

        <div className="animate-pulse hover:animate-none">
          <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-75"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
              alt="Ruby"
              width={80}
              height={80}
            />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Tools;
