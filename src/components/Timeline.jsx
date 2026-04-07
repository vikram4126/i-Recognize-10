import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import siteData from '../data/site-content.json'

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(null)
  const { journey } = siteData

  return (
    <section id="journey" className="relative py-32 bg-[#F5F7FA] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,var(--primary-accent),transparent)] opacity-4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
          >
            {journey.badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.55 }}
            className="gsap-reveal text-4xl md:text-5xl font-black tracking-tighter text-[#0C233C]"
          >
            {journey.title}
          </motion.h2>
        </div>

        {/* Roadmap */}
        <div className="relative pt-16">
          {/* Connecting line */}
          <div className="absolute top-[104px] left-[calc(100%/14)] right-[calc(100%/14)] h-[1px] bg-[#0C233C]/10 hidden lg:block" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-16 lg:gap-0 relative z-10">
            {journey.steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center group relative px-2"
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                onTouchStart={() => setActiveStep(idx)}
              >
                {/* Step circle */}
                <div className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-20
                  ${activeStep === idx
                    ? 'bg-[#1E49E2] text-white scale-110 shadow-lg shadow-[#1E49E2]/25'
                    : 'bg-white text-[#0C233C] shadow-sm border border-[#0C233C]/10 hover:border-[#1E49E2]/20'
                  }`}
                >
                  <span className="text-xl font-black tracking-tighter">0{idx + 1}</span>
                </div>

                {/* Label */}
                <div className="mt-8 text-center px-2">
                  <h4 className={`text-[13px] font-black uppercase tracking-tight leading-tight transition-colors duration-300 ${activeStep === idx ? 'text-[#1E49E2]' : 'text-[#0C233C]/65'}`}>
                    {step.title}
                  </h4>
                </div>

                {/* Tooltip */}
                <AnimatePresence>
                  {activeStep === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                      className="absolute bottom-full mb-8 w-56 p-4 bg-white border border-[#0C233C]/10 rounded-2xl shadow-xl z-50 pointer-events-none"
                    >
                      <h5 className="text-[#0C233C] font-black text-[10px] uppercase tracking-wider mb-1.5">
                        Step 0{idx + 1}
                      </h5>
                      <p className="text-[#0C233C]/55 text-[12px] font-medium leading-snug">
                        {step.content}
                      </p>
                      {/* Arrow */}
                      <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-[#0C233C]/10 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
