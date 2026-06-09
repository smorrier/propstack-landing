import { FeaturesIllustrations } from "./FeaturesIllustrations";
import { Label } from "./ui/Label";

export function Features() {
  return (
    <section className="py-24" id="features">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <FeaturesIllustrations />
          <div>
            <Label className="mb-4 block">Platform Features</Label>
            <h2 className="mb-8 text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-white">
              Everything in one place.
            </h2>
            <p className="mb-7 text-[1.05rem] leading-[1.85] text-muted">
              Every property you look at tells a story. PropStack gives you a
              place to capture it — from the first numbers you ran to the reason
              you passed. Nothing gets lost between deal cycles.
            </p>
            <p className="text-[1.05rem] leading-[1.85] text-muted">
              Store documents your agent sent, photos from on-site inspections,
              notes on what the seller told you, and every scenario you
              modelled. When you come back to a property months later,
              everything is still there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
