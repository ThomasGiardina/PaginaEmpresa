"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "@/i18n/context";
import { DashboardDemo } from "@/components/ui/DashboardDemo";

const verbs: Record<string, string[]> = {
  en: ["automate", "build", "create", "develop", "design"],
  es: ["Automatizamos", "Creamos", "Desarrollamos", "Diseñamos", "Construimos"],
};

export function Hero() {
  const { t, locale } = useLocale();
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % verbs[locale].length);
        setFading(false);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, [locale]);

  return (
    <section className="w-full bg-snow">
      <div ref={sectionRef} className="max-w-[1500px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] min-h-[calc(100dvh-3.5rem)] items-stretch">
          <div className="flex flex-col justify-center p-8 md:p-14 gap-6">
            <span className="inline-flex self-start items-center px-3 py-1 rounded-[999px] border border-ash/60 text-[11px] uppercase tracking-wider font-semibold text-slate leading-none">
              {t("hero.badge")}
            </span>

            <h1 className="text-[46px] md:text-[52px] font-bold text-[#111] leading-[1.12] tracking-[-0.02em]">
              <span className="block">
                {t("hero.prefix")}
                <span
                  className="inline-block text-[#aaa] transition-opacity duration-200 ease-out"
                  style={{ opacity: fading ? 0 : 1 }}
                >
                  {verbs[locale][index]}
                </span>
                {t("hero.line1Suffix")}
              </span>
              <span className="block mt-1">
                {t("hero.line2")}
              </span>
            </h1>

            <p className="text-[15px] md:text-[16px] text-[#71717a] leading-relaxed max-w-[480px]">
              {t("hero.subtitle")}
            </p>

            <div className="flex items-center gap-6 mt-4">
              <a
                href="/proyectos"
                className="inline-flex items-center justify-center bg-[#111] text-white rounded-full px-6 py-3.5 text-[14px] font-medium leading-none hover:opacity-90 transition-opacity gap-2"
              >
                {t("hero.ctaProjects")}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                  <path d="M2.5 6h7M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center bg-transparent text-[#111] underline underline-offset-4 text-[14px] font-medium leading-none hover:opacity-70 transition-opacity gap-2"
              >
                {t("hero.ctaTalk")}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                  <path d="M2.5 6h7M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hidden md:flex p-4 md:p-6 items-stretch">
            <DashboardDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
