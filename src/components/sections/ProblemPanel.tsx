"use client";

import { useLocale } from "@/i18n/context";

const problems = [
  { leadIn: "problems.item1", strong: "problems.item1strong" },
  { leadIn: "problems.item2", strong: "problems.item2strong" },
  { leadIn: "problems.item3", strong: "problems.item3strong" },
  { leadIn: "problems.item4", strong: "problems.item4strong" },
];

const icons = [
  "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 3.75h.008v.008H12v-.008z",
  'M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z',
  "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
];

export function ProblemPanel() {
  const { t } = useLocale();

  return (
    <section className="bg-obsidian min-h-[calc(100dvh-3.5rem)] flex items-center py-20">
      <div className="max-w-[1500px] mx-auto w-full px-6">
        <span className="text-[10px] font-medium text-white/30 tracking-[0.08em] uppercase">
          {t("problems.label")}
        </span>
        <h2 className="text-[32px] font-bold text-snow leading-[1.28] mt-2 mb-10">
          {t("problems.title")}
        </h2>
        <div className="flex flex-col gap-5">
          {problems.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-graphite flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={icons[i]} />
                </svg>
              </div>
              <p className="text-[18px] leading-[1.45]">
                <span className="font-light text-ash">{t(item.leadIn)}</span>
                <span className="font-semibold text-snow">{t(item.strong)}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
