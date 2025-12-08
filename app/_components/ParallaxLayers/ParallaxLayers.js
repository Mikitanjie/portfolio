import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

export default function ParallaxLayers() {
  const containerRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme !== 'light') {
      if (containerRef.current) {
        containerRef.current.style.display = 'none';
      }
      return;
    }

    if (containerRef.current) {
      containerRef.current.style.display = 'block';
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollY = window.scrollY;
      const layers = containerRef.current.children;
      
      // Move each layer at different speeds for parallax effect
      Array.from(layers).forEach((layer, index) => {
        const speed = (index + 1) * 0.15; // Different speed for each layer
        const yPos = -(scrollY * speed);
        layer.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [theme]);


  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ 
        zIndex: -1,
        display: theme === 'light' ? 'block' : 'none'
      }}
    >
      {/* Layer 1 - Geometric shapes */}
      <div className="absolute inset-0 parallax-layer-1" style={{ willChange: 'transform' }}>
        {/* Triangles */}
        <div className="absolute top-20 left-10" style={{ 
          width: 0, 
          height: 0, 
          borderLeft: '80px solid transparent',
          borderRight: '80px solid transparent',
          borderBottom: '140px solid rgba(34, 197, 94, 0.3)',
          filter: 'blur(2px)',
          transform: 'rotate(15deg)'
        }}></div>
        <div className="absolute top-60 right-20" style={{ 
          width: 0, 
          height: 0, 
          borderLeft: '60px solid transparent',
          borderRight: '60px solid transparent',
          borderBottom: '100px solid rgba(74, 222, 128, 0.25)',
          filter: 'blur(2px)',
          transform: 'rotate(-25deg)'
        }}></div>
        <div className="absolute top-[400px] left-1/3" style={{ 
          width: 0, 
          height: 0, 
          borderLeft: '70px solid transparent',
          borderRight: '70px solid transparent',
          borderBottom: '120px solid rgba(34, 197, 94, 0.28)',
          filter: 'blur(2px)',
          transform: 'rotate(35deg)'
        }}></div>
        <div className="absolute top-[800px] right-1/4" style={{ 
          width: 0, 
          height: 0, 
          borderLeft: '65px solid transparent',
          borderRight: '65px solid transparent',
          borderBottom: '110px solid rgba(74, 222, 128, 0.25)',
          filter: 'blur(2px)',
          transform: 'rotate(-40deg)'
        }}></div>
        <div className="absolute top-[1200px] left-1/5" style={{ 
          width: 0, 
          height: 0, 
          borderLeft: '75px solid transparent',
          borderRight: '75px solid transparent',
          borderBottom: '130px solid rgba(34, 197, 94, 0.3)',
          filter: 'blur(2px)',
          transform: 'rotate(50deg)'
        }}></div>
        
        {/* Squares */}
        <div className="absolute bottom-40 left-1/4 w-32 h-32" style={{ 
          backgroundColor: 'rgba(34, 197, 94, 0.3)', 
          transform: 'rotate(45deg)',
          filter: 'blur(1px)'
        }}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24" style={{ 
          backgroundColor: 'rgba(74, 222, 128, 0.25)', 
          transform: 'rotate(20deg)',
          filter: 'blur(1px)'
        }}></div>
        <div className="absolute top-[600px] left-2/3 w-28 h-28" style={{ 
          backgroundColor: 'rgba(34, 197, 94, 0.28)', 
          transform: 'rotate(60deg)',
          filter: 'blur(1px)'
        }}></div>
        <div className="absolute top-[1000px] right-1/5 w-26 h-26" style={{ 
          backgroundColor: 'rgba(74, 222, 128, 0.25)', 
          transform: 'rotate(30deg)',
          filter: 'blur(1px)'
        }}></div>
        <div className="absolute top-[1400px] left-1/2 w-30 h-30" style={{ 
          backgroundColor: 'rgba(34, 197, 94, 0.3)', 
          transform: 'rotate(75deg)',
          filter: 'blur(1px)'
        }}></div>
      </div>

      {/* Layer 2 - More geometric shapes */}
      <div className="absolute inset-0 parallax-layer-2" style={{ willChange: 'transform' }}>
        {/* Hexagons (using clip-path) */}
        <div className="absolute top-40 right-1/4 w-40 h-40" style={{ 
          backgroundColor: 'rgba(16, 185, 129, 0.35)', 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          filter: 'blur(1px)',
          transform: 'rotate(30deg)'
        }}></div>
        <div className="absolute bottom-60 left-1/3 w-36 h-36" style={{ 
          backgroundColor: 'rgba(34, 197, 94, 0.3)', 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          filter: 'blur(1px)',
          transform: 'rotate(-15deg)'
        }}></div>
        <div className="absolute top-[500px] right-1/3 w-38 h-38" style={{ 
          backgroundColor: 'rgba(16, 185, 129, 0.33)', 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          filter: 'blur(1px)',
          transform: 'rotate(45deg)'
        }}></div>
        <div className="absolute top-[900px] left-1/4 w-34 h-34" style={{ 
          backgroundColor: 'rgba(34, 197, 94, 0.3)', 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          filter: 'blur(1px)',
          transform: 'rotate(-30deg)'
        }}></div>
        <div className="absolute top-[1300px] right-1/6 w-42 h-42" style={{ 
          backgroundColor: 'rgba(16, 185, 129, 0.35)', 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          filter: 'blur(1px)',
          transform: 'rotate(60deg)'
        }}></div>
        
        {/* Diamonds */}
        <div className="absolute top-1/2 left-10 w-28 h-28" style={{ 
          backgroundColor: 'rgba(74, 222, 128, 0.3)', 
          transform: 'rotate(45deg)',
          filter: 'blur(1px)'
        }}></div>
        <div className="absolute bottom-1/4 right-10 w-32 w-32" style={{ 
          backgroundColor: 'rgba(16, 185, 129, 0.35)', 
          transform: 'rotate(45deg)',
          filter: 'blur(1px)'
        }}></div>
        <div className="absolute top-[700px] left-3/4 w-30 h-30" style={{ 
          backgroundColor: 'rgba(74, 222, 128, 0.3)', 
          transform: 'rotate(45deg)',
          filter: 'blur(1px)'
        }}></div>
        <div className="absolute top-[1100px] right-2/5 w-26 h-26" style={{ 
          backgroundColor: 'rgba(16, 185, 129, 0.33)', 
          transform: 'rotate(45deg)',
          filter: 'blur(1px)'
        }}></div>
        <div className="absolute top-[1500px] left-1/6 w-34 h-34" style={{ 
          backgroundColor: 'rgba(74, 222, 128, 0.3)', 
          transform: 'rotate(45deg)',
          filter: 'blur(1px)'
        }}></div>
      </div>

      {/* Layer 3 - Additional geometric depth */}
      <div className="absolute inset-0 parallax-layer-3" style={{ willChange: 'transform' }}>
        {/* Large triangles */}
        <div className="absolute top-1/4 left-1/2" style={{ 
          width: 0, 
          height: 0, 
          borderLeft: '100px solid transparent',
          borderRight: '100px solid transparent',
          borderBottom: '170px solid rgba(34, 197, 94, 0.25)',
          filter: 'blur(2px)',
          transform: 'rotate(40deg)'
        }}></div>
        <div className="absolute top-[550px] right-1/5" style={{ 
          width: 0, 
          height: 0, 
          borderLeft: '90px solid transparent',
          borderRight: '90px solid transparent',
          borderBottom: '155px solid rgba(34, 197, 94, 0.23)',
          filter: 'blur(2px)',
          transform: 'rotate(-50deg)'
        }}></div>
        <div className="absolute top-[950px] left-1/3" style={{ 
          width: 0, 
          height: 0, 
          borderLeft: '85px solid transparent',
          borderRight: '85px solid transparent',
          borderBottom: '145px solid rgba(74, 222, 128, 0.25)',
          filter: 'blur(2px)',
          transform: 'rotate(55deg)'
        }}></div>
        
        {/* Pentagons */}
        <div className="absolute bottom-1/3 right-1/4 w-44 h-44" style={{ 
          backgroundColor: 'rgba(16, 185, 129, 0.3)', 
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          filter: 'blur(1px)',
          transform: 'rotate(25deg)'
        }}></div>
        <div className="absolute top-[650px] left-2/5 w-40 h-40" style={{ 
          backgroundColor: 'rgba(34, 197, 94, 0.28)', 
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          filter: 'blur(1px)',
          transform: 'rotate(-35deg)'
        }}></div>
        <div className="absolute top-[1050px] right-1/3 w-46 h-46" style={{ 
          backgroundColor: 'rgba(16, 185, 129, 0.3)', 
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          filter: 'blur(1px)',
          transform: 'rotate(50deg)'
        }}></div>
        
        {/* Small squares */}
        <div className="absolute top-2/3 left-1/5 w-20 h-20" style={{ 
          backgroundColor: 'rgba(74, 222, 128, 0.3)', 
          transform: 'rotate(45deg)',
          filter: 'blur(1px)'
        }}></div>
        <div className="absolute top-[750px] right-1/4 w-22 h-22" style={{ 
          backgroundColor: 'rgba(34, 197, 94, 0.28)', 
          transform: 'rotate(60deg)',
          filter: 'blur(1px)'
        }}></div>
        <div className="absolute top-[1150px] left-3/5 w-24 h-24" style={{ 
          backgroundColor: 'rgba(74, 222, 128, 0.3)', 
          transform: 'rotate(30deg)',
          filter: 'blur(1px)'
        }}></div>
        <div className="absolute top-[1550px] right-1/2 w-20 h-20" style={{ 
          backgroundColor: 'rgba(16, 185, 129, 0.3)', 
          transform: 'rotate(75deg)',
          filter: 'blur(1px)'
        }}></div>
      </div>
    </div>
  );
}
