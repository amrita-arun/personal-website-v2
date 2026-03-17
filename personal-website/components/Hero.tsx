'use client';

import Image from 'next/image';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Chip } from '@/components/ui/chip';

export function Hero() {
  return (
    <motion.section
      id="hero"
      className="mx-auto mt-[192px] flex w-[1320px] flex-col gap-6 px-6 pb-16 md:flex-row md:items-start md:justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="flex-1 space-y-6 max-w-[760px] md:ml-24">
        <p className="font-sans text-[14px]">
          IOS ENGINEER · INTERACTION DESIGN
        </p>
        <h1 className="font-sans text-[40px] leading-normal">
          Hi!{' '}
          <span className="font-display italic">I&apos;m Amrita.</span>
          <br></br>I build interfaces{' '}
          <span className="font-display italic">that feel alive.</span>
        </h1>
        <p className="max-w-[760px] font-sans text-[18px] leading-relaxed">
          I care about the felt experience of mobile app development. The
          physics, the feedback, and the transitions that make an app feel like
          a tangible piece of art.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/amrita-arun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/amrita-arun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            
          </div>
          <Chip
            href="mailto:asarun@usc.edu"
            styleType="action"
            className="px-4 py-1 text-sm"
          >
            Contact Me
          </Chip>

        </div>
      </div>

      <div className="flex w-full justify-end md:w-[280px] md:justify-end md:ml-6 md:mr-[93px]">
        <div className="relative h-[260px] w-[260px] overflow-hidden rounded-[25px] border border-black bg-[#d3d3d3]">
          <Image
            src="/funHeadshot copy.JPG"
            alt="Amrita headshot"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}

