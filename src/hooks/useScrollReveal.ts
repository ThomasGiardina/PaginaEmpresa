"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  stagger?: number;
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
  toggleActions?: string;
  ease?: string;
}

export function useScrollReveal<T extends HTMLElement>(
  selector: string,
  options: ScrollRevealOptions = {},
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(selector);
    if (!targets.length) return;

    const {
      stagger = 0.1,
      y = 40,
      duration = 0.7,
      delay = 0,
      start = "top 85%",
      toggleActions = "play none none none",
      ease = "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    } = options;

    gsap.set(targets, { opacity: 0, y });

    const st = ScrollTrigger.create({
      trigger: el,
      start,
      toggleActions,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease,
          overwrite: "auto",
        });
      },
      onEnterBack: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease,
          overwrite: "auto",
        });
      },
    });

    return () => {
      st.kill();
    };
  }, [selector, JSON.stringify(options)]);

  return ref;
}
