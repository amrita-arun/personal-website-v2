'use client'

import { useEffect, useRef, useState } from 'react'

type CaseStudyMediaProps = {
  src: string
  alt: string
  variant?: 'hero' | 'feature' | 'large'
}

/** Fixed frame reserves layout space so scroll position stays stable when media loads/unloads. */
const frameClasses = {
  hero: 'aspect-video w-full max-h-[min(calc(100vh-280px),820px)]',
  feature: 'aspect-[16/10] w-full max-h-[min(72vh,640px)] lg:aspect-[16/9]',
  large: 'aspect-[16/10] w-full max-h-[min(65vh,560px)] lg:aspect-[16/9]',
}

export function CaseStudyMedia({
  src,
  alt,
  variant = 'feature',
}: CaseStudyMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [failed, setFailed] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [staticLoaded, setStaticLoaded] = useState(false)

  const isGif = /\.gif$/i.test(src)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.15,
        rootMargin: '0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Static images: load once in view, keep mounted (no layout shift on scroll away)
  useEffect(() => {
    if (isInView && !isGif) {
      setStaticLoaded(true)
    }
  }, [isInView, isGif])

  const shouldPlayGif = isInView && !reducedMotion && isGif
  const shouldShowStatic = staticLoaded && !isGif

  const activeSrc = failed
    ? null
    : isGif
      ? shouldPlayGif
        ? src
        : null
      : shouldShowStatic
        ? src
        : null

  return (
    <div ref={containerRef} className={`relative ${frameClasses[variant]}`}>
      {activeSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={activeSrc}
          alt={alt}
          className="absolute inset-0 h-full w-full object-contain"
          onError={() => setFailed(true)}
          onLoad={() => {
            if (!isGif) setStaticLoaded(true)
          }}
        />
      ) : null}
    </div>
  )
}
