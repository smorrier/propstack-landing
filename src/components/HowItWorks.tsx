import { SectionHeader } from "./ui/SectionHeader";

const steps = [
  {
    number: "1",
    title: "Enter your deal",
    description:
      "Input the deal as it stands today — purchase price, financing, acquisition costs, and rehab scope. Real numbers, no assumptions.",
  },
  {
    number: "2",
    title: "Model your scenarios",
    description:
      "Adjust the inputs and watch the metrics move in real time. Change the purchase price, rent, or rehab scope to find the numbers that actually work.",
  },
  {
    number: "3",
    title: "Compare and decide",
    description:
      "Line up your scenarios side by side. See which path wins for your goals and walk into every negotiation knowing exactly where you stand.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24" id="how-it-works">
      <div className="mx-auto max-w-[1160px] px-6">
        <SectionHeader
          label="How It Works"
          title="From address to decision."
          description="Three steps. No guesswork. Know your best path before you make an offer."
        />
        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          <div className="absolute top-7 right-[calc(16.6%+16px)] left-[calc(16.6%+16px)] hidden h-px bg-gradient-to-r from-brand-blue to-brand-teal md:block" />
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative z-1 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-xl font-bold text-white">
                {step.number}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
