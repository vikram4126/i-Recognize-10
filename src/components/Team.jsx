import React from 'react'
import { motion } from 'framer-motion'

// Import local team assets
import core1 from '../assets/core-1.JPG'
import core2 from '../assets/core-2.JPG'
import core3 from '../assets/core-3.JPG'
import core4 from '../assets/core-4.JPG'
import core5 from '../assets/core-5.JPG'
import core6 from '../assets/core-6.JPG'
import core7 from '../assets/core-7.JPG'
import core8 from '../assets/core-8.JPG'

const Team = () => {
  const members = [
    { name: 'Himanshu', role: 'Lead Strategy', img: core1 },
    { name: 'Pavan', role: 'Design Head', img: core2 },
    { name: 'Nitin', role: 'Project Manager', img: core3 },
    { name: 'Sunil', role: 'Tech Lead', img: core4 },
    { name: 'Priyanka', role: 'Comms Expert', img: core5 },
    { name: 'Anshu', role: 'Support Lead', img: core6 },
    { name: 'Abbas', role: 'Creative Director', img: core7 },
    { name: 'Archana', role: 'Core Support', img: core8 },
  ]

  return (
    <section id="team" className="relative py-48 bg-white overflow-hidden">
      {/* Subtle brand background tint */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary-accent),transparent_70%)] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Clean & Minimal */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 text-[#1E49E2]"
          >
            The Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="gsap-reveal text-4xl md:text-5xl font-black tracking-tighter text-[#0C233C]"
          >
            Core Team Members
          </motion.h2>
        </div>

        {/* Team Layout - 6+2 Centered (Desktop) / 3 (Tablet) / 2 (Mobile) */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 md:gap-x-12 lg:gap-x-8 xl:gap-x-12 max-w-[1400px] mx-auto">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center group cursor-default w-[calc(100%/2-1.5rem)] md:w-[calc(100%/3-2rem)] lg:w-[calc(100%/6-1.5rem)] xl:w-[calc(100%/6-2rem)] min-w-[160px]"
            >
              {/* Circular Avatar Container */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-6 items-center justify-center flex">

                {/* Visual Elevation Shadow (Soft & Clean) */}
                <div className="absolute inset-0 rounded-full bg-black/5 blur-xl group-hover:bg-black/10 group-hover:blur-2xl transition-all duration-500 scale-90" />

                {/* Image Container with White Border */}
                <div className="relative w-full h-full rounded-full p-1 bg-white border border-[#0C233C]/10 shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                  <motion.img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full filter grayscale dark:grayscale dark:group-hover:grayscale-0 group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-110"
                  />

                  {/* Subtle Inner Overlay for Premium Finish */}
                  <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
                </div>
              </div>

              {/* Typography - Refined Hierarchy */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
              >
                <h4 className="text-base md:text-lg font-black text-[#0C233C] mb-1.5 tracking-tight group-hover:text-[#1E49E2] transition-colors duration-300">
                  {member.name}
                </h4>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-[1px] bg-[#ACEAFF] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#0C233C]/40 group-hover:text-[#0C233C]/60 transition-colors duration-300">
                    {member.role}
                  </span>
                  <div className="w-1 h-[1px] bg-[#ACEAFF] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
