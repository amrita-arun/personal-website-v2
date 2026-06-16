'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/amrita-arun', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com/in/amrita-arun', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://x.com/amrita__arun', label: 'Twitter', icon: Twitter },
  { href: 'mailto:asarun@usc.edu', label: 'Email', icon: Mail },
]

export default function SiteNav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 md:px-8 md:pt-5">
      <nav className="mx-auto flex w-full max-w-[1399px] items-center justify-between rounded-full border-2 border-[#E6D5BF] bg-[#FEF8F0]/75 px-5 py-2 shadow-[0px_3px_6px_rgba(0,0,0,0.14)] backdrop-blur-md md:px-10">
        <div className="flex items-center gap-5 font-sans text-[16px] font-medium md:gap-7">
          <Link href="/" className={isHome ? 'text-black' : 'text-[#8E8E8E] hover:text-black'}>
            home
          </Link>
          <Link
            href="/about"
            className="text-[#8E8E8E] transition-colors hover:text-black"
          >
            about
          </Link>
          <a href="/Amrita Arun's Resume 5.pdf" className="text-[#8E8E8E] transition-colors hover:text-black">
            resume
          </a>
        </div>

        <div className="flex items-center gap-3.5 text-[#2F2F2F] md:gap-5">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="transition-colors hover:text-[#DC4F7C]"
            >
              <Icon className="h-[18px] w-[18px] md:h-5 md:w-5" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
