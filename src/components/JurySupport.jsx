import React from 'react'
import { motion } from 'framer-motion'
import siteData from '../data/site-content.json'

const MemberCard = ({ member, idx, isSmall = false }) => (
  <motion.div
    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className={`group relative flex items-center transition-all duration-500 ${
      isSmall 
        ? 'gap-4 p-5 rounded-3xl bg-[#F5F7FA] border border-[#0C233C]/5 hover:bg-[#F5F7FA]/80 max-w-lg lg:scale-[0.9] origin-left' 
        : 'gap-8 p-8 rounded-[32px] bg-[#0C233C] border border-white/5 shadow-2xl hover:bg-[#0C233C]/80'
    }`}
  >
    {/* Profile Image with Dynamic Halo Glow */}
    <div className="relative flex-shrink-0">
      <div 
        className={`${isSmall ? 'w-16 h-16 md:w-20 md:h-20' : 'w-24 h-24 md:w-32 md:h-32'} rounded-full overflow-hidden relative z-10 border-2 ${isSmall ? 'border-[#0C233C]/10' : 'border-white/10'}`}
        style={{ boxShadow: `0 0 ${isSmall ? '10px' : '30px'} ${member.color}44` }}
      >
        <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
      </div>
      
      {/* The Animated Halo Ring */}
      <div 
        className="absolute inset-[-4px] rounded-full opacity-30 blur-sm group-hover:opacity-80 transition-opacity duration-700" 
        style={{ 
          border: `2px solid ${member.color}`,
          boxShadow: `0 0 10px ${member.color}, inset 0 0 10px ${member.color}`
        }}
      />
    </div>
    
    {/* Content Area */}
    <div className="flex flex-col min-w-0">
      <h3 className={`${isSmall ? 'text-lg md:text-xl text-[#0C233C]' : 'text-2xl md:text-3xl text-white'} font-bold tracking-tight mb-1`}>
        {member.name}
      </h3>
      <p 
        className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-2"
        style={{ color: member.color }}
      >
        {member.role}
      </p>
      <p className={`${isSmall ? 'text-xs text-[#0C233C]/60' : 'text-sm md:text-[15px] text-white/50'} font-light italic leading-relaxed max-w-md`}>
        "{member.quote}"
      </p>
    </div>
  </motion.div>
)

const JurySupport = () => {
  const { support } = siteData

  return (
    <section id="support" className="relative py-32 bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#1E49E2]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#ACEAFF]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 gap-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#1E49E2]"
          >
            {support.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0C233C] tracking-tighter"
          >
            {support.title}
          </motion.h2>
        </div>

        {/* Categories Container */}
        <div className="flex flex-col gap-24">
          
          {/* Jury Members - Primary Category (Solid Dark Cards) */}
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#0C233C]/10" />
              <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0C233C]/60">{support.juryTitle}</h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {support.juryMembers.map((member, idx) => (
                <MemberCard key={idx} member={member} idx={idx} />
              ))}
            </div>
          </div>

          {/* SPOC Support - Sub Category (Light Toned Cards) */}
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4 lg:justify-end">
              <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0C233C]/40">{support.spocTitle}</h4>
              <div className="h-[1px] w-12 bg-[#0C233C]/10" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              {support.spocMembers.map((member, idx) => (
                <div key={idx} className="flex lg:justify-end">
                  <MemberCard member={member} idx={idx} isSmall />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default JurySupport
