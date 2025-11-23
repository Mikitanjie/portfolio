import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const SkillIcon = ({ href, src, alt, name, width = 80, height = 80, className = '' }) => {
  const { theme } = useContext(ThemeContext);
  const isInverted = className.includes('icon-dark');
  
  return (
    <div className="animate-pulse hover:animate-none group relative w-full flex justify-center mb-8 sm:mb-0">
      <a href={href} target="_blank" rel="noreferrer" className="block">
        <div className="transition-all duration-300 hover:scale-125 active:scale-75 hover:drop-shadow-lg w-12 h-12 sm:w-20 sm:h-20">
          <Image
            className={`transition-all duration-300 ${isInverted ? '' : 'group-hover:brightness-110'} ${className} w-full h-full object-contain`}
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        </div>
        <div 
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm font-semibold whitespace-nowrap text-center"
          style={{ color: theme === 'dark' ? 'rgb(1, 161, 35)' : 'inherit' }}
        >
          {name}
        </div>
      </a>
    </div>
  );
};

export default SkillIcon;

