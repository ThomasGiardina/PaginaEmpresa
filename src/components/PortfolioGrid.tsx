"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/context";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import { ProjectTile } from "@/components/ui/ProjectTile";

type Filter = "all" | "desarrollo" | "mobile" | "automatizacion" | "integraciones";

const filters: { key: Filter; labelKey: string }[] = [
  { key: "all", labelKey: "filter.all" },
  { key: "desarrollo", labelKey: "filter.desarrollo" },
  { key: "mobile", labelKey: "filter.mobile" },
  { key: "automatizacion", labelKey: "filter.automatizacion" },
  { key: "integraciones", labelKey: "filter.integraciones" },
];

export function PortfolioGrid() {
  const { t } = useLocale();
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered: Project[] =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => {
          if (activeFilter === "mobile") return p.tags.includes("React Native");
          return p.category === activeFilter;
        });

  return (
    <section>
      <div className="bg-snow pt-16 pb-8">
        <div className="max-w-[1500px] mx-auto w-full px-6">
          <h1 className="text-[48px] font-bold text-obsidian leading-[1.1]">
            {t("projects.header.title")}
          </h1>
          <p className="text-[16px] font-normal text-steel leading-relaxed mt-3 max-w-[600px]">
            {t("projects.header.subtitle")}
          </p>
        </div>
      </div>

      <div className="bg-snow pb-8">
        <div className="max-w-[1500px] mx-auto w-full px-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-1.5 rounded-[100px] text-[13px] font-medium leading-none transition-colors ${
                  activeFilter === f.key
                    ? "bg-obsidian text-snow border border-obsidian"
                    : "bg-snow text-obsidian border border-[#e5e5e5] hover:bg-mist"
                }`}
              >
                {t(f.labelKey)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-snow pb-24">
        <div className="max-w-[1500px] mx-auto w-full px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((project, i) => (
              <Link href={`/proyectos/${project.slug}`} key={project.id} className="block">
                <ProjectTile
                  project={project}
                  decorative={i === 3}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
