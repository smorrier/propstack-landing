"use client";

import { useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";

type StrategyId = "buyhold" | "flip" | "brrrr";

const tabs: { id: StrategyId; label: string }[] = [
  { id: "buyhold", label: "Buy & Hold" },
  { id: "flip", label: "Flip" },
  { id: "brrrr", label: "Buy · Optimize · Refi" },
];

const strategies: Record<
  StrategyId,
  {
    description: string;
    metrics: { label: string; value: string; highlight?: boolean }[];
    inputs: string[];
  }
> = {
  buyhold: {
    description:
      "Analyze long-term hold performance. Know your monthly cash flow, cap rate, and 5-year equity position before you sign anything.",
    metrics: [
      { label: "Cash-on-Cash", value: "7.4%" },
      { label: "Monthly Cash Flow", value: "$410" },
      { label: "Cap Rate", value: "6.1%" },
      { label: "5-yr Equity", value: "$61K" },
    ],
    inputs: [
      "Monthly rent",
      "Vacancy rate",
      "Property management %",
      "Taxes & insurance",
      "Maintenance reserve",
      "Break-even occupancy",
    ],
  },
  flip: {
    description:
      "Model your flip from purchase through exit. Net profit, annualized return, and your break-even sale price calculated automatically.",
    metrics: [
      { label: "Net Profit", value: "$38K" },
      { label: "ROI on Cash", value: "22.1%" },
      { label: "Annualized Return", value: "44%" },
      { label: "Timeline", value: "6 mo." },
    ],
    inputs: [
      "ARV / target sale price",
      "Holding period (months)",
      "Holding costs",
      "Selling costs / agent %",
      "Break-even sale price",
      "Timeline to exit",
    ],
  },
  brrrr: {
    description:
      "Model your cash-out refi. See exactly how much capital you can recycle and what your new monthly cash flow looks like after refinancing.",
    metrics: [
      { label: "Cash-Out Refi", value: "$52K" },
      { label: "Cash Left in Deal", value: "$8K" },
      { label: "New Cash Flow", value: "$290/mo" },
      { label: "Capital Recycled", value: "87%", highlight: true },
    ],
    inputs: [
      "Post-rehab appraisal",
      "New loan LTV %",
      "New interest rate",
      "Post-refi rent & expenses",
      "Infinite ROI indicator",
      "Equity retained",
    ],
  },
};

export function Strategies() {
  const [activeTab, setActiveTab] = useState<StrategyId>("buyhold");
  const strategy = strategies[activeTab];

  return (
    <section className="bg-canvas py-24" id="calculator">
      <div className="mx-auto max-w-[1160px] px-6">
        <SectionHeader
          label="Multi-Strategy Analysis"
          title="One deal. Three strategies. One answer."
          description="Enter your numbers once. PropStack compares every exit strategy side by side and recommends the best path for your goals."
        />

        <div className="mx-auto mt-12 max-w-[800px]">
          <div className="mb-10 flex gap-1 rounded-[10px] bg-white/4 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 rounded-[7px] border-none px-4 py-2.5 text-sm font-semibold transition-all duration-[180ms] ${
                  activeTab === tab.id
                    ? "bg-brand-blue text-white"
                    : "bg-transparent text-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-sm text-muted">{strategy.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {strategy.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[10px] border border-white/8 bg-midnight px-5 py-4"
                  >
                    <div className="text-[11px] tracking-[0.08em] text-muted uppercase">
                      {metric.label}
                    </div>
                    <div
                      className={`mt-1 text-2xl font-bold ${metric.highlight ? "text-positive" : "text-brand-teal"}`}
                    >
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold tracking-[0.08em] text-muted uppercase">
                Strategy Inputs
              </h3>
              <div className="flex flex-col gap-2">
                {strategy.inputs.map((input) => (
                  <div
                    key={input}
                    className="flex items-center gap-2.5 text-sm text-muted before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-brand-teal before:content-['']"
                  >
                    {input}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-brand-teal/30 bg-midnight p-6">
            <div className="mb-4 text-[11px] font-bold tracking-[0.1em] text-brand-teal uppercase">
              Best For This Deal
            </div>
            <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-[11px] tracking-[0.06em] text-muted uppercase">
                  Buy &amp; Hold
                </div>
                <div className="text-base font-bold text-brand-teal">
                  CoC 7.4%
                </div>
              </div>
              <div className="text-center">
                <div className="text-[11px] tracking-[0.06em] text-muted uppercase">
                  Flip
                </div>
                <div className="text-base font-bold text-brand-teal">
                  ROI 22.1%
                </div>
              </div>
              <div className="text-center">
                <div className="text-[11px] tracking-[0.06em] text-brand-teal uppercase">
                  ★ Recommended
                </div>
                <div className="text-base font-bold text-white">
                  Buy · Optimize · Refi
                </div>
              </div>
            </div>
            <p className="border-t border-white/8 pt-3 text-sm text-muted">
              Based on ROI and capital efficiency, Buy · Optimize · Refi
              recovers 87% of your cash — ideal for scaling a portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
