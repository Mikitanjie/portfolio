import { useRef, useEffect } from 'react';

export function use3DTilt() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let isHovering = false;
    let animationFrame = null;

    const handleMouseEnter = (e) => {
      isHovering = true;
    };

    const handleMouseMove = (e) => {
      if (!isHovering) return;
      
      // Cancel any pending animation frame
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      animationFrame = requestAnimationFrame(() => {
        if (!element || !isHovering) return;
        
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        // Clamp rotation values for smoother effect
        const clampedRotateX = Math.max(-15, Math.min(15, rotateX));
        const clampedRotateY = Math.max(-15, Math.min(15, rotateY));
        
        element.style.willChange = 'transform';
        element.style.transform = `perspective(1000px) rotateX(${clampedRotateX}deg) rotateY(${clampedRotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        element.style.transition = 'none';
      });
    };

    const handleMouseLeave = () => {
      isHovering = false;
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      if (element) {
        element.style.willChange = 'auto';
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        element.style.transition = 'transform 0.5s ease-out';
      }
    };

    element.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}
