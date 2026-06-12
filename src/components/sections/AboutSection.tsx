"use client";

import { useLocale } from "@/i18n/context";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  const { t } = useLocale();

  return (
    <section id="about" className="bg-snow min-h-dvh flex items-center py-24 scroll-mt-14 border-t border-fog">
      <div className="max-w-[1500px] mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="inline-block self-start text-[11px] font-medium text-ash tracking-[0.08em] uppercase border border-zinc-200 bg-white rounded-full px-[14px] py-[4px]">
                {t("about.label")}
              </span>
            </Reveal>
            <Reveal y={24} delay={0.1}>
              <h2 className="text-[36px] md:text-[44px] font-bold text-obsidian leading-[1.15] max-w-[500px]">
                {t("about.title")}
              </h2>
            </Reveal>
            <Reveal y={20} delay={0.15}>
              <p className="text-[16px] font-normal text-steel leading-[1.65] max-w-[460px]">
                {t("about.body")}
              </p>
            </Reveal>
            <Reveal y={20} delay={0.2}>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center text-[14px] font-medium text-obsidian border border-[#e5e5e5] bg-white rounded-[100px] px-6 py-3 hover:bg-mist transition-colors shadow-sm gap-2"
                >
                  {t("about.cta")}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal y={32} delay={0.25} className="flex justify-center md:justify-end">
            <div className="w-full max-w-[500px] aspect-[4/3] bg-white border border-[#e5e5e5] rounded-[36px] flex items-center justify-center p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-50/50 to-transparent pointer-events-none" />
              <div className="flex items-end justify-center gap-2 z-10 relative mt-6">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d4d4d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform translate-y-2 -rotate-6">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                <svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="z-10 bg-white rounded-full">
                  <path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2" />
                  <circle cx="14" cy="7" r="4" />
                </svg>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d4d4d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform translate-y-2 rotate-6">
                  <path d="M20 21v-2a4 4 0 0 0-4-4h-3" />
                  <circle cx="16" cy="7" r="4" />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
