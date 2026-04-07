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
    className="group relative flex items-center gap-5 p-5 rounded-[24px] bg-[#0C233C] border border-white/5 shadow-2xl hover:bg-[#1E49E2]/20 transition-all duration-300"
  >
    {/* Portrait - Large Circular */}
    <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-white/10 shadow-lg group-hover:scale-105 transition-transform duration-500">
      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
    </div>
    
    {/* Identity */}
    <div className="flex flex-col min-w-0">
      <p className="text-[15px] md:text-[17px] font-black text-white tracking-tight leading-tight uppercase mb-1 truncate">
        {member.name}
      </p>
      <p className="text-[11px] font-medium text-white/50 tracking-wide leading-tight">
        {member.role || member.dpt || member.designation}
      </p>
    </div>
  </motion.div>
)

const JurySupport = () => {
  const { support } = siteData

  return (
    <section id="support" className="relative py-20 bg-[#F5F7FA] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Standard Header Stack */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
          >
            People Behind the Process
          </motion.p>
          <motion.h2
            className="gsap-reveal text-4xl md:text-5xl font-black text-[#0C233C] tracking-tighter mb-6"
          >
            Jury & SPOC Support
          </motion.h2>
          <div className="w-12 h-1 bg-[#1E49E2]/20 rounded-full" />
        </div>

        {/* Support Grid (2 Sections: Jury & SPOC) */}
        <div className="space-y-20">
          
          {/* Section 1: Jury */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-[#1E49E2] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#1E49E2]/20">
                <Gavel size={18} />
              </div>
              <h3 className="text-xl font-black text-[#0C233C] tracking-tight uppercase">
                {support.juryTitle}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {support.juryMembers.map((member, idx) => (
                <MemberCard key={idx} member={member} idx={idx} />
              ))}
            </div>
          </motion.div>

          {/* Section 2: SPOC support */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-[#FD349C] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#FD349C]/20">
                <Users size={18} />
              </div>
              <h3 className="text-xl font-black text-[#0C233C] tracking-tight uppercase">
                {support.spocTitle}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
