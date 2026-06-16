'use client'

import { libreBaskerville } from '@/lib/fonts'
import SelectedWork from '@/components/SelectedWork'

export default function FigmaFirstViewport() {
  return (
    <main className="relative flex-1 text-black">
      <div className="mx-auto w-full max-w-[1512px] flex-col px-4 pb-10 md:px-8 md:pb-12">
        <section className="mx-auto flex w-full max-w-[720px] flex-col items-center pt-14 text-center md:pt-16">
          <p className="font-sans text-[16px] font-medium text-[#8E8E8E]">hi, i&apos;m</p>
          <h1
            className={`${libreBaskerville.className} mt-2 text-[44px] font-normal leading-tight md:text-[48px]`}
          >
            Amrita Arun
          </h1>

          <div className="mt-8 max-w-[620px] space-y-[25px] font-sans text-[16px] font-medium leading-[25px] text-[#DC4F7C]">
            <p>i&apos;m a design engineer who builds interactions that feel delightful.</p>
            <p>
              i study CS at the University of Southern California. my dev background allows me to
              leverage AI and prototype quickly.
            </p>
          </div>
        </section>

        <SelectedWork />
      </div>
    </main>
  )
}
