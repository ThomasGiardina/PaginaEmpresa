"use client";

import { useLocale } from "@/i18n/context";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  const { t } = useLocale();

  return (
    <section id="about" className="bg-obsidian min-h-dvh flex items-center py-24 scroll-mt-14 border-t border-ink">
      <div className="max-w-[1500px] px-22 mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="inline-block self-start text-[13px] font-medium text-ash tracking-[0.08em] uppercase border border-fog bg-ink rounded-full px-[14px] py-[4px]">
                {t("about.label")}
              </span>
            </Reveal>
            <Reveal y={24} delay={0.1}>
              <h2 className="text-[41px] md:text-[51px] font-bold text-snow leading-[1.15] max-w-[500px]">
                {t("about.title")}
              </h2>
            </Reveal>
            <Reveal y={20} delay={0.15}>
              <p className="text-[18px] font-normal text-steel leading-[1.65] max-w-[460px]">
                {t("about.body")}
              </p>
            </Reveal>
            <Reveal y={20} delay={0.2}>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center text-[16px] font-medium text-snow border border-fog bg-ink rounded-[100px] px-6 py-3 hover:bg-mist transition-colors shadow-sm gap-2"
                >
                  {t("about.cta")}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal y={32} delay={0.25} className="flex justify-center md:justify-end">
            <div className="w-full max-w-[500px] aspect-[4/3] bg-indigo/5 border border-indigo/20 rounded-[36px] flex items-center justify-center p-8 shadow-[0_8px_30px_rgba(115,53,178,0.15)] hover:border-indigo/40 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
              <div className="flex items-end justify-center gap-2 z-10 relative mt-6">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform translate-y-2 -rotate-6 text-pebble">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                <svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="z-10 bg-indigo/10 rounded-full text-indigo">
                  <path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2" />
                  <circle cx="14" cy="7" r="4" />
                </svg>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform translate-y-2 rotate-6 text-pebble">
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
