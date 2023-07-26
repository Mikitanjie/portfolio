import { useContext } from 'react';
import Image from 'next/image';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Tools = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center" style={{ marginTop: '-140px', marginBottom: '-420px', marginLeft:'400px'}}>
      <div className="grid grid-cols-7 gap-9 dark:bg-transparent">
        {/* JavaScript */}
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '0.2s', marginTop: '-3px', zIndex: 1  }}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
              <Image
                className="transition-transform duration-200 hover:scale-150 active:scale-50"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        {/* HTML5 */}
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '0.4s', marginTop: '-14px', zIndex: 1  }}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <Image
                className="transition-transform duration-200 hover:scale-150 active:scale-50"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="HTML5"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        {/* CSS3 */}
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '0.6s', marginTop: '-14px', zIndex: 1  }}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
              <Image
                className="transition-transform duration-200 hover:scale-150 active:scale-50"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="CSS3"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        {/* Ruby */}
        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '0.8s', marginTop: '-2px', zIndex: 1   }}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noreferrer">
              <Image
                className="transition-transform duration-200 hover:scale-150 active:scale-50"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
                alt="Ruby"
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

export default Tools;
