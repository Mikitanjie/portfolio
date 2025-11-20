// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './_components/ThemeContext/ThemeContext';
import Topper from './_components/Topper/Topper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Michael's Portfolio",
  description: "Portfolio of Michael Catania",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ThemeProvider>

          {/* NAV */}
          <div id="nav-root">
            <Topper />
          </div>

          {/* APP ROOT */}
          <main id="app-root" className="w-full flex flex-col items-center">
            <canvas id="canvas" />
            {children}
          </main>

        </ThemeProvider>

      </body>
    </html>
  );
}
