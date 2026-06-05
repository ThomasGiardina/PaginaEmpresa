"use client";

import { useLocale } from "@/i18n/context";
import { projects } from "@/data/projects";
import { ProjectTile } from "@/components/ui/ProjectTile";
import { Button } from "@/components/ui/Button";

export function PortfolioPreview() {
  const { t } = useLocale();
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="bg-snow min-h-[calc(100dvh-3.5rem)] flex items-center py-20 border-t border-fog scroll-mt-14">
      <div className="max-w-[1500px] mx-auto w-full px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[10px] font-medium text-ash tracking-[0.08em] uppercase">
              {t("projects.label")}
            </span>
            <h2 className="text-[32px] font-bold text-obsidian leading-[1.28] mt-1">
              {t("projects.title")}
            </h2>
          </div>
          <a
            href="/proyectos"
            className="hidden md:inline-flex items-center text-[14px] font-medium text-graphite border border-graphite rounded-[100px] px-5 py-2 hover:bg-mist transition-colors"
          >
            {t("projects.viewAll")}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {featured.map((project, i) => (
            <ProjectTile
              key={project.id}
              project={project}
              height="220px"
              decorative={i === 1}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <a
            href="/proyectos"
            className="inline-flex items-center text-[14px] font-medium text-graphite border border-graphite rounded-[100px] px-5 py-2 hover:bg-mist transition-colors"
          >
            {t("projects.viewAll")}
          </a>
        </div>
      </div>
    </section>
  );
}
