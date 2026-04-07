import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionIntro from './components/SectionIntro'
import AmbientParticles from './components/AmbientParticles'
import EtherealSpline from './components/EtherealSpline'

import Awards from './components/Awards'
import Team from './components/Team'
import Timeline from './components/Timeline'
import JurySupport from './components/JurySupport'
import PreviousEditions from './components/PreviousEditions'
import Winners from './components/Winners'
import BePart from './components/BePart'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Global reveal animation for sections
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
    <div className="min-h-screen bg-white">
      <AmbientParticles />
      <EtherealSpline />
      <Navbar />
      <main>
        <Hero />
        <SectionIntro />

        <Awards />
        <Team />
        <Timeline />
        <JurySupport />
        {/* <PreviousEditions /> */}
        {/* <Winners /> */}
        <BePart />
      </main>
      <Footer />
    </div>
  )
}

export default App
