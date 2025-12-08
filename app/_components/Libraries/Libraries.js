import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import SkillIcon from '../SkillIcon/SkillIcon';

const Libraries = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center w-full px-4 py-8">
      <div
        className="
          grid
          mx-auto
          grid-cols-2
          sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]
          gap-6
          sm:gap-6
          place-items-center
          w-full
          max-w-7xl
          pb-12
          sm:pb-0
        "
      >

        <SkillIcon
          href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="Bootstrap"
          name="Bootstrap"
        />
        <SkillIcon
          href="https://rubyonrails.org/"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
              alt="Rails"
          name="Rails"
        />
        <SkillIcon
          href="https://tailwindcss.com/docs/installation"
              src="https://img.icons8.com/?size=96&id=CIAZz2CYc6Kc&format=png"
              alt="TailwindCSS"
          name="TailwindCSS"
        />
        <SkillIcon
          href="https://reactjs.org/docs/getting-started.html"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="React"
          name="React"
            />
        <SkillIcon
          href="https://nextjs.org/docs/getting-started/react-essentials/"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              alt="Next.js"
          name="Next.js"
          className={theme === 'dark' ? 'icon-dark' : ''}
            />

      </div>
    </div>
  );
};

export default Libraries;
