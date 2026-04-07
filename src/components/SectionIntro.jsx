import React from 'react'
import { motion } from 'framer-motion'
import siteData from '../data/site-content.json'

const SectionIntro = () => {
  const { sectionIntro, themeSection } = siteData

  return (
    <section id="inside" className="relative py-32 bg-[#F5F7FA] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Text Content */}
          <div className="w-full lg:w-3/5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
            >
              {sectionIntro.badge}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0C233C] mb-12 tracking-tighter leading-[1.1]"
            >
              {sectionIntro.title}
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl font-bold text-[#0C233C] leading-relaxed border-l-4 border-[#ACEAFF] pl-8 italic">
                "{sectionIntro.quote}"
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#0C233C]/70 font-medium leading-relaxed">
                {sectionIntro.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 relative"
          >
            <div className="aspect-square bg-white rounded-[40px] shadow-2xl flex items-center justify-center p-12 border border-[#0C233C]/5 group hover:rotate-2 transition-transform duration-700">
               <img 
                 src={themeSection.img} 
                 alt={themeSection.title} 
                 className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
               />
               
               {/* Decorative dots */}
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-radial-gradient(circle, #1E49E2/10 0%, transparent 70%)" />
               <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-radial-gradient(circle, #ACEAFF/20 0%, transparent 70%)" />
            </div>
            
            {/* Year Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#00338D] text-[#ACEAFF] px-8 py-4 rounded-2xl shadow-xl">
               <span className="text-2xl font-black tracking-tighter">2026</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default SectionIntro
