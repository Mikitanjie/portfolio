import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import SkillIcon from '../SkillIcon/SkillIcon';

const Tools = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center w-full px-4 py-8">
      <div
        className="
          grid
          mx-auto
          grid-cols-2
          sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]
          gap-8
          sm:gap-16
          place-items-center
          w-full
          max-w-6xl
          pb-12
          sm:pb-0
        "
      >

        <SkillIcon
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="JavaScript"
          name="JavaScript"
        />
        <SkillIcon
          href="https://www.w3.org/html/"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="HTML5"
          name="HTML5"
            />
        <SkillIcon
          href="https://www.w3schools.com/css/"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="CSS3"
          name="CSS3"
            />
        <SkillIcon
          href="https://www.ruby-lang.org/en/"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
              alt="Ruby"
          name="Ruby"
            />

      </div>
    </div>
  );
};

export default Tools;
