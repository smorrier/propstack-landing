import type { ReactNode } from "react";

/** Body text styles for guide sections (no typography plugin in this project). */
export const LEARN_PROSE = [
  "text-[1.02rem] leading-[1.8] text-[#c3d0e0]",
  "[&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
  "[&_strong]:font-semibold [&_strong]:text-white",
  "[&_a]:text-accent-blue [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-white",
  "[&_table]:mt-5 [&_table]:w-full [&_table]:border-collapse [&_table]:text-[0.9rem]",
  "[&_th]:border-b [&_th]:border-white/15 [&_th]:px-3 [&_th]:py-2.5 [&_th]:text-left [&_th]:font-semibold [&_th]:text-white",
  "[&_td]:border-b [&_td]:border-white/8 [&_td]:px-3 [&_td]:py-2.5 [&_td]:align-top",
  "[&_caption]:mb-2 [&_caption]:caption-top [&_caption]:text-left [&_caption]:text-xs [&_caption]:text-muted",
].join(" ");

/** A formula on its own line, kept as text so crawlers and AI assistants can read it. */
export function Formula({ children }: { children: ReactNode }) {
  return (
    <p className="!mt-5 rounded-lg border border-brand-teal/40 bg-brand-teal/10 px-4 py-3 font-semibold text-white">
      {children}
    </p>
  );
}

/** Wide tables scroll inside the column instead of the page. */
export function TableWrap({ children }: { children: ReactNode }) {
  return <div className="-mx-1 overflow-x-auto rounded-lg px-1">{children}</div>;
}
