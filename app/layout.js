import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './_components/ThemeContext/ThemeContext';
import Topper from './_components/Topper/Topper';
import ErrorBoundary from './_components/ErrorBoundary/ErrorBoundary';
import StructuredData from './_components/StructuredData/StructuredData';
import SkipToContent from './_components/SkipToContent/SkipToContent';
import WebVitals from './_components/WebVitals/WebVitals';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Michael Catania - Full Stack Web Developer Portfolio",
  description: "Portfolio of Michael Catania, a full stack web developer specializing in React, Next.js, Ruby on Rails, and modern web technologies. View projects, skills, and get in touch.",
  keywords: "web developer, full stack developer, React, Next.js, Ruby on Rails, JavaScript, portfolio, frontend developer, backend developer",
  authors: [{ name: "Michael Catania" }],
  openGraph: {
    title: "Michael Catania - Full Stack Web Developer",
    description: "Portfolio showcasing web development projects, skills, and experience",
    type: "website",
    url: siteUrl,
    siteName: "Michael Catania Portfolio",
    images: [
      {
        url: `${siteUrl}/ProfilePic.png`,
        width: 1200,
        height: 630,
        alt: "Michael Catania - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Catania - Full Stack Web Developer",
    description: "Portfolio showcasing web development projects, skills, and experience",
    images: [`${siteUrl}/ProfilePic.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
  },
};

export default function RootLayout({ children }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Michael Catania",
    "jobTitle": "Full Stack Web Developer",
    "url": siteUrl,
    "sameAs": [
      "https://www.linkedin.com/in/michael-catania",
      "https://github.com/michael-catania"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Ruby on Rails",
      "JavaScript",
      "Full Stack Development",
      "Web Development"
    ],
    "description": "Full stack web developer specializing in React, Next.js, Ruby on Rails, and modern web technologies."
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#01a123" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Michael Catania" />
      </head>
      <body className={inter.className}>
        <StructuredData data={structuredData} />
        <SkipToContent />
        <WebVitals />

        <ThemeProvider>
          <ErrorBoundary>
            {/* NAV */}
            <div id="nav-root" className="w-full overflow-x-hidden">
              <Topper />
            </div>

            {/* APP ROOT */}
            <main
              id="app-root"
              className="w-full max-w-full overflow-x-hidden flex flex-col items-center relative"
              tabIndex="-1"
            >
              <canvas id="canvas" className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" />
              {children}
            </main>
          </ErrorBoundary>
        </ThemeProvider>

      </body>
    </html>
  );
}
