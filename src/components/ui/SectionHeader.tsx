import { Label } from "./Label";

export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-[640px] text-center">
      <Label className="mb-3 block">{label}</Label>
      <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="text-base text-muted">{description}</p>
      )}
    </div>
  );
}
