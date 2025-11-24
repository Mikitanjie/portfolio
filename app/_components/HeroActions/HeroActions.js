import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import Button from '../Button/Button';

const HeroActions = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="hero-actions flex flex-row gap-6 mt-4 items-center flex-wrap">
      <a
        href="https://drive.google.com/uc?export=download&id=1DPcpHRBLi8_mvWXWW9H-gSJzCngb5JUx"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-action-button inline-flex justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 active:scale-90"
      >
        Download my CV
      </a>

      <Button text="Connect on LinkedIn" href="https://www.linkedin.com/in/mc16/" />
      <Button text="Follow me on Github" href="https://github.com/Mikitanjie" />
    </div>
  );
};

export default HeroActions;

