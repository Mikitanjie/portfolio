'use client';

export default function SkeletonLoader({ type = 'default', className = '' }) {
  const baseClasses = 'animate-pulse bg-gray-200 dark:bg-gray-700 rounded';
  
  const variants = {
    text: 'h-4 w-full',
    title: 'h-8 w-3/4',
    image: 'w-full h-64',
    card: 'w-full h-48',
    circle: 'w-20 h-20 rounded-full',
    project: 'w-full h-96',
  };

  return (
    <div className={`${baseClasses} ${variants[type] || variants.text} ${className}`} aria-hidden="true">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

