import { APP_URL } from "@/lib/constants";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

const plans = [
  {
    featured: false,
    tier: "Starter",
    price: "Free",
    period: "forever",
    description:
      "For investors just getting started. Full calculator access, no credit card needed.",
    features: [
      { text: "Multi-strategy calculator", enabled: true },
      { text: "4 deal profiles", enabled: true },
      { text: "Buy & Hold, Flip, BRRRR", enabled: true },
      { text: "Side-by-side comparison", enabled: true },
      { text: "Portfolio dashboard", enabled: false },
      { text: "Live market data", enabled: false },
      { text: "Deal tracking", enabled: false },
    ],
    cta: { label: "Get Started Free", variant: "ghost" as const },
  },
  {
    featured: true,
    tier: "Pro",
    tierClass: "text-accent-blue",
    tag: "Most Popular",
    price: "$25",
    period: "/ month",
    description:
      "For active investors managing a growing portfolio. Unlimited analysis and full platform access.",
    features: [
      { text: "Unlimited deals", enabled: true },
      { text: "Multi-strategy calculator", enabled: true },
      { text: "Portfolio dashboard", enabled: true },
      { text: "Deal tracking (end-to-end)", enabled: true },
      { text: "Smart analytics & AI insights", enabled: true },
    ],
    cta: { label: "Start Free Trial", variant: "primary" as const },
  },
];

export function Pricing() {
  return (
    <section className="bg-canvas py-24" id="pricing">
      <div className="mx-auto max-w-[1160px] px-6">
        <SectionHeader
          label="Pricing"
          title="Simple pricing. No surprises."
          description="Start free. Upgrade when you're ready. Cancel anytime."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.tier}
              className={`relative flex flex-col rounded-2xl border p-9 ${plan.featured
                  ? "border-brand-blue bg-gradient-to-br from-brand-blue/12 to-canvas"
                  : "border-white/8 bg-canvas"
                }`}
            >
              {plan.tag && (
                <div className="absolute -top-3 left-7 rounded-full bg-brand-blue px-3 py-1 text-[11px] font-bold tracking-[0.1em] text-white uppercase">
                  {plan.tag}
                </div>
              )}
              <div
                className={`mb-2 text-base font-semibold ${plan.tierClass ?? "text-muted"}`}
              >
                {plan.tier}
              </div>
              <div className="text-5xl leading-none font-extrabold text-white">
                {plan.price}{" "}
                <span className="text-base font-medium text-muted">
                  {plan.period}
                </span>
              </div>
              <p className="my-3 text-sm text-muted">{plan.description}</p>
              <ul className="mb-7 flex flex-1 flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={`flex items-center gap-2.5 text-sm text-muted before:shrink-0 before:font-bold before:content-['✓'] before:text-brand-teal ${!feature.enabled ? "opacity-40 before:content-['–'] before:text-muted" : ""}`}
                  >
                    {feature.text}
                  </li>
                ))}
              </ul>
              <Button
                href={APP_URL}
                variant={plan.cta.variant}
                className="w-full"
              >
                {plan.cta.label}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
