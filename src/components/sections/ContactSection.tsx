"use client";

import { useLocale } from "@/i18n/context";
import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  const { t } = useLocale();

  return (
    <section
      id="contact"
      className="bg-obsidian min-h-dvh flex items-center py-24 scroll-mt-14"
    >
      <div className="max-w-[1500px] px-22 mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-6">
          <Reveal y={24}>
            <div className="flex flex-col gap-6 lg:max-w-[480px]">
              <span className="text-[13px] font-medium text-ash tracking-[0.08em] uppercase mb-2">
                {t("contact.label")}
              </span>
              <h2 className="text-[41px] md:text-[51px] font-bold text-snow leading-[1.1]">
                {t("contact.title")}
              </h2>
              <p className="text-[18px] font-normal text-steel leading-relaxed mb-6">
                {t("contact.subtitle")}
              </p>
              
              <div className="flex flex-col gap-6 mt-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[14px] bg-ink border border-fog flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-[17px] font-medium text-snow">
                    {t("contact.email")}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[14px] bg-ink border border-fog flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-[17px] font-medium text-snow">
                    {t("contact.phone")}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[14px] bg-ink border border-fog flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="text-[17px] font-medium text-snow">
                    {t("contact.address")}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="bg-ink border border-fog rounded-[32px] p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-full">
            <Reveal y={24}>
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(t("contact.success"));
                }}
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-[15px] font-medium text-slate ml-1">{t("contact.name")}</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    required
                    className="h-12 px-4 bg-obsidian border border-fog rounded-[12px] text-snow text-[16px] font-medium placeholder:text-slate focus:border-indigo focus:bg-ink transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[15px] font-medium text-slate ml-1">{t("contact.emailField")}</label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="h-12 px-4 bg-obsidian border border-fog rounded-[12px] text-snow text-[16px] font-medium placeholder:text-slate focus:border-indigo focus:bg-ink transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[15px] font-medium text-slate ml-1">{t("contact.message")}</label>
                  <textarea
                    placeholder="Contanos sobre tu proyecto..."
                    required
                    rows={4}
                    className="px-4 py-3 bg-obsidian border border-fog rounded-[12px] text-snow text-[16px] font-medium placeholder:text-slate focus:border-indigo focus:bg-ink transition-colors resize-y min-h-[120px]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 bg-indigo text-white rounded-[100px] text-[17px] font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform mt-2 flex justify-center items-center gap-2"
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
