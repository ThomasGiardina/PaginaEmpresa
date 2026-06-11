"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "@/i18n/context";
import { DashboardDemo } from "@/components/ui/DashboardDemo";
import Link from "next/link";

const verbs: Record<string, string[]> = {
  en: ["automate", "build", "create", "develop", "design"],
  es: ["Automatizamos", "Optimizamos", "Simplificamos", "Aceleramos"],
};

export function Hero() {
  const { t, locale, setLocale } = useLocale();
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIndex(0);
  }, [locale]);

  useEffect(() => {
    const currentVerbs = verbs[locale] || verbs["en"];
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % currentVerbs.length);
        setFading(false);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, [locale]);

  return (
    <section className="w-full bg-white flex flex-col animate-[fadeIn_0.8s_ease-out]">
      {/* Integrated Header Bar */}
      <header className="w-full border-b border-[#e5e5e5] bg-white flex-shrink-0">
        <div className="max-w-[1500px] mx-auto w-full h-14 px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-obsidian flex items-center justify-center flex-shrink-0 text-white">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 2.5L13.5 13.5M13.5 2.5L2.5 13.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[15px] font-bold tracking-tight text-obsidian uppercase">
              Paginita
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-[14px] font-medium text-zinc-600 hover:text-obsidian transition-colors">
              {t("nav.services")}
            </a>
            <a href="/proyectos" className="text-[14px] font-medium text-zinc-600 hover:text-obsidian transition-colors">
              {t("nav.projects")}
            </a>
            <a href="#about" className="text-[14px] font-medium text-zinc-600 hover:text-obsidian transition-colors">
              {t("nav.about")}
            </a>
            <a href="#contact" className="text-[14px] font-medium text-zinc-600 hover:text-obsidian transition-colors">
              {t("nav.contact")}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === "en" ? "es" : "en")}
              className="text-[13px] font-medium text-zinc-500 hover:text-obsidian transition-colors px-2 cursor-pointer"
            >
              {locale === "en" ? "ES" : "EN"}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#111] text-white rounded-full px-5 py-2.5 text-[14px] font-medium leading-none hover:opacity-90 transition-opacity gap-2"
            >
              {t("nav.talk")}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                <path d="M2.5 6h7M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Content Grid */}
      <div className="w-full bg-white">
        <div className="max-w-[1500px] mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] min-h-[calc(100dvh-3.5rem)] items-stretch">
          {/* Left Column */}
          <div className="flex flex-col justify-center py-10 lg:py-16 pr-0 lg:pr-8 gap-6 bg-white animate-[slideIn_0.6s_ease-out]">
            <span className="inline-flex self-start items-center px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-[11px] uppercase tracking-wider font-semibold text-zinc-500 leading-none">
              {t("hero.badge")}
            </span>

            <h1 className="text-[40px] sm:text-[46px] md:text-[50px] lg:text-[52px] font-bold text-[#111] leading-[1.12] tracking-[-0.02em]">
              <span className="block min-h-[50px] sm:min-h-[55px] md:min-h-[60px] lg:min-h-[65px]">
                {t("hero.prefix")}
                <span
                  className="inline-block text-zinc-400 transition-opacity duration-200 ease-out"
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

            <p className="text-[15px] md:text-[16px] text-zinc-500 leading-relaxed max-w-[480px]">
              {t("hero.subtitle")}
            </p>

            <div className="flex items-center gap-6 mt-4 flex-wrap">
              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center bg-[#111] text-white rounded-full px-6 py-3.5 text-[14px] font-medium leading-none hover:opacity-90 transition-opacity gap-2"
              >
                {t("hero.ctaProjects")}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                  <path d="M2.5 6h7M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-transparent text-[#111] underline underline-offset-4 text-[14px] font-medium leading-none hover:opacity-70 transition-opacity gap-2"
              >
                {t("hero.ctaTalk")}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                  <path d="M2.5 6h7M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex py-8 lg:py-12 items-center justify-center bg-white">
            <DashboardDemo />
          </div>
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
