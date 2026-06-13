import type { ReactNode } from "react";

type BadgeVariant = "tech" | "overlay" | "filled";

interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  children: ReactNode;
}

const base = "inline-flex items-center rounded-[12px] px-2 py-[3px] text-[13px] font-medium leading-none font-cosmica";

const variants: Record<BadgeVariant, string> = {
  tech: "bg-indigo text-snow font-semibold",
  overlay: "bg-transparent text-snow border border-white/35",
  filled: "bg-graphite text-[#fafafa]",
};

export function Badge({ variant = "filled", className = "", children }: BadgeProps) {
  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
}
