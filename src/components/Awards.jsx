import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Zap, FileText, Move, Sparkles, TrendingUp, BookOpen, Users } from 'lucide-react'
import siteData from '../data/site-content.json'

const iconMap = {
  Palette, Zap, FileText, Move, Sparkles, TrendingUp, BookOpen, Users
}

const Awards = () => {
  const { awards } = siteData

  return (
    <section id="awards" className="relative py-32 bg-white overflow-hidden">
      {/* Decorative gradient for depth */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7213EA]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00B8F5]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#00338D]/80"
          >
            Categories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gsap-reveal text-4xl md:text-5xl font-black text-[#0C233C] mb-6 tracking-tighter"
          >
            {awards.title}
          </motion.h2>
          <p className="gsap-reveal text-base text-[#0C233C]/50 max-w-xl mx-auto font-medium leading-relaxed">
            {awards.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.categories.map((award, idx) => {
            const Icon = iconMap[award.icon] || Sparkles
            // Extract hex from 'text-[#HEX]'
            const hexColor = award.color.match(/#([A-Fa-f0-9]{6})/)?.[1] || 'ACEAFF'
            const textColorClass = `text-[#${hexColor}]`
            const bgColorClass = `bg-[#${hexColor}]`

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-[#F5F7FA] p-5 rounded-[28px] border border-[#0C233C]/5 hover:border-[#1E49E2] transition-all duration-500 hover:-translate-y-1.5 flex flex-col overflow-hidden"
              >
                {/* Background Number — top-right, prominent but subtle like reference */}
                <span className={`absolute -top-10 -right-4 text-[9rem] font-black select-none leading-none pointer-events-none transition-all duration-700 tracking-tighter ${textColorClass}/10 group-hover:${textColorClass}/20`}>
                  {(idx + 1).toString().padStart(2, '0')}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Background — matching number color but softer per request */}
                  <div className={`w-11 h-11 ${bgColorClass}/12 ${textColorClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-[#${hexColor}]/10`}>
                    <Icon size={24} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-lg font-black text-[#0C233C] mb-3 uppercase tracking-wider group-hover:text-[#1E49E2] transition-colors duration-300">
                    {award.title}
                  </h3>

                  <p className="text-[#0C233C]/40 leading-relaxed text-[13px] font-medium">
                    {award.text}
                  </p>
                </div>

                {/* Subtle inner glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E49E2]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Awards
