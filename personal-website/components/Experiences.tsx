'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const orgs = [
  {
    org: 'Tradeweb',
    url: 'https://www.tradeweb.com/',
    roles: [
      {
        title: 'Incoming Fullstack SWE Intern',
        dates: 'June 2026 → Aug 2026',
        description:
          'Incoming SWE Intern on Tradeweb’s institutional team. Developing in Java/SpringBoot/React.js.',
      },
    ],
  },
  {
    org: 'Supaclass',
    url: 'https://www.supaclass.ai/',
    roles: [
      {
        title: 'SWE and Growth Intern',
        dates: 'Jan 2025 → Aug 2025',
        description:
          'Architected and implemented a Dockerized in-browser terminal to execute python homework submissions. Automated image publishing to Amazon ECR, and on-demand ECS Fargate tasks to pull student submissions from S3, enabling distributed system-level sandboxing for code evaluation.',
      },
    ],
  },
  {
    org: 'USC LavaLab',
    url: 'https://usclavalab.org/',
    roles: [
      {
        title: 'Director of External Community',
        dates: 'July 2025 → Present',
        description:
          'Architected and implemented a Dockerized in-browser terminal to execute python homework submissions. Automated image publishing to Amazon ECR, and on-demand ECS Fargate tasks to pull student submissions from S3, enabling distributed system-level sandboxing for code evaluation.',
      },
      {
        title: 'Co-Founder and Developer',
        dates: 'Aug 2024 → Dec 2024',
        description:
          "Selected as 1 of 14 developers out of 350+ applicants in USC's premier startup incubator. Worked with a fellow co-developer, designer, and PM to bring our startup to life.",
      },
    ],
  },
  {
    org: 'ShiftSC',
    url: 'https://www.shiftsc.org/',
    roles: [
      {
        title: 'Incubator Initiative Lead',
        dates: 'Jan 2025 → Present',
        description:
          'Leading a group of members to build a tech for good startup. Currently building an IEP management tool for Special Education Teachers',
      },
      {
        title: 'Health Initiative Member',
        dates: 'Sep 2024 → Dec 2024',
        description:
          'Worked on building a productivity app to track what you have done, not what you need to do.',
      },
    ],
  },
];

const Experiences = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <motion.section
      id="experience"
      className="mx-auto mt-[96px] w-[1144px] border-t border-black/10 px-6 pb-20 pt-10"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="mb-6 font-sans text-[18px] underline">EXPERIENCE</h2>

      <div className="mb-24">
        <div className="relative space-y-12 border-l border-black/15 pl-12">
          {orgs.map((org) => (
            <motion.div
              key={org.org}
              className="relative group"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <span className="absolute -left-[2.5rem] top-2 h-3 w-3 rounded-full bg-[#D4D4D4] transition-colors duration-200 group-hover:bg-[#B79CFF]" />

              <div className="space-y-3">
                <div>
                  <p className="font-display text-[22px] leading-[32px] tracking-[-0.6px]">
                    {org.org}
                  </p>
                  <a
                    href={org.url}
                    className="font-sans text-[14px] text-[#6F6F6F] underline"
                  >
                    {org.url}
                  </a>
                </div>

                <div className="space-y-4 pt-2">
                  {org.roles.map((role) => {
                    const key = `${org.org}-${role.title}`;
                    const isOpen = open[key] ?? false;

                    return (
                      <div key={key} className="space-y-1">
                        <button
                          onClick={() => toggle(key)}
                          className="flex w-full items-center justify-between gap-3 text-left"
                        >
                          <p
                            className={`font-sans text-[16px] font-medium transition-colors duration-200 ${
                              isOpen
                                ? 'text-[#B79CFF]'
                                : 'text-black hover:text-[#B79CFF]'
                            }`}
                          >
                            {role.title}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="font-sans text-[14px] text-[#6F6F6F]">
                              {role.dates}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="h-4 w-4 text-[#B79CFF]" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-[#B79CFF]" />
                            )}
                          </div>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.p
                              className="font-sans text-[14px] leading-relaxed"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2, ease: 'easeOut' }}
                            >
                              {role.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experiences;
