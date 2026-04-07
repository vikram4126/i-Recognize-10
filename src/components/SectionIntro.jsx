import React from 'react'
import { motion } from 'framer-motion'
import siteData from '../data/site-content.json'

const SectionIntro = () => {
  const { sectionIntro } = siteData

  return (
    <section id="inside" className="relative z-10 py-48 bg-white overflow-visible">
      {/* Subtle brand glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,var(--primary-accent),transparent)] opacity-[0.03] pointer-events-none" />
      <div className="container max-w-7xl mx-auto px-6 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 md:gap-x-24 md:gap-y-16 items-start">

          {/* Left Column: Heading */}
          <div className="flex flex-col pt-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-[11px] uppercase font-black tracking-[0.3em] text-[#00338D]">
                {sectionIntro.badge}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="gsap-reveal text-4xl md:text-5xl font-black text-[#0C233C] mb-8 leading-[1.1] tracking-tighter"
            >
              {sectionIntro.title}
            </motion.h2>

            {/* Decorative Blue Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="gsap-reveal h-1 bg-[var(--primary-accent)] rounded-full"
            />
          </div>

          {/* Right Column: Quotes & Text */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="gsap-reveal text-xl md:text-2xl italic text-[#0C233C]/80 leading-snug font-light">
                "{sectionIntro.quote}"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="gsap-reveal space-y-6 text-base text-[#0C233C]/60 font-medium leading-relaxed"
            >
              {sectionIntro.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SectionIntro
