'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'

const phases = [
  {
    phase: '01',
    title: 'Discovery & Strategy',
    description: 'Research your goals, users, and market to build a solid foundation.',
    points: ['Research & Analysis', 'Strategy Definition'],
    color: 'from-blue-500 to-blue-400',
  },
  {
    phase: '02',
    title: 'Design & Prototyping',
    description: 'Craft beautiful, functional interfaces in Figma that match your vision.',
    points: ['UI/UX Design', 'Interactive Prototype'],
    color: 'from-blue-600 to-blue-500',
  },
  {
    phase: '03',
    title: 'Development & QA',
    description: 'Build scalable code with rigorous testing across all devices.',
    points: ['Full-Stack Development', 'Quality Assurance'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    phase: '04',
    title: 'Launch & Beyond',
    description: 'Deploy, monitor, and optimize for ongoing success and growth.',
    points: ['Deployment & Monitoring', 'Continuous Support'],
    color: 'from-cyan-400 to-cyan-600',
  },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const [activePhase, setActivePhase] = useState(0)

  // Map scroll progress to phase index
  const phaseIndex = useTransform(scrollYProgress, [0, 1], [0, phases.length - 1])

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative py-12 lg:py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg4.png"
          alt=""
          fill
          className="object-cover opacity-[0.10]"
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
          <p className="font-sans text-[15px] font-light text-muted max-w-2xl mx-auto mt-6">
            Systematic, collaborative, and designed to deliver exceptional results at every stage.
          </p>
        </motion.div>

        {/* Timeline with scrolling cards */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-blue via-cyan-500 to-transparent lg:w-0.5" />

          {/* Phases Container */}
          <div className="space-y-12 lg:space-y-20">
            {phases.map((item, index) => {
              const isActive = Math.round(phaseIndex.get?.()) === index || activePhase === index
              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                  onViewportEnter={() => setActivePhase(index)}
                >
                  {/* Left: Content */}
                  <motion.div
                    className={index % 2 === 1 ? 'lg:order-2' : ''}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {/* Phase label */}
                    <div className="mb-4">
                      <span
                        className="inline-block font-display font-light text-6xl opacity-20"
                        style={{ color: 'var(--color-accent-blue)' }}
                      >
                        {item.phase}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-[32px] font-semibold text-charcoal mb-4 leading-tight">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-[15px] font-light leading-relaxed text-muted mb-8">
                      {item.description}
                    </p>

                    {/* Key points */}
                    <div className="space-y-3 mb-8">
                      {item.points.map((point) => (
                        <motion.div
                          key={point}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.4 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle size={18} style={{ color: 'var(--color-accent-blue)' }} className="flex-shrink-0" />
                          <span className="font-sans text-[14px] text-charcoal">{point}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA if last phase */}
                    {index === phases.length - 1 && (
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        className="inline-flex items-center gap-2 font-sans text-[13px] tracking-[0.08em] uppercase px-6 py-3 rounded-full text-white transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, var(--color-accent-blue) 0%, var(--color-accent-blue-light) 100%)',
                        }}
                      >
                        Start Your Project
                        <ArrowRight size={14} />
                      </motion.a>
                    )}
                  </motion.div>

                  {/* Right: Glassmorphism Card */}
                  <motion.div
                    className={index % 2 === 1 ? 'lg:order-1' : ''}
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.div
                      className="glass rounded-2xl p-8 lg:p-10 relative overflow-hidden h-full flex flex-col justify-between"
                      style={{
                        background: 'rgba(255, 255, 255, 0.6)',
                        border: '1px solid rgba(59, 110, 255, 0.2)',
                      }}
                      whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(59,110,255,0.15)' }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Gradient accent */}
                      <motion.div
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 blur-2xl"
                        style={{
                          background: `linear-gradient(135deg, rgba(59,110,255,0.3), rgba(0,217,255,0.2))`,
                        }}
                        animate={{
                          opacity: isActive ? 0.6 : 0.2,
                          scale: isActive ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      />

                      <div className="relative z-10">
                        {/* Icon/Number */}
                        <motion.div
                          className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                          style={{
                            background: `linear-gradient(135deg, var(--color-accent-blue) 0%, var(--color-accent-blue-light) 100%)`,
                          }}
                          whileHover={{ rotate: 10 }}
                        >
                          <span className="font-display text-[28px] font-light text-white">{item.phase}</span>
                        </motion.div>

                        {/* Phase label */}
                        <p className="eyebrow mb-3">{item.title}</p>

                        {/* Mini description */}
                        <p className="font-sans text-[14px] font-light leading-relaxed text-muted mb-6">
                          {item.description.slice(0, 100)}...
                        </p>

                        {/* Progress indicator */}
                        <div className="mt-8 pt-6 border-t border-blue-200/50">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-sans text-[11px] font-medium text-stone">Completion</span>
                            <span className="font-sans text-[11px] font-medium text-accent-blue">{((index + 1) / phases.length * 100).toFixed(0)}%</span>
                          </div>
                          <div className="w-full h-1 bg-blue-200 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-accent-blue to-cyan-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${((index + 1) / phases.length * 100)}%` }}
                              viewport={{ once: false }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
