import Lenis from "lenis";

let globalLenis: Lenis | null = null;

export function getLenis(): Lenis | null {
  return globalLenis;
}

export function initSmoothScroll(): Lenis {
  if (globalLenis) return globalLenis;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  globalLenis = lenis;
  return lenis;
}

export function destroySmoothScroll(): void {
  if (globalLenis) {
    globalLenis.destroy();
    globalLenis = null;
  }
}
