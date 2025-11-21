import { useContext } from 'react';
import Image from 'next/image';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Libraries = () => {
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
          max-w-7xl
        "
      >

        <div className="animate-pulse hover:animate-none">
          <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-75"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="Bootstrap"
              width={80}
              height={80}
            />
          </a>
        </div>

        <div className="animate-pulse hover:animate-none">
          <a href="https://rubyonrails.org/" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-75"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
              alt="Rails"
              width={80}
              height={80}
            />
          </a>
        </div>

        <div className="animate-pulse hover:animate-none">
          <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-75"
              src="https://img.icons8.com/?size=96&id=CIAZz2CYc6Kc&format=png"
              alt="TailwindCSS"
              width={80}
              height={80}
            />
          </a>
        </div>

        <div className="animate-pulse hover:animate-none">
          <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-75"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="React"
              width={80}
              height={80}
            />
          </a>
        </div>

        <div className="animate-pulse hover:animate-none">
          <a href="https://nextjs.org/docs/getting-started/react-essentials/" target="_blank" rel="noreferrer">
            <Image
              className={`transition-transform duration-200 hover:scale-125 active:scale-75 ${theme === 'dark' ? 'icon-dark' : ''}`}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              alt="Next.js"
              width={80}
              height={80}
            />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Libraries;
