"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: ReactNode;
  as?: "div" | "span" | "section";
  className?: string;
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
  toggleActions?: string;
  ease?: string;
  once?: boolean;
}

export function Reveal({
  children,
  as: Tag = "div",
  className,
  y = 32,
  duration = 0.7,
  delay = 0,
  start = "top 85%",
  toggleActions = "play none none none",
  ease = "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y });

    const st = ScrollTrigger.create({
      trigger: el,
      start,
      toggleActions: once ? "play none none none" : toggleActions,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease,
          overwrite: "auto",
        });
      },
      ...(once
        ? {}
        : {
            onEnterBack: () => {
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration,
                delay,
                ease,
                overwrite: "auto",
              });
            },
          }),
    });

    return () => st.kill();
  }, [y, duration, delay, start, toggleActions, ease, once]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
