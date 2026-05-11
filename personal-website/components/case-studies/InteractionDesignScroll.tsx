"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

const PLACEHOLDER = "/work/verso/placeholder-picture.png";

export type InteractionSlide = {
  src: string;
  alt: string;
  title: string;
  paragraphs: readonly [string, string];
};

export const VERSO_INTERACTION_SLIDES: readonly InteractionSlide[] = [
  {
    src: PLACEHOLDER,
    alt: "Drawing connections — linking annotations across books and moments",
    title: "01 · Drawing Connections",
    paragraphs: [
      "Users can link annotations across books and moments.",
      "Isolated thoughts become relationships—meaning from how ideas echo and evolve, not only from what you read.",
    ],
  },
  {
    src: PLACEHOLDER,
    alt: "Gesture and canvas — placing and refining notes in space",
    title: "02 · Gesture on the Canvas",
    paragraphs: [
      "Annotations live in a spatial canvas so grouping and distance carry meaning.",
      "Direct manipulation keeps reflection close to the passage that sparked it.",
    ],
  },
  {
    src: PLACEHOLDER,
    alt: "Insights over time — themes that emerge from repeated use",
    title: "03 · Insights That Deepen",
    paragraphs: [
      "Clusters and prompts surface as the system learns your patterns of attention.",
      "The interface rewards return visits: structure emerges instead of staying static.",
    ],
  },
] as const;

const GAP_PX = 20;

type InteractionDesignScrollProps = {
  slides?: readonly InteractionSlide[];
};

/**
 * Vertical page scroll scrubs a horizontal strip of slides; copy updates from scroll position.
 * Falls back to a stacked layout when prefers-reduced-motion is on.
 */
export function InteractionDesignScroll({
  slides = VERSO_INTERACTION_SLIDES,
}: InteractionDesignScrollProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportW, setViewportW] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const n = slides.length;
  const stepPx = viewportW > 0 ? viewportW + GAP_PX : 0;
  const maxXPx = stepPx * Math.max(0, n - 1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, (progress) => -progress * maxXPx);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (n <= 1) {
      setActiveIndex(0);
      return;
    }
    const idx = Math.round(v * (n - 1));
    setActiveIndex(Math.max(0, Math.min(n - 1, idx)));
  });

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => setViewportW(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const slideW = Math.max(viewportW, 280);

  if (reducedMotion) {
    return (
      <div className="flex flex-col gap-14">
        {slides.map((slide) => (
          <div key={slide.title} className="space-y-4">
            <div className="overflow-hidden rounded-[10px] border border-black/15 bg-[#dde1e6] shadow-sm">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={520}
                height={390}
                className="aspect-[4/3] w-full max-w-[520px] object-cover"
              />
            </div>
            <div className="max-w-[560px] space-y-3 font-sans text-[16px] leading-relaxed text-black">
              <h3 className="font-medium italic">{slide.title}</h3>
              <p>{slide.paragraphs[0]}</p>
              <p>{slide.paragraphs[1]}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const active = slides[activeIndex] ?? slides[0];

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${n * 100}vh` }}
      aria-label="Interaction design — scroll down to advance frames"
    >
      <div className="sticky top-0 z-10 flex min-h-[100dvh] flex-col justify-center gap-8 py-10 md:gap-10 md:py-12">
        <div ref={viewportRef} className="relative w-full overflow-hidden">
          <motion.div style={{ x }} className="flex flex-row gap-5 will-change-transform">
            {slides.map((slide) => (
              <div
                key={slide.title}
                className="shrink-0 overflow-hidden rounded-[10px] border border-black/15 bg-[#dde1e6] shadow-sm"
                style={{ width: slideW }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={520}
                  height={390}
                  sizes="(max-width: 768px) 90vw, 520px"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="pointer-events-none flex min-h-[8.5rem] flex-col items-center justify-start md:min-h-[9rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="pointer-events-auto max-w-[min(100%,560px)] space-y-3 text-center font-sans text-[16px] leading-relaxed text-black"
            >
              <h3 className="font-medium italic">{active.title}</h3>
              <p>{active.paragraphs[0]}</p>
              <p>{active.paragraphs[1]}</p>
              <p className="font-sans text-[14px] text-black/60" aria-live="polite">
                {activeIndex + 1} / {n} · keep scrolling
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
