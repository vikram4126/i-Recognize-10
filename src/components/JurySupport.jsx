import React from 'react'
import { motion } from 'framer-motion'
import { Gavel, Users } from 'lucide-react'
import siteData from '../data/site-content.json'

const MemberCard = ({ member, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.05 }}
    className="group relative flex items-center gap-5 p-4 rounded-xl bg-[#0C233C] border border-white/5 shadow-2xl hover:bg-[#ACEAFF] hover:border-[#0C233C]/20 transition-all duration-300"
  >
    {/* Portrait - Large Circular */}
    <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-white/10 shadow-lg group-hover:scale-105 group-hover:border-[#0C233C]/20 transition-all duration-500">
      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
    </div>
    
    {/* Identity */}
    <div className="flex flex-col min-w-0 px-2">
      <p className="text-[16px] md:text-[18px] font-black text-white tracking-tight leading-tight uppercase mb-1 group-hover:text-[#0C233C] transition-colors duration-300">
        {member.name}
      </p>
      <p className="text-[11px] font-medium text-white/40 tracking-wide leading-tight group-hover:text-[#0C233C]/70 transition-colors duration-300">
        {member.role || member.dpt || member.designation}
      </p>
    </div>
  </motion.div>
)

const JurySupport = () => {
  const { support } = siteData

  return (
    <section id="support" className="relative py-20 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Standard Header Stack */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
          >
            {support.badge}
          </motion.p>
          <motion.h2
            className="gsap-reveal text-4xl md:text-5xl font-black text-[#0C233C] tracking-tighter mb-6"
          >
            {support.title}
          </motion.h2>
        </div>

        {/* Support Grid (Side-by-Side: Jury & SPOC) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Section 1: Jury */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-[#1E49E2] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#1E49E2]/20">
                <Gavel size={18} />
              </div>
              <h3 className="text-lg font-black text-[#0C233C] tracking-tight uppercase">
                {support.juryTitle}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {support.juryMembers.map((member, idx) => (
                <MemberCard key={idx} member={member} idx={idx} />
              ))}
            </div>
          </motion.div>

          {/* Section 2: SPOC support */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-[#FD349C] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#FD349C]/20">
                <Users size={18} />
              </div>
              <h3 className="text-lg font-black text-[#0C233C] tracking-tight uppercase">
                {support.spocTitle}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {support.spocMembers.map((member, idx) => (
                <MemberCard key={idx} member={member} idx={idx} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default JurySupport
