import { type ReactNode } from "react";

export function Label({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-teal ${className}`}
    >
      {children}
    </span>
  );
}
