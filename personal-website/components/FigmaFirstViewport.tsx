'use client'

import { ChevronDown } from 'lucide-react'
import { libreBaskerville } from '@/lib/fonts'
import SelectedWork from '@/components/SelectedWork'

export default function FigmaFirstViewport() {
  return (
    <main className="relative flex-1 text-black">
      <div className="mx-auto w-full max-w-[1512px] flex-col px-4 pb-10 md:px-8 md:pb-12">
        <section className="mx-auto flex w-full max-w-[1100px] flex-col items-center pt-14 text-center md:pt-16">
          <p className="font-sans text-[16px] font-medium text-[#8E8E8E]">hi, i&apos;m</p>
          <h1
            className={`${libreBaskerville.className} mt-2 text-[44px] font-normal leading-tight md:text-[48px]`}
          >
            Amrita Arun
          </h1>

          <div className="mt-8 w-full max-w-[620px] space-y-[25px] font-sans text-[16px] font-medium leading-[25px] text-[#DC4F7C] md:max-w-[1040px]">
            <p className="md:whitespace-nowrap">
              i&apos;m an iOS and backend engineer who builds products to solve everyday problems I see.
            </p>
            <p className="md:whitespace-nowrap">
              i study CS at the University of Southern California, graduating in december 2026.
              i leverage AI and prototype quickly.
            </p>
          </div>

          <a
            href="#selected-work"
            className="mt-10 flex flex-col items-center gap-1 text-[#8E8E8E] transition-colors hover:text-[#DC4F7C]"
            aria-label="Scroll down to selected work"
          >
            <span className="font-sans text-[12px] font-medium tracking-wide">scroll</span>
            <ChevronDown
              className="h-5 w-5 animate-scroll-nudge"
              strokeWidth={1.75}
              aria-hidden
            />
          </a>
        </section>

        <SelectedWork />
      </div>
    </main>
  )
}
