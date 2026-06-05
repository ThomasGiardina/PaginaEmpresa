"use client";

import { useLocale } from "@/i18n/context";
import { AnimatedStat } from "@/components/ui/AnimatedStat";

export function StatsSection() {
  const { t } = useLocale();

  const stats = [
    { value: t("stats.projectsValue"), label: t("stats.projects") },
    { value: t("stats.timeValue"), label: t("stats.time") },
    { value: t("stats.integrationsValue"), label: t("stats.integrations") },
    { value: t("stats.ontimeValue"), label: t("stats.ontime") },
  ];

  return (
    <section className="bg-mist min-h-[calc(100dvh-3.5rem)] flex items-center py-16">
      <div className="max-w-[1500px] mx-auto w-full px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedStat key={i} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
