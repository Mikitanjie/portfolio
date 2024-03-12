import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './_components/ThemeContext/ThemeContext';


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "Michael's Portfolio",
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
    </ThemeProvider>
  )
}
