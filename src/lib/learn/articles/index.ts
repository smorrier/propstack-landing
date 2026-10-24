import type { LearnArticle } from '../types';
import { dscrArticle } from './what-is-dscr';
import { capRateVsCashOnCashArticle } from './cap-rate-vs-cash-on-cash';

/** Every published guide, newest first. Add new articles here; the sitemap and /learn read this list. */
export const LEARN_ARTICLES: readonly LearnArticle[] = [capRateVsCashOnCashArticle, dscrArticle];

export function getLearnArticle(slug: string): LearnArticle | undefined {
  return LEARN_ARTICLES.find((a) => a.slug === slug);
}
