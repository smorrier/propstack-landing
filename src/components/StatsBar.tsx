const stats = [
  {
    value: (
      <>
        <span>3</span> Strategies
      </>
    ),
    label: "Buy & Hold · Flip · BRRRR",
  },
  {
    value: (
      <>
        <span>Rent</span> Optimization
      </>
    ),
    label: "Maximize income per unit",
  },
  {
    value: (
      <>
        <span>Multiple</span> Scenarios
      </>
    ),
    label: "Compare deals side by side",
  },
  {
    value: (
      <>
        <span>Notes</span> &amp; Files
      </>
    ),
    label: "Deal notes and file management",
  },
];

export function StatsBar() {
  return (
    <div className="border-y border-white/8 bg-canvas py-8">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:justify-between">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-6">
              {index > 0 && (
                <div className="hidden h-12 w-px shrink-0 bg-white/8 md:block" />
              )}
              <div className="text-center">
                <div className="text-[clamp(1.1rem,1.8vw,2rem)] font-extrabold whitespace-nowrap text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm whitespace-nowrap text-brand-teal">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
