import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

  const baseClasses =
    "inline-flex items-center gap-1.5 border px-3 py-1 text-xs font-medium bg-white";

  const variantClasses =
    variant === "outline"
      ? "border-black/60 text-black hover:bg-black/5"
      : "border-black text-black hover:bg-black/5";

  const styleClasses =
    styleType === "action"
      ? "rounded-[10px] shadow-[-2px_3px_0_0_rgba(0,0,0,0.25)] group transition-colors duration-200 hover:bg-[#B79CFF] hover:border-[#B79CFF]"
      : "rounded-full";

  const content = (
    <button
      type="button"
      className={cn(baseClasses, variantClasses, styleClasses, className)}
      {...rest}
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

