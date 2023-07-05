import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className="flex justify-end" style={{ marginTop: '250px' }}>
      <div className="flex justify-end leading-normal mb-11">
        <p>Languages and tools</p>
      </div>
      <div className="mt-11 mb-11 grid grid-cols-4 gap-6 rounded-lg shadow md:flex-row dark:bg-black">
        <div className="animate-pulse" style={{ animationDelay: '0.0s', marginTop: '-2px' }}>
          <div style={{ width: '60px', height: '60px' }}>
            <Image
              src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
              alt="figma"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="animate-pulse" style={{ animationDelay: '0.2s', marginTop: '-3px' }}>
          <div style={{ width: '60px', height: '60px' }}>
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="animate-pulse" style={{ animationDelay: '0.4s', marginTop: '-14px' }}>
          <div style={{ width: '60px', height: '60px' }}>
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="animate-pulse" style={{ animationDelay: '0.6s', marginTop: '-14px' }}>
          <div style={{ width: '60px', height: '60px' }}>
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="animate-pulse" style={{ animationDelay: '0.8s', marginTop: '-2px'  }}>
          <div style={{ width: '60px', height: '60px' }}>
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
              alt="ruby"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="animate-pulse" style={{ animationDelay: '1.0s', marginTop: '-1px'  }}>
          <div style={{ width: '60px', height: '60px' }}>
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="animate-pulse" style={{ animationDelay: '1.2s', marginTop: '-1px' }}>
          <div style={{ width: '60px', height: '60px' }}>
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg"
              alt="rails"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="animate-pulse" style={{ animationDelay: '1.4s', marginTop: '0px'  }}>
          <div style={{ width: '60px', height: '60px' }}>
            <Image
              src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
              alt="heroku"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="animate-pulse" style={{ animationDelay: '1.6s', marginTop: '-1px'  }}>
          <div style={{ width: '60px', height: '60px' }}>
            <Image
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="animate-pulse" style={{ animationDelay: '1.8s' }}>
          <div style={{ width: '60px', height: '60px' }}>
            <Image
              src="https://img.icons8.com/?size=96&amp;id=CIAZz2CYc6Kc&amp;format=png"
              alt="postgresql"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="animate-pulse" style={{ animationDelay: '2.0s' }}>
          <div style={{ width: '99px', height: '60px', marginTop: '-20px' }}>
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
              alt="webpack"
              width={99}
              height={60}
            />
          </div>
        </div>
        <div className="mb-1 animate-pulse" style={{ animationDelay: '2.2s'}}>
          <div style={{ width: '60px', height: '60px' }}>
            <Image
              src="https://pics.freeicons.io/uploads/icons/png/14178750871552037061-512.png"
              alt="vscode"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="mb-1 animate-pulse" style={{ animationDelay: '2.4s', marginTop: '-30px' }}>
          <div style={{ width: '99px', height: '60px' }}>
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width={99}
              height={60}
            />
          </div>
        </div>
        <div className="animate-pulse" style={{ animationDelay: '2.6s', marginTop: '-19px' }}>
          <div style={{ width: '60px', height: '60px' }}>
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
