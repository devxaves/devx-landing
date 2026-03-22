'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(250,248,245,0.75)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.6)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.04)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                <polygon
                  points="16,2 30,26 2,26"
                  stroke="var(--color-accent-sage)"
                  strokeWidth="1.5"
                  fill="none"
                  className="group-hover:stroke-[var(--color-accent-gold)] transition-colors duration-300"
                />
                <circle cx="16" cy="16" r="3" fill="var(--color-accent-sage)" className="group-hover:fill-[var(--color-accent-gold)] transition-colors duration-300" />
              </svg>
            </div>
            <span
              className="text-[22px] tracking-[0.15em] font-display font-semibold text-charcoal group-hover:text-accent-sage transition-colors duration-300"
            >
              DEVX
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className="font-sans text-[13px] font-light tracking-[0.08em] text-muted hover:text-charcoal transition-colors duration-300 hover-underline"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="#contact"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="font-sans text-[12px] tracking-[0.12em] font-normal uppercase px-6 py-2.5 rounded-full border border-charcoal/30 text-charcoal hover:bg-accent-sage hover:border-accent-sage hover:text-white transition-all duration-300"
            >
              Let&apos;s Talk
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-charcoal p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-cream flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
              <span className="text-[22px] tracking-[0.15em] font-display font-semibold text-charcoal">DEVX</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-charcoal p-2"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-8 pt-12 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-display font-light text-5xl text-charcoal py-3 border-b border-sand/50 hover:text-accent-sage transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={() => setMobileOpen(false)}
                className="mt-10 font-sans text-[12px] tracking-[0.12em] uppercase text-center py-4 rounded-full bg-accent-sage text-white"
              >
                Let&apos;s Talk
              </motion.a>
            </nav>
            <div className="px-8 pb-10">
              <p className="font-sans text-xs text-stone tracking-wider">© 2024 Team DEVX</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
