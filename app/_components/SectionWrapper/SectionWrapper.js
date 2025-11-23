'use client';

import { useIntersectionObserver } from '../useIntersectionObserver/useIntersectionObserver';

export default function SectionWrapper({ children, className = '' }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

