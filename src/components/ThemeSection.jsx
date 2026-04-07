import React from 'react'
import { motion } from 'framer-motion'
import siteData from '../data/site-content.json'

const ThemeSection = () => {
  const { themeSection } = siteData

  return (
    <section id="theme" className="relative py-32 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square relative flex items-center justify-center">
              {/* Decorative rings */}
              <div className="absolute inset-0 border border-[#0C233C]/5 rounded-full animate-spin-slow" />
              <div className="absolute inset-2 border border-[#1E49E2]/10 rounded-full animate-reverse-slow" />
              
              <img 
                src={themeSection.img} 
                alt={themeSection.title} 
                className="w-4/5 h-4/5 object-contain relative z-10 drop-shadow-2xl brightness-100"
              />
            </div>
            {/* Soft glow */}
            <div className="absolute inset-0 bg-radial-gradient(circle, #1E49E2/5 0%, transparent 70%) pointer-events-none" />
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
            >
              {themeSection.badge}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-[#0C233C] mb-8 tracking-tighter leading-tight"
            >
              {themeSection.title}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-[#0C233C]/70 font-medium leading-relaxed mb-10"
            >
              {themeSection.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </motion.div>
            
            <button
              className="px-8 py-4 bg-[#0C233C] text-white rounded-full font-black text-[11px] uppercase tracking-widest shadow-xl hover:bg-[#1E49E2] transition-all hover:-translate-y-1 active:scale-95"
            >
              {themeSection.cta}
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ThemeSection
