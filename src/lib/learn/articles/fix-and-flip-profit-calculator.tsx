import Link from "next/link";
import { TRY_URL } from "@/lib/constants";
import { Formula, TableWrap } from '@/components/learn/blocks';
import { SEAN_MORRIER } from '../authors';
import type { LearnArticle } from '../types';

/*
 * Worked example (Ontario house outside Toronto, 6-month flip):
 * Buy 560,000; Ontario LTT 275 + 1,950 + 2,250 + 3,200 = 7,675 (Toronto adds equal MLTT → 15,350;
 * BC PTT on 560,000 = 2,000 + 7,200 = 9,200). Legal/title/inspection 3,000. Rehab 80,000 incl. contingency.
 * Private loan 75% = 420,000 at 9% interest-only: 3,150/mo → 18,900; 2% lender fee 8,400.
 * Carrying (tax, insurance, utilities) 1,000/mo → 6,000.
 * Costs before sale 560,000 + 7,675 + 3,000 + 80,000 + 8,400 + 18,900 + 6,000 = 683,975.
 * Sale at ARV 760,000: commission 4% 30,400 + 13% HST 3,952; legal 1,500; staging 2,500 → 38,352.
 * All-in 722,327; profit 37,673 (5.0% of ARV). Non-price, non-rehab costs 82,327 = 10.8% of ARV.
 * Cash invested 140,000 + 7,675 + 3,000 + 80,000 + 8,400 + 18,900 + 6,000 = 263,975 → ROI 14.3%.
 * Annualized (1.1427)^2 − 1 = 30.6% (simple 28.5%).
 * Break-even: (683,975 + 1,500 + 2,500) ÷ (1 − 0.0452) = 720,544, 5.2% below ARV. Sale at −5% (722,000) → 1,391.
 * 70% rule: 0.70 × 760,000 − 80,000 = 452,000.
 * 10-month hold: +4 × (3,150 + 1,000) = 16,600 → profit 21,073, cash 280,575, ROI 7.5%, annualized 9.1%.
 * Tax illustration at a 43% marginal rate: 37,673 × 0.57 ≈ 21,500.
 */
export const fixAndFlipArticle: LearnArticle = {
  slug: 'fix-and-flip-profit-calculator',
  title: 'How to Calculate Fix-and-Flip Profit in Canada: ARV, the 70% Rule and Break-Even Price',
  shortTitle: 'Fix-and-flip profit',
  seoTitle: 'Fix-and-Flip Profit: ARV, 70% Rule, Break-Even',
  description:
    'How to calculate fix-and-flip profit in Canada: all-in costs, land transfer tax, the 70% rule, break-even sale price, annualized return and the 365-day rule.',
  summary: [
    'Fix-and-flip profit is the sale price minus your all-in cost: purchase price, land transfer tax, renovation, financing, holding costs and selling costs.',
    'Costs other than the purchase price and renovation often add up to 10% or more of the sale price in Canada, mostly from land transfer tax, real estate commission plus HST, and interest.',
    'The break-even sale price is the lowest price that returns all your costs; in our Ontario example it is only 5.2% below the expected after-repair value.',
    'Since 2023, profit on a home sold within 365 days of buying it is generally taxed as business income in Canada, and British Columbia adds its own home flipping tax.',
  ],
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  author: SEAN_MORRIER,
  readingMinutes: 7,
  keywords: [
    'fix and flip calculator',
    'house flipping Canada',
    'flip profit calculator',
    '70% rule',
    'ARV',
    'break-even sale price',
    'property flipping rule',
  ],
  sections: [
    {
      id: 'how-to-calculate',
      title: 'How to calculate fix-and-flip profit',
      body: (
        <>
          <p>
            <strong>
              Fix-and-flip profit is the price you sell for minus everything the project cost you, from the day you
              make an offer to the day the sale closes.
            </strong>{' '}
            The expected sale price is the after-repair value (ARV): what the property should sell for once the work
            is done, based on recent sales of similar renovated homes nearby.
          </p>
          <Formula>Profit = Sale price − All-in cost</Formula>
          <p>All-in cost has six parts:</p>
          <ol>
            <li><strong>Purchase price.</strong></li>
            <li><strong>Closing costs:</strong> land transfer tax, legal fees, title insurance, inspection.</li>
            <li><strong>Renovation,</strong> including a contingency for surprises.</li>
            <li><strong>Financing:</strong> interest, lender and broker fees.</li>
            <li><strong>Holding costs:</strong> property tax, insurance and utilities while you own it.</li>
            <li><strong>Selling costs:</strong> real estate commission plus HST, legal fees, staging.</li>
          </ol>
          <p>
            Most flips that lose money do so because one of these was left out or underestimated, not because the
            renovation was wrong.
          </p>
        </>
      ),
    },
    {
      id: 'all-in-cost',
      title: 'What goes into the all-in cost in Canada',
      body: (
        <>
          <p>
            <strong>
              Land transfer tax, commission with HST, and financing are the costs that most often surprise new
              flippers in Canada, because they scale with price.
            </strong>{' '}
            Land transfer tax is charged on every purchase and is not refunded when you sell. On a $560,000 house:
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th>Location</th><th className="text-right">Transfer tax on $560,000</th></tr>
              </thead>
              <tbody>
                <tr><td>Ontario, outside Toronto</td><td className="text-right">$7,675</td></tr>
                <tr><td>City of Toronto (provincial + municipal)</td><td className="text-right">$15,350</td></tr>
                <tr><td>British Columbia</td><td className="text-right">$9,200</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            Ontario charges 0.5% up to $55,000, 1% to $250,000, 1.5% to $400,000 and 2% to $2 million. Toronto adds a
            municipal tax at the same rates up to $3 million. British Columbia charges 1% on the first $200,000 and 2%
            up to $2 million.
          </p>
          <p>
            Commission is negotiable, but 4% of the sale price is a reasonable planning figure, and in Ontario HST
            adds 13% on top of the commission. Flips are often financed by private lenders at interest-only rates of
            around 8–10% plus a 1–2% fee, because a standard bank mortgage is not built for a short renovate-and-sell
            project.
          </p>
        </>
      ),
    },
    {
      id: 'example',
      title: 'Fix-and-flip example: a house in Ontario',
      body: (
        <>
          <p>
            An investor buys a dated detached house outside Toronto for <strong>$560,000</strong>, plans an{' '}
            <strong>$80,000</strong> renovation (contingency included) and expects to sell for{' '}
            <strong>$760,000</strong> six months later. A private lender funds 75% of the price at 9% interest-only
            with a 2% fee.
          </p>
          <TableWrap>
            <table>
              <caption>Six-month Ontario flip (illustrative)</caption>
              <tbody>
                <tr><td>Purchase price</td><td className="text-right">$560,000</td></tr>
                <tr><td>Ontario land transfer tax</td><td className="text-right">$7,675</td></tr>
                <tr><td>Legal, title insurance, inspection</td><td className="text-right">$3,000</td></tr>
                <tr><td>Renovation</td><td className="text-right">$80,000</td></tr>
                <tr><td>Lender fee (2% of $420,000)</td><td className="text-right">$8,400</td></tr>
                <tr><td>Interest, 6 months at 9%</td><td className="text-right">$18,900</td></tr>
                <tr><td>Property tax, insurance, utilities</td><td className="text-right">$6,000</td></tr>
                <tr><td>Commission (4%) plus HST</td><td className="text-right">$34,352</td></tr>
                <tr><td>Legal and staging on sale</td><td className="text-right">$4,000</td></tr>
                <tr><td><strong>All-in cost</strong></td><td className="text-right"><strong>$722,327</strong></td></tr>
                <tr><td>Sale price (ARV)</td><td className="text-right">$760,000</td></tr>
                <tr><td><strong>Profit before tax</strong></td><td className="text-right"><strong>$37,673</strong></td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            A $200,000 gap between purchase and sale price shrinks to <strong>$37,673</strong>, or 5% of the sale
            price. Costs beyond the price and renovation total $82,327, almost 11% of the sale price. The investor’s
            own cash in the deal is $263,975.
          </p>
        </>
      ),
    },
    {
      id: 'seventy-percent-rule',
      title: 'The 70% rule and its limits in Canada',
      body: (
        <>
          <p>
            <strong>
              The 70% rule says the most you should pay for a flip is 70% of the after-repair value minus the
              renovation cost.
            </strong>{' '}
            The remaining 30% of ARV is meant to cover closing, financing, holding and selling costs plus your profit.
          </p>
          <Formula>Maximum offer = (ARV × 70%) − Renovation cost</Formula>
          <p>
            For our house, that is $760,000 × 70% − $80,000 = <strong>$452,000</strong>, which is $108,000 below what
            the investor paid. At $452,000, the same project would earn about $153,000, roughly 20% of the sale price.
          </p>
          <p>The rule is a useful first screen, but it has limits in Canada:</p>
          <ul>
            <li>
              <strong>Few listings pass it</strong> in high-priced markets, so investors are tempted to bend it to 75%
              or 80%, where margins become thin.
            </li>
            <li>
              <strong>It ignores time.</strong> A 70% deal that takes a year can earn less per year than a tighter deal
              done in four months.
            </li>
            <li>
              <strong>It ignores tax.</strong> Flip profits are usually fully taxable as business income, so the profit
              left in the 30% shrinks after tax.
            </li>
          </ul>
          <p>Use the 70% rule to decide which deals deserve a full calculation, never instead of one.</p>
        </>
      ),
    },
    {
      id: 'break-even',
      title: 'Break-even sale price',
      body: (
        <>
          <p>
            <strong>
              The break-even sale price is the lowest price at which the sale returns every dollar you spent, leaving
              zero profit.
            </strong>{' '}
            Because commission rises with the price, you cannot just add up the costs; divide the costs that don’t
            depend on the sale price by what is left after commission.
          </p>
          <Formula>Break-even price = Fixed costs ÷ (1 − Commission rate including HST)</Formula>
          <p>
            In the example, costs before the sale are $683,975, plus $4,000 of legal and staging. Commission of 4%
            plus 13% HST is 4.52% of the price. $687,975 ÷ 0.9548 = <strong>$720,544</strong>.
          </p>
          <p>
            That is only <strong>5.2% below the expected ARV</strong>. If the house sells 5% below $760,000, profit
            drops from $37,673 to about $1,400. Comparing the break-even price with recent sales tells you how much
            room for error you really have. A good flip has a break-even price comfortably below the lowest realistic
            sale price, not just the expected one.
          </p>
        </>
      ),
    },
    {
      id: 'annualized-return',
      title: 'Return on cash and annualized return',
      body: (
        <>
          <p>
            <strong>
              Divide profit by the cash you invested to get your return on cash, then annualize it to compare flips of
              different lengths with each other and with a rental.
            </strong>{' '}
            Cash invested is the down payment plus every cost paid out of pocket before the sale.
          </p>
          <Formula>Annualized return = (1 + Profit ÷ Cash invested)^(12 ÷ Months held) − 1</Formula>
          <p>
            In the example, $37,673 ÷ $263,975 = <strong>14.3%</strong> in six months, which annualizes to about{' '}
            <strong>30.6%</strong>. Delays are the main risk to that figure. If permits, trades or a slow sale stretch
            the project to 10 months, four more months of interest and carrying costs ($16,600) cut profit to $21,073.
            Return on cash falls to 7.5% and the annualized return to about 9%.
          </p>
          <p>
            Every month of holding in this example costs $4,150. Knowing your monthly burn helps you decide when to
            cut the price rather than wait for a buyer.
          </p>
        </>
      ),
    },
    {
      id: 'taxes',
      title: 'How flip profits are taxed in Canada',
      body: (
        <>
          <p>
            <strong>
              Profit from buying, renovating and quickly reselling a home is generally business income, which is fully
              taxable, not a capital gain.
            </strong>{' '}
            This is a high-level overview, not tax advice; speak to an accountant before you buy.
          </p>
          <ul>
            <li>
              <strong>The 365-day rule.</strong> Since January 1, 2023, a home in Canada owned for less than 365
              consecutive days is a “flipped property”: any gain is business income and the principal residence
              exemption does not apply, and a loss is deemed to be nil. Exceptions cover life events such as death,
              separation, job loss, a work-related move, serious illness and insolvency.
            </li>
            <li>
              <strong>After 365 days</strong>, the CRA still decides on the facts. Buying a property to renovate and
              resell often looks like a business however long you hold it.
            </li>
            <li>
              <strong>British Columbia</strong> has charged a separate home flipping tax since January 1, 2025: up to 20% of
              the taxable profit on properties sold within 730 days, on top of income tax.
            </li>
            <li>
              <strong>GST/HST</strong> can apply to the sale if the renovation is a “substantial renovation,” roughly
              90% or more of the interior removed or replaced.
            </li>
          </ul>
          <p>
            At a 43% marginal rate, the example’s $37,673 becomes about $21,500 after income tax.
          </p>
        </>
      ),
    },
    {
      id: 'flip-in-propstack',
      title: 'Running a flip in PropStack',
      body: (
        <>
          <p>
            PropStack’s Flip strategy takes your ARV or target sale price, renovation scope, holding period, holding
            costs and selling costs, and calculates net profit, return on cash, annualized return and the break-even
            sale price automatically. Changing the timeline or sale price updates every figure, so you can see how
            much a delay or a lower sale costs before it happens.
          </p>
          <p>
            The same deal is also analysed as a rental and as a cash-out refinance, so you can see whether{' '}
            <Link href="/learn/brrrr-canada-cash-out-refinance">refinancing and holding</Link> beats selling. See{' '}
            <Link href="/learn/buy-and-hold-vs-brrrr-vs-flip">buy and hold vs. BRRRR vs. flip</Link> for how to choose.{' '}
            <Link href={TRY_URL}>Try it on a listing</Link>, no account needed.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'What is a good profit on a house flip in Canada?',
      answer:
        'There is no fixed target, but many investors want a pre-tax profit of at least 10% to 15% of the sale price, so the project survives a lower sale price or a delay. In our example, a 5% profit margin is wiped out by a 5% drop in the sale price.',
    },
    {
      question: 'Does the 70% rule work in Canada?',
      answer:
        'It works as a quick screen, but few properties in expensive Canadian markets meet it, and it ignores holding time and income tax. Always follow it with a full calculation of all-in costs and the break-even sale price.',
    },
    {
      question: 'Is flipping a house taxed as a capital gain in Canada?',
      answer:
        'Usually not. Since 2023, a home owned for less than 365 days is deemed a flipped property, with any gain taxed as business income unless a life-event exception applies. Homes held longer can still be business income depending on the facts. Get advice from an accountant.',
    },
    {
      question: 'Do I pay land transfer tax when flipping a house?',
      answer:
        'Yes, the buyer pays land transfer tax on every purchase, including a flip, and it is not refunded when you sell. In Toronto you pay both the provincial and the municipal tax.',
    },
    {
      question: 'How do you calculate a break-even sale price?',
      answer:
        'Add every cost that does not depend on the sale price (purchase, closing, renovation, financing, holding, legal and staging), then divide by one minus the commission rate including HST.',
    },
  ],
  sources: [
    {
      title: 'Residential property flipping rule',
      publisher: 'Canada Revenue Agency',
      url: 'https://www.canada.ca/cra-property-flipping',
    },
    {
      title: 'Calculating land transfer tax',
      publisher: 'Government of Ontario',
      url: 'https://www.ontario.ca/document/land-transfer-tax/calculating-land-transfer-tax',
    },
    {
      title: 'Municipal Land Transfer Tax (MLTT) rates and fees',
      publisher: 'City of Toronto',
      url: 'https://www.toronto.ca/services-payments/property-taxes-utilities/municipal-land-transfer-tax-mltt/municipal-land-transfer-tax-mltt-rates-and-fees',
    },
    {
      title: 'Property transfer tax',
      publisher: 'Government of British Columbia',
      url: 'https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax',
    },
    {
      title: 'BC home flipping tax',
      publisher: 'Government of British Columbia',
      url: 'https://www2.gov.bc.ca/gov/content/taxes/income-taxes/bc-home-flipping-tax',
    },
    {
      title: 'Excise Tax Act, section 123 (definition of substantial renovation)',
      publisher: 'Justice Laws Website, Government of Canada',
      url: 'https://laws-lois.justice.gc.ca/eng/acts/e-15/section-123.html',
    },
  ],
  related: ['brrrr-canada-cash-out-refinance', 'buy-and-hold-vs-brrrr-vs-flip', 'rental-property-cash-flow-canada'],
};
