"use client";

import { useLocale } from "@/i18n/context";
import type { Service } from "@/data/services";
import { Badge } from "./Badge";

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, string> = {
  code: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6-1.6 1.6a1 1 0 0 0 1.4 1.4l2.3-2.3a1 1 0 0 0 0-1.4l-2.3-2.3a1 1 0 0 0-1.4 0zm-5.4 0a1 1 0 0 0-1.4 0l-2.3 2.3a1 1 0 0 0 0 1.4l2.3 2.3a1 1 0 0 0 1.4-1.4L5.7 9.3l1.6-1.6a1 1 0 0 0 0-1.4zM9.83 5.74a1 1 0 0 0-1.28.57l-3 8a1 1 0 1 0 1.85.7l3-8a1 1 0 0 0-.57-1.27z",
  zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  cpu: "M9 3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h-6V3zM9 5h6v2H9V5zM5 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5zm0 2h14v6H5V9zm3 2a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z",
  plug: "M12 22v-5M9 8V2M15 8V2M4 8h16a1 1 0 0 1 1 1v3a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V9a1 1 0 0 1 1-1z",
  sparkles:
    "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456zM16.894 20.567L16 18.75l.894-1.817a2.625 2.625 0 0 0 1.789-1.79L19.5 14.25l.817 1.893a2.625 2.625 0 0 0 1.79 1.79L24 18.75l-1.893.817a2.625 2.625 0 0 0-1.79 1.79z",
  brain:
    "M9.5 2A3.5 3.5 0 0 0 6 5.5v.436a3.5 3.5 0 0 0 1.025 2.482l.742.742a1 1 0 0 1 .293.707v5.133a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5.133a1 1 0 0 1 .293-.707l.742-.742A3.5 3.5 0 0 0 18 5.936V5.5A3.5 3.5 0 0 0 14.5 2h-5z",
  settings:
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0l.01.01M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
};

export function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useLocale();
  const name = t === undefined ? service.title : service.title;

  return (
    <article className="bg-snow rounded-[36px] p-7 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-graphite flex items-center justify-center flex-shrink-0">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={iconMap[service.icon] || iconMap.code} />
          </svg>
        </div>
        <h3 className="text-[18px] font-semibold text-obsidian leading-tight">
          {service.title}
        </h3>
      </div>
      <p className="text-[14px] font-normal text-steel leading-[1.56]">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {service.tags.map((tag) => (
          <Badge key={tag} variant={tag === service.tags[0] ? "tech" : "filled"}>
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
}
