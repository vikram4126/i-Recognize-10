import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import hummingBird from '../assets/humming-bird.svg'
import InfoCards from './InfoCards'
import siteData from '../data/site-content.json'

const Hero = () => {
  const { hero } = siteData
  const targetDate = new Date(hero.targetDate).getTime()
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

  const formatNumber = (num) => String(num).padStart(2, '0')

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-0 overflow-hidden bg-[#0C233C] text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C233C] via-[#00338D]/20 to-[#0C233C] opacity-90" />

      {/* Background Hummingbird Artwork */}
      <div className="absolute top-1/2 right-[-5%] lg:right-[0%] w-full lg:w-[70%] h-full opacity-60 pointer-events-none -translate-y-1/2 transition-all duration-1000 ease-out">
        <img
          src={hummingBird}
          alt="Hummingbird Artwork"
          className="w-full h-full object-contain object-right"
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 flex flex-col h-full">
        <div className="flex-grow flex flex-col justify-center py-20">
          <div className="max-w-4xl text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-10"
            >
              <span className="w-2 h-2 bg-[#1E49E2] rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest opacity-80 text-white">{hero.badge}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tight mb-10 text-white drop-shadow-2xl"
            >
              {hero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl opacity-80 font-medium max-w-2xl leading-relaxed mb-20 text-white"
            >
              {hero.subtitle}
            </motion.p>

            {/* Registration & Countdown Unit (Pill Design) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 group"
            >


              {/* Timer Pill */}
              <div className="relative flex items-center gap-3 md:gap-5 px-6 md:px-8 py-3.5 md:py-4 bg-white/3 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl">

                {/* Days */}
                <div className="relative flex flex-col items-center min-w-[2.5rem]">
                  <span className="text-xl md:text-2xl font-black tabular-nums leading-none text-white">{formatNumber(timeLeft.days)}</span>
                  <span className="absolute -bottom-3.5 md:-bottom-4 translate-y-1/2 text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-[#ACEAFF] bg-[#0C233C] px-2 py-0.5 rounded-full border border-white/10 shadow-lg whitespace-nowrap">Days</span>
                </div>

                <span className="opacity-20 text-lg md:text-xl font-bold pb-1 text-white">:</span>

                {/* Hours */}
                <div className="relative flex flex-col items-center min-w-[2.5rem]">
                  <span className="text-xl md:text-2xl font-black tabular-nums leading-none text-white">{formatNumber(timeLeft.hours)}</span>
                  <span className="absolute -bottom-3.5 md:-bottom-4 translate-y-1/2 text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-[#ACEAFF] bg-[#0C233C] px-2 py-0.5 rounded-full border border-white/10 shadow-lg whitespace-nowrap">Hours</span>
                </div>

                <span className="opacity-20 text-lg md:text-xl font-bold pb-1 text-white">:</span>

                {/* Minutes */}
                <div className="relative flex flex-col items-center min-w-[2.5rem]">
                  <span className="text-xl md:text-2xl font-black tabular-nums leading-none text-white">{formatNumber(timeLeft.minutes)}</span>
                  <span className="absolute -bottom-3.5 md:-bottom-4 translate-y-1/2 text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-[#ACEAFF] bg-[#0C233C] px-2 py-0.5 rounded-full border border-white/10 shadow-lg whitespace-nowrap">Mins</span>
                </div>

                <span className="opacity-20 text-lg md:text-xl font-bold pb-1 sm:flex hidden text-white">:</span>

                {/* Seconds */}
                <div className="relative hidden sm:flex flex-col items-center min-w-[2.5rem]">
                  <span className="text-xl md:text-2xl font-black tabular-nums leading-none text-white/40">{formatNumber(timeLeft.seconds)}</span>
                  <span className="absolute -bottom-3.5 md:-bottom-4 translate-y-1/2 text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-[#ACEAFF]/50 bg-[#0C233C] px-2 py-0.5 rounded-full border border-white/10 shadow-lg whitespace-nowrap">Secs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Info Cards at the Bottom */}
        <InfoCards />
      </div>
    </section>
  )
}

export default Hero
