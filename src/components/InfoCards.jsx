import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import siteData from '../data/site-content.json'

const InfoCards = () => {
  const { infoCards } = siteData

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {infoCards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
          whileHover={{ y: -5 }}
          className="group p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-[#ACEAFF]/50 transition-all hover:shadow-[0_0_40px_rgba(172,234,255,0.1)] flex flex-col justify-between h-full"
        >
          <div>
            <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-[#ACEAFF] transition-colors">
              {card.title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-medium">
              {card.text}
            </p>
          </div>
          
          <a 
            href={card.href || "#"} 
            className="mt-8 flex items-center gap-2 text-[#ACEAFF] text-[10px] font-black uppercase tracking-[0.2em] group/btn"
          >
            {card.cta}
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      ))}
    </div>
  )
}

export default InfoCards
