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
      className="relative min-h-screen bg-[#00338D] text-white overflow-hidden flex flex-col pb-0"
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

        {/* Hero Content — Visually centered, tight flow into cards */}
        <div className="relative z-10 pt-[28vh] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center text-center gap-8">
            
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-9xl font-condensed font-bold tracking-tight text-white leading-[0.9] drop-shadow-2xl"
            >
              {hero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-white/70 max-w-2xl mx-auto font-normal leading-relaxed tracking-wide"
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

        <div 
          ref={cardsRef}
          className="container max-w-7xl mx-auto px-6 relative z-10 mt-[60px] pb-0"
        >
          <InfoCards />
        </div>
    </section>
  )
}

export default Hero
