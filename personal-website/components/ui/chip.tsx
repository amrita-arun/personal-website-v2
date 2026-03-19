 'use client';

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";

type ChipVariant = "default" | "outline";
type ChipStyle = "pill" | "action";

type BaseProps = {
  variant?: ChipVariant;
  styleType?: ChipStyle;
  href?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export function Chip(props: BaseProps) {
  const {
    className,
    variant = "default",
    styleType = "pill",
    href,
    iconLeft,
    iconRight,
    children,
    ...rest
  } = props;

  const reducedMotion = useReducedMotion() ?? false;
  const [canTilt, setCanTilt] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => setCanTilt(mq.matches);
    update();

    // Safari fallback (older browsers)
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }

    const legacyAddListener = (mq as unknown as { addListener?: (cb: () => void) => void })
      .addListener;
    const legacyRemoveListener = (mq as unknown as { removeListener?: (cb: () => void) => void })
      .removeListener;

    if (typeof legacyAddListener === "function" && typeof legacyRemoveListener === "function") {
      legacyAddListener(update);
      return () => legacyRemoveListener(update);
    }
  }, []);

  const shouldTilt = styleType === "action" && canTilt && !reducedMotion;

  const baseClasses =
    "inline-flex items-center gap-1.5 border px-3 py-1 text-xs font-medium bg-white";

  const variantClasses =
    variant === "outline"
      ? "border-black/60 text-black hover:bg-black/5"
      : "border-black text-black hover:bg-black/5";

  const styleClasses =
    styleType === "action"
      ? "rounded-[10px] shadow-[-2px_3px_0_0_rgba(0,0,0,0.25)] group transition-colors duration-200 hover:bg-[#B79CFF] hover:border-[#B79CFF] transform-gpu will-change-transform transition-transform duration-200 ease-out"
      : "rounded-full";

  const handlePointerMove: React.PointerEventHandler<HTMLButtonElement> = (e) => {
    if (!shouldTilt) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width - 0.5; // [-0.5..0.5]
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    const rotateY = px * 10; // deg
    const rotateX = -py * 8; // deg
    const translateX = px * 4; // px
    const translateY = py * 3; // px

    const next = `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.transform = next;
    });
  };

  const handlePointerLeave: React.PointerEventHandler<HTMLButtonElement> = (e) => {
    if (!shouldTilt) return;
    const el = e.currentTarget;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    el.style.transform = "";
  };

  const content = (
    <button
      type="button"
      className={cn(baseClasses, variantClasses, styleClasses, className)}
      {...rest}
      onPointerMove={shouldTilt ? handlePointerMove : undefined}
      onPointerLeave={shouldTilt ? handlePointerLeave : undefined}
    >
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}

