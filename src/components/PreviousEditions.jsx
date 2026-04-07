import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import siteData from '../data/site-content.json'

import p2023 from '../assets/previous-2023.JPG'
import p2024 from '../assets/previous-2024.JPG'
import p2025 from '../assets/previous-2025.JPG'

const assetMap = {
  "previous-2023.JPG": p2023,
  "previous-2024.JPG": p2024,
  "previous-2025.JPG": p2025,
}

const PreviousEditions = () => {
  const [selectedEdition, setSelectedEdition] = useState(null)
  const { archival } = siteData

  return (
    <section id="previous" className="relative py-20 bg-[#F5F7FA] overflow-hidden">
      {/* Internal glow only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[var(--primary-accent)]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
          >
            {archival.badge || 'Archival Highlights'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.55 }}
            className="text-4xl md:text-5xl font-black tracking-tighter text-[#0C233C]"
          >
            {archival.title}
          </motion.h2>
        </div>

        {/* Year items */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 lg:gap-28 mb-12">
          {archival.editions.map((edition, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              onClick={() => setSelectedEdition(edition)}
              className="group cursor-pointer flex flex-col items-center"
            >
              <h3 className="text-6xl md:text-8xl font-black text-[#0C233C]/10 group-hover:text-[#1E49E2] transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_28px_#1E49E2]">
                {edition.year}
              </h3>
              <p className="mt-3 text-[#1E49E2]/80 text-[10px] font-black uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                {edition.title}
              </p>
            </motion.div>
          ))}
        </div>


      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEdition && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEdition(null)}
              className="absolute inset-0 bg-[#0C233C]/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-4xl bg-white border border-[#0C233C]/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedEdition(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 bg-[#00338D] text-white rounded-full flex items-center justify-center hover:bg-[#1E49E2]/20 transition-all"
              >
                <X size={18} />
              </button>
              <div className="w-full md:w-1/2 h-60 md:h-auto overflow-hidden">
                <img src={assetMap[selectedEdition.img]} alt={selectedEdition.year} className="w-full h-full object-cover filter grayscale-0 dark:grayscale dark:hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                <span className="text-[#1E49E2]/80 text-[10px] font-black tracking-[0.25em] uppercase mb-4">Edition Archive</span>
                <h2 className="text-3xl md:text-4xl font-black text-[#0C233C] mb-2 tracking-tight">{selectedEdition.year}</h2>
                <p className="text-[#1E49E2] font-black text-lg mb-5 italic">{selectedEdition.title}</p>
                <p className="text-[#0C233C]/50 text-sm font-medium leading-relaxed mb-8">
                  Explore the highlights, winners, and stories from the {selectedEdition.year} {selectedEdition.title} that shaped our journey of excellence.
                </p>
                <a
                  href={selectedEdition.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1E49E2] text-white rounded-full font-black text-[11px] uppercase tracking-widest hover:shadow-lg hover:-translate-y-0.5 transition-all w-fit"
                >
                  Visit Gallery <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PreviousEditions
