import React from 'react'
import { motion } from 'framer-motion'
import siteData from '../data/site-content.json'

const SectionIntro = () => {
  const { intro } = siteData

  return (
    <section id="inside" className="relative py-20 bg-white overflow-hidden text-center">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Standard Header Stack */}
        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
          >
            Corporate Excellence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gsap-reveal text-4xl md:text-5xl font-black text-[#0C233C] tracking-tighter mb-6"
          >
            About the platform
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl font-medium text-[#0C233C]/80 leading-relaxed tracking-tight mb-8">
              "i-Recognize" is the flagship KPMG platform where collaboration takes flight. We honor teams that move with the precision and speed of a hummingbird, creating global impact.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm font-medium text-[#0C233C]/60 leading-relaxed">
              <p className="flex-1">
                Our approach ensures every story of success is documented with corporate rigor and artistic flair, reflecting the core values of KPMG.
              </p>
              <p className="flex-1">
                Through structured showcases reviewed by a jury, impactful work is recognized across defined categories as part of the platform experience.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default SectionIntro
