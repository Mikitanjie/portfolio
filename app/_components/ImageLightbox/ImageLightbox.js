'use client';

import { useEffect } from 'react';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function ImageLightbox({ image, alt, projectUrl, onClose }) {
  useEffect(() => {
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    
    // Close on Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <div
        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-emerald-400 transition-colors p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm"
          aria-label="Close lightbox"
        >
          <FaTimes size={24} />
        </button>

        {/* Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={image}
            alt={alt}
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            priority
          />
        </div>

        {/* Visit Project button */}
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            Visit Project
            <FaExternalLinkAlt size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

