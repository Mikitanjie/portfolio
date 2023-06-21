import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Button from './components/Button/Button'

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <h1 className= "text-center font-light text-red-700">Welcome to my portfolio</h1>
      <Hero />
      <Button />
      <Projects />
      <About />
    </div>
  )
}
