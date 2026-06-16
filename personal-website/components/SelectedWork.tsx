'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { libreBaskerville } from '@/lib/fonts'
import { homeWorkSlides, type HomeWorkSlide, type HomeWorkTagVariant } from '@/lib/content/home-work'

const WHEEL_THRESHOLD = 80
const WHEEL_COOLDOWN_MS = 450

const tagStyles: Record<HomeWorkTagVariant, string> = {
  pink: 'border-[#ECB2B2] bg-[#FDF1F0]',
  pinkSoft: 'border-[#ECB2B2] bg-[#F9E9ED]',
  orange: 'border-[#F9CC95] bg-[#FAF0E6]',
}

function WorkTagChip({ label, variant }: { label: string; variant: HomeWorkTagVariant }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[30px] border px-[15px] py-[5px] font-sans text-[14px] leading-[1.5] text-black ${tagStyles[variant]}`}
    >
      {label}
    </span>
  )
}

function WorkActionChip({
  href,
  label,
  external,
  accentColor,
  icon,
}: {
  href: string
  label: string
  external?: boolean
  accentColor: string
  icon?: 'arrow' | 'github'
}) {
  const className =
    'inline-flex items-center gap-1 rounded-[10px] border border-black bg-white/70 px-3 py-1.5 font-sans text-[14px] font-medium text-black tracking-[-0.01em] transition hover:shadow-[var(--btn-shadow)]'

  const style = { ['--btn-shadow' as string]: `-2px 3px 0px 0px ${accentColor}` }

  const inner =
    icon === 'github' ? (
      <>
        <Github className="h-4 w-4" strokeWidth={1.8} />
        <span>{label}</span>
      </>
    ) : external ? (
      <>
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
        <span>{label}</span>
      </>
    ) : (
      <>
        <span>{label}</span>
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
      </>
    )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className={className} style={style}>
      {inner}
    </Link>
  )
}

function WorkPaginationDots({
  count,
  activeIndex,
  accentColor,
  onSelect,
}: {
  count: number
  activeIndex: number
  accentColor: string
  onSelect: (index: number) => void
}) {
  return (
    <div className="flex items-center gap-1.5" role="tablist" aria-label="Selected work slides">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === activeIndex}
          aria-label={`Go to ${homeWorkSlides[i]?.title ?? `slide ${i + 1}`}`}
          onClick={() => onSelect(i)}
          className={
            i === activeIndex
              ? 'h-[7px] w-[26px] rounded-full transition-all'
              : 'h-[7px] w-[7px] rounded-full bg-[rgba(140,145,140,0.3)] transition-all hover:bg-[rgba(140,145,140,0.5)]'
          }
          style={i === activeIndex ? { backgroundColor: accentColor } : undefined}
        />
      ))}
    </div>
  )
}

function WorkSlideMedia({ slide }: { slide: HomeWorkSlide }) {
  if (slide.imageSrc) {
    const srcPath = slide.imageSrc.split('?')[0]
    const isGif = srcPath.endsWith('.gif')
    const isRaster = /\.(png|jpe?g)$/i.test(srcPath)

    return (
      <div className="relative aspect-[630/368] w-full overflow-hidden rounded-[2px] bg-transparent">
        <Image
          src={slide.imageSrc}
          alt={slide.imageAlt ?? slide.title}
          fill
          className="object-contain object-center"
          sizes="(max-width: 1024px) 100vw, 630px"
          priority={slide.title === 'Verso' || slide.title === 'Wardrobe'}
          unoptimized={isGif || isRaster}
        />
      </div>
    )
  }

  return (
    <div
      className="aspect-[630/368] w-full rounded-[2px] border border-[#D0D0D0] bg-[#D9D9D9]"
      aria-hidden
    />
  )
}

function WorkSlideContent({ slide }: { slide: HomeWorkSlide }) {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="space-y-3">
        <h2
          className={`${libreBaskerville.className} text-[32px] font-normal leading-tight text-black md:text-[36px]`}
        >
          {slide.title}
        </h2>

        {slide.subtitle && (
          <p
            className="font-sans text-[16px] font-medium leading-[25px]"
            style={{ color: slide.accentColor }}
          >
            {slide.subtitle}
          </p>
        )}

        {slide.description && (
          <p className="font-sans text-[16px] font-medium leading-[25px] text-[#8E8E8E]">
            {slide.description}
          </p>
        )}
      </div>

      {slide.tags && slide.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {slide.tags.map((tag) => (
            <WorkTagChip key={tag} label={tag} variant={slide.tagVariant} />
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        {slide.devpostHref && (
          <WorkActionChip
            href={slide.devpostHref}
            label="View Devpost"
            external
            accentColor={slide.accentColor}
            icon="arrow"
          />
        )}
        {slide.codeHref && (
          <WorkActionChip
            href={slide.codeHref}
            label={slide.codeLabel ?? 'View Code'}
            external
            accentColor={slide.accentColor}
            icon="github"
          />
        )}
        {slide.caseStudyHref && (
          <WorkActionChip
            href={slide.caseStudyHref}
            label="View Case Study"
            accentColor={slide.accentColor}
            icon="arrow"
          />
        )}
      </div>
    </div>
  )
}

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInViewRef = useRef(false)
  const activeIndexRef = useRef(0)
  const wheelAccumulatorRef = useRef(0)
  const wheelCooldownRef = useRef(false)

  const slide = homeWorkSlides[activeIndex]
  const slideCount = homeWorkSlides.length
  const lastIndex = slideCount - 1

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const viewObserver = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.35
      },
      { threshold: [0, 0.35, 0.5, 0.75] }
    )
    viewObserver.observe(el)

    const onWheel = (e: WheelEvent) => {
      if (!isInViewRef.current) return

      const index = activeIndexRef.current
      const { deltaY } = e

      if (index === 0 && deltaY < 0) return

      if (index === lastIndex && deltaY > 0) {
        e.preventDefault()
        return
      }

      e.preventDefault()

      if (wheelCooldownRef.current) return

      wheelAccumulatorRef.current += deltaY

      if (Math.abs(wheelAccumulatorRef.current) < WHEEL_THRESHOLD) return

      const direction = wheelAccumulatorRef.current > 0 ? 1 : -1
      wheelAccumulatorRef.current = 0
      wheelCooldownRef.current = true

      setActiveIndex((prev) => Math.max(0, Math.min(lastIndex, prev + direction)))

      window.setTimeout(() => {
        wheelCooldownRef.current = false
      }, WHEEL_COOLDOWN_MS)
    }

    el.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      viewObserver.disconnect()
      el.removeEventListener('wheel', onWheel)
    }
  }, [lastIndex])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      setActiveIndex((prev) => Math.min(lastIndex, prev + 1))
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setActiveIndex((prev) => Math.max(0, prev - 1))
    }
  }

  return (
    <section
      ref={sectionRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative ml-auto mr-4 mt-16 w-full max-w-[1120px] overscroll-contain pb-20 outline-none md:mt-20 md:pb-28 lg:mt-24 lg:mr-14 lg:pl-6"
      aria-label="Selected work"
    >

      <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="order-2 flex w-full flex-col items-center gap-6 sm:items-stretch lg:order-1 lg:w-[46%] lg:min-w-0 lg:max-w-[520px] lg:pl-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <WorkSlideContent slide={slide} />
            </motion.div>
          </AnimatePresence>

          <WorkPaginationDots
            count={slideCount}
            activeIndex={activeIndex}
            accentColor={slide.accentColor}
            onSelect={setActiveIndex}
          />
        </div>

        <div className="order-1 w-full lg:order-2 lg:w-[52%] lg:min-w-0 lg:max-w-[560px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${slide.title}-media`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <WorkSlideMedia slide={slide} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
