"use client";

import { motion } from "motion/react";
import { useLocale } from "@/i18n/context";
import { Reveal } from "@/components/Reveal";
import { transition } from "@/lib/easing";

function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={transition(0.25)}
      className="w-full max-w-[500px] aspect-[4/3] border border-white/[0.06] rounded-[36px] flex items-center justify-center p-8 relative overflow-hidden bg-white/[0.02]"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none" />
      <div className="flex items-end justify-center gap-2 z-10 relative mt-6">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform translate-y-2 -rotate-6 text-white/20">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
        <svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="z-10 bg-indigo/[0.08] rounded-full text-indigo">
          <path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2" />
          <circle cx="14" cy="7" r="4" />
        </svg>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform translate-y-2 rotate-6 text-white/20">
          <path d="M20 21v-2a4 4 0 0 0-4-4h-3" />
          <circle cx="16" cy="7" r="4" />
        </svg>
      </div>
    </motion.div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[32px] font-bold text-snow leading-none">{value}</span>
      <span className="text-[14px] text-slate/60 mt-1">{label}</span>
    </div>
  );
}

export function AboutSection() {
  const { t } = useLocale();

  return (
    <section id="about" className="bg-obsidian min-h-dvh flex items-center py-24 scroll-mt-14 border-t border-white/[0.04]">
      <div className="max-w-[1500px] px-22 mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="inline-block self-start text-[13px] font-medium text-ash tracking-[0.08em] uppercase border border-white/[0.08] bg-white/[0.03] rounded-full px-[14px] py-[4px]">
                {t("about.label")}
              </span>
            </Reveal>
            <Reveal y={24} delay={0.1}>
              <h2 className="text-[41px] md:text-[51px] font-bold text-snow leading-[1.15] max-w-[500px]">
                {t("about.title")}
              </h2>
            </Reveal>
            <Reveal y={20} delay={0.15}>
              <p className="text-[18px] font-normal text-slate/60 leading-[1.65] max-w-[460px]">
                {t("about.body")}
              </p>
            </Reveal>
            <Reveal y={20} delay={0.2}>
              <div className="grid grid-cols-3 gap-8 mt-4">
                <StatItem value="+20" label="projects delivered" />
                <StatItem value="+300h" label="time saved" />
                <StatItem value="98%" label="satisfied clients" />
              </div>
            </Reveal>
            <Reveal y={20} delay={0.25}>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center text-[16px] font-medium text-snow border border-white/[0.08] bg-white/[0.03] rounded-[100px] px-6 py-3 hover:bg-white/[0.06] transition-colors gap-2"
                >
                  {t("about.cta")}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="flex justify-center md:justify-end">
            <AboutImage />
          </div>
        </div>
      </div>
    </section>
  );
}
