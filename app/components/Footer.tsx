'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Twitter, Linkedin, Github, Dribbble } from 'lucide-react'

const serviceLinks = [
  'Custom Web Development',
  'UI/UX Design',
  'E-Commerce Solutions',
  'Web Applications',
  'Performance Optimization',
  'Maintenance & Support',
]

const companyLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Careers', href: '#careers' },
]

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: '#', hoverColor: '#1DA1F2' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', hoverColor: '#0A66C2' },
  { icon: Github, label: 'GitHub', href: '#', hoverColor: '#333' },
  { icon: Dribbble, label: 'Dribbble', href: '#', hoverColor: '#EA4C89' },
]

export default function Footer() {
  return (
    <footer className="bg-warm-white gradient-border-top">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo + Tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                  <polygon points="16,2 30,26 2,26" stroke="var(--color-accent-sage)" strokeWidth="1.5" fill="none" />
                  <circle cx="16" cy="16" r="3" fill="var(--color-accent-sage)" />
                </svg>
              </div>
              <span className="text-[20px] tracking-[0.15em] font-display font-semibold text-charcoal">DEVX</span>
            </div>
            <p className="font-sans text-[13px] italic text-muted leading-relaxed font-light mt-2 mb-6 max-w-[200px]">
              Crafting the web, one pixel at a time.
            </p>
            <p className="font-sans text-[12px] text-stone leading-relaxed">
              hello@teamdevx.com<br />
              +1 (555) 000-0000
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="eyebrow mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    className="font-sans text-[13px] font-light text-muted hover:text-charcoal transition-colors duration-300 hover-underline"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="eyebrow mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-sans text-[13px] font-light text-muted hover:text-charcoal transition-colors duration-300 hover-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="eyebrow mb-6">Connect</h4>
            <p className="font-sans text-[13px] font-light text-muted leading-relaxed mb-6">
              We&apos;d love to hear about your project. Let&apos;s build something extraordinary together.
            </p>
            <a
              href="#contact"
              className="inline-block font-sans text-[12px] tracking-[0.1em] uppercase px-6 py-3 rounded-full bg-charcoal text-cream hover:bg-accent-sage transition-all duration-300 font-normal"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-sand/50 gap-4">
          <p className="font-sans text-[12px] text-stone font-light">
            © {new Date().getFullYear()} Team DEVX. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.15, color: 'var(--color-accent-sage)' }}
                transition={{ duration: 0.2 }}
                className="text-stone hover:text-accent-sage transition-colors duration-300"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
