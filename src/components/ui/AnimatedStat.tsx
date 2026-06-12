"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedStatProps {
  value: string;
  label: string;
  icon?: string;
}

export function AnimatedStat({ value, label, icon }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([^\d]*)(\d+)(.*)$/);
    if (!match) {
      setDisplayed(0);
      return;
    }

    const target = parseInt(match[2], 10);
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

  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  const prefix = match ? match[1] || "" : "";
  const suffix = match ? match[3] || "" : "";

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-2">
      {icon && (
        <div className="w-12 h-12 flex items-center justify-center mb-1">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d={icon} />
          </svg>
        </div>
      )}
      <span className="text-[44px] font-bold text-obsidian leading-[1] flex items-baseline">
        <span className="text-[32px] text-zinc-400 font-semibold mr-0.5">{prefix}</span>
        {displayed}
        <span className="text-[32px] text-zinc-400 font-semibold ml-0.5">{suffix}</span>
      </span>
      <p className="text-[14px] font-medium text-steel leading-snug mt-1">{label}</p>
    </div>
  );
}
