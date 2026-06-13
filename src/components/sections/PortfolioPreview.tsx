"use client";

import { useLocale } from "@/i18n/context";
import { projects } from "@/data/projects";
import { ProjectTile } from "@/components/ui/ProjectTile";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export function PortfolioPreview() {
  const { t } = useLocale();
  const featured = projects.slice(0, 4);

  return (
    <section id="projects" className="bg-obsidian min-h-dvh flex items-center py-20 border-b border-fog scroll-mt-14">
      <div className="max-w-[1500px] px-22 mx-auto w-full flex flex-col items-center">
        <div className="flex flex-col items-center mb-12 text-center">
          <Reveal>
            <span className="inline-block text-[13px] font-medium text-ash tracking-[0.08em] uppercase border border-fog bg-ink rounded-full px-[14px] py-[4px] mb-6">
              {t("projects.label")}
            </span>
          </Reveal>
          <Reveal y={24} delay={0.1}>
            <h2 className="text-[41px] font-bold text-snow leading-[1.2] mb-3">
              {t("projects.title")}
            </h2>
          </Reveal>
          <Reveal y={24} delay={0.15}>
            <p className="text-[18px] text-steel">
              {t("projects.subtitle")}
            </p>
          </Reveal>
        </div>

        <Reveal y={32} delay={0.2} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {featured.map((project, i) => (
              <Link href={`/proyectos/${project.slug}`} key={project.id} className="block h-full">
                <ProjectTile project={project} />
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal y={24} delay={0.25}>
          <div className="mt-12">
            <Link
              href="/proyectos"
              className="inline-flex items-center text-[16px] font-medium text-snow border border-fog bg-ink rounded-[100px] px-6 py-3 hover:bg-mist transition-colors shadow-sm gap-2"
            >
              {t("projects.viewAll")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
