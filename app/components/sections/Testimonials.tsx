'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: 'Working with Team DEVX was a revelation. They didn\'t just build our website — they crafted an experience that our clients comment on every single day. The attention to detail is extraordinary.',
    name: 'Sarah Chen',
    role: 'CEO, Luminis Capital',
    initials: 'SC',
    gradient: 'linear-gradient(135deg, #8FA888, #C4B8A8)',
  },
  {
    quote: 'We\'ve worked with several agencies, and DEVX operates on another level entirely. Their process is thoughtful, their craft is impeccable, and the results speak for themselves. True partners.',
    name: 'Marcus Webb',
    role: 'Founder, Meridian Studio',
    initials: 'MW',
    gradient: 'linear-gradient(135deg, #C9A96E, #E8E0D5)',
  },
  {
    quote: 'Our conversion rate increased by 47% after the redesign. But beyond the numbers, we finally have a digital presence that matches the premium quality of our physical products.',
    name: 'Isabella Rossi',
    role: 'Head of Brand, Aether Botanics',
    initials: 'IR',
    gradient: 'linear-gradient(135deg, #6B6560, #C4B8A8)',
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateX = ((e.clientY - centerY) / rect.height) * -8
    const rotateY = ((e.clientX - centerX) / rect.width) * 8
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass rounded-2xl p-8 flex flex-col"
      style={{
        backgroundColor: 'rgba(255,255,255,0.5)',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease',
      }}
    >
      {/* Large quote mark */}
      <div
        className="font-display font-light leading-none mb-4 select-none"
        style={{ fontSize: '80px', lineHeight: 0.8, color: 'var(--color-accent-sage)', opacity: 0.4 }}
      >
        &ldquo;
      </div>

      <p className="font-sans text-[14px] font-light leading-relaxed text-charcoal flex-1 mb-8">
        {testimonial.quote}
      </p>

      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-sand/50">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: testimonial.gradient }}
        >
          <span className="font-sans text-[11px] font-medium text-white">{testimonial.initials}</span>
        </div>
        <div>
          <div className="font-sans text-[13px] font-medium text-charcoal">{testimonial.name}</div>
          <div className="font-sans text-[11px] font-light text-muted mt-0.5">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: 'var(--color-warm-white)' }} className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="eyebrow mb-4">Client Stories</p>
          <h2 className="section-headline">
            Words From Those<br />Who Know
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
