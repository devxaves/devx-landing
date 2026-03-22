'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const values = ['Detail-Obsessed', 'Client-First', 'Always Iterating']

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow mb-4">Who We Are</p>
            <h2 className="section-headline mb-8">
              A Studio Obsessed<br />With Quality
            </h2>
            <p className="font-sans text-[15px] font-light leading-relaxed text-muted mb-5">
              Team DEVX was founded on a simple conviction: that the web deserves better. Better code,
              better design, better thought behind every interaction. We are a boutique studio of engineers,
              designers, and strategists who refuse to be average.
            </p>
            <p className="font-sans text-[15px] font-light leading-relaxed text-muted mb-10">
              We work selectively with clients who share our obsession with craft. From emerging startups
              to established brands, we bring the same relentless pursuit of excellence to every project —
              because we believe great digital experiences are how you earn deep loyalty.
            </p>

            {/* Value pills */}
            <div className="flex flex-wrap gap-3">
              {values.map((v) => (
                <span
                  key={v}
                  className="font-sans text-[12px] font-normal tracking-wider px-5 py-2.5 rounded-full"
                  style={{
                    backgroundColor: 'rgba(143,168,136,0.12)',
                    color: 'var(--color-accent-sage)',
                    border: '1px solid rgba(143,168,136,0.25)',
                  }}
                >
                  {v}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Overlapping images */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative h-[480px] lg:h-[540px]"
          >
            {/* Back image */}
            <div
              className="absolute top-0 right-0 w-[75%] h-[85%] rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.08)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80"
                alt="Forest canopy from below"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 75vw, 37vw"
              />
            </div>

            {/* Front image */}
            <div
              className="absolute bottom-0 left-0 w-[60%] h-[65%] rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.1)', border: '4px solid var(--color-cream)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                alt="Team member portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 30vw"
              />
            </div>

            {/* Glassmorphism info card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-10 right-0 glass rounded-xl px-5 py-4 text-center"
            >
              <div className="font-display text-[32px] font-semibold text-charcoal leading-none">2016</div>
              <div className="eyebrow mt-1.5" style={{ color: 'var(--color-accent-gold)' }}>Est.</div>
              <div className="w-full h-px my-3" style={{ background: 'var(--color-sand)' }} />
              <div className="font-sans text-[11px] font-light text-muted">12-person team</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
