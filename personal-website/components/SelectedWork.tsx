 'use client';

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { getRevealStaggerVariants, getRevealUpVariants } from "@/components/animations";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

/** Replace with your Verso Devpost submission URL (full `https://devpost.com/...` link). */
const VERSO_DEVPOST_URL = "https://devpost.com/software/verso-ctf4e9";

const projects = [
  {
    kind: "UI/UX · DESIGNATHON",
    title: "Verso",
    description:
      "A reading experience designed for synthesis, not completion—spatial library, annotation-first reading, and insights that evolve with you (Figma Make prototype).",
    tech: ["CreateSC '26", "3rd Place","Figma Make", "Interaction Design", "UI/UX"],
    mediaSrc: "/library.png",
    mediaAlt: "Verso product exploration preview",
    actions: [
      {
        label: "Devpost",
        icon: (
          <ArrowUpRight className="h-3 w-3 text-black group-hover:text-white transition-colors duration-200 group-hover:-translate-y-0.5 group-hover:-rotate-12" />
        ),
        href: VERSO_DEVPOST_URL,
      },
    ],
  },
  {
    kind: "SWIFT PACKAGE · OPEN SOURCE",
    title: "SwiftMotionKit",
    description:
      "Physics-informed swipe interactions for SwiftUI. Velocity-based dismissal, spring snap-back, haptic feedback.",
    tech: ["SwiftUI", "Swift", "iOS", "Open Source", "Package"],
    mediaSrc: "/swipeCardStackResize.gif",
    mediaAlt: "SwiftMotionKit swipe card stack animation",
    actions: [
      {
        label: "Code",
        icon: (
          <Github className="h-3 w-3 text-black group-hover:text-white transition-colors duration-200" />
        ),
        href: "https://github.com/amrita-arun/SwiftMotionKit",
      },
    ],
  },
  {
    kind: "iOS APP · IN DEVELOPMENT",
    title: "Wardrobe",
    description:
      "Outfit recommendations with weather-aware styling and carousel-driven interactions.",
    tech: ["SwiftUI", "Swift", "iOS", "Firebase", "Real-Time Scoring"],
    mediaSrc: "/WardrobeHome2.png",
    mediaAlt: "Wardrobe home screen",
    actions: [
      {
        label: "Code",
        icon: (
          <Github className="h-3 w-3 text-black group-hover:text-white transition-colors duration-200" />
        ),
        href: "https://github.com/amrita-arun/wardrobe",
      },
      /*
      {
        label: "App Store",
        icon: (
          <ArrowUpRight className="h-3 w-3 text-black group-hover:text-white transition-colors duration-200 group-hover:-translate-y-0.5 group-hover:-rotate-12" />
        ),
        href: "#",
      },
      */
    ],
  },
  {
    kind: "FULL-STACK WEB · STARTUP",
    title: "Due",
    description:
      "AI platform that transforms homework into a transparent, dynamic learning tool - avoiding the LLM black box.",
    tech: ["React", "Next.js", "Supabase", "LangChain", "AI"],
    mediaSrc: "/due.jpeg",
    mediaAlt: "Due web app interface",
    actions: [
      {
        label: "Code",
        icon: (
          <Github className="h-3 w-3 text-black group-hover:text-white transition-colors duration-200" />
        ),
        href: "https://github.com/kristiiwuu/mvp",
      },
    ],
  },
];

export function SelectedWork() {
  const reducedMotion = useReducedMotion() ?? false;
  const [canSpotlight, setCanSpotlight] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanSpotlight(mq.matches);
    update();

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }

    const legacyAddListener = (mq as unknown as { addListener?: (cb: () => void) => void })
      .addListener;
    const legacyRemoveListener = (mq as unknown as { removeListener?: (cb: () => void) => void })
      .removeListener;

    if (typeof legacyAddListener === "function" && typeof legacyRemoveListener === "function") {
      legacyAddListener(update);
      return () => legacyRemoveListener(update);
    }
  }, []);

  const enableSpotlight = canSpotlight && !reducedMotion;

  const revealUp = getRevealUpVariants({ reducedMotion, y: 18, duration: 0.45 });
  const revealStagger = getRevealStaggerVariants({
    reducedMotion,
    y: 0,
    duration: 0.4,
    staggerChildren: 0.06,
    delayChildren: 0.04,
  });

  const textStagger = getRevealStaggerVariants({
    reducedMotion,
    y: 0,
    duration: 0.35,
    staggerChildren: 0.05,
    delayChildren: 0.02,
  });

  return (
    <motion.section
      id="selected-work"
      className="mx-auto mt-[124px] w-full max-w-[1134px] px-4 pb-14"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        variants={revealUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mb-6 font-sans text-[18px] underline"
      >
        SELECTED WORK
      </motion.h2>

      <motion.div
        className="rounded-[32px] border border-black/20 bg-background px-10 py-10"
        variants={revealStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            className="flex flex-col gap-8 pb-[128px] md:flex-row md:gap-12"
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/** text column **/}
            <motion.div
              className="flex flex-[3] flex-col space-y-4"
              variants={textStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.header variants={revealUp} className="space-y-1">
                <p className="font-sans text-[14px]">{project.kind}</p>
                <h3 className="font-display text-[28px]">{project.title}</h3>
              </motion.header>

              <motion.p
                variants={revealUp}
                className="max-w-[620px] font-sans text-[16px] leading-relaxed"
              >
                {project.description}
              </motion.p>

              <motion.div variants={revealUp} className="flex flex-wrap gap-2">
                {project.tech.map((label) => (
                  <Chip key={label} variant="outline">
                    {label}
                  </Chip>
                ))}
              </motion.div>

              {project.actions.length > 0 ? (
                <motion.div variants={revealUp} className="flex flex-wrap gap-2">
                  {project.actions.map((action) => (
                    <Chip
                      key={action.label}
                      href={action.href}
                      styleType="action"
                      iconLeft={action.icon}
                    >
                      {action.label}
                    </Chip>
                  ))}
                </motion.div>
              ) : null}
            </motion.div>

            {/** media column **/}
            <motion.div
              className="flex flex-[2] items-center justify-end"
              variants={revealUp}
            >
              {project.mediaSrc && (
                <SpotlightMedia
                  src={project.mediaSrc}
                  alt={project.mediaAlt ?? ""}
                  enableSpotlight={enableSpotlight}
                />
              )}
            </motion.div>

            {idx < projects.length - 1 && (
              <div className="border-b border-black/15" />
            )}
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

type SpotlightMediaProps = {
  src: string;
  alt: string;
  enableSpotlight: boolean;
};

/** Uniform preview tile: same max width + 4:3 frame, content letterboxed with object-contain. */
function SpotlightMedia({ src, alt, enableSpotlight }: SpotlightMediaProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const ringSizePx = 14;
  const proximityPx = 300;
  const hitPaddingPx = proximityPx + ringSizePx;

  const initialSpotStyle: CSSProperties & Record<string, string> = {
    "--ring-o": "0",
  };

  const setRingOpacity = (o: number) => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style.setProperty("--ring-o", `${Math.max(0, Math.min(1, o))}`);
  };

  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!enableSpotlight) return;

    const tileRect = wrapperRef.current?.getBoundingClientRect();
    if (!tileRect) return;

    const px = e.clientX - tileRect.left;
    const py = e.clientY - tileRect.top;

    const inside =
      px >= 0 && py >= 0 && px <= tileRect.width && py <= tileRect.height;

    // When the cursor is anywhere inside the image, keep the glow at full strength.
    const t = inside
      ? 1
      : (() => {
          // Outside the image, fade the glow in as we approach the edge.
          const dx =
            px < 0 ? -px : px > tileRect.width ? px - tileRect.width : 0;
          const dy =
            py < 0 ? -py : py > tileRect.height ? py - tileRect.height : 0;
          const distToNearestEdge = Math.sqrt(dx * dx + dy * dy);
          const tRaw = (proximityPx - distToNearestEdge) / proximityPx;
          const tClamped = Math.max(0, Math.min(1, tRaw));
          return Math.pow(tClamped, 0.75);
        })();

    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      setRingOpacity(t);
    });
  };

  const handlePointerLeave: React.PointerEventHandler<HTMLDivElement> = () => {
    if (!enableSpotlight) return;
    setRingOpacity(0);
  };

  return (
    <div
      className="group relative w-full max-w-[min(100%,400px)] min-w-0 md:max-w-[420px]"
      style={initialSpotStyle}
    >
      <div
        ref={wrapperRef}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]"
      >
        <div
          className="pointer-events-none absolute inset-0 z-[1] rounded-[10px] transition-opacity duration-200"
          style={
            {
              boxShadow:
                "0 0 0 1px rgba(183,156,255,calc(var(--ring-o) * 0.55)), 0 0 44px 14px rgba(183,156,255,calc(var(--ring-o) * 0.45))",
              filter: "blur(0.2px)",
            } as CSSProperties
          }
        />
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-contain object-center"
        />
      </div>
      {/* Invisible hit area so the glow can activate before the cursor is directly on the tile */}
      <div
        aria-hidden
        className="absolute z-10 bg-transparent"
        style={{
          top: -hitPaddingPx,
          left: -hitPaddingPx,
          right: -hitPaddingPx,
          bottom: -hitPaddingPx,
          borderRadius: 10,
        }}
        onPointerMove={enableSpotlight ? handlePointerMove : undefined}
        onPointerLeave={enableSpotlight ? handlePointerLeave : undefined}
      />
    </div>
  );
}

