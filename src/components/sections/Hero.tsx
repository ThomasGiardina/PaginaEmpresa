"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/i18n/context";
import { Button } from "@/components/ui/Button";
import { HeroScene } from "@/components/ui/HeroScene";

const verbs: Record<string, string[]> = {
  en: ["automate", "build", "create", "develop", "design"],
  es: ["Automatizamos", "Creamos", "Desarrollamos", "Diseñamos", "Construimos"],
};

export function Hero() {
  const { t, locale } = useLocale();
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

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
    <section className="bg-snow min-h-[calc(100dvh-3.5rem)] flex items-center">
      <div className="max-w-[1500px] mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-28 items-center">
          <div className="flex flex-col gap-5">
            <span className="inline-flex self-start items-center px-3 py-1 rounded-[100px] bg-fog text-slate text-[14px] font-medium leading-none animate-slide-up" style={{ animationDelay: "0s" }}>
              {t("hero.badge")}
            </span>

            <h1 className="text-[64px] md:text-[80px] font-bold text-obsidian leading-[1.1] tracking-normal">
              <span className="block overflow-hidden">
                <span className="block animate-slide-up" style={{ animationDelay: "0.1s" }}>
                  {t("hero.prefix")}
                  <span
                    className="text-ash inline-block transition-opacity duration-200 ease-out"
                    style={{ opacity: fading ? 0 : 1 }}
                  >
                    {verbs[locale][index]}
                  </span>
                  {t("hero.line1Suffix")}
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-slide-up" style={{ animationDelay: "0.35s" }}>
                  {t("hero.line2")}
                </span>
              </span>
            </h1>

            <div className="flex items-center gap-3 mt-2 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <Button variant="primary">{t("hero.ctaProjects")}</Button>
              <Button variant="outlined">{t("hero.ctaTalk")}</Button>
            </div>
          </div>

          <div className="flex flex-col h-full animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <div className="flex-1 min-h-0">
              <HeroScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
