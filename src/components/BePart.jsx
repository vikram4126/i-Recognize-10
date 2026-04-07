import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import bgImage from '../assets/bg-3-only.jpg'

const BePart = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Background image moves slower than scroll — classic parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  // Section itself subtly rises as user scrolls into it (depth/emerge feel)
  const sectionY = useTransform(scrollYProgress, [0, 0.4], ['60px', '0px'])

  return (
    <motion.section
      ref={sectionRef}
      id="bepart"
      style={{
        y: sectionY,
        position: 'relative',
        zIndex: 5,
        // Negative margin pulls BePart behind Winner's bottom edge
        marginTop: '-60px',
        borderRadius: '32px 32px 0 0',
        overflow: 'hidden',
        minHeight: '300px',
      }}
    >
      {/* ── Parallax Background ── */}
      <motion.div
        aria-hidden="true"
        style={{
          y: bgY,
          position: 'absolute',
          inset: 0,
          top: '-15%',
          bottom: '-15%',
          pointerEvents: 'none',
        }}
      >
        <img
          src={bgImage}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </motion.div>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/60" />
      {/* Vignette sides */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center py-24">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C233C]/5 backdrop-blur-md border border-[#0C233C]/10 mb-6 transition-all"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E49E2] animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0C233C]/80">
            Join the Movement
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="gsap-reveal text-4xl md:text-5xl font-black text-[#0C233C] tracking-tighter leading-tight mb-8 max-w-2xl"
        >
          Be Part of the Platform
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="gsap-reveal space-y-4 max-w-lg"
        >
          <p className="text-sm md:text-base text-[#0C233C]/55 font-medium leading-relaxed">
            Whether you're learning, solving, creating, or improving — i-Recognize is your platform to be seen and heard.
          </p>
          <p className="text-base text-[#0C233C]/75 font-semibold leading-relaxed">
            Connect with your{' '}
            <a
              href="#support"
              className="text-[#1E49E2] font-black underline underline-offset-2 decoration-[#1E49E2]/40 hover:decoration-[#1E49E2] transition-all duration-200"
            >
              Team SPOC
            </a>{' '}
            and take part in a shared journey of showcasing, learning, and recognition.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default BePart
