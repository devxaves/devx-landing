import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import Services from './components/sections/Services'
import Process from './components/sections/Process'
import Work from './components/sections/Work'
import Stats from './components/sections/Stats'
import Testimonials from './components/sections/Testimonials'
import About from './components/sections/About'
import CTA from './components/sections/CTA'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Work />
      <Stats />
      <Testimonials />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
