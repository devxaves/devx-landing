'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    dot.style.opacity = '1'
    ring.style.opacity = '0.6'

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    let rafId: number

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, posRef.current.x, 0.12)
      ringPos.current.y = lerp(ringPos.current.y, posRef.current.y, 0.12)
      ring.style.left = `${ringPos.current.x}px`
      ring.style.top = `${ringPos.current.y}px`
      rafId = requestAnimationFrame(animate)
    }

    const onMouseEnterLink = () => {
      if (dot) {
        dot.style.width = '12px'
        dot.style.height = '12px'
        dot.style.background = 'var(--color-accent-gold)'
      }
      if (ring) {
        ring.style.width = '48px'
        ring.style.height = '48px'
        ring.style.borderColor = 'var(--color-accent-gold)'
      }
    }

    const onMouseLeaveLink = () => {
      if (dot) {
        dot.style.width = '8px'
        dot.style.height = '8px'
        dot.style.background = 'var(--color-accent-sage)'
      }
      if (ring) {
        ring.style.width = '32px'
        ring.style.height = '32px'
        ring.style.borderColor = 'var(--color-accent-sage)'
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animate)

    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: 0, transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease, left 0.05s linear, top 0.05s linear' }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ opacity: 0, transition: 'width 0.25s ease, height 0.25s ease, border-color 0.2s ease' }}
      />
    </>
  )
}
