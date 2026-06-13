"use client";

import type { Service } from "@/data/services";
import { iconMap } from "@/data/services";
import { useLocale } from "@/i18n/context";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { locale } = useLocale();
  const name = locale === "es" ? service.titleEs : service.title;
  const desc = locale === "es" ? service.descriptionEs : service.description;

  return (
    <article className="border border-fog rounded-[24px] p-8 bg-ink flex flex-col h-full hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow duration-300">
      <div className="w-[52px] h-[52px] rounded-[14px] bg-mist border border-fog flex items-center justify-center flex-shrink-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-snow"
        >
          <path d={iconMap[service.icon] || iconMap.code} />
        </svg>
      </div>
      <h3 className="text-[23px] font-bold text-snow mt-6 leading-tight">
        {name}
      </h3>
      <p className="text-[17px] text-steel leading-[1.6] mt-3 flex-1">
        {desc}
      </p>
      <div className="flex flex-wrap gap-2 mt-6">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="border border-fog rounded-[100px] px-3 py-1 text-[14px] font-medium text-slate bg-ink"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
