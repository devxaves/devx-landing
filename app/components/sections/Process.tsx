'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We immerse ourselves in your world — your goals, users, competitors, and constraints — to build a shared understanding before a single line of code is written.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'From wireframes to pixel-perfect visuals, we craft interfaces in Figma that feel inevitable — functional, beautiful, and true to your brand.',
  },
  {
    number: '03',
    title: 'Development',
    desc: 'Clean, documented, scalable code. We build with modern stacks and test rigorously to ensure your product performs flawlessly across all devices.',
  },
  {
    number: '04',
    title: 'Launch & Beyond',
    desc: 'We don\'t just ship and disappear. From deployment to post-launch analysis, we\'re partners in your ongoing growth and success.',
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="process" className="relative py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: 'var(--color-cream)' }}>
      {/* Background landscape strip */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=60"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          style={{ filter: 'blur(2px)' }}
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="eyebrow mb-4">How We Work</p>
          <h2 className="section-headline">
            A Refined Process<br />For Refined Results
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative">
          {/* SVG connecting line (desktop) */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] hidden lg:block" style={{ height: 1, zIndex: 0 }}>
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <motion.line
                x1="0" y1="0" x2="100%" y2="0"
                stroke="var(--color-accent-sage)"
                strokeWidth="1"
                strokeDasharray="4 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col"
            >
              {/* Decorative number */}
              <div
                className="font-display font-light leading-none mb-3 select-none"
                style={{ fontSize: '80px', color: 'var(--color-accent-sage)', opacity: 0.15 }}
              >
                {step.number}
              </div>

              {/* Dot */}
              <div
                className="w-3 h-3 rounded-full mb-5 z-10 relative"
                style={{ background: 'var(--color-accent-sage)', boxShadow: '0 0 0 4px rgba(143,168,136,0.2)' }}
              />

              <h3 className="font-display text-[22px] font-semibold text-charcoal mb-3">{step.title}</h3>
              <p className="font-sans text-[14px] font-light leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
