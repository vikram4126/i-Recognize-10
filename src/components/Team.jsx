import React from 'react'
import { motion } from 'framer-motion'
import siteData from '../data/site-content.json'

const Team = () => {
  const { team } = siteData

  return (
    <section id="team" className="relative py-20 bg-white overflow-hidden text-center">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Standard Header Stack */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
          >
            People Power
          </motion.p>
          <motion.h2
            className="gsap-reveal text-4xl md:text-5xl font-black text-[#0C233C] tracking-tighter mb-6"
          >
            Core Team Members
          </motion.h2>
          <p className="max-w-2xl mx-auto text-[#0C233C]/60 text-sm md:text-base font-medium leading-relaxed">
            The people driving the rhythm and momentum of i-Recognize
          </p>
        </div>

        {/* Members Grid (6+2 centered layout) */}
        <div className="max-w-6xl mx-auto">
          {/* Row 1: 6 people */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12 mb-16">
            {team.members.slice(0, 6).map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col items-center"
              >
                <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border border-[#0C233C]/5 shadow-sm group-hover:scale-105 transition-transform">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover filter grayscale" />
                </div>
                <h3 className="text-[15px] font-black text-[#0C233C] leading-none mb-2">{member.name}</h3>
                <p className="text-[10px] font-bold text-[#1E49E2] uppercase tracking-widest">{member.role || member.dpt}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 2 people centered */}
          <div className="flex justify-center gap-12 lg:gap-24">
            {team.members.slice(6, 8).map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="group flex flex-col items-center"
              >
                <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border border-[#0C233C]/5 shadow-sm group-hover:scale-105 transition-transform">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover filter grayscale" />
                </div>
                <h3 className="text-[15px] font-black text-[#0C233C] leading-none mb-2">{member.name}</h3>
                <p className="text-[10px] font-bold text-[#1E49E2] uppercase tracking-widest">{member.role || member.dpt}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Team
