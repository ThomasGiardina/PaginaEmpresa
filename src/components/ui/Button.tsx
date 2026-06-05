import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outlined" | "dark-rounded";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center font-cosmica text-sm font-medium leading-none transition-colors duration-200 ease-out cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-obsidian text-snow rounded-[100px] px-5 py-2.5 text-[15px] font-medium shadow-[rgba(255,255,255,0.5)_0px_0.5px_0px_0px_inset,rgba(117,123,133,0.4)_0px_9px_14px_-5px_inset,rgb(44,46,52)_0px_0px_0px_1.5px,rgba(0,0,0,0.14)_0px_4px_6px_0px] hover:opacity-90",
  outlined:
    "bg-snow text-graphite rounded-[100px] px-5 py-2.5 text-[15px] font-medium border border-graphite hover:bg-mist",
  "dark-rounded":
    "bg-obsidian text-snow rounded-[14px] px-4 py-3 text-[15px] font-medium border border-white/20 hover:bg-ink",
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
