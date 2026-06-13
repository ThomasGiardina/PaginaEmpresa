"use client";

import Spline from "@splinetool/react-spline";

export function SplineRobot() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-indigo/5 via-transparent to-transparent pointer-events-none" />
      <Spline
        scene="/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}
