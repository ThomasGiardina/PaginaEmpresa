"use client";

import { motion } from "motion/react";
import { transition } from "@/lib/easing";

interface HeroBadgeProps {
  children: React.ReactNode;
  delay?: number;
}

export function HeroBadge({ children, delay = 0 }: HeroBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition(delay)}
      className="group relative self-start flex w-fit flex-row items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-wider text-slate backdrop-blur-sm leading-none"
    >
      <div
        className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-indigo/50 via-orchid-flash/50 to-indigo/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
        style={{ "--bg-size": "300%" } as React.CSSProperties}
      />
      <span className="bg-gradient-to-r from-indigo to-orchid-flash bg-clip-text text-transparent">
        {children}
      </span>
    </motion.span>
  );
}
