"use client";

import { useLocale } from "@/i18n/context";

export function Nav() {
  const { t, locale, setLocale } = useLocale();

  return (
    <nav>
      <span>Paginita</span>
      <div>
        <a href="#services">{t("nav.services")}</a>
        <a href="/proyectos">{t("nav.projects")}</a>
        <a href="#about">{t("nav.about")}</a>
        <a href="#contact">{t("nav.contact")}</a>
      </div>
      <button onClick={() => setLocale(locale === "en" ? "es" : "en")}>
        {locale === "en" ? "ES" : "EN"}
      </button>
    </nav>
  );
}
