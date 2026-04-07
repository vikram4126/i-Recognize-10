import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InfoCards from './InfoCards'
import siteData from '../data/site-content.json'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const { hero } = siteData
  const targetDate = new Date(hero.targetDate).getTime()
  const bannerRef = useRef(null)
  const cardsRef = useRef(null)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(timer)
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current, 
        { 
          y: 100, 
          opacity: 0 
        }, 
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          }
        }
      )
    }, bannerRef.current)

    return () => ctx.revert()
  }, [])

  const formatNumber = (num) => String(num).padStart(2, '0')

  return (
    <section 
      id="home" 
      ref={bannerRef}
      className="relative w-full min-h-[100vh] lg:h-[100vh] lg:min-h-[850px] bg-[#00338D] text-white overflow-hidden flex flex-col"
    >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            key={hero.videoUrl}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-[1.02] opacity-80"
          >
            <source src={hero.videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#00338D]/80 via-[#00338D]/10 to-[#00338D]/90" />
          <div className="absolute inset-0 bg-[#00338D]/30" /> 
        </div>

        {/* Hero Content — Centered with bottom padding for absolute cards */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 pb-8 lg:pt-0 lg:pb-[250px] px-6">
          <div className="flex flex-col items-center text-center gap-8 max-w-5xl mx-auto">
            
            {/* Title & Tagline Group */}
            <div className="flex flex-col items-center justify-center gap-1 md:gap-2 mb-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-7xl lg:text-9xl font-condensed font-bold tracking-tight text-white leading-[0.9] drop-shadow-2xl flex items-baseline"
              >
                <span className="relative inline-block">
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, type: "spring", bounce: 0.5 }}
                    className="absolute top-[0.05em] left-[50%] -translate-x-1/2 w-[0.14em] h-[0.14em] bg-[#FD349C] z-10"
                  />
                  i
                </span>
                -Recognize
              </motion.h1>

              {/* Tagline */}
              <motion.h2
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-white/90 font-sans mt-2"
              >
                 Be Free to Create
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm md:text-base lg:text-lg text-white/70 max-w-2xl mx-auto font-normal leading-relaxed tracking-wide"
            >
              {hero.subtitle}
            </motion.p>

            {/* Countdown Timer — Dark & Compact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 md:gap-8 px-8 py-4 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl">
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-4xl font-black text-white leading-none mb-1">{formatNumber(timeLeft.days)}</span>
                  <span className="text-[10px] font-black text-[#ACEAFF] uppercase tracking-widest">{hero.timerUnits.days}</span>
                </div>
                <span className="text-xl md:text-2xl font-black text-white/10 -mt-3">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-4xl font-black text-white leading-none mb-1">{formatNumber(timeLeft.hours)}</span>
                  <span className="text-[10px] font-black text-[#ACEAFF] uppercase tracking-widest">{hero.timerUnits.hours}</span>
                </div>
                <span className="text-xl md:text-2xl font-black text-white/10 -mt-3">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-4xl font-black text-white leading-none mb-1">{formatNumber(timeLeft.minutes)}</span>
                  <span className="text-[10px] font-black text-[#ACEAFF] uppercase tracking-widest">{hero.timerUnits.minutes}</span>
                </div>
                <span className="text-xl md:text-2xl font-black text-white/10 -mt-3 md:flex hidden">:</span>
                <div className="md:flex hidden flex-col items-center">
                  <span className="text-2xl md:text-4xl font-black text-white/40 leading-none mb-1">{formatNumber(timeLeft.seconds)}</span>
                  <span className="text-[10px] font-black text-[#ACEAFF]/50 uppercase tracking-widest">{hero.timerUnits.seconds}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cards Wrapper - Fixed to bottom on large screens */}
        <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0 z-20 w-full max-w-7xl mx-auto px-6 pt-12 lg:pt-0 pb-12 lg:pb-0">
          <div ref={cardsRef} className="w-full">
            <InfoCards />
          </div>
        </div>
    </section>
  )
}

export default Hero
