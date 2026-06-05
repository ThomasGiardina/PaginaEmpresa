"use client";

import { useLocale } from "@/i18n/context";
import { clients } from "@/data/clients";

export function LogoStrip() {
  const { t } = useLocale();

  const logoItems = clients.map((c) => c.name);

  return (
    <section className="bg-snow py-6 border-t border-fog overflow-hidden">
      <div className="max-w-[1500px] mx-auto w-full px-6 mb-4">
        <span className="text-[10px] font-medium text-ash tracking-[0.08em] uppercase">
          {t("logoStrip.label")}
        </span>
      </div>
      <div className="relative overflow-hidden w-full">
        <div className="flex gap-10 animate-scroll-left w-max">
          {[...logoItems, ...logoItems].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-[16px] font-medium text-ash/70 whitespace-nowrap grayscale opacity-50"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
