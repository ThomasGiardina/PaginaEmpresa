"use client";

import { useLocale } from "@/i18n/context";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/Reveal";

export function ServicesSection() {
  const { t } = useLocale();

  const automationService = services.find((s) => s.id === "automation");
  const webDev = services.find((s) => s.id === "web-dev");
  const integrations = services.find((s) => s.id === "integrations");
  const dataAnalytics = services.find((s) => s.id === "data-analytics");

  return (
    <section id="services" className="bg-obsidian min-h-dvh flex items-center py-20 scroll-mt-14">
      <div className="max-w-[1500px] px-22 mx-auto w-full">
        <div className="flex flex-col gap-4 mb-10">
          <Reveal>
            <span className="inline-block self-start text-[13px] font-medium text-ash tracking-[0.08em] uppercase border border-white/[0.08] bg-white/[0.03] rounded-full px-[14px] py-[4px]">
              {t("services.badge")}
            </span>
          </Reveal>
          <Reveal y={24} delay={0.1}>
            <h2 className="text-[41px] font-bold text-snow leading-[1.2]">
              {t("services.title")}
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {automationService && (
            <div className="sm:col-span-2 lg:row-span-2">
              <ServiceCard service={automationService} index={0} featured />
            </div>
          )}

          {webDev && (
            <ServiceCard service={webDev} index={1} />
          )}

          {integrations && (
            <ServiceCard service={integrations} index={2} />
          )}

          {dataAnalytics && (
            <div className="sm:col-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-2">
              <ServiceCard service={dataAnalytics} index={3} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
