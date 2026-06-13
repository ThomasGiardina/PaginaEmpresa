"use client";

import { useLocale } from "@/i18n/context";
import { clients } from "@/data/clients";

export function LogoStrip() {
  const { t } = useLocale();

  const logoItems = clients.map((c) => c.name);

  return (
    <section className="bg-obsidian pt-52 pb-12 overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="max-w-[1500px] px-22 mx-auto w-full mb-6 text-center">
          <span className="text-sm font-medium text-slate tracking-[0.08em] uppercase">
            {t("logoStrip.label")}
          </span>
        </div>
      </div>
      <div className="relative overflow-hidden w-full">
        <div className="flex gap-64 animate-scroll-left w-max py-32">
          {[...Array(6)].flatMap(() => logoItems).map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-2xl font-medium text-slate whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
