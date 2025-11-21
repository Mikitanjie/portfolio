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
