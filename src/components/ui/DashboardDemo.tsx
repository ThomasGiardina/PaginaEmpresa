"use client";

import { useLocale } from "@/i18n/context";

interface Dot { x: number; y: number; }

const dots: Dot[] = [
  { x: 35, y: 15 },
  { x: 65, y: 15 },
  { x: 18, y: 35 },
  { x: 82, y: 35 },
  { x: 12, y: 50 },
  { x: 88, y: 50 },
  { x: 18, y: 65 },
  { x: 82, y: 65 },
  { x: 35, y: 85 },
  { x: 65, y: 85 },
];

const circles = [85, 65, 45, 25];

export function DashboardDemo() {
  const { locale } = useLocale();

  const cardStyle = "bg-white border border-[#e5e5e5] rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.04)] p-4 dashboard-card transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] absolute";

  return (
    <div className="relative w-full h-full min-h-[480px] bg-[#f8f8f8] border border-[#e5e5e5] rounded-[24px] overflow-hidden">
      {/* Background: concentric dotted circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          {circles.map((r, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-dashed border-[#e5e5e5]"
              style={{
                width: `${r}%`,
                height: `${r}%`,
              }}
            />
          ))}

          {/* Node dots */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
            {dots.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r="0.8" fill="#d4d4d8" />
            ))}
          </svg>
        </div>
      </div>

      {/* Card 1 — top-left: Procesos automatizados */}
      <div className={`${cardStyle} top-[8%] left-[4%] w-[160px]`} style={{ animationDelay: "0.2s" }}>
        <div className="text-[11px] text-[#71717a] uppercase tracking-wider font-semibold">
          {locale === "en" ? "Automated Processes" : "Procesos automatizados"}
        </div>
        <div className="text-[28px] font-bold text-[#111] mt-1 tracking-[-0.02em] leading-none">24/7</div>
        <svg className="mt-3 w-full h-8" viewBox="0 0 120 32" fill="none">
          <path d="M0 25 Q20 23 35 12 T70 18 T105 5 T120 12" stroke="#a1a1aa" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="105" cy="5" r="3" fill="#111" />
        </svg>
      </div>

      {/* Card 2 — center: macOS workflow app */}
      <div className={`${cardStyle} top-[50%] left-[43%] -translate-x-1/2 -translate-y-1/2 w-[270px] overflow-hidden !p-0`} style={{ animationDelay: "0.5s" }}>
        {/* macOS title bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 bg-[#fafafa] border-b border-[#e5e5e5]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febb2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[11px] text-[#888] font-medium tracking-wide">
            {locale === "en" ? "workflow.paginita.dev" : "flujo.paginita.dev"}
          </span>
        </div>

        <div className="p-4 space-y-4">
          {/* Workflow Section */}
          <div>
            <div className="text-[10px] text-[#71717a] uppercase tracking-wider font-semibold mb-2">
              {locale === "en" ? "Workflow" : "Flujo de trabajo"}
            </div>
            <div className="flex items-center justify-between gap-1">
              {[1, 2, 3].map((step, i) => (
                <div key={i} className="flex items-center flex-1">
                  <div className="w-10 h-10 rounded-lg bg-[#fafafa] border border-[#e5e5e5] flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 rounded-full border border-dashed border-[#a1a1aa] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#71717a]" />
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="flex-1 flex justify-center items-center">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="text-[#a1a1aa]">
                        <path d="M1 5h10M7 1.5L11 5l-4 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-[#e5e5e5]" />

          {/* Metrics side-by-side */}
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="text-[10px] text-[#71717a] uppercase tracking-wider font-semibold">
                {locale === "en" ? "Tasks Done" : "Tareas completadas"}
              </div>
              <div className="text-[20px] font-bold text-[#111] mt-1 leading-none">1,248</div>
              <div className="text-[10px] text-[#28a745] font-semibold mt-1 flex flex-wrap items-center gap-0.5">
                +18% <span className="text-[#a1a1aa] font-normal">vs {locale === "en" ? "last month" : "mes pasado"}</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[10px] text-[#71717a] uppercase tracking-wider font-semibold">
                {locale === "en" ? "Integrations" : "Integraciones activas"}
              </div>
              <div className="text-[20px] font-bold text-[#111] mt-1 leading-none">15</div>
              <div className="text-[10px] text-[#28a745] font-semibold mt-1">
                {locale === "en" ? "Connected" : "Conectadas"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 — middle-right: Ahorro de tiempo */}
      <div className={`${cardStyle} top-[26%] right-[4%] w-[150px]`} style={{ animationDelay: "0.8s" }}>
        <div className="text-[11px] text-[#71717a] uppercase tracking-wider font-semibold">
          {locale === "en" ? "Time Saved" : "Ahorro de tiempo"}
        </div>
        <div className="text-[28px] font-bold text-[#111] mt-1 tracking-[-0.02em] leading-none">320h</div>
        <div className="text-[11px] text-[#71717a] mt-1.5 font-medium">
          {locale === "en" ? "this month" : "este mes"}
        </div>
      </div>

      {/* Card 4 — bottom-right: Sistemas conectados */}
      <div className={`${cardStyle} bottom-[12%] right-[4%] w-[150px]`} style={{ animationDelay: "1.1s" }}>
        <div className="text-[11px] text-[#71717a] uppercase tracking-wider font-semibold">
          {locale === "en" ? "Connected Systems" : "Sistemas conectados"}
        </div>
        <div className="text-[28px] font-bold text-[#111] mt-1 tracking-[-0.02em] leading-none">8</div>
        <div className="text-[11px] text-[#71717a] mt-1.5 font-medium">
          {locale === "en" ? "Active" : "Activos"}
        </div>
      </div>

      <style>{`
        .dashboard-card {
          opacity: 0;
          transform: translateY(12px);
          animation: cardFadeIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes cardFadeIn {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
