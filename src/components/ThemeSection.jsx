import React from 'react'
import { motion } from 'framer-motion'
import siteData from '../data/site-content.json'
import hummingBird from '../assets/humming-bird.svg'

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
              <div className="absolute inset-4 border border-[#1E49E2]/10 rounded-full animate-reverse-slow" />
              
              <img 
                src={hummingBird} 
                alt="Theme: The Hummingbird" 
                className="w-4/5 h-4/5 object-contain relative z-10 drop-shadow-2xl"
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
              The Theme 2026
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-[#0C233C] mb-8 tracking-tighter leading-tight"
            >
              The Hummingbird: Resilience & Agility
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-[#0C233C]/70 font-medium leading-relaxed mb-10"
            >
              <p>
                In 2026, we celebrate the spirit of the Hummingbird. Small in stature but immense in impact, it represents the agility, speed, and tireless energy that defines our collective journey.
              </p>
              <p>
                Just as the hummingbird finds the sweetest nectar through determination, we seek out the best in our teams, acknowledging the small efforts that lead to grand achievements.
              </p>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#00338D] text-white rounded-full font-black text-[11px] uppercase tracking-widest shadow-xl hover:bg-[#1E49E2] transition-colors"
            >
              Learn More About Theme
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ThemeSection
