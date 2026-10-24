import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ArticleView } from "@/components/learn/ArticleView";
import { SITE_URL } from "@/lib/constants";
import { LEARN_ARTICLES, getLearnArticle } from "@/lib/learn/articles";
import { learnArticleJsonLd, learnArticlePath, serializeJsonLd } from "@/lib/learn/schema";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return LEARN_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const article = getLearnArticle((await params).slug);
  if (!article) return {};
  const path = learnArticlePath(article.slug);
  return {
    title: article.seoTitle,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: article.author.name, url: article.author.url }],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.description,
      url: path,
      siteName: "PropStack",
      locale: "en_CA",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
    },
    twitter: { card: "summary_large_image", title: article.seoTitle, description: article.description },
  };
}

export default async function LearnArticlePage({ params }: { params: Promise<Params> }) {
  const article = getLearnArticle((await params).slug);
  if (!article) notFound();

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(learnArticleJsonLd(article, SITE_URL)) }}
        />
        <ArticleView article={article} />
      </main>
      <Footer />
    </>
  );
}
