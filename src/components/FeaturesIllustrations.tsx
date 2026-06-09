import { type ReactNode } from "react";

const cardClass =
  "flex flex-col gap-4 rounded-[14px] border border-white/8 bg-canvas p-6";

function IllustrationCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className={cardClass}>
      {children}
      <div className="text-[0.8rem] font-semibold text-white">{title}</div>
      <div className="text-[0.75rem] leading-normal text-muted">{description}</div>
    </div>
  );
}

export function FeaturesIllustrations() {
  return (
    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
      <IllustrationCard
        title="Agent documents"
        description="Purchase agreements, disclosures, and listing sheets — stored with the deal."
      >
        <svg width="100%" height="110" viewBox="0 0 180 110" fill="none">
          <rect x="30" y="8" width="100" height="94" rx="6" fill="#1C2B45" stroke="rgba(255,255,255,0.12)" />
          <path d="M112 8 L130 26 L112 26 Z" fill="#0A192F" stroke="rgba(255,255,255,0.1)" />
          <rect x="30" y="8" width="82" height="18" rx="6" fill="rgba(13,148,136,0.25)" />
          <rect x="40" y="13" width="44" height="4" rx="2" fill="#0D9488" opacity="0.8" />
          <rect x="40" y="36" width="72" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
          <rect x="40" y="44" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
          <rect x="40" y="52" width="68" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
          <rect x="40" y="84" width="40" height="2" rx="1" fill="rgba(29,78,216,0.5)" />
        </svg>
      </IllustrationCard>

      <IllustrationCard
        title="On-site photos"
        description="Upload walkthrough photos and keep them attached to the property."
      >
        <svg width="100%" height="110" viewBox="0 0 180 110" fill="none">
          <rect x="20" y="10" width="140" height="88" rx="8" fill="#1C2B45" stroke="rgba(255,255,255,0.12)" />
          <rect x="20" y="10" width="140" height="44" rx="8" fill="rgba(29,78,216,0.15)" />
          <circle cx="148" cy="26" r="10" fill="rgba(245,158,11,0.3)" />
          <rect x="55" y="44" width="70" height="50" rx="3" fill="#162032" stroke="rgba(255,255,255,0.15)" />
          <path d="M48 46 L90 22 L132 46 Z" fill="#1C2B45" stroke="rgba(255,255,255,0.2)" />
          <rect x="65" y="54" width="14" height="12" rx="2" fill="rgba(29,78,216,0.4)" />
          <rect x="82" y="70" width="16" height="24" rx="2" fill="rgba(13,148,136,0.35)" />
        </svg>
      </IllustrationCard>

      <IllustrationCard
        title="Inspection reports"
        description="Track what passed, what needs work, and estimated repair costs."
      >
        <svg width="100%" height="110" viewBox="0 0 180 110" fill="none">
          <rect x="40" y="18" width="100" height="84" rx="6" fill="#1C2B45" stroke="rgba(255,255,255,0.12)" />
          <rect x="72" y="12" width="36" height="16" rx="4" fill="#162032" stroke="rgba(255,255,255,0.15)" />
          <rect x="79" y="10" width="22" height="8" rx="3" fill="#0D9488" opacity="0.6" />
          <rect x="62" y="36" width="8" height="8" rx="2" fill="rgba(13,148,136,0.3)" stroke="rgba(13,148,136,0.5)" />
          <polyline points="64,40 66,42 70,38" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="76" y="37" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
          <rect x="62" y="54" width="8" height="8" rx="2" fill="rgba(13,148,136,0.3)" stroke="rgba(13,148,136,0.5)" />
          <polyline points="64,58 66,60 70,56" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="76" y="55" width="52" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
        </svg>
      </IllustrationCard>

      <IllustrationCard
        title="Deal notes"
        description="Log what the seller said, why you passed, or what to revisit next quarter."
      >
        <svg width="100%" height="110" viewBox="0 0 180 110" fill="none">
          <rect x="28" y="8" width="124" height="94" rx="6" fill="#1C2B45" stroke="rgba(255,255,255,0.12)" />
          <rect x="28" y="8" width="124" height="20" rx="6" fill="rgba(29,78,216,0.2)" />
          <rect x="42" y="14" width="60" height="4" rx="2" fill="rgba(147,187,255,0.6)" />
          <circle cx="44" cy="42" r="3" fill="rgba(13,148,136,0.7)" />
          <rect x="52" y="39" width="72" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
          <circle cx="44" cy="58" r="3" fill="rgba(13,148,136,0.5)" />
          <rect x="52" y="55" width="64" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
          <rect x="42" y="94" width="32" height="8" rx="4" fill="rgba(245,158,11,0.2)" stroke="rgba(245,158,11,0.3)" />
        </svg>
      </IllustrationCard>
    </div>
  );
}
