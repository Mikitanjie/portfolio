'use client';

export default function SkipToContent() {
  const handleClick = (e) => {
    e.preventDefault();
    const mainContent = document.getElementById('app-root');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Remove focus after scroll (for visual purposes)
      setTimeout(() => mainContent.blur(), 1000);
    }
  };

  return (
    <a
      href="#app-root"
      onClick={handleClick}
      className="skip-to-content"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
}

