import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Button from './components/Button/Button'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <div className="bg-emerald-505">
      <Header />
      <div className="text-center mt-5 text-5xl font-extrabold ...">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Welcome to my portfolio
          </span>
          </div>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </div>
  )
}
