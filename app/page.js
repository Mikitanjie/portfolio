import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className= "text-center font-light text-red-700">Michael Portfolio</h1>
      <Hero />
    </div>
  )
}
