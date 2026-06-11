"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/i18n/context";

export function DashboardDemo() {
  const { locale } = useLocale();

  const [activeStep, setActiveStep] = useState(0);
  const [tasksDone, setTasksDone] = useState(1248);
  const [timeSaved, setTimeSaved] = useState(320);

  // Workflow cycling steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Fluctuate counts to feel alive
  useEffect(() => {
    const taskInterval = setInterval(() => {
      setTasksDone((prev) => (prev >= 1300 ? 1240 : prev + 1));
    }, 3500);

    const timeInterval = setInterval(() => {
      setTimeSaved((prev) => (prev >= 350 ? 310 : prev + 1));
    }, 8000);

    return () => {
      clearInterval(taskInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const orbitCardStyle =
    "bg-white border border-[#e5e5e5] rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] p-4 dashboard-card transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]";

  const centerCardStyle =
    "bg-white border border-[#e5e5e5] rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden grid grid-cols-[45px_1fr] transition-transform duration-500 hover:scale-[1.02] absolute z-10 w-[310px]";

  return (
    <div className="relative w-full h-full min-h-[480px] bg-[#fafafa] border border-[#e5e5e5] rounded-[24px] overflow-hidden flex items-center justify-center">
      {/* Background: Concentric orbits with rotating node dots */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg className="w-[120%] h-[120%] absolute animate-[spin_90s_linear_infinite]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#ececee" strokeWidth="0.4" strokeDasharray="1.5 2.5" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="#ececee" strokeWidth="0.4" strokeDasharray="1.5 2.5" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="#ececee" strokeWidth="0.4" strokeDasharray="1.5 2.5" fill="none" />

          {/* Node dots on orbit tracks */}
          <circle cx="50" cy="10" r="1" fill="#cbd5e1" />
          <circle cx="50" cy="90" r="0.8" fill="#94a3b8" />
          <circle cx="20" cy="50" r="1.2" fill="#cbd5e1" />
          <circle cx="80" cy="50" r="0.9" fill="#94a3b8" />
          <circle cx="28.8" cy="28.8" r="0.8" fill="#e2e8f0" />
          <circle cx="71.2" cy="71.2" r="1" fill="#cbd5e1" />
        </svg>
      </div>

      {/* Orbit 1 — top-left: Procesos automatizados */}
      <div className="orbit-wrapper-1">
        <div className="orbit-item-1">
          <div className={`${orbitCardStyle} w-[165px]`}>
            <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
              {locale === "en" ? "Automated Processes" : "Procesos automatizados"}
            </div>
            <div className="text-[26px] font-bold text-[#111] mt-0.5 tracking-[-0.02em] leading-none flex items-baseline gap-1.5">
              24/7
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <svg className="mt-3 w-full h-8" viewBox="0 0 120 32" fill="none">
              <path
                d="M0 24 Q15 22 30 18 T60 12 T90 20 T105 6 T120 10"
                stroke="#a1a1aa"
                strokeWidth="2.2"
                fill="none"
                strokeLinecap="round"
                className="chart-path"
              />
              <circle cx="105" cy="6" r="3" fill="#10b981" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card 2 — center: macOS workflow app */}
      <div className={centerCardStyle}>
        {/* macOS sidebar */}
        <div className="bg-[#fafafa] border-r border-[#ececee] flex flex-col items-center py-4 gap-3.5">
          {/* Window controls inside sidebar */}
          <div className="flex gap-1 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <span className="w-2 h-2 rounded-full bg-[#febb2e]" />
            <span className="w-2 h-2 rounded-full bg-[#28c840]" />
          </div>
          {/* Vertical menu items represented as dots */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors duration-300 ${
                i === 0 ? "bg-zinc-100 text-[#111]" : "text-zinc-400 hover:bg-zinc-50"
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-[#111]" : "bg-zinc-300"}`} />
            </div>
          ))}
        </div>

        {/* macOS Main Pane */}
        <div className="flex flex-col bg-white">
          {/* Header */}
          <div className="flex items-center px-4 py-2.5 border-b border-[#ececee]">
            <span className="text-[10px] text-zinc-400 font-medium tracking-wide">
              {locale === "en" ? "workflow.paginita.dev" : "flujo.paginita.dev"}
            </span>
          </div>

          <div className="p-4 space-y-4">
            {/* Workflow Section */}
            <div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold mb-2.5">
                {locale === "en" ? "Workflow" : "Flujo de trabajo"}
              </div>
              <div className="flex items-center justify-between gap-1">
                {[0, 1, 2, 3].map((step) => {
                  const isActive = activeStep === step;
                  const isCompleted = step < activeStep;
                  return (
                    <div key={step} className="flex items-center flex-1">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-500 border ${
                          isActive
                            ? "border-obsidian bg-zinc-50 scale-105 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                            : isCompleted
                            ? "border-emerald-500 bg-emerald-50/50"
                            : "border-zinc-200 bg-white"
                        }`}
                      >
                        {isCompleted ? (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-emerald-600">
                            <path d="M2.5 6.5L4.5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : isActive ? (
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                        )}
                      </div>
                      {step < 3 && (
                        <div className="flex-1 flex justify-center items-center">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 12 10"
                            fill="none"
                            className={`transition-colors duration-500 ${
                              isCompleted ? "text-emerald-500" : isActive ? "text-[#111]" : "text-zinc-200"
                            }`}
                          >
                            <path d="M1 5h10M7 1.5L11 5l-4 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="h-[1px] bg-[#ececee]" />

            {/* Metrics */}
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="text-[9px] text-zinc-400 uppercase tracking-wider font-semibold">
                  {locale === "en" ? "Tasks Done" : "Tareas completadas"}
                </div>
                <div className="text-[18px] font-bold text-[#111] mt-0.5 leading-none transition-all duration-300">
                  {tasksDone.toLocaleString()}
                </div>
                <div className="text-[9px] text-emerald-600 font-semibold mt-1 flex flex-wrap items-center gap-0.5">
                  +18% <span className="text-[#a1a1aa] font-normal">vs {locale === "en" ? "last month" : "mes pasado"}</span>
                </div>
              </div>
              <div className="flex-1 border-l border-[#ececee] pl-4">
                <div className="text-[9px] text-zinc-400 uppercase tracking-wider font-semibold">
                  {locale === "en" ? "Integrations" : "Integraciones activas"}
                </div>
                <div className="text-[18px] font-bold text-[#111] mt-0.5 leading-none">15</div>
                <div className="text-[9px] text-emerald-600 font-semibold mt-1">
                  {locale === "en" ? "Connected" : "Conectadas"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orbit 3 — middle-right: Ahorro de tiempo */}
      <div className="orbit-wrapper-3">
        <div className="orbit-item-3">
          <div className={`${orbitCardStyle} w-[140px]`}>
            <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
              {locale === "en" ? "Time Saved" : "Ahorro de tiempo"}
            </div>
            <div className="text-[26px] font-bold text-[#111] mt-0.5 tracking-[-0.02em] leading-none">
              {timeSaved}h
            </div>
            <div className="text-[10px] text-zinc-400 mt-1 font-medium">
              {locale === "en" ? "this month" : "este mes"}
            </div>
          </div>
        </div>
      </div>

      {/* Orbit 4 — bottom-right: Sistemas conectados */}
      <div className="orbit-wrapper-4">
        <div className="orbit-item-4">
          <div className={`${orbitCardStyle} w-[140px]`}>
            <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
              {locale === "en" ? "Connected Systems" : "Sistemas conectados"}
            </div>
            <div className="text-[26px] font-bold text-[#111] mt-0.5 tracking-[-0.02em] leading-none">
              8
            </div>
            <div className="text-[10px] text-zinc-400 mt-1 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {locale === "en" ? "Active" : "Activos"}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-card {
          opacity: 0;
          transform: translateY(12px);
          animation: cardFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes cardFadeIn {
          to { opacity: 1; transform: translateY(0); }
        }
        .chart-path {
          stroke-dasharray: 150;
          stroke-dashoffset: 150;
          animation: chartDraw 3s ease-out infinite;
        }
        @keyframes chartDraw {
          0%, 10% { stroke-dashoffset: 150; }
          70%, 100% { stroke-dashoffset: 0; }
        }

        .orbit-wrapper-1 {
          position: absolute;
          width: 440px;
          height: 440px;
          border-radius: 9999px;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: orbit-1-cw 60s linear infinite;
        }
        .orbit-item-1 {
          position: absolute;
          top: -20px;
          pointer-events: auto;
          animation: orbit-1-ccw 60s linear infinite;
        }
        @keyframes orbit-1-cw {
          from { transform: rotate(-120deg); }
          to { transform: rotate(240deg); }
        }
        @keyframes orbit-1-ccw {
          from { transform: rotate(120deg); }
          to { transform: rotate(-240deg); }
        }

        .orbit-wrapper-3 {
          position: absolute;
          width: 490px;
          height: 490px;
          border-radius: 9999px;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: orbit-3-cw 70s linear infinite;
        }
        .orbit-item-3 {
          position: absolute;
          top: -20px;
          pointer-events: auto;
          animation: orbit-3-ccw 70s linear infinite;
        }
        @keyframes orbit-3-cw {
          from { transform: rotate(15deg); }
          to { transform: rotate(375deg); }
        }
        @keyframes orbit-3-ccw {
          from { transform: rotate(-15deg); }
          to { transform: rotate(-375deg); }
        }

        .orbit-wrapper-4 {
          position: absolute;
          width: 430px;
          height: 430px;
          border-radius: 9999px;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: orbit-4-cw 65s linear infinite;
        }
        .orbit-item-4 {
          position: absolute;
          top: -20px;
          pointer-events: auto;
          animation: orbit-4-ccw 65s linear infinite;
        }
        @keyframes orbit-4-cw {
          from { transform: rotate(115deg); }
          to { transform: rotate(475deg); }
        }
        @keyframes orbit-4-ccw {
          from { transform: rotate(-115deg); }
          to { transform: rotate(-475deg); }
        }
      `}</style>
    </div>
  );
}
