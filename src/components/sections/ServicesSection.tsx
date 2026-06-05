"use client";

import { useLocale } from "@/i18n/context";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServicesSection() {
  const { t } = useLocale();

  return (
    <section id="services" className="bg-mist min-h-[calc(100dvh-3.5rem)] flex items-center py-20 scroll-mt-14">
      <div className="max-w-[1500px] mx-auto w-full px-6">
        <span className="text-[10px] font-medium text-ash tracking-[0.08em] uppercase">
          {t("services.label")}
        </span>
        <h2 className="text-[32px] font-bold text-obsidian leading-[1.28] mt-2 mb-8">
          {t("services.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
