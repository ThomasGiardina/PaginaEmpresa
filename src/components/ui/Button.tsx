import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outlined" | "dark-rounded";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary: "",
  outlined: "",
  "dark-rounded": "",
};

export function Button({ variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button className={variants[variant]} {...props}>
      {children}
    </button>
  );
}
