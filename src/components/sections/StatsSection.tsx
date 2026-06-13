"use client";

import { useLocale } from "@/i18n/context";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { Reveal } from "@/components/Reveal";

export function StatsSection() {
  const { t } = useLocale();

  return (
    <section className="bg-obsidian py-20 border-y border-white/[0.04]">
      <div className="max-w-[1500px] px-22 mx-auto w-full">
        <div className="flex flex-col items-center mb-12">
          <Reveal>
            <span className="inline-block text-[13px] font-medium text-ash tracking-[0.08em] uppercase border border-white/[0.08] bg-white/[0.03] rounded-full px-[14px] py-[4px] mb-6">
              {t("stats.label")}
            </span>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedStat
            value={t("stats.projectsValue")}
            label={t("stats.projects")}
          />
          <AnimatedStat
            value={t("stats.timeValue")}
            label={t("stats.time")}
          />
          <AnimatedStat
            value={t("stats.integrationsValue")}
            label={t("stats.integrations")}
          />
          <AnimatedStat
            value={t("stats.ontimeValue")}
            label={t("stats.ontime")}
          />
        </div>
      </div>
    </section>
  );
}
