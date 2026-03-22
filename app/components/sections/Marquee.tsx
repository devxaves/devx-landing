'use client'

const items = [
  'Next.js', '✦', 'React', '✦', 'Node.js', '✦', 'TypeScript', '✦',
  'PostgreSQL', '✦', 'Prisma', '✦', 'Figma', '✦', 'Webflow', '✦',
  'Tailwind CSS', '✦', 'Framer', '✦', 'AWS', '✦', 'Vercel', '✦',
]

function MarqueeItems() {
  return (
    <>
      {items.map((item, i) => (
        <span
          key={i}
          className="font-sans text-[11px] tracking-[0.18em] uppercase whitespace-nowrap px-4"
          style={{ color: item === '✦' ? 'var(--color-accent-sage)' : 'var(--color-stone)' }}
        >
          {item}
        </span>
      ))}
    </>
  )
}

export default function Marquee() {
  return (
    <div className="overflow-hidden" style={{ backgroundColor: 'var(--color-sand)' }}>
      {/* Strip 1: Left */}
      <div className="py-4 border-b border-stone/20 overflow-hidden">
        <div className="marquee-track-left flex">
          <MarqueeItems />
          <MarqueeItems />
          <MarqueeItems />
          <MarqueeItems />
        </div>
      </div>

      {/* Strip 2: Right */}
      <div className="py-4 overflow-hidden">
        <div className="marquee-track-right flex">
          <MarqueeItems />
          <MarqueeItems />
          <MarqueeItems />
          <MarqueeItems />
        </div>
      </div>
    </div>
  )
}
