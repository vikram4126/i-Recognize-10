import React from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  TrendingUp,
  FileText,
  Move,
  Sparkles,
  BookOpen,
  Users,
  Palette
} from 'lucide-react'
import siteData from '../data/site-content.json'

const AwardCard = ({ category, idx }) => {
  const icons = {
    "Creative Spark": Sparkles,
    "Result Momentum": TrendingUp,
    "Story Clarity": BookOpen,
    "Collective Choice": Users,
    "Motion Flow": Move,
    "Content Impact": FileText,
    "Digital Velocity": Zap,
    "Design Brilliance": Palette,
  }

  const Icon = icons[category.title] || Zap

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05, duration: 0.6 }}
      className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col h-full"
    >
      {/* Large Backdrop Number — Top-right, slightly outside */}
      <div className="absolute -top-4 -right-1 text-[100px] font-black text-white/[0.08] leading-none select-none group-hover:text-white/[0.15] transition-colors duration-500 pointer-events-none">
        {String(idx + 1).padStart(2, '0')}
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        <div className={`w-10 h-10 rounded-xl ${category.bg || 'bg-[#1E49E2]/10'} flex items-center justify-center ${category.color || 'text-[#1E49E2]'} mb-8 transition-transform group-hover:scale-110 duration-500`}>
          <Icon size={20} strokeWidth={2.5} />
        </div>
        
        <h3 className="text-xl font-display font-black text-white mb-4 tracking-tight uppercase leading-tight group-hover:text-[#ACEAFF] transition-colors">
          {category.title}
        </h3>
        
        <p className="text-sm font-medium text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
          {category.text}
        </p>
      </div>
    </motion.div>
  )
}

const Awards = () => {
  const { awards } = siteData

  return (
    <section id="awards" className="relative py-20 bg-[#0C233C] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E49E2]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Standard Header Stack */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#ACEAFF]"
          >
            Award Categories
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6"
          >
            {awards.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed"
          >
            {awards.subtitle}
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.categories.map((cat, idx) => (
            <AwardCard key={idx} category={cat} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Awards
