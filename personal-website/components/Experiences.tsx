'use client'

import Image from 'next/image'
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const orgs = [
  {
    org: 'Supaclass',
    url: 'https://www.supaclass.ai/',
    roles: [
      {
        title: 'SWE and Growth Intern',
        dates: 'Jan 2025 → Present',
        description: 'Implemented LTI 1.3 integration to support automatic user authentication and contextual launches from LMS platforms (e.g., Moodle), removing the need for manual login and enabling dynamic personalization in the frontend.'
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
  {
    org: 'LavaLab at USC',
    url: 'https://usclavalab.org/',
    roles: [
      {
        title: 'Co-Founder and Developer',
        dates: 'Aug 2024 → Dec 2024',
        description: 'Selected as 1 of 14 developers out of 350+ applicants in USC\'s premier startup incubator. Worked with a fellow co-developer, designer, and PM to bring Due to life.'
      },
    ],
  },
]

const Experiences = () => {
  const [openIndexes, setOpenIndexes] = useState<Record<string, boolean>>({})

  const toggle = (key: string) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold mb-10">Experience</h2>

      <div className="mb-24">
        <div className="space-y-12 relative border-l border-pink-200 pl-8">
          {orgs.map(({ org, url, roles }, index) => (
            <motion.div
              key={org}
              className="relative pl-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              <span className="absolute -left-[1.1rem] top-2 h-2 w-2 rounded-full bg-pink-500" />

              <div className="mb-2">
                <p className="font-semibold text-gray-900">{org}</p>
                <a href={url} className="text-sm text-gray-500">{url}</a>
              </div>

              <div className="mt-3 space-y-3">
                {roles.map(({ title, dates, description }) => {
                  const key = `${org}-${title}`
                  const isOpen = openIndexes[key]

                  return (
                    <div key={key} className="text-sm text-gray-800">
                      <button
                        onClick={() => toggle(key)}
                        className="flex justify-between items-center w-full text-left group"
                      >
                        <span className="font-medium group-hover:text-pink-600 transition">{title}</span>

                        <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 group-hover:text-pink-600 transition whitespace-nowrap">{dates}</span>
                        {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-pink-600 transition" />
                            ) : (
                            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-pink-600 transition" />
                            )
                        }

                        </div>
                      </button>

                      <div
                        className={`mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-gray-600 leading-relaxed">{description}</p>
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
