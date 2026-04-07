import React from 'react'
import { motion } from 'framer-motion'
import { Gavel, Users } from 'lucide-react'
import siteData from '../data/site-content.json'

const MemberCard = ({ member, accentColor }) => (
  <motion.div
    whileHover={{ x: 8 }}
    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    className="flex items-center gap-5 group cursor-default"
  >
    {/* Vertical accent bar */}
    <div
      className="w-[2px] h-10 flex-shrink-0 rounded-full group-hover:h-14 transition-all duration-300"
      style={{ backgroundColor: accentColor === 'blue' ? '#1E49E2' : '#FD349C' }}
    />
    {/* Portrait */}
    <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden border border-[var(--border-color)] transition-all duration-500">
      <img src={member.img} alt={member.name} className="w-full h-full object-cover filter grayscale dark:grayscale dark:group-hover:grayscale-0 group-hover:grayscale-0 group-hover:scale-110" />
    </div>
    {/* Identity */}
    <div className="flex flex-col min-w-0">
      <p className="text-[15px] font-black text-[#0C233C] tracking-tight leading-none mb-1 truncate transition-colors">
        {member.name}
      </p>
      <p
        className="text-[10px] font-bold uppercase tracking-widest leading-none transition-colors"
        style={{ color: accentColor === 'blue' ? '#ACEAFF' : 'rgba(253,52,156,0.65)' }}
      >
        {member.role || member.dpt}
      </p>
    </div>
  </motion.div>
)

const JurySupport = () => {
  const { support } = siteData

  return (
    <section id="support" className="relative py-32 bg-white overflow-hidden transition-colors duration-400">
      {/* Depth — purely internal */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--primary-accent)]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#FD349C]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
          >
            People Behind the Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.55 }}
            className="gsap-reveal text-4xl md:text-5xl font-black tracking-tighter text-[#0C233C]"
          >
            Jury &amp; SPOC Support
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
          {/* Jury */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-[#1E49E2]/12 rounded-xl flex items-center justify-center text-[#1E49E2] border border-[#1E49E2]/20 shadow-[0_0_24px_rgba(30,73,226,0.15)]">
                <Gavel size={20} />
              </div>
              <h3 className="text-xl font-black text-[#0C233C] tracking-tight">
                {support.juryTitle}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-16 lg:gap-y-12">
              {support.juryMembers.map((member, idx) => (
                <MemberCard key={idx} member={member} accentColor="blue" />
              ))}
            </div>
          </motion.div>

          {/* SPOC */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-[#FD349C]/10 rounded-xl flex items-center justify-center text-[#FD349C] border border-[#FD349C]/20 shadow-[0_0_24px_rgba(253,52,156,0.15)]">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-black text-[#0C233C] tracking-tight">
                {support.spocTitle}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-16 lg:gap-y-12">
              {support.spocMembers.map((spoc, idx) => (
                <MemberCard key={idx} member={spoc} accentColor="pink" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default JurySupport
