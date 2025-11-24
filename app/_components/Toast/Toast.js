'use client';

import { useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';

export default function Toast({ message, type = 'success', onClose, duration = 5000 }) {
  useEffect(() => {
    if (type === 'success' && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [type, duration, onClose]);

  const isSuccess = type === 'success';
  const bgColor = isSuccess 
    ? 'bg-green-500/90 dark:bg-green-600/90' 
    : 'bg-red-500/90 dark:bg-red-600/90';
  const iconColor = isSuccess ? 'text-green-100' : 'text-red-100';

  return (
    <div
      className={`fixed top-24 right-4 md:right-8 z-[10000] ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 min-w-[300px] max-w-[500px] animate-slide-in-right`}
      role="alert"
      aria-live="polite"
    >
      <div className={iconColor}>
        {isSuccess ? <FaCheckCircle size={24} /> : <FaTimesCircle size={24} />}
      </div>
      <p className="flex-1 text-sm md:text-base font-medium">{message}</p>
      <button
        onClick={onClose}
        className="text-white/80 hover:text-white transition-colors p-1"
        aria-label="Close notification"
      >
        <FaTimes size={18} />
      </button>
    </div>
  );
}

