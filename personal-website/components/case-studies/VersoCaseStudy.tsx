"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { getRevealStaggerVariants, getRevealUpVariants } from "@/components/animations";
import { InteractionDesignScroll } from "@/components/case-studies/InteractionDesignScroll";

const ASSETS = {
  placeholder: "/work/verso/placeholder-picture.png",
  baby: "/work/verso/baby-photo.png",
} as const;

/** Typography aligned with home: Hero/lead 18px, SelectedWork body 16px, section labels 18px underline, titles 28px display, meta 14px */
const lead = "font-sans text-[18px] leading-relaxed text-black";
const meta = "font-sans text-[14px] text-black/70";

const heroChips = [
  "CreateSC '26",
  "3rd Place",
  "Solo",
  "UI/UX",
  "Figma Make",
  "Interaction Design",
] as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-0 font-sans text-[18px] font-normal underline decoration-solid underline-offset-4">
      {children}
    </h2>
  );
}

function PlaceholderFigure({
  caption,
  className = "",
  wide = false,
}: {
  caption?: string;
  className?: string;
  wide?: boolean;
}) {
  return (
    <figure className={`shrink-0 ${className}`}>
      <div className="overflow-hidden rounded-[10px] border border-black/15 bg-[#dde1e6]">
        <Image
          src={ASSETS.placeholder}
          alt=""
          width={wide ? 456 : 344}
          height={wide ? 256 : 247}
          className="h-auto w-full object-cover"
        />
      </div>
      {caption ? (
        <figcaption className={`mt-3 text-center ${meta}`}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function VersoCaseStudy() {
  const reducedMotion = useReducedMotion() ?? false;
  const revealUp = getRevealUpVariants({ reducedMotion, y: 18, duration: 0.45 });
  const revealStagger = getRevealStaggerVariants({
    reducedMotion,
    y: 14,
    duration: 0.42,
    staggerChildren: 0.05,
    delayChildren: 0.02,
  });
  const floatTransition = reducedMotion
    ? { duration: 0 }
    : { duration: 4, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" };

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

      {/* Hero */}
      <motion.header
        className="mb-10 space-y-6"
        initial="hidden"
        animate="show"
        variants={revealStagger}
      >
        <motion.div variants={revealUp} className="space-y-2">
          <h1 className="font-display text-[28px] leading-tight text-black">
            <span>Verso: </span>
            <span className="mt-1 block font-sans text-[18px] font-normal leading-relaxed text-black md:mt-0 md:inline md:pl-1">
              A Reading App that Grows With You
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={revealUp}
          className="relative flex aspect-[773/434] max-h-[min(434px,50vh)] w-full max-w-[773px] items-center justify-center overflow-hidden rounded-[12px] border border-black/15 bg-[#dde1e6]"
        >
          <motion.button
            type="button"
            aria-label="Play prototype preview (placeholder)"
            className="flex size-20 items-center justify-center rounded-full border border-black/20 bg-white/90 text-black shadow-sm transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B79CFF]"
            whileHover={reducedMotion ? undefined : { scale: 1.06 }}
            whileTap={reducedMotion ? undefined : { scale: 0.98 }}
          >
            <Play className="ml-1 size-10 fill-current" strokeWidth={0} aria-hidden />
          </motion.button>
        </motion.div>

        <motion.p variants={revealUp} className={`max-w-[720px] ${lead}`}>
          A reading experience designed for synthesis, not completion.
        </motion.p>

        <motion.div variants={revealUp} className="flex flex-wrap gap-2">
          {heroChips.map((label) => (
            <Chip key={label} variant="outline">
              {label}
            </Chip>
          ))}
        </motion.div>
      </motion.header>

      <div className="flex flex-col gap-20 md:gap-24">
        {/* THE PROMPT */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={revealStagger}
          className="space-y-4"
        >
          <motion.div variants={revealUp}>
            <SectionTitle>THE PROMPT</SectionTitle>
          </motion.div>
          <motion.div
            variants={revealUp}
            className="max-w-[720px] space-y-4 font-sans text-[16px] leading-relaxed text-black"
          >
            <p>
              Find a digital experience that feels over-optimized (i.e. sterile, frictionless,
              forgettable).
            </p>
            <p>
              Reimagine it so the interface changes through repeated use, introducing variation,
              wear, or adaptation over time. Use Figma Make to prototype interactions where the
              system evolves with use in ways that would be difficult to express in a static
              design.
            </p>
          </motion.div>
        </motion.section>

        {/* THE PROBLEM */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealStagger}
          className="space-y-8"
        >
          <motion.div variants={revealUp}>
            <SectionTitle>THE PROBLEM</SectionTitle>
          </motion.div>
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
            <motion.div
              variants={revealUp}
              className="max-w-[760px] space-y-4 font-sans text-[16px] leading-relaxed text-black"
            >
              <p>
                Today&apos;s reading platforms optimize for{" "}
                <strong className="font-semibold">speed and completion.</strong>
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="font-semibold">Goodreads</strong> captures reflection only
                  after the book is finished
                </li>
                <li>
                  <strong className="font-semibold">Kindle and Libby</strong> reduce annotation to
                  passive highlighting
                </li>
                <li>
                  <strong className="font-semibold">Recommendations</strong> rely on the crowd—not
                  your thinking
                </li>
              </ul>
              <p>
                What&apos;s missing is a way to{" "}
                <strong className="font-semibold">understand yourself</strong> through what you
                read.
              </p>
              <p>
                Your annotations—moments of pause, curiosity, and emotion—are never{" "}
                <strong className="font-semibold">synthesized</strong> into something meaningful.
              </p>
            </motion.div>
            <motion.figure
              variants={revealUp}
              className="mx-auto w-[214px] shrink-0 md:mx-0 md:mt-2"
            >
              <div className="overflow-hidden rounded-[10px] border border-black/15">
                <Image
                  src={ASSETS.baby}
                  alt="Young Amrita reading a book"
                  width={214}
                  height={279}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className={`mt-3 text-center ${meta}`}>
                baby amrita and book :)
              </figcaption>
            </motion.figure>
          </div>
        </motion.section>

        {/* A quick read */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={revealStagger}
          className="space-y-10"
        >
          <motion.div variants={revealUp}>
            <SectionTitle>A QUICK READ ON TODAY&apos;S READING TOOLS (pun intended)</SectionTitle>
          </motion.div>

          <div className="flex flex-col gap-12">
            <motion.article
              variants={revealUp}
              className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12"
            >
              <div className="max-w-[513px] space-y-3 font-sans text-[16px] leading-relaxed text-black">
                <h3 className="font-medium italic leading-snug">
                  Against algorithmic discovery
                </h3>
                <p className="leading-relaxed">
                  Reading has become algorithmic. We default to ratings, lists, and &quot;what
                  everyone else thinks&quot;—losing the experience of wandering and choosing for
                  ourselves.
                </p>
              </div>
              <PlaceholderFigure wide className="w-full max-w-[456px] md:w-auto" />
            </motion.article>

            <motion.article
              variants={revealUp}
              className="flex flex-col gap-8 md:flex-row-reverse md:items-center md:justify-between md:gap-12"
            >
              <div className="max-w-[513px] space-y-3 font-sans text-[16px] leading-relaxed text-black">
                <h3 className="font-medium italic leading-snug">Annotation is flattened</h3>
                <p className="leading-relaxed">
                  Digital highlighting captures text, but not thought. It removes the friction that
                  makes reflection meaningful.
                </p>
              </div>
              <PlaceholderFigure wide className="w-full max-w-[456px] md:w-auto" />
            </motion.article>

            <motion.article
              variants={revealUp}
              className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12"
            >
              <div className="max-w-[513px] space-y-3 font-sans text-[16px] leading-relaxed text-black">
                <h3 className="font-medium italic leading-snug">Reflection is disconnected</h3>
                <p className="leading-relaxed">
                  Notes live in isolation. There&apos;s no way to see patterns across what
                  you&apos;ve read—or what it reveals about you.
                </p>
              </div>
              <PlaceholderFigure wide className="w-full max-w-[456px] md:w-auto" />
            </motion.article>
          </div>

          <motion.div
            variants={revealUp}
            className="max-w-[720px] space-y-3 font-sans text-[16px] leading-relaxed text-black"
          >
            <p>
              Due to the 24hr time constraints, my project guidelines came from{" "}
              <strong className="font-semibold">lived experience and frustration</strong> with how
              reading has been digitized.
            </p>
            <p>I focused on three patterns that felt fundamentally broken:</p>
          </motion.div>
        </motion.section>

        {/* Design system */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealStagger}
          className="space-y-6"
        >
          <motion.div variants={revealUp}>
            <SectionTitle>DESIGN SYSTEM, MOODBOARDING, INSPO</SectionTitle>
          </motion.div>
          <motion.div
            variants={revealUp}
            className="max-w-[720px] space-y-4 font-sans text-[16px] leading-relaxed text-black"
          >
            <p>Verso draws from the tactile, analog experience of reading.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-medium">Crimson Text</span> for passages, echoing traditional
                books
              </li>
              <li>
                <span className="font-medium">Courier Prime</span> for annotations, capturing
                individuality
              </li>
              <li>DM Sans for interface clarity</li>
            </ul>
            <p>
              A cream background, generous margins, and a risograph-inspired palette reinforce{" "}
              <strong className="font-semibold">slowness and intentionality.</strong>
            </p>
          </motion.div>
          <motion.div
            variants={revealUp}
            className="flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row md:gap-8"
          >
            <PlaceholderFigure caption="Caption 1" />
            <PlaceholderFigure caption="Caption 2" />
            <PlaceholderFigure caption="Caption 3" />
          </motion.div>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={revealStagger}
          className="space-y-12"
        >
          <motion.div variants={revealUp}>
            <SectionTitle>SOLUTION</SectionTitle>
          </motion.div>

          <motion.article
            variants={revealUp}
            className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12"
          >
            <div className="max-w-[513px] space-y-3 font-sans text-[16px] leading-relaxed text-black">
              <h3 className="font-medium italic">01 · Library</h3>
              <p className="leading-relaxed">
                Book recommendations are presented as a spatial shelf—no search, no ratings.
              </p>
              <p className="leading-relaxed">
                Recommendations are generated from your own annotations.
              </p>
            </div>
            <PlaceholderFigure wide className="w-full max-w-[456px] md:w-auto" />
          </motion.article>

          <motion.article
            variants={revealUp}
            className="flex flex-col gap-8 md:flex-row-reverse md:items-center md:justify-between md:gap-12"
          >
            <div className="max-w-[513px] space-y-3 font-sans text-[16px] leading-relaxed text-black">
              <h3 className="font-medium italic">02 · Currently Reading</h3>
              <p className="leading-relaxed">
                A distraction-free reading experience with generous margins.
              </p>
              <p className="leading-relaxed">No progress bars. No completion metrics.</p>
              <p className="leading-relaxed">Highlight → annotate → reflect.</p>
            </div>
            <PlaceholderFigure wide className="w-full max-w-[456px] md:w-auto" />
          </motion.article>

          <motion.article
            variants={revealUp}
            className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12"
          >
            <div className="max-w-[513px] space-y-3 font-sans text-[16px] leading-relaxed text-black">
              <h3 className="font-medium italic">03 · Insights</h3>
              <p className="leading-relaxed">Annotations evolve into a living canvas.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Ideas cluster into emergent themes</li>
                <li>Connections form across books</li>
                <li>Reflection prompts appear contextually</li>
              </ul>
              <p className="leading-relaxed">Over time, your thinking becomes visible.</p>
            </div>
            <PlaceholderFigure wide className="w-full max-w-[456px] md:w-auto" />
          </motion.article>
        </motion.section>

        {/* Outcomes */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealStagger}
          className="space-y-12"
        >
          <motion.div variants={revealUp}>
            <SectionTitle>OUTCOMES</SectionTitle>
          </motion.div>
          <div className="relative flex min-h-[320px] flex-col items-center justify-center gap-16 py-8 md:min-h-[380px] md:flex-row md:gap-8">
            <motion.div
              className="relative z-[1] flex flex-col items-center"
              animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
              transition={floatTransition}
            >
              <div className="-rotate-[8deg] shadow-sm">
                <PlaceholderFigure wide caption="LIBRARY" />
              </div>
            </motion.div>
            <motion.div
              className="relative z-[2] flex flex-col items-center md:-mt-8"
              animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
              transition={{ ...floatTransition, delay: 0.5 }}
            >
              <div className="rotate-[8deg] shadow-sm">
                <PlaceholderFigure wide caption="WINNING!" />
              </div>
            </motion.div>
            <motion.div
              className="relative z-[0] flex flex-col items-center md:-ml-4"
              animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
              transition={{ ...floatTransition, delay: 1 }}
            >
              <div className="-rotate-[6deg] md:rotate-[6deg]">
                <PlaceholderFigure wide caption="INSIGHTS SCREEN" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Interaction design */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={revealStagger}
          className="space-y-10"
        >
          <motion.div variants={revealUp}>
            <SectionTitle>INTERACTION DESIGN</SectionTitle>
          </motion.div>
          <motion.div variants={revealUp} className="w-full max-w-[1134px]">
            <p className={`mb-6 text-center md:text-left ${meta}`}>
              Scroll down to scrub through interaction frames; copy updates with each slide.
            </p>
            <InteractionDesignScroll />
          </motion.div>
        </motion.section>

        {/* Prototype to product */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={revealStagger}
          className="space-y-8"
        >
          <motion.div variants={revealUp}>
            <SectionTitle>FROM PROTOTYPE TO PRODUCT</SectionTitle>
          </motion.div>
          <motion.p
            variants={revealUp}
            className="max-w-[720px] font-sans text-[16px] leading-relaxed text-black"
          >
            As an engineer, I was constantly visualizing how an engineer could implement my
            designs. Verso was prototyped in Figma Design and Figma Make, creating a solid
            representation for its fundamental behaviors. Here&apos;s how I would implement
            Verso.
          </motion.p>

          <motion.div
            variants={revealUp}
            className="grid gap-12 md:grid-cols-3 md:gap-8"
          >
            <div className="space-y-4 text-center font-sans text-[16px] leading-relaxed text-black md:text-left">
              <p className={`text-center md:text-left ${meta}`}>
                [01]
                <br />
                System
              </p>
              <p>
                I began with static explorations in Figma, defining layout, typography, and
                interaction patterns.
              </p>
              <p>Figma Make allowed me to simulate what static design couldn&apos;t capture.</p>
            </div>
            <div className="space-y-4 text-center font-sans text-[16px] leading-relaxed text-black md:text-left">
              <p className={`text-center md:text-left ${meta}`}>
                [02]
                <br />
                Platform
              </p>
              <p>
                If built, Verso would be designed as a{" "}
                <strong className="font-semibold">tablet-first mobile app</strong>.
              </p>
              <p>Most long-form reading already happens on devices like iPads and Kindles.</p>
            </div>
            <div className="space-y-4 text-center font-sans text-[16px] leading-relaxed text-black md:text-left">
              <p className={`text-center md:text-left ${meta}`}>
                [03]
                <br />
                Architecture
              </p>
              <p>At a high level, Verso would rely on a few core systems:</p>
              <ul className="space-y-3 text-left">
                <li>
                  <strong className="font-semibold">Annotation Engine</strong>
                  <br />
                  Captures highlights + user-written notes as structured data.
                </li>
                <li>
                  <strong className="font-semibold">Clustering Logic</strong>
                  <br />
                  Groups annotations based on semantic similarity (themes emerge over time)
                </li>
                <li>
                  <strong className="font-semibold">Spatial Canvas</strong>
                  <br />
                  Positions and repositions annotations dynamically as new input is added
                </li>
                <li>
                  <strong className="font-semibold">Temporal Layer</strong>
                  <br />
                  Tracks when annotations were created, enabling timeline-based interaction
                </li>
                <li>
                  <strong className="font-semibold">Prompt System</strong>
                  <br />
                  Triggers reflective questions based on patterns (e.g. repeated themes)
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={revealUp}
            className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-10"
          >
            <PlaceholderFigure className="w-full max-w-[424px]" />
            <PlaceholderFigure className="w-full max-w-[427px]" />
          </motion.div>
        </motion.section>

        {/* Lessons */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealStagger}
          className="space-y-4 border-t border-black/15 pt-16"
        >
          <motion.div variants={revealUp}>
            <SectionTitle>LESSONS</SectionTitle>
          </motion.div>
          <motion.div
            variants={revealUp}
            className="max-w-[720px] space-y-4 font-sans text-[16px] leading-relaxed text-black"
          >
            <p>
              A 24-hour sprint rewards ruthless prioritization: I anchored on one provocative thesis
              (synthesis over completion) and used Figma Make to show motion and adaptation that
              static frames could not carry alone.
            </p>
            <p>
              Prototyping early forced engineering-adjacent clarity—annotation structure, clustering,
              and prompts had to feel implementable, not decorative.
            </p>
            <p>
              Next, I would validate with readers through moderated sessions, measure comprehension
              and reflection quality, and iterate on the insights canvas before scaling visual
              polish.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
