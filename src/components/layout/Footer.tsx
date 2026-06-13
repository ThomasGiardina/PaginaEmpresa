"use client";

import { useLocale } from "@/i18n/context";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-obsidian pt-12 pb-8 border-t border-white/8">
      <div className="max-w-[1500px] mx-auto w-full px-22">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-[28px] bg-snow flex-shrink-0" />
              <span className="text-[17px] font-semibold text-snow">
                Paginita
              </span>
            </div>
            <p className="text-[15px] text-white/40 leading-relaxed max-w-[240px]">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[13px] font-semibold text-white/30 uppercase tracking-wider">
              {t("footer.navTitle")}
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#services" className="text-[15px] text-white/55 hover:text-snow transition-colors">
                {t("nav.services")}
              </a>
              <a href="/proyectos" className="text-[15px] text-white/55 hover:text-snow transition-colors">
                {t("nav.projects")}
              </a>
              <a href="#about" className="text-[15px] text-white/55 hover:text-snow transition-colors">
                {t("nav.about")}
              </a>
              <a href="#contact" className="text-[15px] text-white/55 hover:text-snow transition-colors">
                {t("nav.contact")}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[13px] font-semibold text-white/30 uppercase tracking-wider">
              {t("footer.contactTitle")}
            </h4>
            <div className="flex flex-col gap-2">
              <span className="text-[15px] text-white/55">
                {t("contact.email")}
              </span>
              <div className="flex gap-2 mt-1">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center hover:bg-white/15 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center hover:bg-white/15 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center hover:bg-white/15 transition-colors"
                  aria-label="Email"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/8">
          <p className="text-[14px] text-white/25 text-center">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
