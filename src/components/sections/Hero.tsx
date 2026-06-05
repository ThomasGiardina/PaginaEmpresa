"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "@/i18n/context";
import { Button } from "@/components/ui/Button";
import { HeroScene } from "@/components/ui/HeroScene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const verbs: Record<string, string[]> = {
  en: ["automate", "build", "create", "develop", "design"],
  es: ["Automatizamos", "Creamos", "Desarrollamos", "Diseñamos", "Construimos"],
};

export function Hero() {
  const { t, locale } = useLocale();
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const badge = el.querySelector<HTMLElement>('[data-animate="badge"]');
    const h1lines = el.querySelectorAll<HTMLElement>('[data-animate="heading-line"]');
    const cta = el.querySelector<HTMLElement>('[data-animate="cta"]');
    const scene = el.querySelector<HTMLElement>('[data-animate="scene"]');

    gsap.set([badge, ...h1lines, cta, scene], { opacity: 0, y: 32 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    tl.to(badge, { opacity: 1, y: 0, duration: 0.6, ease: "cubic-bezier(0.16,1,0.3,1)" })
      .to(h1lines, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "cubic-bezier(0.16,1,0.3,1)" }, "-=0.3")
      .to(cta, { opacity: 1, y: 0, duration: 0.5, ease: "cubic-bezier(0.16,1,0.3,1)" }, "-=0.2")
      .to(scene, { opacity: 1, y: 0, duration: 0.6, ease: "cubic-bezier(0.16,1,0.3,1)" }, "-=0.3");

    return () => { tl.kill(); };
  }, []);

  return (
    <section className="bg-snow min-h-[calc(100dvh-3.5rem)] flex items-center">
      <div ref={sectionRef} className="max-w-[1500px] mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-28 items-center">
          <div className="flex flex-col gap-5">
            <span data-animate="badge" className="inline-flex self-start items-center px-3 py-1 rounded-[100px] bg-fog text-slate text-[14px] font-medium leading-none">
              {t("hero.badge")}
            </span>

            <h1 className="text-[64px] md:text-[80px] font-bold text-obsidian leading-[1.1] tracking-normal">
              <span className="block overflow-hidden">
                <span data-animate="heading-line" className="block">
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
                <span data-animate="heading-line" className="block">
                  {t("hero.line2")}
                </span>
              </span>
            </h1>

            <div data-animate="cta" className="flex items-center gap-3 mt-2">
              <Button variant="primary">{t("hero.ctaProjects")}</Button>
              <Button variant="outlined">{t("hero.ctaTalk")}</Button>
            </div>
          </div>

          <div data-animate="scene" className="flex flex-col h-full">
            <div className="flex-1 min-h-0">
              <HeroScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
