'use client'

import Image from 'next/image'
import Experiences from '@/components/Experiences'

export default function AboutMe() {
  return (
    <section id="about" className="mx-auto mt-10 w-full max-w-[1399px] px-4 pb-24 md:mt-14 md:px-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(260px,332px)_minmax(0,1fr)] md:gap-16">
        <div className="mx-auto w-full max-w-[332px]">
          <div className="relative aspect-[332/385] w-full overflow-hidden rounded-lg bg-[#D9D9D9]">
            <Image
              src="/headshot2.JPG"
              alt="Portrait of Amrita Arun"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 332px"
              priority={false}
            />
          </div>
        </div>

        <div className="space-y-10 text-left">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[156px_minmax(0,1fr)] md:gap-6">
            <p className="font-sans text-[16px] font-medium text-[#8E8E8E]">a little bit about me...</p>
            <div className="space-y-6 font-sans text-[16px] font-medium leading-[25px] text-[#DC4F7C]">
              <p>
                i&apos;m a lifelong artist who loves bringing her ideas to life, whether that be through
                design, physical media, or programming!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-[156px_minmax(0,1fr)] md:gap-6">
            <p className="font-sans text-[16px] font-medium text-[#8E8E8E]">my experience....</p>
            <Experiences variant="about" showHeading={false} />
          </div>
        </div>
      </div>
    </section>
  )
}
