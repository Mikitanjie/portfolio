import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './_components/ThemeContext/ThemeContext';
import Topper from './_components/Topper/Topper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Michael Catania - Full Stack Web Developer Portfolio",
  description: "Portfolio of Michael Catania, a full stack web developer specializing in React, Next.js, Ruby on Rails, and modern web technologies. View projects, skills, and get in touch.",
  keywords: "web developer, full stack developer, React, Next.js, Ruby on Rails, JavaScript, portfolio, frontend developer, backend developer",
  authors: [{ name: "Michael Catania" }],
  openGraph: {
    title: "Michael Catania - Full Stack Web Developer",
    description: "Portfolio showcasing web development projects, skills, and experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Catania - Full Stack Web Developer",
    description: "Portfolio showcasing web development projects, skills, and experience",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ThemeProvider>

          {/* NAV */}
          <div id="nav-root" className="w-full overflow-x-hidden">
            <Topper />
          </div>

          {/* APP ROOT */}
          <main
            id="app-root"
            className="w-full max-w-full overflow-x-hidden flex flex-col items-center relative"
          >
            <canvas id="canvas" className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" />
            {children}
          </main>

        </ThemeProvider>

      </body>
    </html>
  );
}
