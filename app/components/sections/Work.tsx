'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Bharatiya',
    category: 'Traditional E-Commerce',
    image: '/work1.png',
    desc: 'A full brand overhaul and digital platform for an Indian platform — clean, minimal, and obsessively crafted.',
    tall: true,
  },
  {
    title: 'InterVue AI',
    category: 'AI-Powered SaaS',
    image: '/work2.png',
    desc: 'A luxury botanics e-commerce experience with custom Shopify storefront and bespoke checkout flow.',
    tall: false,
  },
  {
    title: 'Vizly Dashboard',
    category: 'Web Application',
    image: '/work3.png',
    desc: 'A data-dense analytics dashboard designed for readability, speed, and daily professional use.',
    tall: false,
  },
]

export default function Work() {
  return (
    <section id="work" className="py-28 lg:py-36" style={{ backgroundColor: 'var(--color-warm-white)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div>
            <p className="eyebrow mb-4">Selected Work</p>
            <h2 className="section-headline">
              Projects That Speak<br />For Themselves
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-[13px] font-normal tracking-wider hover-underline flex items-center gap-2 self-end"
            style={{ color: 'var(--color-accent-blue)' }}
          >
            {/* See All Projects
            <ArrowUpRight size={14} /> */}
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {/* Large card left */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 lg:col-span-7 group relative rounded-2xl overflow-hidden cursor-pointer"
            style={{ height: '380px', minHeight: '280px' }}
          >
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8"
              style={{ background: 'linear-gradient(to top, rgba(44,44,44,0.75) 0%, transparent 60%)' }}
            >
              <div className="glass rounded-xl p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="eyebrow mb-2 text-accent-blue">{projects[0].category}</p>
                <h3 className="font-display text-[24px] font-semibold text-charcoal mb-2">{projects[0].title}</h3>
                <p className="font-sans text-[13px] font-light text-muted leading-relaxed mb-4">{projects[0].desc}</p>
                <span className="font-sans text-[12px] font-normal text-accent-blue flex items-center gap-1 hover-underline">
                  {/* View Case Study <ArrowUpRight size={12} /> */}
                </span>
              </div>
            </div>
            {/* Default label */}
            <div className="absolute bottom-0 left-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>{projects[0].category}</span>
              <h3 className="font-display text-[22px] font-semibold text-white mt-1">{projects[0].title}</h3>
            </div>
          </motion.div>

          {/* Right stacked cards */}
          <div className="md:col-span-2 lg:col-span-5 flex flex-col gap-5">
            {projects.slice(1).map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: (i + 1) * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer flex-1"
                style={{ minHeight: '200px' }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6"
                  style={{ background: 'linear-gradient(to top, rgba(44,44,44,0.75) 0%, transparent 70%)' }}
                >
                  <div className="glass rounded-xl p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="eyebrow mb-1.5 text-accent-blue text-[9px]">{project.category}</p>
                    <h3 className="font-display text-[18px] font-semibold text-charcoal mb-1">{project.title}</h3>
                    <span className="font-sans text-[11px] font-normal text-accent-blue flex items-center gap-1">
                      {/* View Case Study <ArrowUpRight size={10} /> */}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-5 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="eyebrow text-[9px]" style={{ color: 'rgba(255,255,255,0.7)' }}>{project.category}</span>
                  <h3 className="font-display text-[18px] font-semibold text-white mt-0.5">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
