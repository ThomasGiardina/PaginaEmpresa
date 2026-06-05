"use client";

import { useLocale } from "@/i18n/context";
import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  const { t } = useLocale();

  return (
    <section
      id="contact"
      className="bg-obsidian min-h-[calc(100dvh-3.5rem)] flex items-center py-20 scroll-mt-14"
    >
      <div className="max-w-[1500px] mx-auto w-full px-6">
        <Reveal>
          <span className="text-[10px] font-medium text-white/30 tracking-[0.08em] uppercase">
            {t("contact.label")}
          </span>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[9fr_11fr] gap-12 mt-6">
          <Reveal y={24}>
            <div className="flex flex-col gap-6">
              <h2 className="text-[32px] font-bold text-snow leading-[1.28]">
                {t("contact.title")}
              </h2>
              <p className="text-[15px] font-normal text-white/55 leading-relaxed max-w-[360px]">
                {t("contact.subtitle")}
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-normal text-white/60">
                    {t("contact.email")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-normal text-white/60">
                    /paginita
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-normal text-white/60">
                    +1 (555) 000-0000
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="bg-white/4 border border-white/10 rounded-[24px] p-6 w-full">
            <Reveal y={24}>
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(t("contact.success"));
                }}
              >
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder={t("contact.name")}
                    required
                    className="h-11 px-4 bg-white/7 border border-white/12 rounded-[10px] text-snow text-[14px] font-normal placeholder:text-white/30 outline-none focus:border-white/25 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder={t("contact.emailField")}
                    required
                    className="h-11 px-4 bg-white/7 border border-white/12 rounded-[10px] text-snow text-[14px] font-normal placeholder:text-white/30 outline-none focus:border-white/25 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder={t("contact.subject")}
                  required
                  className="h-11 px-4 bg-white/7 border border-white/12 rounded-[10px] text-snow text-[14px] font-normal placeholder:text-white/30 outline-none focus:border-white/25 transition-colors"
                />
                <textarea
                  placeholder={t("contact.message")}
                  required
                  rows={4}
                  className="px-4 py-3 bg-white/7 border border-white/12 rounded-[10px] text-snow text-[14px] font-normal placeholder:text-white/30 outline-none focus:border-white/25 transition-colors resize-y min-h-[100px]"
                />
                <button
                  type="submit"
                  className="w-full h-11 bg-snow text-obsidian rounded-[100px] text-[14px] font-semibold hover:bg-mist transition-colors"
                >
                  {t("contact.submit")}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
