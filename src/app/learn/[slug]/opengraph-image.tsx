import { notFound } from "next/navigation";
import { LEARN_ARTICLES, getLearnArticle } from "@/lib/learn/articles";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

type Params = { slug: string };

export const alt = "PropStack guide";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return LEARN_ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<Params> }) {
  const article = getLearnArticle((await params).slug);
  if (!article) notFound();
  return renderOgImage({ eyebrow: "PropStack guide", headline: article.title });
}
