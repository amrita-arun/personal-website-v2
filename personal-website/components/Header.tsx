'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileText, Github, Linkedin, Mail } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="relative max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-4 py-4 px-6">

        {/* Left: Name */}
        <div className="font-bold text-lg text-gray-800">
          <Link href="/" className="hover:text-pink-500 transition-colors">Amrita Arun</Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-6">
          {[
            { href: '#projects', label: 'Projects' },
            { href: '#experience', label: 'Experience' },
            { href: '#fun', label: 'Fun' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative text-gray-700 hover:text-pink-500 group"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right: Socials + Resume */}
        <div className="flex items-center gap-4 flex-wrap">
          <Link
            href="https://github.com/amrita-arun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/amrita-arun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:your@email.com"
            className="text-gray-600 hover:text-pink-600 transition"
          >
            <Mail className="w-5 h-5" />
          </Link>

          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="hover:bg-pink-500 hover:text-white transition-all">
                <FileText className="mr-2 h-4 w-4" />
                Resume
            </Button>
        </Link>

        </div>

      </nav>
    </header>
  )
}

export default Header
