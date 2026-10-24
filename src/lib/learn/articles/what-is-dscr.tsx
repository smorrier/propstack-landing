import Link from "next/link";
import { TRY_URL } from "@/lib/constants";
import { Formula, TableWrap } from '@/components/learn/blocks';
import { SEAN_MORRIER } from '../authors';
import type { LearnArticle } from '../types';

/*
 * Worked example (8 units, $1,950,000, 4.9% / 25 yr, semi-annual compounding like the calculator):
 * GPR 168,000 − 3% vacancy 5,040 = EGI 162,960; opex 55,920; NOI 107,040.
 * 75% LTV loan 1,462,500 → 8,422.91/mo, 101,075/yr → DSCR 1.059.
 * Max loan at 1.20 → 89,200/yr → 1,290,676 (66.2% LTV). At 1.25 → 1,239,049.
 * 30-yr amortization → 92,618/yr → 1.16. NOI for 1.20 on the full loan → 121,290.
 * Price for 1.20 at 75% LTV → 1,720,902. Rate 5.9% → 0.96.
 */
export const dscrArticle: LearnArticle = {
  slug: 'what-is-dscr',
  title: 'What Is DSCR? The Debt Service Coverage Ratio for Canadian Rental Properties',
  shortTitle: 'What is DSCR?',
  seoTitle: 'DSCR Explained: Debt Service Coverage Ratio',
  description:
    'DSCR is net operating income divided by annual mortgage payments. Learn the formula, what Canadian lenders require, and how DSCR sets your maximum loan.',
  summary: [
    'DSCR (debt service coverage ratio) is a property’s net operating income divided by its annual mortgage payments, principal plus interest.',
    'A DSCR of 1.00 means the building’s income covers the mortgage exactly; 1.20 means it earns 20% more than the payments.',
    'Canadian lenders on 5+ unit buildings usually want 1.20 to 1.30 on conventional loans; CMHC-insured minimums run from 1.10 to 1.30 depending on size and term.',
    'DSCR often limits your loan more than loan-to-value does: in our 8-unit example, a 1.20 minimum cuts a 75% loan to about 66%.',
  ],
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  author: SEAN_MORRIER,
  readingMinutes: 7,
  keywords: [
    'DSCR',
    'debt service coverage ratio',
    'debt coverage ratio',
    'DSCR calculator',
    'multiplex financing Canada',
    'apartment building mortgage Canada',
    'NOI',
  ],
  sections: [
    {
      id: 'what-is-dscr',
      title: 'What is DSCR?',
      body: (
        <>
          <p>
            <strong>
              The debt service coverage ratio (DSCR) measures how many times a property’s net operating income covers
              its mortgage payments.
            </strong>{' '}
            It is calculated by dividing annual net operating income (NOI) by annual debt service, meaning every
            principal and interest payment made in the year. A DSCR of 1.00 means the rent left after operating
            expenses pays the mortgage exactly, with nothing to spare. A DSCR of 1.25 means the building earns 25% more
            than its mortgage costs.
          </p>
          <p>
            Lenders care about DSCR because on a commercial rental (in Canada, usually five units or more) they lend
            against the building’s income, not mainly against your salary. If the property can’t carry its own debt,
            the lender is relying on you to top it up every month. CMHC calls the same measure the{' '}
            <strong>debt coverage ratio (DCR)</strong>; the two terms mean the same thing.
          </p>
        </>
      ),
    },
    {
      id: 'formula',
      title: 'How to calculate DSCR',
      body: (
        <>
          <p>To calculate DSCR, divide one year of net operating income by one year of mortgage payments:</p>
          <Formula>DSCR = Net operating income ÷ Annual debt service</Formula>
          <ol>
            <li>
              <strong>Start with gross potential rent:</strong> every unit at its rent for 12 months, plus parking,
              laundry and storage income.
            </li>
            <li>
              <strong>Subtract vacancy and bad debt</strong> to get effective gross income. Lenders typically use at
              least 3–5% even if your building is full.
            </li>
            <li>
              <strong>Subtract operating expenses:</strong> property taxes, insurance, utilities you pay, repairs and
              maintenance, property management, snow removal, landscaping and admin. The result is NOI.
            </li>
            <li>
              <strong>Total the mortgage payments</strong> for the year, principal and interest together.
            </li>
            <li>
              <strong>Divide NOI by debt service.</strong>
            </li>
          </ol>
          <p>
            NOI does <strong>not</strong> deduct mortgage payments, income tax, depreciation (capital cost allowance)
            or one-time renovation spending. Those items are left out so that the same building has the same NOI
            whoever owns it and however it is financed.
          </p>
        </>
      ),
    },
    {
      id: 'example',
      title: 'DSCR example: an 8-unit building',
      body: (
        <>
          <p>
            Here is an 8-unit building listed at <strong>$1,950,000</strong> with rents of $1,750 per unit. The buyer
            wants a conventional mortgage at 75% loan-to-value: $1,462,500 at an illustrative 4.9% over a 25-year
            amortization. Canadian fixed mortgage rates compound semi-annually, which works out to a monthly payment of
            $8,422.91.
          </p>
          <TableWrap>
            <table>
              <caption>8-unit building, year 1 (illustrative)</caption>
              <tbody>
                <tr><td>Gross potential rent (8 × $1,750 × 12)</td><td className="text-right">$168,000</td></tr>
                <tr><td>Vacancy and bad debt (3%)</td><td className="text-right">−$5,040</td></tr>
                <tr><td><strong>Effective gross income</strong></td><td className="text-right"><strong>$162,960</strong></td></tr>
                <tr><td>Property taxes</td><td className="text-right">−$14,000</td></tr>
                <tr><td>Insurance</td><td className="text-right">−$9,600</td></tr>
                <tr><td>Utilities (common areas, water)</td><td className="text-right">−$12,000</td></tr>
                <tr><td>Repairs and maintenance</td><td className="text-right">−$9,600</td></tr>
                <tr><td>Property management (4% of gross rent)</td><td className="text-right">−$6,720</td></tr>
                <tr><td>Snow, landscaping, admin</td><td className="text-right">−$4,000</td></tr>
                <tr><td><strong>Net operating income</strong></td><td className="text-right"><strong>$107,040</strong></td></tr>
                <tr><td>Annual debt service (12 × $8,422.91)</td><td className="text-right">$101,075</td></tr>
                <tr><td><strong>DSCR</strong></td><td className="text-right"><strong>1.06</strong></td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            $107,040 ÷ $101,075 = <strong>1.06</strong>. The building covers its mortgage, but only by 6%. One
            unexpected repair or a few months of extra vacancy would leave the owner paying out of pocket, and most
            lenders would not approve this loan as requested.
          </p>
        </>
      ),
    },
    {
      id: 'lender-requirements',
      title: 'What DSCR do Canadian lenders require?',
      body: (
        <>
          <p>
            <strong>
              Most Canadian lenders want a DSCR of at least 1.20 to 1.30 on a conventional (uninsured) multi-unit
              mortgage, and CMHC-insured loans have minimums from 1.10 to 1.30.
            </strong>{' '}
            The exact figure depends on the lender, the number of units and the mortgage term.
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th>Lender or program</th><th>Typical minimum DSCR</th></tr>
              </thead>
              <tbody>
                <tr><td>Big banks, conventional</td><td>1.25–1.30</td></tr>
                <tr><td>Credit unions, conventional</td><td>1.20–1.25</td></tr>
                <tr><td>CMHC-insured, 5–6 units</td><td>1.10 purchase, 1.20 refinance</td></tr>
                <tr><td>CMHC-insured, 7+ units</td><td>1.20 (term 10+ years), 1.30 (shorter term)</td></tr>
                <tr><td>Private lenders</td><td>Often no formal minimum; sized on loan-to-value</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            Two details catch investors out. First, lenders recalculate NOI with their own assumptions: often a 5%
            vacancy allowance and a 3–5% management fee even if you manage the building yourself. In our example,
            moving vacancy from 3% to 5% alone drops DSCR from 1.06 to 1.03. Second, some lenders test the payment at a
            rate above your contract rate. At 5.9% instead of 4.9%, the same loan’s DSCR falls to 0.96.
          </p>
        </>
      ),
    },
    {
      id: 'loan-sizing',
      title: 'How DSCR limits your mortgage',
      body: (
        <>
          <p>
            <strong>
              Lenders work DSCR backwards to set the largest loan the building’s income can support, then lend the
              lower of that amount and their loan-to-value limit.
            </strong>{' '}
            The maximum annual payment is NOI divided by the required DSCR. The maximum loan is whatever mortgage that
            payment can carry at the lender’s rate and amortization.
          </p>
          <Formula>Maximum annual payment = NOI ÷ Required DSCR</Formula>
          <p>
            For the 8-unit building: $107,040 ÷ 1.20 = $89,200 a year, or $7,433 a month. At 4.9% over 25 years that
            supports a loan of about <strong>$1,290,700</strong>, which is 66% of the price, not 75%. The buyer needs a
            down payment of about $659,300 instead of $487,500: <strong>$171,800 more cash</strong>. At a 1.25
            requirement, the maximum loan drops again to about $1,239,000 (64% loan-to-value).
          </p>
          <p>
            This is why DSCR, not the advertised loan-to-value, is usually the number that decides how much cash a
            Canadian multiplex purchase takes when cap rates are low relative to mortgage rates.
          </p>
        </>
      ),
    },
    {
      id: 'improve',
      title: 'How to improve DSCR',
      body: (
        <>
          <p>
            You can raise DSCR by increasing NOI or by lowering the annual mortgage payment. Using the 8-unit example
            (DSCR 1.06 on a $1,462,500 loan), here is what each lever does:
          </p>
          <ul>
            <li>
              <strong>Negotiate the price.</strong> At 75% loan-to-value, the building reaches a 1.20 DSCR at a price of
              about $1,721,000, roughly $229,000 below asking. That price is a useful anchor for an offer.
            </li>
            <li>
              <strong>Lengthen the amortization.</strong> A 30-year amortization lowers the payment to $92,618 a year and
              lifts DSCR to 1.16. That helps, but here it is still short of 1.20.
            </li>
            <li>
              <strong>Put more money down.</strong> At 65% loan-to-value, DSCR is 1.22.
            </li>
            <li>
              <strong>Raise NOI.</strong> Reaching 1.20 on the full 75% loan needs NOI of $121,290, which is $14,250 more a
              year or about $148 per unit per month. Sources include rents brought to market on turnover, paid parking,
              laundry and storage, or lower insurance and utility costs.
            </li>
            <li>
              <strong>Find a lower rate or a different program.</strong> CMHC-insured financing has lower DSCR
              minimums on 5–6 unit purchases, in exchange for an insurance premium.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'dscr-vs-other-metrics',
      title: 'DSCR vs. cap rate and cash-on-cash return',
      body: (
        <>
          <p>
            DSCR answers <strong>whether the building can carry its debt</strong>. It is a safety and financing
            measure, not a return measure. Cap rate (NOI ÷ price) tells you what the building earns relative to what
            you pay for it, before financing. Cash-on-cash return (annual cash flow ÷ cash invested) tells you what
            your own money earns after the mortgage.
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th>Metric</th><th>Formula</th><th>8-unit example</th></tr>
              </thead>
              <tbody>
                <tr><td>DSCR</td><td>NOI ÷ annual debt service</td><td>1.06 at 75% LTV</td></tr>
                <tr><td>Cap rate</td><td>NOI ÷ purchase price</td><td>5.49%</td></tr>
                <tr><td>Cash-on-cash</td><td>Annual cash flow ÷ cash invested</td><td>1.12% at 75% LTV</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            A deal needs to pass all three: a strong cap rate with a thin DSCR is a financing problem, and a healthy
            DSCR with a low cash-on-cash return means your cash is working hard for little. See{' '}
            <Link href="/learn/cap-rate-vs-cash-on-cash">cap rate vs. cash-on-cash return</Link> for how leverage
            separates the two.
          </p>
        </>
      ),
    },
    {
      id: 'dscr-in-propstack',
      title: 'Checking DSCR in PropStack',
      body: (
        <>
          <p>
            PropStack calculates DSCR for every year of a 10-year projection, using Canadian semi-annual compounding
            and mortgage renewals at the end of each term, so you can see whether coverage improves as rents grow or
            tightens at renewal. The deal score checks DSCR against your own target (1.25 by default), and the
            “price that works” figure solves for the purchase price that reaches a 1.20 DSCR.
          </p>
          <p>
            You can try it without an account: <Link href={TRY_URL}>paste a listing link or enter a deal</Link>. Expenses
            start from regional benchmarks, and you can adjust every assumption.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'What is a good DSCR for a rental property?',
      answer:
        'For a Canadian 5+ unit building, 1.20 is the common minimum for conventional financing and 1.25 or higher gives a comfortable cushion. Below 1.00 the rent does not cover the mortgage, so the owner pays the shortfall.',
    },
    {
      question: 'Is DSCR calculated before or after vacancy?',
      answer:
        'After. NOI is rent minus a vacancy and bad-debt allowance minus operating expenses. Lenders usually apply at least 3–5% vacancy even when a building is fully rented.',
    },
    {
      question: 'Do lenders include a property management fee if I manage the building myself?',
      answer:
        'Usually yes. Banks and credit unions commonly deduct 3–5% of effective gross income for management regardless of who manages, because the building has to work if they ever need to hire a manager.',
    },
    {
      question: 'Can DSCR be below 1?',
      answer:
        'Yes. A DSCR below 1.00 means NOI is less than the mortgage payments, so the property loses money before any repairs or capital spending. Most lenders will not fund a purchase at that level without a larger down payment.',
    },
    {
      question: 'Are DSCR and DCR the same thing?',
      answer:
        'Yes. Debt service coverage ratio (DSCR) and debt coverage ratio (DCR) are two names for NOI divided by annual principal and interest payments. CMHC uses DCR in its multi-unit guidelines.',
    },
  ],
  sources: [
    {
      title: 'Multi-Unit Mortgage Loan Insurance Reference Guide',
      publisher: 'Canada Mortgage and Housing Corporation (CMHC)',
      url: 'https://assets.cmhc-schl.gc.ca/sf/project/cmhc/pdfs/content/en/reference-guide.pdf',
    },
    {
      title: 'DSCR requirements by lender type in Canada',
      publisher: 'LendCity (updated September 2026)',
      url: 'https://lendcity.ca/blog/dscr-requirements-by-lender-type-canada/',
    },
  ],
  related: ['cap-rate-vs-cash-on-cash'],
};
