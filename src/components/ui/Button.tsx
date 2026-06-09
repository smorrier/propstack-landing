import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "teal";
type ButtonSize = "default" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-[#1a44c8] hover:-translate-y-px",
  ghost:
    "bg-transparent text-[#e2e8f0] border-[1.5px] border-white/8 hover:border-white/25 hover:bg-white/4",
  teal: "bg-brand-teal text-white hover:bg-[#0b837a] hover:-translate-y-px",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-7 py-3.5 text-[0.95rem]",
  lg: "px-9 py-4 text-base",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  pulse?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
  pulse = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-[180ms] ${variantClasses[variant]} ${sizeClasses[size]} ${pulse ? "animate-pulse-ring" : ""} ${className}`}
    >
      {children}
    </Link>
  );
}
