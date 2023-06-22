import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Button from './components/Button/Button'

export default function Home() {
  return (
    <div className="bg-emerald-50	">
      <Header />
      <div className="text-center text-5xl font-extrabold ...">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Welcome to my portfolio
          </span>
          </div>
      <Hero />
      <Button />
      <Projects />
      <About />
    </div>
  )
}
