import type { LearnArticle } from '../types';
import { dscrArticle } from './what-is-dscr';
import { capRateVsCashOnCashArticle } from './cap-rate-vs-cash-on-cash';
import { multiplexAnalysisArticle } from './how-to-analyze-a-multiplex-deal';
import { strategyComparisonArticle } from './buy-and-hold-vs-brrrr-vs-flip';
import { fixAndFlipArticle } from './fix-and-flip-profit-calculator';
import { brrrrArticle } from './brrrr-canada-cash-out-refinance';
import { mliSelectArticle } from './cmhc-mli-select-explained';
import { operatingAssumptionsArticle } from './vacancy-and-operating-expense-assumptions';
import { downPaymentArticle } from './rental-property-down-payment-canada';
import { rentalCashFlowArticle } from './rental-property-cash-flow-canada';
import { grossRentMultiplierArticle } from './gross-rent-multiplier';
import { noiArticle } from './what-is-noi';

/** Every published guide, newest first. Add new articles here; the sitemap and /learn read this list. */
export const LEARN_ARTICLES: readonly LearnArticle[] = [
  capRateVsCashOnCashArticle,
  dscrArticle,
  multiplexAnalysisArticle,
  strategyComparisonArticle,
  fixAndFlipArticle,
  brrrrArticle,
  mliSelectArticle,
  operatingAssumptionsArticle,
  downPaymentArticle,
  rentalCashFlowArticle,
  grossRentMultiplierArticle,
  noiArticle,
];

export function getLearnArticle(slug: string): LearnArticle | undefined {
  return LEARN_ARTICLES.find((a) => a.slug === slug);
}
