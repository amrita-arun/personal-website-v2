'use client';

import Link from "next/link";
// import Image from "next/image"; // uncomment when you add the fan images back
import { motion, useReducedMotion } from "framer-motion";
import { Chip } from "@/components/ui/chip";
import { getRevealStaggerVariants, getRevealUpVariants } from "@/components/animations";

/* When you have 7 images, uncomment this block and the fan section below. Add paths (files in /public).
const fanImages = [
  '/about-1.jpg',
  '/about-2.jpg',
  '/about-3.jpg',
  '/about-4.jpg',
  '/about-5.jpg',
  '/about-6.jpg',
  '/about-7.jpg',
];
const fanTransforms = [
  'group-hover:-translate-x-[420px] group-hover:rotate-[-14deg]',
  'group-hover:-translate-x-[280px] group-hover:rotate-[-9deg]',
  'group-hover:-translate-x-[170px] group-hover:rotate-[-4deg]',
  'group-hover:translate-y-[-8px]',
  'group-hover:translate-x-[170px] group-hover:rotate-[4deg]',
  'group-hover:translate-x-[280px] group-hover:rotate-[9deg]',
  'group-hover:translate-x-[420px] group-hover:rotate-[14deg]',
];
*/

const badges = [
  "USC ‘26",
  "Incoming SWE Intern @ Tradeweb",
  "Open to new-grad roles",
  "Based in Bay Area/LA",
];

export function About() {
  const reducedMotion = useReducedMotion() ?? false;

  const revealUp = getRevealUpVariants({ reducedMotion, y: 20, duration: 0.45 });
  const revealStagger = getRevealStaggerVariants({
    reducedMotion,
    y: 0,
    duration: 0.5,
    staggerChildren: 0.08,
    delayChildren: 0.03,
  });

  return (
    <motion.section
      id="about"
      className="mx-auto w-full max-w-[1138px] px-4 pb-16 pt-10 border-t border-black/10"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="mb-6 font-sans text-[18px] underline">ABOUT</h2>

      <motion.div
        className="space-y-8"
        variants={revealStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.p variants={revealUp} className="font-sans text-[18px] leading-relaxed">
          I&apos;m a CS student at USC with a background in art and design.
          I&apos;m drawn to the edges of engineering - where technical precision
          and sensory experience meet.
        </motion.p>

        <motion.p variants={revealUp} className="font-sans text-[18px] leading-relaxed">
          I&apos;ve been doing art my entire life. I&apos;ve been learning
          Carnatic music and piano since age 8, and explored{" "}
          <Link
            href="/play"
            className="underline"
          >
            digital art and watercolor
          </Link>
          , electric guitar, and{" "}
          <Link
            href="/play"
            className="underline"
          >
            mehendi
          </Link>
          .
        </motion.p>

        <motion.p variants={revealUp} className="font-sans text-[18px] leading-relaxed">
          Beyond mobile app development, I have extensive experience in backend
          development (Java/Springboot), as well as full-stack development
          across various tech stacks (Next.js + Supabase, Firebase). I enjoy
          leveraging AI tools in my work (Cursor, V0, Claude Code, Figma Make).
        </motion.p>

        <motion.div variants={revealUp} className="flex flex-wrap gap-2">
          {badges.map((text) => (
            <motion.div key={text} variants={revealUp}>
              <Chip
                variant="outline"
                className="text-[14px] leading-[21px] tracking-[-0.28px]"
              >
                {text}
              </Chip>
            </motion.div>
          ))}
        </motion.div>

        {/* Image fan – uncomment when you have 7 images and have uncommented fanImages/fanTransforms and the Image import above
        <div className="flex items-end justify-center">
          <motion.div
            className="group relative h-40 w-full max-w-[1100px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {fanImages.map((src, i) => (
              <div
                key={i}
                className={`absolute bottom-2 left-1/2 h-24 w-24 -translate-x-1/2 overflow-hidden rounded-sm border border-black/10 transition-transform duration-300 ease-out ${fanTransforms[i]}`}
              >
                <Image
                  src={src}
                  alt=""
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
        */}
      </motion.div>
    </motion.section>
  );
}

