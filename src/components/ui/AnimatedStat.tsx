"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedStatProps {
  value: string;
  label: string;
}

export function AnimatedStat({ value, label }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/(\d+)(.*)/);
    if (!match) {
      setDisplayed(0);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2] || "";
    const animated = { val: 0 };

    gsap.set(el, { opacity: 0, y: 24 });

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none",
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: "cubic-bezier(0.16, 1, 0.3, 1)" });
        gsap.to(animated, {
          val: target,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => setDisplayed(Math.round(animated.val)),
          onComplete: () => setDisplayed(target),
        });
      },
    });

    return () => st.kill();
  }, [value]);

  const match = value.match(/(\d+)(.*)/);
  const suffix = match ? match[2] || "" : "";

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-1.5">
      <span className="text-[48px] font-bold text-obsidian leading-[1]">
        {displayed}
        {suffix}
      </span>
      <p className="text-[13px] font-normal text-steel leading-snug">{label}</p>
    </div>
  );
}
