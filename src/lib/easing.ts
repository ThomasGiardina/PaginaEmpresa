export const ease = [0.16, 1, 0.3, 1] as const;

export const spring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 60,
  damping: 14,
};

export const transition = (delay = 0) => ({
  ease,
  duration: 0.6,
  delay,
});

export const stagger = (delayPerChild = 0.08) => ({
  staggerChildren: delayPerChild,
});
