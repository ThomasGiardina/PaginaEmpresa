"use client";

import Spline from "@splinetool/react-spline";

export function SplineHero() {
  return (
    <div className="absolute inset-0 z-0">
      <Spline
        scene="/scene.splinecode"
        className="w-full h-full"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-indigo/5 to-obsidian/90 pointer-events-none"
      />
    </div>
  );
}
