"use client";

import { useLocale } from "@/i18n/context";
import { Reveal } from "@/components/Reveal";
import { iconMap } from "@/data/services";

const cards = [
  {
    icon: "clock",
    titleKey: "problems.card1Title",
    descKey: "problems.card1Desc",
  },
  {
    icon: "puzzle",
    titleKey: "problems.card2Title",
    descKey: "problems.card2Desc",
  },
  {
    icon: "code",
    titleKey: "problems.card3Title",
    descKey: "problems.card3Desc",
  },
  {
    icon: "chart",
    titleKey: "problems.card4Title",
    descKey: "problems.card4Desc",
  },
];

const extraPaths: Record<string, string> = {
  clock:
    "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  lightbulb:
    "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
};

function getIconPath(icon: string): string {
  return iconMap[icon] || extraPaths[icon] || iconMap.code;
}

export function ProblemPanel() {
  const { t } = useLocale();

  return (
    <section id="problems" className="bg-[#0f0f0f] min-h-[calc(100dvh-3.5rem)] flex items-center py-20 scroll-mt-14">
      <div className="max-w-[1500px] mx-auto w-full px-6">
        <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-[40%]">
              <Reveal>
                <span className="inline-block text-[11px] font-medium text-[#aaa] tracking-[0.08em] uppercase bg-[#2a2a2a] rounded-full px-[14px] py-[4px]">
                  {t("problems.badge")}
                </span>
              </Reveal>
              <Reveal y={24} delay={0.1}>
                <h2 className="text-[38px] font-bold text-white leading-[1.2] mt-4">
                  {t("problems.titleWhite")}
                  <br />
                  <span className="text-[#888]">{t("problems.titleGray")}</span>
                </h2>
              </Reveal>
              <div className="w-10 border-t border-[#444] my-6" />
              <Reveal y={24} delay={0.15}>
                <p className="text-[15px] text-[#aaa] leading-[1.7] max-w-[340px]">
                  {t("problems.subtitle")}
                </p>
              </Reveal>
              <Reveal y={24} delay={0.2}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-6 border border-[#555] text-white rounded-full px-6 py-3 text-[14px] hover:bg-white/5 transition-colors"
                >
                  {t("problems.cta")} →
                </a>
              </Reveal>
            </div>
            <div className="lg:w-[60%]">
              <Reveal y={32} delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cards.map((card, i) => (
                    <div
                      key={i}
                      className="bg-[#1a1a1a] rounded-[16px] border border-[#2a2a2a] p-7"
                    >
                      <div className="w-[52px] h-[52px] rounded-full bg-[#2a2a2a] flex items-center justify-center">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="rgba(255,255,255,0.6)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={getIconPath(card.icon)} />
                        </svg>
                      </div>
                      <h3 className="text-[17px] font-bold text-white mt-4 leading-[1.3]">
                        {t(card.titleKey)}
                      </h3>
                      <div className="border-t border-[#2a2a2a] my-4" />
                      <p className="text-[14px] text-[#888] leading-[1.6]">
                        {t(card.descKey)}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal y={24} delay={0.25}>
            <div className="bg-[#1a1a1a] rounded-[12px] p-5 pl-6 flex items-center gap-4 mt-8">
              <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={extraPaths.lightbulb} />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-[15px] text-white">
                  {t("problems.banner.title")}
                </span>
                <span className="text-[15px] text-[#888] ml-1">
                  {t("problems.banner.description")}
                </span>
              </div>
            </div>
          </Reveal>
      </div>
    </section>
  );
}
