import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className="flex justify-end" style={{ marginTop: '10px'}}>
      <div className="mb-11 grid grid-cols-4 gap-9 dark:bg-transparent">
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '0.0s', marginTop: '-2px' }}>
          <div style={{ width: '60px', height: '60px'}}>
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
              alt="Figma"
              width={60}
              height={60}
            />
          </a>
          </div>
        </div>
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '0.2s', marginTop: '-3px' }}>
          <div style={{ width: '60px', height: '60px' }}>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              width={60}
              height={60}
            />
          </a>
          </div>
        </div>
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '0.4s', marginTop: '-14px' }}>
          <div style={{ width: '60px', height: '60px' }}>
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="HTML5"
              width={60}
              height={60}
            />
          </a>
          </div>
        </div>
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '0.6s', marginTop: '-14px' }}>
          <div style={{ width: '60px', height: '60px' }}>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="CSS3"
              width={60}
              height={60}
            />
          </a>
          </div>
        </div>
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '0.8s', marginTop: '-2px'  }}>
          <div style={{ width: '60px', height: '60px' }}>
          <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
              alt="Ruby"
              width={60}
              height={60}
            />
          </a>
          </div>
        </div>
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '1.0s', marginTop: '-1px'  }}>
          <div style={{ width: '60px', height: '60px' }}>
          <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="Bootstrap"
              width={60}
              height={60}
            />
          </a>
          </div>
        </div>
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '1.2s', marginTop: '-1px' }}>
          <div style={{ width: '60px', height: '60px' }}>
          <a href="https://rubyonrails.org/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg"
              alt="Rails"
              width={60}
              height={60}
            />
          </a>
          </div>
        </div>
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '1.4s', marginTop: '0px'  }}>
          <div style={{ width: '60px', height: '60px' }}>
          <a href="https://www.heroku.com/what" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
              alt="Heroku"
              width={60}
              height={60}
            />
          </a>
          </div>
        </div>
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '1.6s', marginTop: '-1px'  }}>
          <div style={{ width: '60px', height: '60px' }}>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="Git"
              width={60}
              height={60}
            />
          </a>
          </div>
        </div>
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '1.8s' }}>
          <div style={{ width: '60px', height: '60px' }}>
          <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://img.icons8.com/?size=96&amp;id=CIAZz2CYc6Kc&amp;format=png"
              alt="TaillwindCSS"
              width={60}
              height={60}
            />
          </a>
          </div>
        </div>
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '2.0s' }}>
          <div style={{ width: '99px', height: '60px', marginTop: '-20px' }}>
          <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
              alt="Webpack"
              width={99}
              height={60}
            />
          </a>
          </div>
        </div>
        <div className="mb-1 animate-pulse hover:animate-none" style={{ animationDelay: '2.2s'}}>
          <div style={{ width: '60px', height: '60px' }}>
          <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://pics.freeicons.io/uploads/icons/png/14178750871552037061-512.png"
              alt="VSCode"
              width={60}
              height={60}
            />
          </a>
          </div>
        </div>
        <div className="mb-1 animate-pulse hover:animate-none" style={{ animationDelay: '2.4s', marginTop: '-30px' }}>
          <div style={{ width: '99px', height: '60px' }}>
          <a href="https://nodejs.org/en/docs" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="NodeJS"
              width={99}
              height={60}
            />
          </a>
          </div>
        </div>
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '2.6s', marginTop: '-19px' }}>
          <div style={{ width: '60px', height: '60px' }}>
          <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-150"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="PostgreSQL"
              width={60}
              height={60}
            />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
