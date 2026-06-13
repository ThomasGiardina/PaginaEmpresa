"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale } from "@/i18n/context";
import { SplineRobot } from "@/components/ui/SplineRobot";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroBadge } from "@/components/ui/HeroBadge";
import { transition } from "@/lib/easing";

const verbs: Record<string, string[]> = {
  en: ["automate", "build", "create", "develop", "design"],
  es: ["Automatizamos", "Optimizamos", "Simplificamos", "Aceleramos"],
};

function VerbatimCycler({ locale }: { locale: string }) {
  const [index, setIndex] = useState(0);

  const currentVerbs = verbs[locale] || verbs["en"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % currentVerbs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentVerbs.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.35 }}
        className="inline-block text-slate"
      >
        {(currentVerbs[index]) || ""}
      </motion.span>
    </AnimatePresence>
  );
}

function CtaButton() {
  return (
    <MagneticButton
      href="/proyectos"
      className="inline-flex items-center justify-center bg-indigo text-white rounded-full px-6 py-3.5 text-[16px] font-medium leading-none gap-2 overflow-hidden"
    >
      <span className="absolute inset-[1px] rounded-full bg-indigo" />
      <span className="absolute inset-[1px] rounded-full bg-indigo/80 group-hover:bg-indigo/60 transition-colors" />
      <span className="relative z-10 flex items-center gap-2 text-snow">
        View projects
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
          <path d="M2.5 6h7M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </MagneticButton>
  );
}

export function Hero() {
  const { t, locale } = useLocale();

  return (
    <section className="relative w-full bg-obsidian flex flex-col min-h-dvh overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-[#1a1530] to-obsidian pointer-events-none" />
      <div className="relative z-10 max-w-[1500px] mx-auto w-full px-22 pt-14 flex-1 flex items-stretch">
        <div className="flex flex-col justify-center py-10 lg:py-16 pr-0 lg:pr-[420px] gap-6">
          <HeroBadge delay={0.1}>
            {t("hero.badge")}
          </HeroBadge>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.2)}
            className="text-[46px] sm:text-[53px] md:text-[57px] lg:text-[60px] font-bold text-snow leading-[1.12] tracking-[-0.02em]"
          >
            <span className="block min-h-[50px] sm:min-h-[55px] md:min-h-[60px] lg:min-h-[65px]">
              {t("hero.prefix")}
              <VerbatimCycler locale={locale} />
              {t("hero.line1Suffix")}
            </span>
            <span className="block mt-1">
              {t("hero.line2Normal")}
              <span>{t("hero.line2Muted")}</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.35)}
            className="text-[17px] md:text-[18px] text-steel leading-relaxed max-w-[480px]"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.5)}
            className="flex items-center gap-6 mt-4 flex-wrap"
          >
            <CtaButton />
            <MagneticButton
              href="#contact"
              className="inline-flex items-center justify-center bg-transparent text-slate underline underline-offset-4 text-[16px] font-medium leading-none hover:text-snow transition-colors gap-2"
            >
              {t("hero.ctaTalk")}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                <path d="M2.5 6h7M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>
          </motion.div>
        </div>

        <div className="absolute right-16 lg:right-24 -top-40 w-full lg:w-[400px] bottom-0 overflow-hidden">
          <SplineRobot />
        </div>
      </div>
    </section>
  );
}
