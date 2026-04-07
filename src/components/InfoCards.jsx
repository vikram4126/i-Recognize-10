import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import siteData from '../data/site-content.json'

const InfoCards = () => {
  const { infoCards } = siteData

  return (
    <div className="relative z-10 w-full mt-12 overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {infoCards.map((card, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ 
              duration: 0.8, 
              delay: idx * 0.1,
              ease: [0.22, 1, 0.36, 1] 
            }}
            style={{ willChange: 'transform, opacity' }}
            className="group flex flex-col justify-between h-full p-14 bg-white/10 backdrop-blur-3xl border border-white/10 rounded-t-[48px] rounded-b-none transition-all hover:bg-white/15 h-full cursor-pointer shadow-2xl"
            onClick={() => {
              const hrefs = ['#inside', '#journey', '#previous'];
              window.location.hash = hrefs[idx];
            }}
          >
            <div>
              <h3 className="text-3xl font-black text-white mb-6 leading-tight group-hover:text-[#ACEAFF] transition-colors">
                {card.title}
              </h3>
              <p className="text-white/60 leading-relaxed mb-12 text-lg font-medium">
                {card.text}
              </p>
            </div>

            <button className="flex items-center gap-2 text-[#ACEAFF] font-black text-lg group transition-all uppercase tracking-widest hover:brightness-125">
              {card.cta}
              <ArrowRight size={22} className="transition-transform group-hover:translate-x-2" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default InfoCards
