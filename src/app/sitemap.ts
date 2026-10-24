import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { LEARN_ARTICLES } from "@/lib/learn/articles";
import { learnArticlePath } from "@/lib/learn/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/learn`, changeFrequency: "weekly", priority: 0.8 },
    ...LEARN_ARTICLES.map((a) => ({
      url: `${SITE_URL}${learnArticlePath(a.slug)}`,
      lastModified: a.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
