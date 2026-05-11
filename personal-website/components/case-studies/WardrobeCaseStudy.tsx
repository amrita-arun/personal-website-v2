"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getRevealStaggerVariants, getRevealUpVariants } from "@/components/animations";

const lead = "font-sans text-[18px] leading-relaxed text-black";
const meta = "font-sans text-[14px] text-black/70";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-0 font-sans text-[18px] font-normal underline decoration-solid underline-offset-4">
      {children}
    </h2>
  );
}

export function WardrobeCaseStudy() {
  const reducedMotion = useReducedMotion() ?? false;
  const revealUp = getRevealUpVariants({ reducedMotion, y: 18, duration: 0.45 });
  const revealStagger = getRevealStaggerVariants({
    reducedMotion,
    y: 14,
    duration: 0.42,
    staggerChildren: 0.05,
    delayChildren: 0.02,
  });

  return (
    <div className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0.01 : 0.4 }}
        className="mb-10"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-sans text-[18px] leading-relaxed text-black/80 transition-colors hover:text-[#B79CFF]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to work
        </Link>
      </motion.div>

      <motion.header
        className="mb-12 space-y-4"
        initial="hidden"
        animate="show"
        variants={revealStagger}
      >
        <motion.p variants={revealUp} className={meta}>
          iOS APP · IN DEVELOPMENT
        </motion.p>
        <motion.h1
          variants={revealUp}
          className="font-display text-[28px] leading-tight text-black"
        >
          Wardrobe
        </motion.h1>
        <motion.p variants={revealUp} className={`max-w-[720px] ${lead}`}>
          Outfit recommendations with weather-aware styling and carousel-driven interactions—built
          in SwiftUI with Firebase-backed scoring.
        </motion.p>
      </motion.header>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={revealStagger}
        className="mb-16 flex justify-center"
      >
        <motion.div
          variants={revealUp}
          className="relative max-w-[280px] overflow-hidden rounded-[10px] border border-black/15 bg-black/5 shadow-sm md:max-w-[320px]"
        >
          <Image
            src="/Home - Like.png"
            alt="Wardrobe app home screen with outfit carousel"
            width={900}
            height={540}
            className="h-auto w-50 object-contain"
            priority
          />
        </motion.div>
      </motion.div>

      <div className="flex flex-col gap-16 md:gap-20">
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={revealStagger}
          className="space-y-4"
        >
          <motion.div variants={revealUp}>
            <SectionTitle>OVERVIEW</SectionTitle>
          </motion.div>
          <motion.div
            variants={revealUp}
            className="max-w-[720px] space-y-4 font-sans text-[16px] leading-relaxed text-black"
          >
            <p>
              Wardrobe helps you decide what to wear by combining closet items, local weather, and
              lightweight scoring so suggestions feel contextual—not generic.
            </p>
            <p>
              The experience leans on native SwiftUI patterns (carousel, haptics, and fluid motion)
              while keeping room for future personalization as the product matures.
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={revealStagger}
          className="space-y-4"
        >
          <motion.div variants={revealUp}>
            <SectionTitle>PRODUCT FOCUS</SectionTitle>
          </motion.div>
          <motion.ul
            variants={revealUp}
            className="max-w-[720px] list-disc space-y-3 pl-6 font-sans text-[16px] leading-relaxed text-black"
          >
            <li>Weather-aware outfit scoring so recommendations match the day ahead.</li>
            <li>Carousel-driven flows for browsing outfits quickly with clear affordances.</li>
            <li>Firebase-backed real-time scoring hooks for iterative ranking experiments.</li>
            <li>SwiftUI-first UI for responsive layout, accessibility, and motion polish.</li>
          </motion.ul>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealStagger}
          className="space-y-6"
        >
          <motion.div variants={revealUp}>
            <SectionTitle>SCREENSHOTS</SectionTitle>
          </motion.div>
          <motion.div
            variants={revealUp}
            className="grid gap-8 md:grid-cols-2 md:gap-10"
          >
            <figure className="space-y-3">
              <div className="overflow-hidden rounded-[10px] border border-black/15 bg-black/5">
                <Image
                  src="/WardrobeHome.png"
                  alt="Wardrobe alternate home layout"
                  width={900}
                  height={540}
                  className="h-auto w-full object-contain"
                />
              </div>
              <figcaption className={meta}>
                Home exploration and layout variants.
              </figcaption>
            </figure>
            <figure className="space-y-3">
              <div className="overflow-hidden rounded-[10px] border border-black/15 bg-black/5">
                <Image
                  src="/Home - Like.png"
                  alt="Wardrobe like interaction on home"
                  width={900}
                  height={540}
                  className="h-auto w-full object-contain"
                />
              </div>
              <figcaption className={meta}>
                Like-driven feedback in the primary carousel flow.
              </figcaption>
            </figure>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealStagger}
          className="space-y-4 border-t border-black/15 pt-12"
        >
          <motion.div variants={revealUp}>
            <SectionTitle>NEXT</SectionTitle>
          </motion.div>
          <motion.p
            variants={revealUp}
            className="max-w-[720px] font-sans text-[16px] leading-relaxed text-black"
          >
            Ship a TestFlight build, tighten onboarding, and validate scoring weights with real
            closet data. Open source development continues on GitHub—contributions and feedback are
            welcome.
          </motion.p>
        </motion.section>
      </div>
    </div>
  );
}
