"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  as?: "link" | "button";
}

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  as = "link",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glow = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 15 });
  const springGlow = useSpring(glow, { stiffness: 80, damping: 18 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = 160;

      if (dist < radius) {
        const strength = 1 - dist / radius;
        const pull = strength * 10;
        const angle = Math.atan2(dy, dx);
        mouseX.set(Math.cos(angle) * pull);
        mouseY.set(Math.sin(angle) * pull);
        glow.set(strength);
      } else {
        mouseX.set(0);
        mouseY.set(0);
        glow.set(0);
      }
    };

    const handleLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      glow.set(0);
    };

    window.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY, glow]);

  const Comp = as === "link" ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <Comp
        href={as === "link" ? href : undefined}
        onClick={onClick}
        className={className}
        style={{
          position: "relative",
          overflow: "hidden",
        } as React.CSSProperties}
      >
        <motion.span
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(115,53,178,0.5), rgba(254,69,226,0.25), rgba(115,53,178,0.5))",
            backgroundSize: "200% 200%",
            opacity: springGlow,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.span
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            boxShadow: "0 0 24px rgba(115,53,178,0.4), 0 0 48px rgba(115,53,178,0.2)",
            opacity: springGlow,
          }}
        />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Comp>
    </motion.div>
  );
}
