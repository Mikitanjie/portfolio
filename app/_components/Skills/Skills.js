import { useContext } from 'react';
import Image from 'next/image';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center" style={{ marginTop: '-140px', marginBottom: '-420px', marginLeft:'400px'}}>
      <div className="grid grid-cols-8 gap-9 dark:bg-transparent">
        {/* Figma */}
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '0.0s', marginTop: '-2px', marginLeft:'-15px', zIndex: 1}}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              <Image
                className="transition-transform duration-200 hover:scale-150 active:scale-50"
                src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                alt="Figma"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        {/* Heroku */}
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '1.4s', marginTop: '0px', zIndex: 1}}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://www.heroku.com/what" target="_blank" rel="noreferrer">
              <Image
                className="transition-transform duration-200 hover:scale-150 active:scale-50"
                src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
                alt="Heroku"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        {/* Git */}
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '1.6s', marginTop: '-1px', zIndex: 1}}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <Image
                className="transition-transform duration-200 hover:scale-150 active:scale-50"
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="Git"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        {/* Webpack */}
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '2.0s', zIndex: 1}}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">
              <Image
                className="transition-transform duration-200 hover:scale-150 active:scale-50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                alt="Webpack"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        {/* VSCode */}
        <div className="mb-1 animate-pulse hover:animate-none" style={{ animationDelay: '2.2s', zIndex: 1}}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
              <Image
                className="transition-transform duration-200 hover:scale-150 active:scale-50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
                alt="VSCode"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
