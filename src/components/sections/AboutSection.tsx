"use client";

import { useLocale } from "@/i18n/context";

export function AboutSection() {
  const { t } = useLocale();

  return (
    <section id="about" className="bg-snow min-h-[calc(100dvh-3.5rem)] flex items-center py-20 border-t border-fog scroll-mt-14">
      <div className="max-w-[1500px] mx-auto w-full px-6">
        <span className="text-[10px] font-medium text-ash tracking-[0.08em] uppercase">
          {t("about.label")}
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-6">
          <div className="flex flex-col gap-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-obsidian leading-[1.25]">
              {t("about.title")}
            </h2>
            <p className="text-[15px] font-normal text-steel leading-[1.65]">
              {t("about.body")}
            </p>
            <div className="flex gap-8">
              <div>
                <span className="text-[40px] font-bold text-obsidian leading-none">
                  20+
                </span>
                <p className="text-[13px] font-normal text-steel leading-snug mt-1">
                  {t("about.statsProjects")}
                </p>
              </div>
              <div>
                <span className="text-[40px] font-bold text-obsidian leading-none">
                  15+
                </span>
                <p className="text-[13px] font-normal text-steel leading-snug mt-1">
                  {t("about.statsIntegrations")}
                </p>
              </div>
              <div>
                <span className="text-[40px] font-bold text-obsidian leading-none">
                  100%
                </span>
                <p className="text-[13px] font-normal text-steel leading-snug mt-1">
                  {t("stats.ontime")}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] overflow-hidden h-[220px]">
            <img
              src="https://picsum.photos/seed/team-workspace/600/400"
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
