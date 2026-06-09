import { APP_URL } from "@/lib/constants";
import { Button } from "./ui/Button";
import { Label } from "./ui/Label";

export function CtaSection() {
  return (
    <div className="border-y border-white/8 bg-canvas">
      <section className="relative overflow-hidden py-[120px] text-center">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(ellipse, rgba(29, 78, 216, 0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1160px] px-6">
          <Label className="mb-4 block">Get Started Today</Label>
          <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-white">
            Start analyzing deals in the next 5 minutes.
          </h2>
          <p className="mx-auto mb-10 max-w-[520px] text-lg leading-[1.7] text-muted">
            Free trial. No credit card. Cancel whenever you want.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={APP_URL} size="lg">
              Start Free Trial
            </Button>
            <Button href="mailto:hello@propstack.ca" variant="ghost" size="lg">
              Talk to Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
