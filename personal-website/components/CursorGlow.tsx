'use client'

import { useEffect, useRef } from 'react'

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[-1] h-40 w-40 rounded-full bg-pink-500 opacity-30 blur-3xl transition-transform duration-100"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  )
}

export default CursorGlow
