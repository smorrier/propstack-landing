import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "PropStack guides: rental property investing in Canada";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ eyebrow: "PropStack guides", headline: "Rental property investing guides for Canada", headlineSize: 72 });
}
