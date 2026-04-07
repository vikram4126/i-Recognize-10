import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy } from 'lucide-react'
import siteData from '../data/site-content.json'

const WinnerCard = ({ winner, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05 }}
      className="group relative rounded-2xl overflow-hidden bg-white shadow-lg aspect-square"
    >
      <img src={winner.img} alt={winner.name} className="absolute inset-0 w-full h-full object-cover filter grayscale" />
      
      {/* Hover Slide-up Panel (matching video) */}
      <div className="absolute inset-0 bg-[#0C233C]/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-center p-6 text-left">
        <p className="text-[#1E49E2] text-[10px] font-bold uppercase tracking-widest mb-2">{winner.award}</p>
        <h3 className="text-white text-xl font-semibold tracking-tight mb-1">{winner.name}</h3>
        <p className="text-white/40 text-[11px] font-normal uppercase tracking-widest">{winner.team}</p>
      </div>

      {/* Trophy Badge (always visible) */}
      <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-[#1E49E2] flex items-center justify-center text-white shadow-xl">
          <Trophy size={14} />
        </div>
      </div>
    </motion.div>
  )
}

const Winners = () => {
  const { winners } = siteData
  const [activeYear, setActiveYear] = useState(winners.years[0])
  const currentWinners = winners.byYear[activeYear] || []

  return (
    <section id="winners" className="relative py-20 bg-white overflow-hidden text-center">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Standard Header Stack */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
          >
            {winners.badge}
          </motion.p>
          <motion.h2 className="gsap-reveal text-4xl md:text-5xl font-semibold text-[#0C233C] tracking-tighter mb-6">
            {winners.title}
          </motion.h2>

          {/* Year Tabs (matching video) */}
          <div className="flex items-center gap-2 bg-[#F5F7FA] p-1 rounded-xl border border-[#0C233C]/5">
            {winners.years.map(year => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                  activeYear === year 
                  ? 'bg-[#1E49E2] text-white shadow-lg' 
                  : 'text-[#0C233C]/40 hover:text-[#0C233C]'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Winners Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {currentWinners.map((winner, idx) => (
              <WinnerCard key={idx} winner={winner} idx={idx} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Winners
