'use client'

import { useCountUp } from '@/app/hooks/useCountUp'

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 8, suffix: '', label: 'Years of Excellence' },
  { value: 15, suffix: '+', label: 'Industries Served' },
]

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const { count, ref } = useCountUp(stat.value, 2000)

  return (
    <div className="flex flex-col items-center text-center py-12 px-6">
      <span ref={ref} className="font-display font-light leading-none text-charcoal" style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}>
        {count}{stat.suffix}
      </span>
      <span className="eyebrow mt-3" style={{ color: 'var(--color-stone)' }}>{stat.label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <section style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-sand">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
