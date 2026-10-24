import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/** Everything here is public marketing content, so search engines and AI crawlers may read all of it. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
