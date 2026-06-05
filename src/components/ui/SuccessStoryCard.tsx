"use client";

import { useLocale } from "@/i18n/context";
import type { SuccessStory } from "@/data/successStories";

interface SuccessStoryCardProps {
  story: SuccessStory;
}

export function SuccessStoryCard({ story }: SuccessStoryCardProps) {
  const { locale } = useLocale();
  const problem = locale === "es" ? story.problemEs : story.problem;
  const impact = locale === "es" ? story.impactEs : story.impact;
  const metricLabel = locale === "es" ? story.metricLabelEs : story.metricLabel;

  return (
    <article className="bg-fog rounded-[28px] p-6 flex flex-col gap-3">
      <h3 className="text-[16px] font-semibold text-obsidian">{story.client}</h3>
      <p className="text-[14px] font-normal text-steel leading-[1.56]">{problem}</p>
      <div className="mt-auto pt-2">
        <p className="text-[14px] font-normal text-steel leading-snug">{impact}</p>
        <p className="text-[32px] font-bold text-obsidian leading-[1.1] mt-1">
          {story.metric}
        </p>
        <p className="text-[13px] font-normal text-steel leading-snug">
          {metricLabel}
        </p>
      </div>
    </article>
  );
}
