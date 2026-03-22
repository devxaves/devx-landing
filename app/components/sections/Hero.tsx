'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import ThreeBackground from '../ThreeBackground'

const words = ['We', 'Build', 'Digital', 'Experiences', 'That', 'Endure']

const stats = [
  { value: '50+', label: 'Projects' },
  { value: '98%', label: 'Client Retention' },
  { value: '4+ Yrs', label: 'Experience' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`)
  }

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      {/* Three.js 3D Background */}
      <ThreeBackground />

      {/* Nature photo background */}
      <div className="absolute inset-0 z-0" style={{ mixBlendMode: 'multiply', opacity: 0.25 }}>
        <Image
          src="/bg1.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Gradient mesh blobs - Blue theme */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="gradient-blob"
          style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(59,110,255,0.25) 0%, transparent 70%)', top: '-10%', right: '5%' }}
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="gradient-blob"
          style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,217,255,0.2) 0%, transparent 70%)', bottom: '0%', left: '20%' }}
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
        <motion.div
          className="gradient-blob"
          style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(107,158,255,0.2) 0%, transparent 70%)', top: '30%', left: '5%' }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div>
            {/* Eyebrow badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
            >
              <span className="text-accent-blue">✦</span>
              <span className="eyebrow" style={{ color: 'var(--color-accent-blue)' }}>Premium Web Development</span>
            </motion.div>

            {/* Headline — word by word animation */}
            <h1 className="hero-headline mb-6">
              {words.map((word, i) => (
                <span key={word} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + i * 0.1,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="font-sans text-[16px] font-light leading-relaxed mb-10 max-w-[480px]"
              style={{ color: 'var(--color-muted)' }}
            >
              Team DEVX crafts high-performance websites and web applications that merge aesthetic precision
              with engineering excellence — for brands that demand the extraordinary.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(59,110,255,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 font-sans text-[13px] tracking-[0.08em] uppercase font-normal px-8 py-4 rounded-full text-white transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, var(--color-accent-blue) 0%, var(--color-accent-blue-light) 100%)' }}
              >
                Start a Project
                <ArrowRight size={14} />
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ backgroundColor: 'rgba(59,110,255,0.08)' }}
                whileTap={{ scale: 0.98 }}
                className="font-sans text-[13px] tracking-[0.08em] uppercase font-normal px-8 py-4 rounded-full border border-charcoal/15 text-charcoal transition-all duration-300"
              >
                View Our Work
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Device Mockup */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative hidden lg:flex flex-col items-center"
          >
            {/* Device mockup card */}
            <motion.div
              whileHover={{ rotateY: 0, scale: 1.02 }}
              initial={{ rotateY: -8 }}
              className="relative w-full max-w-[460px] glass rounded-2xl overflow-hidden"
              style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
                transform: 'perspective(1000px) rotateY(-8deg)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.1)',
                transition: 'transform 0.5s ease',
              }}
            >
              <div className="bg-stone/20 rounded-t-2xl px-4 py-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-300/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-300/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-300/60" />
                <div className="flex-1 mx-4 bg-white/50 rounded-full h-5 flex items-center px-3">
                  <span className="text-[10px] text-muted font-sans">teamdevx.xyz</span>
                </div>
              </div>
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/bg3.png"
                  alt="Premium web design showcase"
                  fill
                  className="object-cover"
                  sizes="460px"
                />
              </div>
            </motion.div>

            {/* Floating stat chips */}
            <div className="absolute -left-6 top-8 flex flex-col gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 + i * 0.15 }}
                  className="glass rounded-xl px-4 py-2.5 flex items-center gap-3"
                >
                  <div className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, var(--color-accent-blue) 0%, var(--color-accent-teal) 100%)' }} />
                  <div>
                    <div className="font-display font-semibold text-charcoal text-[18px] leading-none">{stat.value}</div>
                    <div className="font-sans text-[10px] text-muted mt-0.5">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="eyebrow" style={{ color: 'var(--color-stone)' }}>Scroll</span>
        <div className="relative flex flex-col items-center">
          <motion.div
            animate={{ scaleY: [0, 1, 0], y: [0, 16, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 origin-top"
            style={{ background: 'linear-gradient(to bottom, var(--color-accent-blue), transparent)' }}
          />
          <motion.div
            animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="mt-1"
          >
            <ChevronDown size={14} style={{ color: 'var(--color-accent-blue)' }} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
