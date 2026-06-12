"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/i18n/context";

const tasks = [
  "Sincronizar leads",
  "Generar reportes",
  "Enviar recordatorios",
  "Actualizar CRM"
];

export function DashboardDemo() {
  const { locale } = useLocale();

  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  // Workflow cycling steps
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const orbitCardStyle =
    "bg-white border border-[#e5e5e5] rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] p-4 dashboard-card transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]";

  const centerCardStyle =
    "bg-white border border-[#e5e5e5] rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden transition-transform duration-500 hover:scale-[1.02] absolute z-10 w-[380px] p-5 flex flex-col gap-4";

  return (
    <div className="relative w-full h-full min-h-[480px] bg-transparent flex items-center justify-center">
      {/* Background: Concentric orbits */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg className="w-[120%] h-[120%] absolute animate-[spin_120s_linear_infinite]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#ececee" strokeWidth="0.4" strokeDasharray="1.5 2.5" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="#ececee" strokeWidth="0.4" strokeDasharray="1.5 2.5" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="#ececee" strokeWidth="0.4" strokeDasharray="1.5 2.5" fill="none" />
        </svg>
      </div>

      {/* Orbit 1 — top-left: Automatización activa 24/7 */}
      <div className="orbit-wrapper-1">
        <div className="orbit-item-1">
          <div className={`${orbitCardStyle} w-[180px]`}>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
              {locale === "en" ? "Active Automation" : "Automatización activa"}
            </div>
            <div className="text-[26px] font-bold text-[#111] mt-0.5 tracking-[-0.02em] leading-none flex items-baseline gap-1.5">
              24/7
            </div>
            <svg className="mt-3 w-full h-8" viewBox="0 0 120 32" fill="none">
              <path
                d="M0 24 Q15 22 30 18 T60 12 T90 20 T105 6 T120 10"
                stroke="#d4d4d8"
                strokeWidth="2.2"
                fill="none"
                strokeLinecap="round"
                className="chart-path"
              />
              <circle cx="105" cy="6" r="3" fill="#111" />
            </svg>
          </div>
        </div>
      </div>

      {/* Small Stats Box (Top Right) */}
      <div className="absolute top-10 right-4 lg:right-10 bg-white border border-[#e5e5e5] rounded-[12px] shadow-sm p-4 w-[160px] animate-[slideIn_1s_ease-out]">
        <div className="text-[10px] text-zinc-500 font-semibold uppercase">
          {locale === "en" ? "Tasks completed" : "Tareas completadas"}
        </div>
        <div className="text-[20px] font-bold text-[#111] mt-1 leading-none">
          1,248
        </div>
        <svg className="w-full h-6 mt-2" viewBox="0 0 100 20">
          <path d="M0 15 L20 10 L40 18 L60 5 L80 12 L100 2" stroke="#e4e4e7" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Center Card */}
      <div className={centerCardStyle}>
        <div className="grid grid-cols-[3fr_1fr_1fr] gap-2 pb-2 border-b border-[#ececee] text-[10px] text-zinc-400 uppercase font-semibold">
          <div>{locale === "en" ? "Operation" : "Operación en ejecución"}</div>
          <div className="text-center">{locale === "en" ? "Status" : "Estado"}</div>
          <div className="text-right">{locale === "en" ? "Control" : "Control"}</div>
        </div>
        
        <div className="flex flex-col gap-3 mt-1">
          {tasks.map((task, i) => {
            const isActive = isPlaying && activeStep === i;
            return (
              <div key={i} className="grid grid-cols-[3fr_1fr_1fr] gap-2 items-center text-[13px] font-medium text-[#111]">
                <div className={`transition-colors ${isActive ? "text-[#111]" : "text-zinc-500"}`}>
                  {locale === "en" ? ["Sync leads", "Generate reports", "Send reminders", "Update CRM"][i] : task}
                </div>
                <div className="text-center text-[12px] text-zinc-500">
                  {locale === "en" ? "Active" : "Activo"}
                </div>
                <div className="flex justify-end">
                  <div className={`w-8 h-4 rounded-full flex items-center p-0.5 transition-colors ${isActive ? "bg-obsidian" : "bg-zinc-200"}`}>
                    <div className={`w-3 h-3 rounded-full bg-white transition-transform ${isActive ? "translate-x-4" : "translate-x-0"}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Play/Pause Button */}
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-10 z-20 w-12 h-12 rounded-full bg-obsidian text-white flex items-center justify-center hover:scale-105 transition-transform shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
      >
        {isPlaying ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        )}
      </button>

      {/* Orbit 3 — middle-right: Ahorro de tiempo */}
      <div className="orbit-wrapper-3">
        <div className="orbit-item-3">
          <div className={`${orbitCardStyle} w-[150px]`}>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
              {locale === "en" ? "Time Saved" : "Ahorro de tiempo"}
            </div>
            <div className="text-[28px] font-bold text-[#111] mt-0.5 tracking-[-0.02em] leading-none">
              320h
            </div>
            <div className="text-[10px] text-zinc-400 mt-1 font-medium">
              {locale === "en" ? "this month" : "este mes"}
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
          width: 460px;
          height: 460px;
          border-radius: 9999px;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: orbit-1-cw 60s linear infinite;
        }
        .orbit-item-1 {
          position: absolute;
          top: -30px;
          pointer-events: auto;
          animation: orbit-1-ccw 60s linear infinite;
        }
        @keyframes orbit-1-cw {
          from { transform: rotate(-60deg); }
          to { transform: rotate(300deg); }
        }
        @keyframes orbit-1-ccw {
          from { transform: rotate(60deg); }
          to { transform: rotate(-300deg); }
        }

        .orbit-wrapper-3 {
          position: absolute;
          width: 520px;
          height: 520px;
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
          from { transform: rotate(30deg); }
          to { transform: rotate(390deg); }
        }
        @keyframes orbit-3-ccw {
          from { transform: rotate(-30deg); }
          to { transform: rotate(-390deg); }
        }
      `}</style>
    </div>
  );
}
