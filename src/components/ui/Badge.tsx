import type { ReactNode } from "react";

type BadgeVariant = "tech" | "overlay" | "filled";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variants: Record<BadgeVariant, string> = {
  tech: "",
  overlay: "",
  filled: "",
};

export function Badge({ variant = "filled", children }: BadgeProps) {
  return <span className={variants[variant]}>{children}</span>;
}
