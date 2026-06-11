"use client";

import { useLocale } from "@/i18n/context";
import type { Service } from "@/data/services";
import { iconMap } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const name = service.title;

  return (
    <article className="border border-[#e5e5e5] rounded-[16px] p-7 bg-white flex flex-col">
      <div className="w-32 h-32 rounded-full bg-[#f0f0f0] flex items-center justify-center flex-shrink-0">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#444"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={iconMap[service.icon] || iconMap.code} />
        </svg>
      </div>
      <h3 className="text-[18px] font-bold text-obsidian mt-5">
        {name}
      </h3>
      <p className="text-[14px] text-steel leading-[1.6] mt-2">
        {service.description}
      </p>
      <div className="border-t border-[#eee] my-5" />
      <div className="flex flex-wrap gap-2 mt-auto">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="border border-[#ddd] rounded-full px-3 py-[3px] text-[12px] text-[#444] bg-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
