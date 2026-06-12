"use client";

import { useLocale } from "@/i18n/context";
import { AnimatedStat } from "@/components/ui/AnimatedStat";

export function StatsSection() {
  const { t } = useLocale();

  const stats = [
    { 
      value: t("stats.projectsValue"), 
      label: t("stats.projects"),
      icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    },
    { 
      value: t("stats.timeValue"), 
      label: t("stats.time"),
      icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2"
    },
    { 
      value: t("stats.integrationsValue"), 
      label: t("stats.integrations"),
      icon: "M8 4a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v1h1a3 3 0 0 1 0 6h-1v1a2 2 0 0 1-2 2h-1v1a3 3 0 0 1-6 0v-1H5a2 2 0 0 1-2-2v-1H2a3 3 0 0 1 0-6h1V9a2 2 0 0 1 2-2h1V7a3 3 0 0 1 3-3z"
    },
    { 
      value: t("stats.ontimeValue"), 
      label: t("stats.ontime"),
      icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M8 14s1.5 2 4 2 4-2 4-2 M9 9h.01 M15 9h.01"
    },
  ];

  return (
    <section className="bg-snow min-h-dvh flex items-center py-20 border-b border-fog">
      <div className="max-w-[1500px] mx-auto w-full px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedStat key={i} value={stat.value} label={stat.label} icon={stat.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
