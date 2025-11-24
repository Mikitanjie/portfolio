'use client';

import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

export default function CopyToClipboard({ text, children, className = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-emerald-500/20 active:scale-95 ${className}`}
      aria-label={`Copy ${text} to clipboard`}
      title={`Copy ${text} to clipboard`}
    >
      {children}
      <span className="text-sm">
        {copied ? (
          <span className="flex items-center gap-1 text-emerald-400">
            <FaCheck size={14} />
            Copied!
          </span>
        ) : (
          <FaCopy size={14} className="opacity-60 hover:opacity-100" />
        )}
      </span>
    </button>
  );
}

