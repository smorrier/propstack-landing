import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { LEARN_ARTICLES } from "@/lib/learn/articles";
import { AUTHORS, authorPath } from "@/lib/learn/authors";
import { learnArticlePath } from "@/lib/learn/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  // ISO dates sort lexically, so the max string is the newest guide.
  const newestGuide = LEARN_ARTICLES.map((a) => a.updatedAt).sort().at(-1);
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/learn`, lastModified: newestGuide, changeFrequency: "weekly", priority: 0.8 },
    ...LEARN_ARTICLES.map((a) => ({
      url: `${SITE_URL}${learnArticlePath(a.slug)}`,
      lastModified: a.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...AUTHORS.map((a) => ({
      url: `${SITE_URL}${authorPath(a.slug)}`,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
