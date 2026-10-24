import Link from "next/link";
import { TRY_URL } from "@/lib/constants";
import { Formula, TableWrap } from '@/components/learn/blocks';
import { SEAN_MORRIER } from '../authors';
import type { LearnArticle } from '../types';

/*
 * Same 8-unit example as what-is-dscr: price 1,950,000, NOI 107,040, closing costs 45,000,
 * 4.9% / 25 yr semi-annual compounding (mortgage constant 6.91%).
 * LTV 0%:  cash 1,995,000, CF 107,040, CoC 5.37%
 * LTV 50%: loan 975,000,   DS 67,383,  cash 1,020,000, CF 39,657, CoC 3.89%, Y1 paydown 20,541 → 5.90%
 * LTV 65%: loan 1,267,500, DS 87,598,  cash 727,500,   CF 19,442, CoC 2.67%, paydown 26,704 → 6.34%
 * LTV 75%: loan 1,462,500, DS 101,075, cash 532,500,   CF 5,965,  CoC 1.12%, paydown 30,812 → 6.91%
 * CBRE Q2 2026 low-rise Class B multifamily ranges.
 */
export const capRateVsCashOnCashArticle: LearnArticle = {
  slug: 'cap-rate-vs-cash-on-cash',
  title: 'Cap Rate vs. Cash-on-Cash Return: What’s the Difference?',
  shortTitle: 'Cap rate vs. cash-on-cash',
  seoTitle: 'Cap Rate vs. Cash-on-Cash Return Explained',
  description:
    'Cap rate measures a property before financing; cash-on-cash measures the return on your own cash after the mortgage. Formulas, Canadian examples and benchmarks.',
  summary: [
    'Cap rate is net operating income divided by the purchase price. It describes the property and ignores how you finance it.',
    'Cash-on-cash return is annual pre-tax cash flow divided by the cash you put in. It describes your return after mortgage payments.',
    'When the cap rate is below the mortgage constant (the annual payment per dollar borrowed), more debt lowers cash-on-cash return. In 2026 that is common in Canada.',
    'CBRE’s Q2 2026 survey puts Canadian low-rise apartment cap rates mostly between about 4% and 6%, depending on the city.',
  ],
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  author: SEAN_MORRIER,
  readingMinutes: 7,
  keywords: [
    'cap rate',
    'capitalization rate',
    'cash on cash return',
    'cap rate vs cash on cash',
    'good cap rate Canada',
    'multifamily cap rates Canada 2026',
    'negative leverage',
  ],
  sections: [
    {
      id: 'short-answer',
      title: 'The short answer',
      body: (
        <>
          <p>
            <strong>
              Cap rate measures what a property earns relative to its price, before financing. Cash-on-cash return
              measures what your own cash earns after the mortgage is paid.
            </strong>{' '}
            Two buyers paying the same price for the same building get the same cap rate, but they can get very
            different cash-on-cash returns depending on how much they borrow and at what rate.
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th></th><th>Cap rate</th><th>Cash-on-cash return</th></tr>
              </thead>
              <tbody>
                <tr><td>Formula</td><td>NOI ÷ purchase price</td><td>Annual cash flow ÷ cash invested</td></tr>
                <tr><td>Includes the mortgage?</td><td>No</td><td>Yes</td></tr>
                <tr><td>Same for every buyer?</td><td>Yes, at the same price</td><td>No, depends on financing</td></tr>
                <tr><td>Best used for</td><td>Comparing buildings and prices</td><td>Comparing what your cash earns</td></tr>
                <tr><td>Leaves out</td><td>Financing, appreciation, capital spending</td><td>Principal paydown, appreciation, tax</td></tr>
              </tbody>
            </table>
          </TableWrap>
        </>
      ),
    },
    {
      id: 'what-is-cap-rate',
      title: 'What is cap rate?',
      body: (
        <>
          <p>
            <strong>
              The capitalization rate (cap rate) is a property’s annual net operating income divided by its purchase
              price or market value.
            </strong>{' '}
            It is the return you would earn in year one if you paid all cash and ignored closing costs.
          </p>
          <Formula>Cap rate = Net operating income ÷ Purchase price</Formula>
          <p>
            NOI is rent minus vacancy minus operating expenses (taxes, insurance, utilities, maintenance, management).
            It excludes mortgage payments, so the cap rate is a property measure, not a deal measure. Appraisers and
            brokers use cap rates in reverse to value buildings: value = NOI ÷ market cap rate. A building with
            $107,040 of NOI in a 5.5% market is worth about $1.95 million.
          </p>
          <p>
            The cap rate on the purchase price is the <strong>going-in cap rate</strong>. In later years, NOI divided
            by the building’s projected value is the cap rate on value. A rising cap rate on value usually means rents
            are growing faster than you expect values to rise.
          </p>
        </>
      ),
    },
    {
      id: 'what-is-cash-on-cash',
      title: 'What is cash-on-cash return?',
      body: (
        <>
          <p>
            <strong>
              Cash-on-cash return is the year’s pre-tax cash flow divided by the total cash you invested to buy the
              property.
            </strong>{' '}
            It answers a simple question: for every dollar I put in, how many cents come back this year?
          </p>
          <Formula>Cash-on-cash return = (NOI − annual debt service) ÷ Cash invested</Formula>
          <p>
            <strong>Cash invested</strong> is everything you paid out of pocket: down payment, closing costs (land
            transfer tax, legal, appraisal, inspection, financing fees) and upfront repairs or renovations, minus any
            credits from the seller. Leaving closing costs out is the most common mistake; on a $1.95 million building
            they can easily reach $45,000.
          </p>
          <p>
            Cash-on-cash counts only cash that reaches your bank account. The part of each mortgage payment that pays
            down principal is building your equity, but it is not cash flow, so it is excluded. So is any increase in
            the building’s value.
          </p>
        </>
      ),
    },
    {
      id: 'example',
      title: 'Example: one building, four ways to finance it',
      body: (
        <>
          <p>
            Take an 8-unit building at <strong>$1,950,000</strong> with <strong>$107,040</strong> of NOI and $45,000
            of closing costs. Its cap rate is $107,040 ÷ $1,950,000 = <strong>5.49%</strong>, whoever buys it. Here is
            the year-one cash-on-cash return at different loan-to-value ratios, at an illustrative 4.9% rate over 25
            years:
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr>
                  <th>Loan-to-value</th>
                  <th className="text-right">Cash invested</th>
                  <th className="text-right">Debt service</th>
                  <th className="text-right">Cash flow</th>
                  <th className="text-right">Cash-on-cash</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>All cash</td><td className="text-right">$1,995,000</td><td className="text-right">$0</td><td className="text-right">$107,040</td><td className="text-right">5.37%</td></tr>
                <tr><td>50%</td><td className="text-right">$1,020,000</td><td className="text-right">$67,383</td><td className="text-right">$39,657</td><td className="text-right">3.89%</td></tr>
                <tr><td>65%</td><td className="text-right">$727,500</td><td className="text-right">$87,598</td><td className="text-right">$19,442</td><td className="text-right">2.67%</td></tr>
                <tr><td>75%</td><td className="text-right">$532,500</td><td className="text-right">$101,075</td><td className="text-right">$5,965</td><td className="text-right">1.12%</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            The cap rate never moves. Cash-on-cash return falls from 5.37% to 1.12% as the buyer borrows more. The
            75% option also fails most lenders’ DSCR test (1.06), as shown in{' '}
            <Link href="/learn/what-is-dscr">our DSCR guide</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'negative-leverage',
      title: 'Why more debt can lower your cash-on-cash return',
      body: (
        <>
          <p>
            <strong>
              Borrowing raises cash-on-cash return only when the cap rate is higher than the mortgage constant, the
              annual payment per dollar borrowed.
            </strong>{' '}
            When the cap rate is lower, each borrowed dollar costs more than the property earns on it. This is called
            negative leverage.
          </p>
          <Formula>Mortgage constant = Annual principal and interest ÷ Loan amount</Formula>
          <p>
            At 4.9% over 25 years, the mortgage constant is <strong>6.91%</strong>: every $100,000 borrowed costs
            $6,911 a year. The building earns 5.49% on its price, so each $100,000 you borrow instead of investing
            yourself brings in $5,490 of NOI but costs $6,911 in payments: a shortfall of about $1,400 a year. That is
            why cash-on-cash return falls in the table above as leverage rises.
          </p>
          <p>
            The constant includes principal, so negative leverage is not all lost money: at 75% loan-to-value, $30,812
            of year-one payments go to paying down the loan. Investors in today’s Canadian market are often accepting
            low cash-on-cash in exchange for that paydown and for expected rent growth. You should make that choice
            deliberately, with the numbers in front of you.
          </p>
        </>
      ),
    },
    {
      id: 'good-cap-rate-canada',
      title: 'What is a good cap rate in Canada?',
      body: (
        <>
          <p>
            <strong>
              In mid-2026, Canadian apartment buildings traded at cap rates of roughly 3.75% to 6% depending on the
              city, according to CBRE’s Q2 2026 survey.
            </strong>{' '}
            Vancouver and Toronto sit at the low end, while the Prairies and Quebec City sit at the high end. These
            figures are for low-rise Class B buildings, the closest category to a typical multiplex:
          </p>
          <TableWrap>
            <table>
              <caption>Low-rise Class B multifamily cap rates, Q2 2026 (CBRE)</caption>
              <thead>
                <tr><th>Market</th><th className="text-right">Cap rate range</th></tr>
              </thead>
              <tbody>
                <tr><td>Vancouver</td><td className="text-right">3.75%–4.75%</td></tr>
                <tr><td>Toronto</td><td className="text-right">4.15%–5.15%</td></tr>
                <tr><td>Montreal</td><td className="text-right">4.25%–4.50%</td></tr>
                <tr><td>Calgary</td><td className="text-right">5.00%–5.50%</td></tr>
                <tr><td>Halifax</td><td className="text-right">4.75%–5.50%</td></tr>
                <tr><td>Edmonton</td><td className="text-right">5.00%–5.75%</td></tr>
                <tr><td>Ottawa</td><td className="text-right">5.20%–5.80%</td></tr>
                <tr><td>Quebec City</td><td className="text-right">5.00%–6.00%</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            A “good” cap rate is one that is at or above the market rate for comparable buildings <em>and</em> high
            enough to pass your lender’s DSCR test at the loan size you want. Small buildings often trade at different
            cap rates from the larger assets in CBRE’s survey, so check recent local sales too.
          </p>
        </>
      ),
    },
    {
      id: 'good-cash-on-cash',
      title: 'What is a good cash-on-cash return?',
      body: (
        <>
          <p>
            <strong>
              There is no universal target. With Canadian cap rates mostly below today’s mortgage constants,
              year-one cash-on-cash returns on leveraged multiplexes are often in the low single digits.
            </strong>{' '}
            Any positive figure means the building pays its own way; many investors want enough cushion to absorb a
            major repair without adding cash.
          </p>
          <p>
            Because cash flow is thin, it helps to also look at <strong>total return on cash</strong>, which adds
            principal paydown (and, if you choose to count it, appreciation) to cash flow. In our 65% loan-to-value
            example, cash-on-cash is 2.67%, but cash flow plus the $26,704 of year-one paydown is 6.34% of the cash
            invested, before any appreciation.
          </p>
          <p>
            PropStack reports both: year-one cash-on-cash and total return on cash. The default deal score targets a
            6% cap rate and an 8% total return, and you can change either target to match your strategy.
          </p>
        </>
      ),
    },
    {
      id: 'which-to-use',
      title: 'When to use each metric',
      body: (
        <>
          <ul>
            <li>
              <strong>Use cap rate</strong> to compare buildings with each other and with the market, to judge whether
              an asking price is reasonable, and to estimate value from NOI.
            </li>
            <li>
              <strong>Use cash-on-cash return</strong> to compare financing options for one building, to compare the
              deal with other uses of your cash, and to check that the property supports itself.
            </li>
            <li>
              <strong>Use DSCR</strong> alongside both, because a lender’s DSCR minimum often decides how much you can
              borrow and therefore your real cash-on-cash return.
            </li>
          </ul>
          <p>
            In PropStack, every deal shows the going-in cap rate, cash-on-cash return and DSCR side by side, with a
            10-year projection and scenarios for testing different down payments, rates and amortizations.{' '}
            <Link href={TRY_URL}>Try it on a listing</Link>, no account needed.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'Is a higher cap rate always better?',
      answer:
        'Not always. A higher cap rate means more income per dollar of price, but it can also reflect more risk: an older building, weaker location, below-market rents that may not last, or upcoming capital repairs. Compare against similar buildings in the same market.',
    },
    {
      question: 'Does cap rate include the mortgage?',
      answer:
        'No. Cap rate uses net operating income, which is calculated before mortgage payments. That is what makes it comparable across buyers with different financing.',
    },
    {
      question: 'Can cash-on-cash return be negative?',
      answer:
        'Yes. If annual mortgage payments are larger than NOI, cash flow is negative and so is cash-on-cash return. That also means DSCR is below 1.00.',
    },
    {
      question: 'Is cash-on-cash return the same as ROI?',
      answer:
        'No. Cash-on-cash return counts only one year of cash flow. ROI or total return usually also includes principal paydown, appreciation and sometimes tax effects, so it is higher for most leveraged rentals.',
    },
    {
      question: 'Should closing costs be included in cash invested?',
      answer:
        'Yes. Land transfer tax, legal fees, appraisal, inspection, financing fees and upfront repairs are all cash you put into the deal. Leaving them out overstates cash-on-cash return.',
    },
  ],
  sources: [
    {
      title: 'Canadian Cap Rates & Investment Insights, Q2 2026',
      publisher: 'CBRE (July 2026)',
      url: 'https://www.cbre.ca/insights/reports/canada-cap-rates-investment-insights-q2-2026',
    },
    {
      title: 'Q2 2026 Canadian Cap Rate Report (PDF)',
      publisher: 'CBRE',
      url: 'https://www.cbre.ca/-/media/project/cbre/dotcom/americas/canada-emerald/insights/Reports/Cap-rate-report/Q2-2026-Canadian-Cap-Rate-Report-e',
    },
  ],
  related: ['what-is-dscr'],
};
