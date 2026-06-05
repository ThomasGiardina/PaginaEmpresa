"use client";

import { useLocale } from "@/i18n/context";
import { clients } from "@/data/clients";

export function LogoStrip() {
  const { t } = useLocale();

  const logoItems = clients.map((c) => c.name);

  return (
    <section className="bg-snow py-12 border-t border-fog overflow-hidden">
      <div className="max-w-[1500px] mx-auto w-full px-6 mb-6 text-center">
        <span className="text-sm font-medium text-graphite tracking-[0.08em] uppercase">
          {t("logoStrip.label")}
        </span>
      </div>
      <div className="relative overflow-hidden w-full">
        <div className="flex gap-64 animate-scroll-left w-max py-32">
          {[...Array(6)].flatMap(() => logoItems).map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-2xl font-medium text-graphite whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
