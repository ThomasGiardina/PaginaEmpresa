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
    <section id="projects" className="bg-snow min-h-dvh flex items-center py-20 border-b border-fog scroll-mt-14">
      <div className="max-w-[1500px] mx-auto w-full px-6 flex flex-col items-center">
        <div className="flex flex-col items-center mb-12 text-center">
          <Reveal>
            <span className="inline-block text-[11px] font-medium text-ash tracking-[0.08em] uppercase border border-zinc-200 bg-white rounded-full px-[14px] py-[4px] mb-6">
              {t("projects.label")}
            </span>
          </Reveal>
          <Reveal y={24} delay={0.1}>
            <h2 className="text-[36px] font-bold text-obsidian leading-[1.2] mb-3">
              {t("projects.title")}
            </h2>
          </Reveal>
          <Reveal y={24} delay={0.15}>
            <p className="text-[16px] text-steel">
              {t("projects.subtitle")}
            </p>
          </Reveal>
        </div>

        <Reveal y={32} delay={0.2} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {featured.map((project, i) => (
              <Link href={`/proyectos/${project.slug}`} key={project.id} className="block">
                <ProjectTile
                  project={project}
                  decorative={i === 3}
                />
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal y={24} delay={0.25}>
          <div className="mt-12">
            <Link
              href="/proyectos"
              className="inline-flex items-center text-[14px] font-medium text-obsidian border border-[#e5e5e5] bg-white rounded-[100px] px-6 py-3 hover:bg-mist transition-colors shadow-sm gap-2"
            >
              {t("projects.viewAll")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
