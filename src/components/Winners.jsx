import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy } from 'lucide-react'
import siteData from '../data/site-content.json'

const WinnerCard = ({ winner, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: idx * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-2xl overflow-hidden cursor-default bg-white/5 shadow-md transition-all duration-400"
      style={{ aspectRatio: '1/1' }}
    >
      {/* Photo */}
      <img
        src={winner.img}
        alt={winner.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-107 filter grayscale"
        loading="lazy"
      />

      {/* Always-visible gradient — subtle at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C233C]/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity" />

      {/* Slide-up info panel */}
      <div
        className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] bg-[#0C233C]/95 backdrop-blur-md px-5 pt-8 pb-5 border-t border-white/10"
      >
        {/* Award label */}
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1E49E2] mb-2 leading-none">
          {winner.award}
        </p>

        {/* Winner name */}
        <h3 className="text-lg font-black text-white tracking-tight leading-tight mb-1">
          {winner.name}
        </h3>

        {/* Team name */}
        <p className="text-[11px] font-semibold text-white/50 uppercase tracking-widest">
          {winner.team}
        </p>
      </div>

      {/* Trophy badge — bottom-left, always visible for legibility */}
      <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
        <div className="flex items-end gap-2">
          <div className="w-7 h-7 rounded-full bg-[#1E49E2]/20 backdrop-blur-md border border-[#1E49E2]/30 flex items-center justify-center">
            <Trophy size={13} className="text-[#1E49E2]" strokeWidth={2.5} />
          </div>
          <span className="text-[11px] font-black text-white uppercase tracking-widest leading-none pb-0.5 drop-shadow-lg opacity-80">
            Winner
          </span>
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
    <section id="winners" className="relative py-32 bg-white overflow-hidden z-10" style={{ position: 'relative' }}>
      {/* Subtle bg depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E49E2]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7213EA]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
          >
            Hall of Fame
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.55 }}
            className="gsap-reveal text-4xl md:text-5xl font-black tracking-tighter text-[#0C233C]"
          >
            {winners.title}
          </motion.h2>

          {/* Year tabs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 bg-[#F5F7FA] rounded-xl p-1 shadow-sm border border-[#0C233C]/10 flex-shrink-0"
          >
            {winners.years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-5 py-2 rounded-lg text-[12px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${
                  activeYear === year
                    ? 'bg-[#1E49E2] text-white shadow-md'
                    : 'text-[#0C233C]/50 hover:text-[#0C233C] hover:bg-[#1E49E2]/10'
                }`}
              >
                {year}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ── Winner Cards Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {currentWinners.map((winner, idx) => (
              <WinnerCard key={`${activeYear}-${idx}`} winner={winner} idx={idx} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Winners
