'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const orgs = [
  {
    org: 'Tradeweb',
    url: 'https://www.tradeweb.com/',
    roles: [
      {
        title: 'Incoming Fullstack SWE Intern',
        dates: 'June 2026 → Aug 2026',
        description: 'Incoming SWE Intern on Tradeweb\'s institutional team. Developing in Java/SpringBoot/React.js.',
      },
    ],
  },
  {
    org: 'Supaclass',
    url: 'https://www.supaclass.ai/',
    roles: [
      {
        title: 'SWE and Growth Intern',
        dates: 'Jan 2025 → Present',
        description: 'Architected and implemented a Dockerized in-browser terminal to execute python homework submissions.' +
        ' Automated image publishing to Amazon ECR, and on-demand ECS Fargate tasks to pull student submissions from S3, enabling distributed system-level sandboxing for code evaluation.' +
        '\n\nLaunched a 50+ participant pilot by conducting product demos and organic outreach to educators, including teachers from USC, UCLA, UCI, etc. accelerating adoption across K–12 and higher ed.'
      },
    ],
  },
  {
    org: 'LavaLab at USC',
    url: 'https://usclavalab.org/',
    roles: [
      {
        title: 'Director of External Community',
        dates: 'July 2025 → Present',
        description: 'Making LavaLab a place that alumni continue to come back to.'
      },
      {
        title: 'Co-Founder and Developer',
        dates: 'Aug 2024 → Dec 2024',
        description: 'Selected as 1 of 14 developers out of 350+ applicants in USC\'s premier startup incubator. Worked with a fellow co-developer, designer, and PM to bring our startup to life.'
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
        description: 'Leading groups of members to create startups and passion projects of their design.'
      },
      {
        title: "Health Initiative",
        dates: 'Sep 2024 → Present',
        description: 'Currently building a productivity app to track what you have done, not what you need to do.'
      }
    ],
  },
]

type ExperiencesProps = {
  variant?: 'default' | 'about'
  showHeading?: boolean
}

const Experiences = ({ variant = 'default', showHeading = true }: ExperiencesProps) => {
  const [openIndexes, setOpenIndexes] = useState<Record<string, boolean>>({})
  const isAbout = variant === 'about'

  const toggle = (key: string) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <section
      id="experience"
      className={
        isAbout ? 'w-full' : 'max-w-7xl mx-auto px-6 py-20'
      }
    >
      {showHeading && (
        <h2
          className={
            isAbout
              ? 'font-sans text-[16px] font-medium text-[#8E8E8E]'
              : 'mb-10 text-4xl font-extrabold'
          }
        >
          {isAbout ? 'my experience....' : 'Experience'}
        </h2>
      )}

      <div className={isAbout ? 'mt-6' : 'mb-24'}>
        <div
          className={
            isAbout
              ? 'relative space-y-8 border-l border-[#D6D6D6] pl-6'
              : 'relative space-y-12 border-l border-pink-200 pl-8'
          }
        >
          {orgs.map(({ org, url, roles }, index) => (
            <motion.div
              key={org}
              className={isAbout ? 'relative pl-3' : 'relative pl-4'}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              <span
                className={
                  isAbout
                    ? 'absolute -left-[0.95rem] top-1.5 h-2 w-2 rounded-full bg-[#C9C9C9]'
                    : 'absolute -left-[1.1rem] top-2 h-2 w-2 rounded-full bg-pink-500'
                }
              />

              <div className="mb-2">
                <p className={isAbout ? 'font-sans text-[18px] font-semibold text-black' : 'font-semibold text-gray-900'}>
                  {org}
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isAbout ? 'font-sans text-[14px] text-[#8E8E8E] underline' : 'text-sm text-gray-500'}
                >
                  {url}
                </a>
              </div>

              <div className="mt-3 space-y-3">
                {roles.map(({ title, dates, description }) => {
                  const key = `${org}-${title}`
                  const isOpen = openIndexes[key]

                  return (
                    <div key={key} className={isAbout ? 'font-sans text-[15px] text-black' : 'text-sm text-gray-800'}>
                      <button
                        onClick={() => toggle(key)}
                        className={
                          isAbout
                            ? 'group flex w-full items-center justify-between gap-4 text-left'
                            : 'flex justify-between items-center w-full text-left group'
                        }
                      >
                        <span
                          className={
                            isAbout
                              ? `font-medium transition ${isOpen ? 'text-[#DC4F7C]' : 'text-black'} group-hover:text-[#DC4F7C]`
                              : 'font-medium group-hover:text-pink-600 transition'
                          }
                        >
                          {title}
                        </span>

                        <div className="flex items-center gap-2">
                        <span
                          className={
                            isAbout
                              ? `whitespace-nowrap text-[14px] transition ${isOpen ? 'text-[#DC4F7C]' : 'text-[#8E8E8E]'} group-hover:text-[#DC4F7C]`
                              : 'text-sm text-gray-500 group-hover:text-pink-600 transition whitespace-nowrap'
                          }
                        >
                          {dates}
                        </span>
                        {isOpen ? (
                            <ChevronUp
                              className={
                                isAbout ? 'h-4 w-4 text-[#DC4F7C] transition' : 'w-4 h-4 text-pink-600 transition'
                              }
                            />
                            ) : (
                            <ChevronDown
                              className={
                                isAbout
                                  ? 'h-4 w-4 text-[#B5B5B5] transition group-hover:text-[#DC4F7C]'
                                  : 'w-4 h-4 text-gray-500 group-hover:text-pink-600 transition'
                              }
                            />
                            )
                        }

                        </div>
                      </button>

                      <div
                        className={`mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className={isAbout ? 'whitespace-pre-line pr-6 pt-1 text-[14px] leading-relaxed text-[#696969]' : 'text-gray-600 leading-relaxed whitespace-pre-line'}>
                          {description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences
