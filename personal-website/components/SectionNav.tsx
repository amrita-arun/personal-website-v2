'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'ME' },
  { id: 'selected-work', label: 'SELECTED WORK' },
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
];

export function SectionNav() {
  const [activeId, setActiveId] = useState<string | null>('hero');

  useEffect(() => {
    const els = sections.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setActiveId(entry.target.id);
          break;
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 md:block"
      aria-label="Page sections"
    >
      <div className="flex flex-col gap-6">
        {sections.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => handleClick(id)}
              className="group flex items-center gap-3 text-left"
            >
              <span
                className={`h-2.5 w-2.5 shrink-0 rounded-full border border-black/20 transition-colors duration-200 ${
                  isActive ? 'bg-[#B79CFF] border-[#B79CFF]' : 'bg-[#D4D4D4] group-hover:bg-[#B79CFF] group-hover:border-[#B79CFF]'
                }`}
              />
              <span
                className={`font-sans text-xs font-medium uppercase tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-[#B79CFF]' : 'text-black group-hover:text-[#B79CFF]'
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
