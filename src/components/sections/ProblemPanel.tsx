"use client";

import { motion } from "motion/react";
import { useLocale } from "@/i18n/context";
import { Reveal } from "@/components/Reveal";
import { transition } from "@/lib/easing";

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
  },
];

function ProblemCard({
  icon,
  title,
  desc,
  index,
}: {
  icon: string;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...transition(index * 0.08), duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative bg-white/[0.02] border border-white/[0.06] rounded-[24px] p-8 flex flex-col h-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo/[0.04] to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.08, duration: 0.6 }}
      />
      <div className="w-[48px] h-[48px] rounded-[14px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 flex-shrink-0 relative z-10">
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
          <path d={icon} />
        </svg>
      </div>
      <h3 className="text-[21px] font-bold text-snow mb-3 leading-snug relative z-10">
        {title}
      </h3>
      <p className="text-[16px] text-slate/70 leading-[1.6] flex-1 relative z-10">
        {desc}
      </p>
    </motion.div>
  );
}

export function ProblemPanel() {
  const { t } = useLocale();

  return (
    <section id="problems" className="bg-obsidian min-h-dvh flex items-center py-24 border-y border-white/[0.04] scroll-mt-14">
      <div className="max-w-[1500px] px-22 mx-auto w-full flex flex-col items-center">
        <Reveal>
          <span className="inline-block text-[13px] font-medium text-ash tracking-[0.08em] uppercase bg-white/[0.03] border border-white/[0.08] rounded-full px-[14px] py-[4px] mb-6">
            {t("problems.badge")}
          </span>
        </Reveal>
        <Reveal y={24} delay={0.1}>
          <h2 className="text-[41px] md:text-[48px] font-bold text-white text-center leading-[1.2] max-w-[800px] mb-12">
            {t("problems.titleWhite")}{" "}
            <span className="text-slate/60">{t("problems.titleGray")}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
          {cards.map((card, i) => (
            <ProblemCard
              key={i}
              icon={card.icon}
              title={t(card.titleKey)}
              desc={t(card.descKey)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
