import { useContext } from 'react';
import Image from 'next/image';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Libraries = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center" style={{ marginTop: '-120px', marginLeft:'400px', marginRight:'-15px', marginBottom: '-20px' }}>
      <div className="grid grid-cols-8 gap-9 dark:bg-transparent">

        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '1.0s', marginTop: '-1px', zIndex: 1 }}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank" rel="noreferrer">
              <Image
                className="transition-transform duration-200 hover:scale-150 active:scale-50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>

        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '1.2s', marginTop: '-1px', zIndex: 1 }}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://rubyonrails.org/" target="_blank" rel="noreferrer">
              <Image
                className="transition-transform duration-200 hover:scale-150 active:scale-50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
                alt="Rails"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>

        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '1.8s', zIndex: 1 }}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer">
              <Image
                className="transition-transform duration-200 hover:scale-150 active:scale-50"
                src="https://img.icons8.com/?size=96&id=CIAZz2CYc6Kc&format=png"
                alt="TailwindCSS"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>

        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '2.0s', marginTop: '-1px', zIndex: 1 }}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
              <Image
                className="transition-transform duration-200 hover:scale-150 active:scale-50"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                alt="React"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>

        <div className="animate-pulse hover:animate-none" style={{ animationDelay: '2.6s', marginTop: '-19px', zIndex: 1 }}>
          <div style={{ width: '100px', height: '100px' }}>
            <a href="https://nextjs.org/docs/getting-started/react-essentials/" target="_blank" rel="noreferrer">
              <Image
                className={`transition-transform duration-200 hover:scale-150 ${theme === 'dark' ? 'icon-dark' : ''}`}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                alt="Next.js"
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

export default Libraries;
