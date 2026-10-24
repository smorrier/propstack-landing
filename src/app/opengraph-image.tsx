import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "PropStack — Rental property calculator for Canadian investors";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ headline: "Rental property calculator for Canadian investors", headlineSize: 76 });
}
