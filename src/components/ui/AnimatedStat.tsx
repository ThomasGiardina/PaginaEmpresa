"use client";

import { useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { useEffect } from "react";

interface AnimatedStatProps {
  value: string;
  label: string;
  icon?: string;
}

export function AnimatedStat({ value, label, icon }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [displayed, setDisplayed] = useState(0);

  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  const prefix = match ? match[1] || "" : "";
  const numTarget = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] || "" : "";

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, numTarget, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayed(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, numTarget]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
      className="flex flex-col items-center text-center gap-2"
    >
      {icon && (
        <div className="w-12 h-12 flex items-center justify-center mb-1">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ash">
            <path d={icon} />
          </svg>
        </div>
      )}
      <span className="text-[51px] font-bold text-snow leading-[1] flex items-baseline">
        <span className="text-[37px] text-ash font-semibold mr-0.5">{prefix}</span>
        {displayed}
        <span className="text-[37px] text-ash font-semibold ml-0.5">{suffix}</span>
      </span>
      <p className="text-[16px] font-medium text-slate leading-snug mt-1">{label}</p>
    </motion.div>
  );
}
