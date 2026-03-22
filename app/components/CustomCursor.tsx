'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const isMouseOver = useRef(true)

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Show cursor initially
    dot.style.opacity = '1'
    ring.style.opacity = '0.6'

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
      
      // Make sure cursor is visible when moving
      if (isMouseOver.current) {
        dot.style.opacity = '1'
        ring.style.opacity = '0.6'
      }
    }

    const onMouseEnter = () => {
      isMouseOver.current = true
      dot.style.opacity = '1'
      ring.style.opacity = '0.6'
    }

    const onMouseLeave = () => {
      isMouseOver.current = false
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }

    let rafId: number

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, posRef.current.x, 0.15)
      ringPos.current.y = lerp(ringPos.current.y, posRef.current.y, 0.15)
      ring.style.left = `${ringPos.current.x}px`
      ring.style.top = `${ringPos.current.y}px`
      rafId = requestAnimationFrame(animate)
    }

    const onMouseEnterLink = () => {
      if (dot) {
        dot.style.width = '14px'
        dot.style.height = '14px'
        dot.style.background = 'var(--color-accent-blue)'
      }
      if (ring) {
        ring.style.width = '52px'
        ring.style.height = '52px'
        ring.style.borderColor = 'var(--color-accent-blue)'
        ring.style.opacity = '0.8'
      }
    }

    const onMouseLeaveLink = () => {
      if (dot && isMouseOver.current) {
        dot.style.width = '8px'
        dot.style.height = '8px'
        dot.style.background = 'var(--color-accent-blue)'
      }
      if (ring && isMouseOver.current) {
        ring.style.width = '32px'
        ring.style.height = '32px'
        ring.style.borderColor = 'var(--color-accent-blue)'
        ring.style.opacity = '0.6'
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseenter', onMouseEnter)
    window.addEventListener('mouseleave', onMouseLeave)
    rafId = requestAnimationFrame(animate)

    // Add event listeners to interactive elements
    const links = document.querySelectorAll('a, button, [role="button"], input, textarea')
    links.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseenter', onMouseEnter)
      window.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafId)
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink)
        el.removeEventListener('mouseleave', onMouseLeaveLink)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          opacity: 1,
          pointerEvents: 'none',
          transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease',
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          opacity: 0.6,
          pointerEvents: 'none',
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.2s ease, opacity 0.2s ease',
        }}
      />
    </>
  )
}
