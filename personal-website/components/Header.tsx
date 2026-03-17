'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const navItems = [
  { href: '/work', label: 'Work' },
  { href: '/play', label: 'Play' },
  { href: '/writing', label: 'Writing' },
];

const Header = () => {
  return (
    <header className=" top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <nav className="mx-auto flex w-[1320px] items-center justify-between gap-4 px-4 py-3">
        <div className="font-display text-[28px] leading-none">
          <Link href="/" className="hover:underline">
            Amrita Arun
          </Link>
        </div>

        <div className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative font-sans text-[18px] font-normal hover:underline hover:text-[#B79CFF] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Link
            href="https://github.com/amrita-arun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/amrita-arun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/amrita__arun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="mailto:asarun@usc.edu" aria-label="Email">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
