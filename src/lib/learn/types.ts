import type { ReactNode } from 'react';

export interface LearnAuthor {
  /** URL segment for the author's page at /authors/[slug]. */
  slug: string;
  name: string;
  role: string;
  /** Path under /public. */
  image: string;
  /** Plain-text paragraphs for the author page. Keep the first to one sentence: it is also the meta and Person schema description. */
  bio: string[];
  /** Public profiles (LinkedIn, personal site). Feeds the Person schema's `sameAs`. */
  sameAs: string[];
}

/** One H2 section. Keep each self-contained (about 120–180 words) and lead with the answer. */
export interface LearnSection {
  id: string;
  title: string;
  body: ReactNode;
}

/** Plain text so the same copy feeds the visible FAQ and the FAQPage JSON-LD. */
export interface LearnFaq {
  question: string;
  answer: string;
}

export interface LearnSource {
  title: string;
  publisher: string;
  url: string;
}

export interface LearnArticle {
  slug: string;
  /** The page's H1. */
  title: string;
  /** `<title>` before the " | PropStack" suffix. Keep the whole thing at 60 characters or fewer. */
  seoTitle: string;
  /** Meta description, 150–160 characters. */
  description: string;
  /** Short label for cards and breadcrumbs. */
  shortTitle: string;
  /** Key takeaways shown above the body: each a complete, quotable sentence. */
  summary: string[];
  /** ISO dates (YYYY-MM-DD). Bump `updatedAt` only for real content changes. */
  publishedAt: string;
  updatedAt: string;
  author: LearnAuthor;
  /** Set only once this person has actually reviewed the guide. */
  reviewedBy?: LearnAuthor;
  readingMinutes: number;
  keywords: string[];
  sections: LearnSection[];
  faqs: LearnFaq[];
  sources: LearnSource[];
  /** Slugs of other articles to link at the end. */
  related: string[];
}
