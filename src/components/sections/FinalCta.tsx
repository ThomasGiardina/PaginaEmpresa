"use client";

import { useLocale } from "@/i18n/context";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  const { t } = useLocale();

  return (
    <section className="bg-obsidian min-h-dvh flex items-center py-24 border-y border-ink">
      <div className="max-w-[1500px] px-22 mx-auto w-full">
        <div className="bg-ink border border-ink rounded-[32px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/20 to-transparent pointer-events-none" />

          <div className="flex flex-col items-start gap-6 z-10 max-w-[600px]">
            <Reveal>
              <h2 className="text-[41px] md:text-[51px] font-bold text-white leading-[1.15]">
                {t("finalcta.title")}
              </h2>
            </Reveal>
            <Reveal y={20} delay={0.1}>
              <p className="text-[18px] text-slate leading-relaxed">
                {t("finalcta.subtitle")}
              </p>
            </Reveal>
            <Reveal y={20} delay={0.2}>
              <a
                href="#contact"
                className="mt-2 inline-flex items-center bg-indigo text-snow rounded-[100px] px-8 py-4 text-[17px] font-semibold hover:scale-105 transition-transform shadow-[0_4px_16px_rgba(115,53,178,0.3)] gap-2"
              >
                {t("finalcta.button")}
              </a>
            </Reveal>
          </div>

          <Reveal y={30} delay={0.2} className="z-10 hidden lg:block">
            <div className="relative w-[340px] h-[340px] flex items-center justify-center">
              {/* Central connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <path d="M50 50 L20 20 M50 50 L80 20 M50 50 L20 80 M50 50 L80 80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" fill="none" className="text-slate" />
              </svg>
              {/* Center icon */}
              <div className="w-16 h-16 bg-ink border border-slate rounded-full flex items-center justify-center z-20 shadow-lg relative">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              
              {/* Nodes */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-ink border border-slate rounded-full flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pebble">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-ink border border-slate rounded-full flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pebble">
                  <path d="M4 20h16M6 16v-4M10 16V8M14 16V6M18 16v-2" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-ink border border-slate rounded-full flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pebble">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6-1.6 1.6a1 1 0 0 0 1.4 1.4l2.3-2.3a1 1 0 0 0 0-1.4l-2.3-2.3a1 1 0 0 0-1.4 0zm-5.4 0a1 1 0 0 0-1.4 0l-2.3 2.3a1 1 0 0 0 0 1.4l2.3 2.3a1 1 0 0 0 1.4-1.4L5.7 9.3l1.6-1.6a1 1 0 0 0 0-1.4zM9.83 5.74a1 1 0 0 0-1.28.57l-3 8a1 1 0 1 0 1.85.7l3-8a1 1 0 0 0-.57-1.27z" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-ink border border-slate rounded-full flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pebble">
                  <path d="M8 4a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v1h1a3 3 0 0 1 0 6h-1v1a2 2 0 0 1-2 2h-1v1a3 3 0 0 1-6 0v-1H5a2 2 0 0 1-2-2v-1H2a3 3 0 0 1 0-6h1V9a2 2 0 0 1 2-2h1V7a3 3 0 0 1 3-3z" />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
