import { useContext } from 'react';
import Image from 'next/image';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center w-full px-4 py-8">
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6
          gap-6
          place-items-center
        "
      >

        <div className="animate-pulse hover:animate-none">
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-75"
              src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
              alt="Figma"
              width={80}
              height={80}
            />
          </a>
        </div>

        <div className="animate-pulse hover:animate-none">
          <a href="https://www.heroku.com/what" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-75"
              src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
              alt="Heroku"
              width={80}
              height={80}
            />
          </a>
        </div>

        <div className="animate-pulse hover:animate-none">
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-75"
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="Git"
              width={80}
              height={80}
            />
          </a>
        </div>

        <div className="animate-pulse hover:animate-none">
          <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-75"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
              alt="Webpack"
              width={80}
              height={80}
            />
          </a>
        </div>

        <div className="animate-pulse hover:animate-none">
          <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-75"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
              alt="VSCode"
              width={80}
              height={80}
            />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Skills;
