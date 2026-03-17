 'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Chip } from "@/components/ui/chip";

const projects = [
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
        href: "#",
      },
      {
        label: "Read more",
        icon: (
          <ArrowUpRight className="h-3 w-3 text-black group-hover:text-white transition-colors duration-200 group-hover:-translate-y-0.5 group-hover:-rotate-12" />
        ),
        href: "#",
      },
    ],
  },
  {
    kind: "iOS APP · IN DEVELOPMENT",
    title: "Wardrobe",
    description:
      "Outfit recommendations with weather-aware styling and carousel-driven interactions.",
    tech: ["SwiftUI", "Swift", "iOS", "Firebase", "Real-Time Scoring"],
    mediaSrc: undefined,
    mediaAlt: undefined,
    actions: [
      {
        label: "Code",
        icon: (
          <Github className="h-3 w-3 text-black group-hover:text-white transition-colors duration-200" />
        ),
        href: "#",
      },
      {
        label: "App Store",
        icon: (
          <ArrowUpRight className="h-3 w-3 text-black group-hover:text-white transition-colors duration-200 group-hover:-translate-y-0.5 group-hover:-rotate-12" />
        ),
        href: "#",
      },
      {
        label: "Read more",
        icon: (
          <ArrowUpRight className="h-3 w-3 text-black group-hover:text-white transition-colors duration-200 group-hover:-translate-y-0.5 group-hover:-rotate-12" />
        ),
        href: "#",
      },
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
        href: "#",
      },
      {
        label: "Read more",
        icon: (
          <ArrowUpRight className="h-3 w-3 text-black group-hover:text-white transition-colors duration-200 group-hover:-translate-y-0.5 group-hover:-rotate-12" />
        ),
        href: "#",
      },
    ],
  },
];

export function SelectedWork() {
  return (
    <motion.section
      id="selected-work"
      className="mx-auto mt-[124px] w-[1134px] px-6 pb-14"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="mb-6 font-sans text-[18px] underline">
        SELECTED WORK
      </h2>

      <motion.div
        className="rounded-[32px] border border-black/20 bg-background px-10 py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            className="flex flex-col gap-8 pb-[128px] md:flex-row md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
          >
            {/** text column **/}
            <div className="flex flex-[3] flex-col space-y-4">
              <header className="space-y-1">
                <p className="font-sans text-[14px]">{project.kind}</p>
                <h3 className="font-display text-[28px]">{project.title}</h3>
              </header>

              <p className="max-w-[620px] font-sans text-[16px] leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((label) => (
                  <Chip key={label} variant="outline">
                    {label}
                  </Chip>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
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
              </div>
            </div>

            {/** media column **/}
            <div className="flex flex-[2] items-center justify-end">
              {project.mediaSrc && (
                <Image
                  src={project.mediaSrc}
                  alt={project.mediaAlt ?? ""}
                  width={900}
                  height={540}
                  className={`h-auto w-full rounded-[10px] border border-black/15 bg-black/5 object-contain ${
                    project.title === "SwiftMotionKit"
                      ? "max-w-[220px]"
                      : project.title === "Due"
                      ? "max-w-[520px]"
                      : "max-w-[320px]"
                  }`}
                />
              )}
            </div>

            {idx < projects.length - 1 && (
              <div className="border-b border-black/15" />
            )}
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

