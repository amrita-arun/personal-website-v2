'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer
      className="border-t border-black/10 bg-background"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="mx-auto flex w-[1134px] flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-display text-[20px] leading-[30px] tracking-[-0.4px]">
            Let&apos;s build something together!
          </p>
          <p className="font-sans text-[14px] text-[#6F6F6F]">
            Open to iOS, full‑stack, and interaction design‑heavy roles.
          </p>
        </div>

        <div className="flex flex-col items-start gap-1 text-right md:items-end">
          <a
            className="font-sans text-[16px]"
          >
            Coded and designed with ❤️
          </a>
          <p className="font-sans text-[12px] text-[#6F6F6F]">
            © {new Date().getFullYear()} Amrita Arun
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

