"use client";

import { useLocale } from "@/i18n/context";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/Reveal";

export function ServicesSection() {
  const { t } = useLocale();

  return (
    <section id="services" className="bg-mist min-h-dvh flex items-center py-20 scroll-mt-14">
      <div className="max-w-[1500px] px-22 mx-auto w-full">
        <div className="flex flex-col gap-4 mb-10">
          <Reveal>
            <span className="inline-block self-start text-[13px] font-medium text-ash tracking-[0.08em] uppercase border border-fog bg-ink rounded-full px-[14px] py-[4px]">
              {t("services.badge")}
            </span>
          </Reveal>
          <Reveal y={24} delay={0.1}>
            <h2 className="text-[41px] font-bold text-snow leading-[1.2]">
              {t("services.title")}
            </h2>
          </Reveal>
        </div>
        
        <Reveal y={32} delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
