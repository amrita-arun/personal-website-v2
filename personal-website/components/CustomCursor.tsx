'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)')
    if (!media.matches) return

    const root = document.documentElement
    root.classList.add('custom-cursor-active')
    setActive(true)

    const onMove = (e: MouseEvent) => {
      const el = cursorRef.current
      if (!el) return
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      root.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  if (!active) return null

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-3 w-3 rounded-full bg-black"
      style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
    />
  )
}
