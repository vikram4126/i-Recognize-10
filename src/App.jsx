import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoCards from './components/InfoCards'
import SectionIntro from './components/SectionIntro'
import Awards from './components/Awards'
import Timeline from './components/Timeline'
import Team from './components/Team'
import JurySupport from './components/JurySupport'
import PreviousEditions from './components/PreviousEditions'
import Winners from './components/Winners'
import BePart from './components/BePart'
import ThemeSection from './components/ThemeSection'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Global reveal animation
    const reveals = document.querySelectorAll('.gsap-reveal')
    reveals.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      })
    })
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SectionIntro />
        <ThemeSection />
        <Awards />
        <Team />
        <Timeline />
        <JurySupport />
        <PreviousEditions />
        <Winners />
        <BePart />
      </main>
      <Footer />
    </div>
  )
}

export default App
