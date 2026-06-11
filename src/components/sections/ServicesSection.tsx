"use client";

import { useLocale } from "@/i18n/context";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/Reveal";

export function ServicesSection() {
  const { t } = useLocale();

  return (
    <section id="services" className="bg-mist min-h-[calc(100dvh-3.5rem)] flex items-center py-20 scroll-mt-14">
      <div className="max-w-[1500px] mx-auto w-full px-6">
        <div className="flex justify-between items-end mb-6">
          <div>
            <Reveal>
              <span className="inline-block text-[11px] font-medium text-ash tracking-[0.08em] uppercase bg-[#f0f0f0] border-[0.5px] border-[#ccc] rounded-full px-[14px] py-[4px]">
                {t("services.badge")}
              </span>
            </Reveal>
            <Reveal y={24} delay={0.1}>
              <h2 className="text-[34px] font-bold text-obsidian leading-[1.28] mt-4">
                {t("services.title")}
              </h2>
            </Reveal>
            <Reveal y={24} delay={0.15}>
              <p className="text-[15px] text-steel max-w-[460px] mt-3">
                {t("services.subtitle")}
              </p>
            </Reveal>
          </div>
          <Reveal y={24} delay={0.1}>
            <a
              href="#contact"
              className="text-[14px] text-obsidian underline font-medium whitespace-nowrap"
            >
              {t("services.cta")} →
            </a>
          </Reveal>
        </div>
        <Reveal y={32} delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Reveal>
        <Reveal y={24} delay={0.25}>
          <div className="bg-[#f5f5f5] rounded-[12px] p-5 pl-7 flex items-center gap-4 mt-8">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div>
              <span className="font-semibold text-[15px] text-obsidian">
                {t("services.banner.title")}
              </span>
              <span className="text-[15px] text-steel ml-1">
                {t("services.banner.description")}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
