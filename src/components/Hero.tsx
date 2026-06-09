import { APP_URL } from "@/lib/constants";
import { Button } from "./ui/Button";

function PlayIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}

const snapshotStats = [
  { title: "Total Value", value: "$4.2M", teal: true, delta: "▲ +12% this year" },
  { title: "Active Listings", value: "23", delta: "▲ +3 new this month" },
  { title: "Avg. Yield", value: "8.4%", teal: true, delta: "▲ +0.4%" },
  { title: "Deals Closed", value: "7", delta: "This quarter", deltaTeal: true },
];

const snapshotRows = [
  { label: "Monthly Cash Flow", value: "+$3,840", positive: true },
  { label: "Cash-on-Cash Return", value: "8.4%", teal: true },
  { label: "Gross Revenue (YTD)", value: "$892K" },
  { label: "Portfolio Growth", value: "▲ +23% vs. last month", positive: true },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-0 py-[100px] pb-20">
      <div
        className="pointer-events-none absolute -top-[200px] -right-[200px] h-[700px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(29, 78, 216, 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[100px] -left-[100px] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(13, 148, 136, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1160px] px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h1 className="animate-fade-up-delay-1 mb-2 text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.1] font-extrabold text-white">
              Close Deals Faster.
              <span className="block text-brand-teal">Manage Smarter.</span>
            </h1>
            <p className="animate-fade-up-delay-2 mt-5 mb-9 max-w-[480px] text-[1.15rem] text-muted">
              The all-in-one calculator and portfolio platform for modern real
              estate investors. Run every strategy. Compare every deal. Know
              exactly what to do next.
            </p>
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-3">
              <Button href={APP_URL} size="lg" pulse>
                Start Free Trial
              </Button>
              <Button href="#how-it-works" variant="ghost" size="lg">
                <PlayIcon />
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="animate-fade-up-delay-5 rounded-2xl border border-white/8 bg-canvas p-6">
            <div className="mb-5 text-[10px] font-bold tracking-[0.12em] text-muted uppercase">
              Portfolio Snapshot
            </div>
            <div className="mb-6 grid grid-cols-2 gap-4">
              {snapshotStats.map((stat) => (
                <div key={stat.title}>
                  <div className="mb-1 text-[11px] tracking-[0.08em] text-muted uppercase">
                    {stat.title}
                  </div>
                  <div
                    className={`text-[1.6rem] font-bold ${stat.teal ? "text-brand-teal" : "text-white"}`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`mt-0.5 text-xs ${stat.deltaTeal ? "text-brand-teal" : "text-positive"}`}
                  >
                    {stat.delta}
                  </div>
                </div>
              ))}
            </div>
            <hr className="mb-5 border-white/8" />
            {snapshotRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between border-b border-white/8 py-2 text-sm last:border-b-0"
              >
                <span className="text-muted">{row.label}</span>
                <span
                  className={`font-semibold ${
                    row.positive
                      ? "text-positive"
                      : row.teal
                        ? "text-brand-teal"
                        : "text-white"
                  }`}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
