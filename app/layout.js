import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './_components/ThemeContext/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Michael's Portfolio",
  description: 'Portfolio of Michael Catania',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
