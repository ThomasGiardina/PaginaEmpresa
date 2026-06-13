"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";
import { transition } from "@/lib/easing";

interface RevealProps {
  children: ReactNode;
  as?: "div" | "span" | "section";
  className?: string;
  y?: number;
  delay?: number;
  once?: boolean;
}

export function Reveal({
  children,
  as: Tag = "div",
  className,
  y = 32,
  delay = 0,
  once = true,
}: RevealProps) {
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={transition(delay)}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
