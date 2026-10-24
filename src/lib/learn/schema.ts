import { ORGANIZATION_REF, personJsonLd } from '@/lib/schema';
import type { LearnArticle } from './types';

export function learnArticlePath(slug: string): string {
  return `/learn/${slug}`;
}

/** BlogPosting + BreadcrumbList + FAQPage for one article, as a single @graph. */
export function learnArticleJsonLd(article: LearnArticle, baseUrl: string) {
  const url = `${baseUrl}${learnArticlePath(article.slug)}`;
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: article.title,
      description: article.description,
      url,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
        ...(article.reviewedBy && { reviewedBy: personJsonLd(article.reviewedBy) }),
      },
      image: `${baseUrl}/opengraph-image`,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      inLanguage: 'en-CA',
      keywords: article.keywords.join(', '),
      author: personJsonLd(article.author),
      publisher: ORGANIZATION_REF,
      citation: article.sources.map((s) => s.url),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${baseUrl}/learn` },
        { '@type': 'ListItem', position: 3, name: article.shortTitle, item: url },
      ],
    },
  ];
  if (article.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: article.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
