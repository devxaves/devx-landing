'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code2, Palette, ShoppingBag, LayoutDashboard, Zap, Headphones,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    desc: 'Full-stack Next.js and React applications built for performance, scalability, and longevity.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Figma-led design systems, interaction design, and prototyping that elevates your brand.',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce Solutions',
    desc: 'Bespoke Shopify storefronts and custom commerce experiences that convert and delight.',
  },
  {
    icon: LayoutDashboard,
    title: 'Web Applications',
    desc: 'SaaS platforms, internal dashboards, and portals with intuitive UX and robust architecture.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    desc: 'Core Web Vitals auditing, SEO enhancement, and speed optimization for measurable results.',
  },
  {
    icon: Headphones,
    title: 'Maintenance & Support',
    desc: 'Retainer-based care, continuous updates, and proactive monitoring to keep you thriving.',
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`)
  }

  return (
    <section id="services" className="py-28 lg:py-36" style={{ backgroundColor: 'var(--color-warm-white)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="section-headline max-w-[500px]">
            Crafted With Purpose,<br />Built to Perform
          </h2>
        </motion.div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                onMouseMove={handleMouseMove}
                className="liquid-glass glass rounded-2xl p-8 group"
                style={{ backgroundColor: 'rgba(255,255,255,0.55)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-accent-sage/20"
                  style={{ backgroundColor: 'rgba(143,168,136,0.12)' }}
                >
                  <Icon size={18} style={{ color: 'var(--color-accent-sage)' }} />
                </div>
                <h3
                  className="font-display text-[22px] font-semibold mb-3 leading-tight"
                  style={{ color: 'var(--color-charcoal)' }}
                >
                  {service.title}
                </h3>
                <p className="font-sans text-[14px] font-light leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {service.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
