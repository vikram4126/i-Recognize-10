import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import siteData from '../data/site-content.json'

const PreviousEditions = () => {
  const [selectedEdition, setSelectedEdition] = useState(null)
  const { archival } = siteData

  return (
    <section id="previous" className="relative py-20 bg-[#F5F7FA] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Standard Header Stack */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
          >
            {archival.badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gsap-reveal text-4xl md:text-5xl font-semibold text-[#0C233C] tracking-tighter mb-6"
          >
            {archival.title}
          </motion.h2>
        </div>

        {/* Year Items */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {archival.editions.map((edition, idx) => (
            <motion.div
              key={idx}
              onClick={() => setSelectedEdition(edition)}
              className="group cursor-pointer flex flex-col items-center"
            >
              <h3 className="text-6xl md:text-8xl font-bold text-[#0C233C]/5 group-hover:text-[#1E49E2] transition-all duration-500 scale-90 group-hover:scale-100">
                {edition.year}
              </h3>
              <p className="mt-4 text-[#1E49E2] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                {edition.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEdition && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0C233C]/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2"
            >
              <button 
                onClick={() => setSelectedEdition(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-[#1E49E2] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <X size={20} />
              </button>
              <div className="h-64 md:h-full overflow-hidden">
                <img src={selectedEdition.img} alt={selectedEdition.year} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center text-left">
                <span className="text-[#1E49E2] text-[10px] font-bold uppercase tracking-widest mb-4 italic">Edition Archive</span>
                <h2 className="text-4xl font-semibold text-[#0C233C] mb-2 tracking-tight">{selectedEdition.year}</h2>
                <p className="text-[#1E49E2] font-bold text-lg mb-6">{selectedEdition.title}</p>
                <p className="text-[#0C233C]/60 text-sm font-normal leading-relaxed mb-10">
                  Relive the moments of brilliance that have defined our legacy over the years through the stories of excellence.
                </p>
                <a 
                  href={selectedEdition.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#1E49E2] text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-[#0C233C] shadow-xl transition-all"
                >
                  {archival.cta} <ExternalLink size={14} />
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
