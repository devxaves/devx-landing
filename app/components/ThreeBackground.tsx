'use client'

import { motion } from 'framer-motion'

// Pure CSS/SVG 3D animated shapes — no @react-three/fiber dependency
// Achieves same visual effect with rotating wireframe SVG geometries

function WireframeTorus({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <ellipse cx="100" cy="100" rx="75" ry="30" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5"/>
      <ellipse cx="100" cy="100" rx="75" ry="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 5" opacity="0.3" transform="rotate(45 100 100)"/>
      <ellipse cx="100" cy="100" rx="75" ry="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 5" opacity="0.3" transform="rotate(90 100 100)"/>
      <ellipse cx="100" cy="100" rx="75" ry="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 5" opacity="0.25" transform="rotate(135 100 100)"/>
      <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.4"/>
      <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.25"/>
      <line x1="25" y1="100" x2="175" y2="100" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 6" opacity="0.2"/>
      <line x1="100" y1="25" x2="100" y2="175" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 6" opacity="0.2"/>
    </svg>
  )
}

function WireframeIcosahedron({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <polygon points="100,20 170,65 170,135 100,180 30,135 30,65" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5"/>
      <polygon points="100,20 170,65 100,100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35"/>
      <polygon points="170,65 170,135 100,100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35"/>
      <polygon points="170,135 100,180 100,100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35"/>
      <polygon points="100,180 30,135 100,100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35"/>
      <polygon points="30,135 30,65 100,100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35"/>
      <polygon points="30,65 100,20 100,100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35"/>
      <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 6" opacity="0.2"/>
    </svg>
  )
}

export default function ThreeBackground() {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      {/* Shape 1: Large Torus (sage, top-right) */}
      <motion.div
        className="absolute"
        style={{ top: '-5%', right: '-2%', width: '30vw', maxWidth: 380, color: 'var(--color-accent-sage)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        >
          <WireframeTorus style={{ width: '100%', height: 'auto' }} />
        </motion.div>
      </motion.div>

      {/* Shape 2: Icosahedron (gold, bottom-left) */}
      <motion.div
        className="absolute"
        style={{ bottom: '5%', left: '-3%', width: '22vw', maxWidth: 280, color: 'var(--color-accent-gold)' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        >
          <WireframeIcosahedron style={{ width: '100%', height: 'auto' }} />
        </motion.div>
      </motion.div>

      {/* Shape 3: Small Torus (stone, center-left) */}
      <motion.div
        className="absolute"
        style={{ top: '35%', left: '3%', width: '16vw', maxWidth: 200, color: 'var(--color-stone)' }}
        animate={{ rotate: 180 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear', repeatType: 'reverse' }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        >
          <WireframeTorus style={{ width: '100%', height: 'auto' }} />
        </motion.div>
      </motion.div>
    </div>
  )
}
