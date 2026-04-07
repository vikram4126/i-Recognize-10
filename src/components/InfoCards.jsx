import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import siteData from '../data/site-content.json'

const InfoCards = () => {
  const { infoCards } = siteData

  return (
    <div className="relative z-10 w-full overflow-visible">
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
            className="group flex flex-col justify-between h-full p-8 bg-white/10 backdrop-blur-3xl border border-white/10 rounded-t-[24px] rounded-b-none transition-all hover:bg-white/15 h-full cursor-pointer shadow-2xl"
            onClick={() => {
              if (card.href) {
                window.location.hash = card.href;
              }
            }}
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 leading-tight group-hover:text-[#ACEAFF] transition-colors uppercase tracking-tight">
                {card.title}
              </h3>
              <p className="text-white/60 leading-relaxed mb-8 text-sm font-normal">
                {card.text}
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#ACEAFF] font-medium text-xs tracking-widest group/btn cursor-pointer">
              <span>{card.cta}</span>
              <div className="w-8 h-[1px] bg-[#ACEAFF]/30 group-hover/btn:w-12 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default InfoCards
