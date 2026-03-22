'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
          background: scrolled ? 'rgba(240,245,251,0.75)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(59,110,255,0.1)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(59,110,255,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 relative">
              <Image
                src="/logo.png"
                alt="DEVX Logo"
                fill
                className="object-contain"
              />
            </div>
            <span
              className="text-[22px] tracking-[0.15em] font-display font-semibold text-charcoal group-hover:text-accent-sage transition-colors duration-300"
            >
              Team DEVX
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
              className="font-sans text-[12px] tracking-[0.12em] font-normal uppercase px-6 py-2.5 rounded-full border border-charcoal/20 text-charcoal hover:bg-accent-blue hover:border-accent-blue hover:text-white transition-all duration-300"
            >
              Let&apos;s Talk
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-charcoal p-2 hover:text-accent-blue transition-colors"
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
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ backgroundColor: 'var(--color-cream)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid rgba(59,110,255,0.1)' }}>
              <div className="w-8 h-8 relative">
                <Image
                  src="/logo.png"
                  alt="DEVX Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-charcoal p-2 hover:text-accent-blue transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-0 px-6 pt-8 flex-1 overflow-y-auto">
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
                    className="block font-display text-[36px] font-semibold text-charcoal py-4 border-b transition-colors hover:text-accent-blue"
                    style={{ borderColor: 'rgba(59,110,255,0.1)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-6 pb-8 pt-6"
            >
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center font-sans text-[12px] tracking-[0.12em] uppercase font-normal py-4 rounded-full text-white transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, var(--color-accent-blue) 0%, var(--color-accent-blue-light) 100%)' }}
              >
                Let&apos;s Talk
              </a>
            </motion.div>

            {/* Footer */}
            <div className="px-6 pb-6 pt-4" style={{ borderTop: '1px solid rgba(59,110,255,0.1)' }}>
              <p className="font-sans text-[11px] text-muted tracking-wider">© 2026 Team DEVX</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
