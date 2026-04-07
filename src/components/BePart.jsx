import React from 'react'
import { motion } from 'framer-motion'
import bgImage from '../assets/bg-3-only.jpg'

const BePart = () => {
  return (
    <section id="bepart" className="relative py-20 bg-[#0C233C] overflow-hidden text-center">
      {/* Background with parallax-like feel (from video) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C233C] via-transparent to-[#0C233C] opacity-90" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Standard Header Stack */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#ACEAFF]"
          >
            Join the Movement
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gsap-reveal text-4xl md:text-5xl font-black text-white tracking-tighter mb-6"
          >
            Be Part of the Platform
          </motion.h2>
          <div className="w-12 h-1 bg-[#ACEAFF]/20 rounded-full" />
        </div>

        {/* Description */}
        <motion.div
           initial={{ opacity: 0, y: 16 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="max-w-2xl mx-auto text-white/60 font-medium text-sm md:text-base leading-relaxed"
        >
          <p className="mb-4">
            Whether you're learning, solving, creating, or improving — i-Recognize is your platform to be seen and heard.
          </p>
          <p className="text-white/90">
             Connect with your <a href="#support" className="text-[#1E49E2] border-b border-[#1E49E2]/30 hover:border-[#1E49E2] transition-all font-black">Team SPOC</a> and take part in a shared journey of showcasing, learning, and recognition.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default BePart
