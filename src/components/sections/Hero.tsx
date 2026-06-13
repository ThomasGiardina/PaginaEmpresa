"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/i18n/context";
import { DashboardDemo } from "@/components/ui/DashboardDemo";
import Link from "next/link";

const verbs: Record<string, string[]> = {
  en: ["automate", "build", "create", "develop", "design"],
  es: ["Automatizamos", "Optimizamos", "Simplificamos", "Aceleramos"],
};

export function Hero() {
  const { t, locale } = useLocale();
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;
    let isMounted = true;

    const cycleWord = () => {
      if (!isMounted) return;
      setFading(true);
      
      timeout1 = setTimeout(() => {
        if (!isMounted) return;
        setIndex((prev) => {
          const currentVerbs = verbs[locale] || verbs["en"];
          return (prev + 1) % currentVerbs.length;
        });
        setFading(false);
        
        timeout2 = setTimeout(cycleWord, 2800);
      }, 200);
    };

    timeout2 = setTimeout(cycleWord, 3000);

    return () => {
      isMounted = false;
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [locale]);

  return (
    <section className="w-full bg-obsidian flex flex-col min-h-dvh animate-[fadeIn_0.8s_ease-out] overflow-hidden">
      <div className="max-w-[1500px] mx-auto w-full px-22 pt-14 grid grid-cols-1 lg:grid-cols-[65fr_35fr] flex-1 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col justify-center py-10 lg:py-16 pr-0 lg:pr-8 gap-6 animate-[slideIn_0.6s_ease-out]">
            <span className="inline-flex self-start items-center px-3.5 py-1.5 rounded-full border border-fog bg-mist text-[13px] uppercase tracking-wider font-semibold text-slate leading-none">
              {t("hero.badge")}
            </span>

            <h1 className="text-[46px] sm:text-[53px] md:text-[57px] lg:text-[60px] font-bold text-snow leading-[1.12] tracking-[-0.02em]">
              <span className="block min-h-[50px] sm:min-h-[55px] md:min-h-[60px] lg:min-h-[65px]">
                {t("hero.prefix")}
                <span
                  className="inline-block text-slate transition-opacity duration-200 ease-out"
                  style={{ opacity: fading ? 0 : 1 }}
                >
                  {(verbs[locale] || verbs["en"])[index] || ""}
                </span>
                {t("hero.line1Suffix")}
              </span>
              <span className="block mt-1">
                {t("hero.line2Normal")}
                {t("hero.line2Muted")}
              </span>
            </h1>

            <p className="text-[17px] md:text-[18px] text-steel leading-relaxed max-w-[480px]">
              {t("hero.subtitle")}
            </p>

            <div className="flex items-center gap-6 mt-4 flex-wrap">
              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center bg-indigo text-white rounded-full px-6 py-3.5 text-[16px] font-medium leading-none hover:opacity-90 transition-opacity gap-2"
              >
                {t("hero.ctaProjects")}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                  <path d="M2.5 6h7M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-transparent text-slate underline underline-offset-4 text-[16px] font-medium leading-none hover:text-snow transition-colors gap-2"
              >
                {t("hero.ctaTalk")}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                  <path d="M2.5 6h7M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex py-8 lg:py-12 items-center justify-center">
            <DashboardDemo />
          </div>
        </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
