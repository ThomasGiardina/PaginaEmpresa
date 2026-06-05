"use client";

import { useLocale } from "@/i18n/context";
import { successStories } from "@/data/successStories";
import { SuccessStoryCard } from "@/components/ui/SuccessStoryCard";
import { Reveal } from "@/components/Reveal";

export function SuccessStories() {
  const { t } = useLocale();

  return (
    <section className="bg-snow min-h-[calc(100dvh-3.5rem)] flex items-center py-20">
      <div className="max-w-[1500px] mx-auto w-full px-6">
        <Reveal>
          <span className="text-[10px] font-medium text-ash tracking-[0.08em] uppercase">
            {t("stories.title")}
          </span>
        </Reveal>
        <Reveal y={24} delay={0.1}>
          <h2 className="text-[32px] font-bold text-obsidian leading-[1.28] mt-2 mb-8">
            {t("stories.title")}
          </h2>
        </Reveal>
        <Reveal y={32} delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {successStories.map((story) => (
              <SuccessStoryCard key={story.id} story={story} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
