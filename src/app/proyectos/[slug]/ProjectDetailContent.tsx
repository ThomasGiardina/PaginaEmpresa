"use client";

import { useLocale } from "@/i18n/context";
import { Project } from "@/data/projects";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function ProjectDetailContent({ project }: { project: Project }) {
  const { locale, t } = useLocale();

  const title = locale === "es" ? project.titleEs : project.title;
  const desc = locale === "es" ? project.descriptionEs : project.description;
  const problem = locale === "es" ? project.problemEs : project.problemEn;
  const solution = locale === "es" ? project.solutionEs : project.solutionEn;
  const results = locale === "es" ? project.resultsEs : project.resultsEn;

  return (
    <div className="bg-snow min-h-screen pt-24 pb-32">
      <div className="max-w-[1200px] px-22 mx-auto w-full">
        <Reveal>
          <Link
            href="/proyectos"
            className="inline-flex items-center text-[16px] font-medium text-steel hover:text-snow mb-12 group transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 transform group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t("projects.detail.back")}
          </Link>
        </Reveal>

        <Reveal y={20} delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-fog rounded-[100px] px-3 py-1.5 text-[14px] font-medium text-slate bg-ink"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-[51px] md:text-[64px] font-bold text-snow leading-[1.1] mb-6 max-w-[800px]">
            {title}
          </h1>
          <p className="text-[21px] text-steel leading-[1.6] max-w-[600px] mb-16">
            {desc}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-12 lg:gap-20">
          <div className="flex flex-col gap-12">
            <Reveal y={20} delay={0.2}>
              <div>
                <h2 className="text-[28px] font-bold text-snow mb-4">
                  {t("projects.detail.problem")}
                </h2>
                <p className="text-[18px] text-steel leading-relaxed">
                  {problem}
                </p>
              </div>
            </Reveal>

            <Reveal y={20} delay={0.3}>
              <div>
                <h2 className="text-[28px] font-bold text-snow mb-4">
                  {t("projects.detail.solution")}
                </h2>
                <p className="text-[18px] text-steel leading-relaxed">
                  {solution}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal y={30} delay={0.4}>
            <div className="bg-ink border border-fog rounded-[32px] p-4 lg:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
              <div className="w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-fog mb-8">
                <img
                  src={project.image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-2 pb-4">
                <h3 className="text-[21px] font-bold text-snow mb-6">
                  {t("projects.detail.results")}
                </h3>
                <ul className="flex flex-col gap-4">
                  {results.map((res, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-[17px] text-steel font-medium leading-relaxed">
                        {res}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
