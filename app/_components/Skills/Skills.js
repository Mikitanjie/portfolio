import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import SkillIcon from '../SkillIcon/SkillIcon';

const Skills = () => {
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
          max-w-6xl
          pb-12
          sm:pb-0
        "
      >

        <SkillIcon
          href="https://www.figma.com/"
              src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
              alt="Figma"
          name="Figma"
            />
        <SkillIcon
          href="https://www.heroku.com/what"
              src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
              alt="Heroku"
          name="Heroku"
        />
        <SkillIcon
          href="https://git-scm.com/"
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="Git"
          name="Git"
            />
        <SkillIcon
          href="https://webpack.js.org/"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
              alt="Webpack"
          name="Webpack"
        />
        <SkillIcon
          href="https://code.visualstudio.com/"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
              alt="VSCode"
          name="VSCode"
            />

      </div>
    </div>
  );
};

export default Skills;
