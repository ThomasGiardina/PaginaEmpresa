"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import type { Service } from "@/data/services";
import { iconMap } from "@/data/services";
import { useLocale } from "@/i18n/context";

interface ServiceCardProps {
  service: Service;
  index: number;
  featured?: boolean;
}

function TiltWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - rect.top) / rect.height - 0.5) * -8,
      y: ((e.clientX - rect.left) / rect.width - 0.5) * 8,
    });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function WorkflowFlow() {
  return (
    <div className="mt-auto pt-4">
      <svg className="w-full h-10" viewBox="0 0 260 40" fill="none">
        <defs>
          <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(115,53,178,0.4)" />
            <stop offset="50%" stopColor="rgba(115,53,178,0.15)" />
            <stop offset="100%" stopColor="rgba(115,53,178,0.4)" />
          </linearGradient>
        </defs>

        <path d="M35 20 L95 20" stroke="url(#line-grad)" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M125 20 L185 20" stroke="url(#line-grad)" strokeWidth="1" strokeDasharray="3 4" />

        <motion.circle
          cx="65" cy="20" r="2.5" fill="#7335B2" opacity={0.8}
          animate={{ cx: [35, 95] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="155" cy="20" r="2.5" fill="#7335B2" opacity={0.8}
          animate={{ cx: [125, 185] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.6 }}
        />

        <circle cx="35" cy="20" r="9" fill="rgba(115,53,178,0.12)" stroke="rgba(115,53,178,0.25)" strokeWidth="1" />
        <circle cx="125" cy="20" r="9" fill="rgba(115,53,178,0.12)" stroke="rgba(115,53,178,0.25)" strokeWidth="1" />
        <circle cx="215" cy="20" r="9" fill="rgba(115,53,178,0.18)" stroke="#7335B2" strokeWidth="1" />

        <text x="35" y="24" textAnchor="middle" fill="rgba(115,53,178,0.6)" fontSize="11" fontWeight="600">1</text>
        <text x="125" y="24" textAnchor="middle" fill="rgba(115,53,178,0.6)" fontSize="11" fontWeight="600">2</text>
        <path d="M211 16 L213 18 L219 14" stroke="#7335B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

        <motion.circle
          cx="215" cy="20" r="9"
          stroke="#7335B2"
          strokeWidth="1"
          fill="none"
          animate={{ r: [9, 15], opacity: [0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

function FeaturedGlow() {
  return (
    <motion.div
      className="absolute inset-0 rounded-[24px] pointer-events-none opacity-0 group-hover:opacity-100"
      style={{
        boxShadow: "0 0 30px rgba(115,53,178,0.15), 0 0 60px rgba(115,53,178,0.08)",
      }}
      transition={{ duration: 0.5 }}
    />
  );
}

export function ServiceCard({ service, index, featured }: ServiceCardProps) {
  const { locale } = useLocale();
  const name = locale === "es" ? service.titleEs : service.title;
  const desc = locale === "es" ? service.descriptionEs : service.description;

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6, delay: index * 0.08 }}
        whileHover={{ y: -4 }}
        className="relative group border border-indigo/20 rounded-[24px] p-8 bg-gradient-to-br from-indigo/[0.08] to-indigo/[0.02] flex flex-col h-full overflow-hidden sm:col-span-2"
      >
        <FeaturedGlow />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-indigo/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <TiltWrapper className="relative z-10 flex flex-col h-full">
          <div className="w-[52px] h-[52px] rounded-[14px] bg-indigo/[0.15] border border-indigo/30 flex items-center justify-center flex-shrink-0 mb-5"
            style={{ transform: "translateZ(20px)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-snow">
              <path d={iconMap[service.icon] || iconMap.code} />
            </svg>
          </div>
          <h3 className="text-[23px] font-bold text-snow leading-tight mb-3"
            style={{ transform: "translateZ(30px)" }}>
            {name}
          </h3>
          <p className="text-[16px] text-slate/70 leading-[1.6] flex-1"
            style={{ transform: "translateZ(15px)" }}>
            {desc}
          </p>
          <div className="flex flex-wrap gap-2 mt-5 mb-4"
            style={{ transform: "translateZ(10px)" }}>
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="border border-indigo/20 rounded-[100px] px-3 py-1 text-[13px] font-medium text-snow/70 bg-indigo/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
          <WorkflowFlow />
        </TiltWrapper>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="relative group border border-white/[0.06] rounded-[24px] p-8 bg-white/[0.02] flex flex-col h-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <TiltWrapper className="relative z-10 flex flex-col h-full">
        <div className="w-[52px] h-[52px] rounded-[14px] bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0 mb-5"
          style={{ transform: "translateZ(20px)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-snow">
            <path d={iconMap[service.icon] || iconMap.code} />
          </svg>
        </div>
        <h3 className="text-[23px] font-bold text-snow leading-tight mb-3"
          style={{ transform: "translateZ(30px)" }}>
          {name}
        </h3>
        <p className="text-[16px] text-slate/70 leading-[1.6] flex-1"
          style={{ transform: "translateZ(15px)" }}>
          {desc}
        </p>
        <div className="flex flex-wrap gap-2 mt-5"
          style={{ transform: "translateZ(10px)" }}>
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/[0.08] rounded-[100px] px-3 py-1 text-[13px] font-medium text-snow/60 bg-white/[0.03]"
            >
              {tag}
            </span>
          ))}
        </div>
      </TiltWrapper>
    </motion.article>
  );
}
