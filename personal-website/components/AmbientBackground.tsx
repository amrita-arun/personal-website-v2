'use client'

import { useEffect, useState } from 'react'

type BlobProps = {
  className: string
  reducedMotion: boolean
  animationClass: string
}

function Blob({ className, reducedMotion, animationClass }: BlobProps) {
  return (
    <div
      className={`absolute rounded-full ${className} ${reducedMotion ? '' : animationClass}`}
    />
  )
}

export default function AmbientBackground() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 min-h-full overflow-hidden bg-[#FEF8F0]"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top region */}
      <Blob
        reducedMotion={reducedMotion}
        animationClass="animate-lava-1"
        className="-left-[14%] -top-[30%] h-[min(95vw,780px)] w-[min(95vw,780px)] bg-[#FFDAE8]/72 blur-[68px]"
      />
      <Blob
        reducedMotion={reducedMotion}
        animationClass="animate-lava-2"
        className="-right-[20%] top-[4%] h-[min(90vw,680px)] w-[min(90vw,680px)] bg-[#FCE6BF]/75 blur-[72px]"
      />

      {/* Mid-page blobs for long scroll */}
      <Blob
        reducedMotion={reducedMotion}
        animationClass="animate-lava-3"
        className="left-[5%] top-[32%] h-[min(85vw,620px)] w-[min(85vw,620px)] bg-[#F5D8E0]/68 blur-[76px]"
      />
      <Blob
        reducedMotion={reducedMotion}
        animationClass="animate-lava-4"
        className="right-[0%] top-[38%] h-[min(80vw,560px)] w-[min(80vw,560px)] bg-[#FFE8D4]/65 blur-[70px]"
      />
      <Blob
        reducedMotion={reducedMotion}
        animationClass="animate-lava-2"
        className="left-[20%] top-[58%] h-[min(88vw,640px)] w-[min(88vw,640px)] bg-[#FFDAE8]/60 blur-[74px]"
      />
      <Blob
        reducedMotion={reducedMotion}
        animationClass="animate-lava-1"
        className="-right-[12%] top-[62%] h-[min(82vw,600px)] w-[min(82vw,600px)] bg-[#FCE6BF]/70 blur-[72px]"
      />
      <Blob
        reducedMotion={reducedMotion}
        animationClass="animate-lava-3"
        className="left-[10%] top-[82%] h-[min(75vw,520px)] w-[min(75vw,520px)] bg-[#F5D8E0]/62 blur-[80px]"
      />
      <Blob
        reducedMotion={reducedMotion}
        animationClass="animate-lava-4"
        className="right-[8%] top-[88%] h-[min(70vw,480px)] w-[min(70vw,480px)] bg-[#FFE8D4]/65 blur-[68px]"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(254,228,238,0.52) 0%, rgba(255,244,220,0.58) 50%, rgba(254,232,220,0.52) 100%)',
        }}
      />
    </div>
  )
}
