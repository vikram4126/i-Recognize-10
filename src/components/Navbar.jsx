import React, { useState, useEffect } from 'react'
import {
  Menu, X, Home, Info, Award, Users, Map, Scale, Trophy, Medal, ExternalLink
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import siteData from '../data/site-content.json'

const ICON_MAP = {
  Home,
  Info,
  Award,
  Users,
  Map,
  Scale,
  Trophy,
  Medal,
  ExternalLink
}

const Navbar = () => {
  const { globals } = siteData
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <nav
        id="home"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[#00338D]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-6 bg-transparent'
          }`}
      >
        <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* KPMG Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex items-center gap-5">
              <img 
                src={globals.logoUrl} 
                alt="KPMG" 
                className="h-8 w-auto relative z-10" 
                onError={(e) => console.error("Logo failed to load:", e.target.src)}
              />
              <div className="absolute inset-0 bg-[#ACEAFF]/20 blur-md rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
            </div>
          </motion.div>

          {/* Action Buttons & Burger */}
          <div className="flex items-center gap-4">
            <button className="hidden xl:block px-8 py-3 bg-white/5 backdrop-blur-md border border-[#ACEAFF]/30 hover:border-[#ACEAFF] text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_20px_rgba(172,234,255,0.3)] active:scale-95 whitespace-nowrap">
              {globals.nominationCta}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2.5 text-white hover:bg-white/5 rounded-full transition-all border border-white/10"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Side Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-[#0C233C]/80 backdrop-blur-md z-[60]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0C233C] z-[70] shadow-2xl p-10 flex flex-col border-l border-white/10 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10 shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold text-white uppercase tracking-[0.2em]">{globals.menuTitle}</span>
                </div>
                <button onClick={toggleMenu} className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all group">
                  <X size={24} className="text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {globals.navLinks.map((link, idx) => {
                  const Icon = ICON_MAP[link.icon] || Info
                  return (
                    <motion.a
                      key={link.title}
                      href={link.href}
                      onClick={toggleMenu}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className="flex items-center gap-6 py-2.5 group transition-all"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="text-white/40 group-hover:text-[#ACEAFF] transition-colors shrink-0"
                      >
                        <Icon size={20} strokeWidth={2.5} />
                      </motion.div>
                      <span className="text-lg font-bold text-white/60 group-hover:text-white transition-colors tracking-tight">
                        {link.title}
                      </span>
                    </motion.a>
                  )
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 shrink-0">
                <button className="w-full py-5 bg-white/5 backdrop-blur-md border border-[#ACEAFF]/30 hover:border-[#1E49E2] text-white rounded-2xl font-bold uppercase tracking-[0.3em] transition-all hover:shadow-[0_0_30px_rgba(172,234,255,0.4)] active:scale-95 text-[11px]">
                  {globals.nominationCta}
                </button>
                <div className="flex items-center justify-center gap-6 mt-8 opacity-40">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#ACEAFF]">{globals.footerBrand}</span>
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">{globals.footerCorp}</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
