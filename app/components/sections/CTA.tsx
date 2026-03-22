'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: 'var(--color-cream)' }}>
      {/* Aerial forest background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=60"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.12 }}
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(143,168,136,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex justify-center">
        {/* Glassmorphism box with glow */}
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.97 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="relative max-w-3xl w-full text-center"
        >
          {/* Pulsing glow behind the box */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 60px rgba(143,168,136,0.15)',
                '0 0 100px rgba(143,168,136,0.25)',
                '0 0 60px rgba(143,168,136,0.15)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-3xl"
            style={{ background: 'transparent' }}
          />

          <div className="glass-dark rounded-3xl px-10 lg:px-16 py-16 lg:py-20 relative">
            <p className="eyebrow mb-6">Let&apos;s Create Together</p>

            <h2
              className="font-display font-light mb-6 leading-tight"
              style={{ fontSize: 'clamp(36px, 4.5vw, 60px)', color: 'var(--color-charcoal)' }}
            >
              Ready to Build<br />
              <em>Something Extraordinary?</em>
            </h2>

            <p className="font-sans text-[15px] font-light leading-relaxed text-muted mb-10 max-w-md mx-auto">
              Let&apos;s discuss your vision. We&apos;re selective about the projects we take on —
              because we give each one everything we have.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(143,168,136,0.35)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 font-sans text-[13px] tracking-[0.08em] uppercase px-8 py-4 rounded-full text-white"
                style={{ background: 'linear-gradient(135deg, var(--color-accent-sage) 0%, var(--color-accent-gold) 100%)' }}
              >
                Start a Project
                <ArrowRight size={14} />
              </motion.a>

              <motion.a
                href="mailto:hello@teamdevx.com"
                whileHover={{ backgroundColor: 'rgba(44,44,44,0.06)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 font-sans text-[13px] tracking-[0.08em] uppercase px-8 py-4 rounded-full border border-charcoal/20 text-charcoal transition-all duration-300"
              >
                <Mail size={14} />
                hello@teamdevx.com
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
