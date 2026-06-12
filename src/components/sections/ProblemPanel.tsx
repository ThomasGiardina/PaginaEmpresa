"use client";

import { useLocale } from "@/i18n/context";
import { Reveal } from "@/components/Reveal";

const cards = [
  {
    icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
    titleKey: "problems.card1Title",
    descKey: "problems.card1Desc",
  },
  {
    icon: "M8 4a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v1h1a3 3 0 0 1 0 6h-1v1a2 2 0 0 1-2 2h-1v1a3 3 0 0 1-6 0v-1H5a2 2 0 0 1-2-2v-1H2a3 3 0 0 1 0-6h1V9a2 2 0 0 1 2-2h1V7a3 3 0 0 1 3-3z",
    titleKey: "problems.card2Title",
    descKey: "problems.card2Desc",
  },
  {
    icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6-1.6 1.6a1 1 0 0 0 1.4 1.4l2.3-2.3a1 1 0 0 0 0-1.4l-2.3-2.3a1 1 0 0 0-1.4 0zm-5.4 0a1 1 0 0 0-1.4 0l-2.3 2.3a1 1 0 0 0 0 1.4l2.3 2.3a1 1 0 0 0 1.4-1.4L5.7 9.3l1.6-1.6a1 1 0 0 0 0-1.4zM9.83 5.74a1 1 0 0 0-1.28.57l-3 8a1 1 0 1 0 1.85.7l3-8a1 1 0 0 0-.57-1.27z",
    titleKey: "problems.card3Title",
    descKey: "problems.card3Desc",
  },
  {
    icon: "M4 20h16M6 16v-4M10 16V8M14 16V6M18 16v-2",
    titleKey: "problems.card4Title",
    descKey: "problems.card4Desc",
  }
];

export function ProblemPanel() {
  const { t } = useLocale();

  return (
    <section id="problems" className="bg-[#09090b] min-h-dvh flex items-center py-24 border-y border-[#18181b] scroll-mt-14">
      <div className="max-w-[1500px] mx-auto w-full px-6 flex flex-col items-center">
        <Reveal>
          <span className="inline-block text-[11px] font-medium text-[#aaa] tracking-[0.08em] uppercase bg-[#18181b] rounded-full px-[14px] py-[4px] mb-6">
            {t("problems.badge")}
          </span>
        </Reveal>
        <Reveal y={24} delay={0.1}>
          <h2 className="text-[36px] md:text-[42px] font-bold text-white text-center leading-[1.2] max-w-[800px] mb-12">
            {t("problems.titleWhite")}{" "}
            <span className="text-[#888]">{t("problems.titleGray")}</span>
          </h2>
        </Reveal>
        
        <Reveal y={32} delay={0.2} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-[#18181b] rounded-[24px] border border-[#27272a] p-8 flex flex-col h-full hover:bg-[#202024] transition-colors duration-300"
              >
                <div className="w-[48px] h-[48px] rounded-[14px] bg-[#27272a] flex items-center justify-center mb-6 flex-shrink-0">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={card.icon} />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-white mb-3 leading-snug">
                  {t(card.titleKey)}
                </h3>
                <p className="text-[15px] text-[#888] leading-[1.6] flex-1">
                  {t(card.descKey)}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
