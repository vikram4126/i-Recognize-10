import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import siteData from '../data/site-content.json'

const Step = ({ step, idx }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="group relative flex flex-col items-center flex-1 min-w-[200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip Popup */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 z-30 w-48 p-3 bg-[#0C233C] text-white rounded-2xl shadow-2xl text-center pointer-events-none border border-white/10"
          >
            <p className="text-[12px] font-normal leading-relaxed opacity-90">{step.desc}</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#0C233C]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Connector Bar (only for middle items) */}
      {idx < 6 && (
        <div className="hidden lg:block absolute top-[28px] left-[60%] w-full h-[2px] bg-[#0C233C]/5 group-hover:bg-[#1E49E2]/20 transition-colors z-0" />
      )}

      {/* Step Number Circle */}
      <div className="w-14 h-14 rounded-full bg-white border-2 border-[#0C233C]/10 flex flex-col items-center justify-center text-[#0C233C] mb-8 group-hover:bg-[#1E49E2] group-hover:border-[#1E49E2] group-hover:text-white transition-all shadow-sm z-10 cursor-pointer">
        <span className="text-[10px] font-bold uppercase leading-none mb-0.5">0{step.id}</span>
      </div>

      {/* Info */}
      <div className="text-center px-4">
        <h3 className="text-[15px] font-semibold text-[#0C233C] mb-2 tracking-tight uppercase leading-none">{step.title}</h3>
        <p className="text-[11px] font-bold text-[#1E49E2] uppercase tracking-[0.2em]">{step.day}</p>
      </div>
    </motion.div>
  )
}

const Timeline = () => {
  const { journey } = siteData
  const timeline = journey.steps

  return (
    <section id="journey" className="relative py-20 bg-[#F5F7FA] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Standard Header Stack */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
          >
            {journey.badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-[#0C233C] tracking-tighter mb-6"
          >
            {journey.title}
          </motion.h2>
        </div>

        {/* Steps Flex Container */}
        <div className="flex flex-wrap lg:flex-nowrap items-start gap-y-16 justify-center max-w-6xl mx-auto">
          {timeline.map((step, idx) => (
            <Step key={step.id} step={step} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Timeline
