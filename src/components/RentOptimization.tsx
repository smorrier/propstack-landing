import { Label } from "./ui/Label";

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <polyline
        points="2,6 5,9 10,3"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const benefits = [
  "Set a target rent and optimization cost per unit. Apply only the ones that make sense.",
  "Instantly see monthly uplift, annual uplift, and net value add using GRM.",
  "Plan impact summary shows total cost, net upside, and new property value in real time.",
];

const rows = [
  {
    checked: true,
    unit: "Unit 1",
    current: "$1,000",
    optimized: "$1,300",
    monthly: "+$300 / mo",
    valueAdd: "+$64,768",
    dimmed: false,
  },
  {
    checked: false,
    unit: "Unit 2",
    sub: "Hypothetical",
    current: "$850",
    optimized: "$1,025",
    monthly: "—",
    valueAdd: "—",
    dimmed: true,
  },
  {
    checked: true,
    unit: "Unit 3",
    current: "$870",
    optimized: "$1,200",
    monthly: "+$330 / mo",
    valueAdd: "+$76,745",
    dimmed: false,
  },
  {
    checked: false,
    unit: "Unit 4",
    current: "$1,200",
    optimized: "$1,200",
    monthly: "—",
    valueAdd: "—",
    dimmed: true,
    faded: true,
  },
];

export function RentOptimization() {
  return (
    <section className="bg-canvas py-24" id="rent-optimization">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <Label className="mb-4 block">Rent Optimization</Label>
            <h2 className="mb-5 text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-white">
              Simulate rent upside before you commit.
            </h2>
            <p className="mb-6 max-w-[520px] text-lg leading-[1.7] text-muted">
              Model rent increases and value-add costs unit by unit. See exactly
              how each optimization affects monthly cash flow, annual uplift,
              and total property value — before you spend a dollar.
            </p>
            <ul className="mb-8 flex flex-col gap-3.5">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <span className="mt-px font-bold text-brand-teal">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/8 bg-midnight text-[0.82rem]">
            <div className="px-6 pt-5">
              <div className="mb-1 text-[10px] font-bold tracking-[0.12em] text-brand-teal uppercase">
                Unit Rent Optimization
              </div>
              <div className="mb-4 text-[0.8rem] text-muted">
                Model rent and cost per unit. Apply to include in plan totals.
              </div>
              <div className="grid grid-cols-[28px_80px_90px_100px_100px_80px] gap-x-2 border-b border-white/8 pb-2.5 text-[10px] font-semibold tracking-[0.06em] text-muted uppercase">
                <span />
                <span>Unit</span>
                <span>Current</span>
                <span>Optimized</span>
                <span>Monthly ↑</span>
                <span className="text-right">Value add</span>
              </div>
            </div>

            <div className="px-6">
              {rows.map((row) => (
                <div
                  key={row.unit}
                  className={`grid grid-cols-[28px_80px_90px_100px_100px_80px] items-center gap-x-2 border-b border-white/8 py-3 ${row.dimmed ? "opacity-55" : ""} ${row.faded ? "opacity-40" : ""}`}
                >
                  <div
                    className={`flex h-4 w-4 items-center justify-center rounded ${row.checked ? "bg-brand-blue" : "border-[1.5px] border-white/20"}`}
                  >
                    {row.checked && <CheckIcon />}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{row.unit}</div>
                    {row.sub && (
                      <div className="text-[10px] text-muted">{row.sub}</div>
                    )}
                  </div>
                  <span className="text-muted">{row.current}</span>
                  <span className="inline-block rounded-md border border-white/8 bg-canvas-2 px-2 py-1 text-white">
                    {row.optimized}
                  </span>
                  <span
                    className={`font-semibold ${row.checked ? "text-positive" : "text-muted"}`}
                  >
                    {row.monthly}
                  </span>
                  <span
                    className={`text-right font-semibold ${row.checked ? "text-positive" : "text-muted"}`}
                  >
                    {row.valueAdd}
                  </span>
                </div>
              ))}
            </div>

            <div className="m-6 rounded-[10px] border border-brand-teal/25 bg-canvas p-4 px-5">
              <div className="mb-3.5 text-[10px] font-bold tracking-[0.12em] text-brand-teal uppercase">
                Plan Impact
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <div className="mb-0.5 text-[10px] text-muted">
                    Net upside after costs
                  </div>
                  <div className="text-[1.1rem] font-bold text-positive">
                    +$141,513
                  </div>
                </div>
                <div>
                  <div className="mb-0.5 text-[10px] text-muted">
                    Monthly improvement
                  </div>
                  <div className="text-[1.1rem] font-bold text-positive">
                    +$1,880
                  </div>
                </div>
                <div>
                  <div className="mb-0.5 text-[10px] text-muted">
                    New property value
                  </div>
                  <div className="text-[1.1rem] font-bold text-white">
                    $1,569,780
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
