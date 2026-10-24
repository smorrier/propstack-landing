import Link from "next/link";
import { TRY_URL } from "@/lib/constants";
import { Formula, TableWrap } from '@/components/learn/blocks';
import { SEAN_MORRIER } from '../authors';
import type { LearnArticle } from '../types';

/*
 * Worked example (Ontario duplex outside Toronto, semi-annual compounding like the calculator):
 * Buy 450,000; Ontario LTT 275 + 1,950 + 2,250 + 1,000 = 5,475; legal/title/inspection 2,500.
 * Purchase mortgage 80% = 360,000 at 4.9% / 25 yr → 2,073.33/mo; 6 payments 12,440; balance at month 6 356,254.
 * Rehab 75,000; carrying (tax, insurance, utilities) 600/mo × 6 = 3,600; refi appraisal/legal 1,500;
 * prepayment penalty 3 months' interest on 356,254 at 4.9% = 4,364.
 * Cash invested 90,000 + 5,475 + 2,500 + 75,000 + 12,440 + 3,600 + 1,500 + 4,364 = 194,879.
 * Appraisal 640,000 × 80% = 512,000 → cash out 512,000 − 356,254 = 155,746; left in 39,133; recovered 79.9%.
 * Rent 2 × 2,300 → GPR 55,200; 3% vacancy 1,656; EGI 53,544; opex 11,760 (tax 4,800, ins 2,400,
 * water 1,800, R&M 5% 2,760); NOI 41,784.
 * New loan 4.9% / 30 yr → 2,702.00/mo, 32,424/yr → DSCR 1.29, cash flow 9,360/yr (780/mo).
 * DSCR 1.20 on 25 yr: max payment 34,820/yr → max loan 503,827 (78.7%) → cash out 147,573, recovered 75.7%.
 * Appraisal 600,000 → loan 480,000 → cash out 123,746, recovered 63.5%, left in 71,133.
 * 100% recovery needs 80% × ARV ≥ cash invested + old balance = 551,133 → ARV ≥ 688,916.
 * Seasoning cap at price + documented rehab 525,000 → loan 420,000 → cash out 63,746, recovered 32.7%.
 */
export const brrrrArticle: LearnArticle = {
  slug: 'brrrr-canada-cash-out-refinance',
  title: 'BRRRR in Canada: How Much Can You Take Out in a Cash-Out Refinance?',
  shortTitle: 'BRRRR and cash-out refinancing',
  seoTitle: 'BRRRR in Canada: Cash-Out Refinance Limits',
  description:
    'How BRRRR works in Canada: the 80% refinance limit, appraisal and seasoning risk, how DSCR caps the new loan, and a worked example of capital recovered.',
  summary: [
    'BRRRR stands for buy, rehab, rent, refinance, repeat: you add value to a property, then refinance at the new value to pull your cash back out.',
    'In Canada a residential refinance is capped at 80% of the appraised value, because federally regulated lenders cannot lend above 80% without mortgage insurance and insurance is not available for refinancing a rental.',
    'The cash you get back is the new loan minus the old mortgage balance; divide it by the total cash you put in to get your capital recovered percentage.',
    'The appraisal, the lender’s seasoning rules and the rent-to-payment test (DSCR) each can shrink the new loan; in our duplex example they move capital recovered between about 33% and 80%.',
  ],
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  author: SEAN_MORRIER,
  readingMinutes: 7,
  keywords: [
    'BRRRR Canada',
    'BRRRR method',
    'cash-out refinance Canada',
    'how much can I refinance rental property',
    'refinance 80% LTV',
    'capital recovered',
    'refinance seasoning',
  ],
  sections: [
    {
      id: 'what-is-brrrr',
      title: 'What is the BRRRR method?',
      body: (
        <>
          <p>
            <strong>
              BRRRR is a five-step strategy: buy a property below its potential value, rehab it, rent it out,
              refinance at the higher value, and repeat with the cash the refinance returns.
            </strong>{' '}
            The goal is to end up owning a rented property with little or none of your own money left in it.
          </p>
          <ol>
            <li>
              <strong>Buy</strong> a property that needs work, priced for its current condition.
            </li>
            <li>
              <strong>Rehab</strong> it: repairs and upgrades that raise both its value and its rent.
            </li>
            <li>
              <strong>Rent</strong> it to tenants at market rent, with signed leases a lender can see.
            </li>
            <li>
              <strong>Refinance</strong> with a new, larger mortgage based on the after-repair value (ARV). The new
              loan pays off the old one and the rest comes back to you.
            </li>
            <li>
              <strong>Repeat</strong> by putting that cash into the next property.
            </li>
          </ol>
          <p>
            Every step is a cost, and the refinance is where Canadian rules matter most. How much comes back depends on
            the appraisal, the lender’s loan-to-value limit, how long you have owned the property and whether the rent
            supports the new payment.
          </p>
        </>
      ),
    },
    {
      id: 'refinance-limit',
      title: 'How much can you take out in a cash-out refinance in Canada?',
      body: (
        <>
          <p>
            <strong>
              On a 1–4 unit rental, the new mortgage can be at most 80% of the appraised value, and the cash you take
              out is that loan minus what you still owe.
            </strong>{' '}
            Under section 418 of the Bank Act, a bank cannot lend more than 80% of a home’s value to buy, renovate or
            refinance it unless the excess is insured, and mortgage insurance is not available for refinancing a
            rental. Most credit unions and other lenders apply the same ceiling.
          </p>
          <Formula>Cash out = (Appraised value × 80%) − Existing mortgage balance</Formula>
          <p>
            Refinance fees and any penalty for breaking the first mortgage count as cash you put in. Three other
            rules affect the result:
          </p>
          <ul>
            <li>
              <strong>Stress test.</strong> On an uninsured mortgage, a federally regulated lender must qualify you at
              the greater of your contract rate plus 2% or 5.25% (OSFI’s minimum qualifying rate).
            </li>
            <li>
              <strong>Lower limits.</strong> Some lenders cap rental refinances below 80%, and a home equity line of
              credit can only reach 65% of value as a revolving (non-amortizing) line.
            </li>
            <li>
              <strong>Five or more units</strong> is commercial lending, where CMHC-insured refinances can go higher.
              See <Link href="/learn/cmhc-mli-select-explained">CMHC MLI Select explained</Link>.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'example',
      title: 'BRRRR example: a duplex in Ontario',
      body: (
        <>
          <p>
            An investor buys a tired duplex outside Toronto for <strong>$450,000</strong> with 20% down and a $360,000
            mortgage at an illustrative 4.9% over 25 years. They spend six months and <strong>$75,000</strong> on
            renovations, rent both units at $2,300, and refinance at an appraised value of <strong>$640,000</strong>.
          </p>
          <TableWrap>
            <table>
              <caption>Ontario duplex BRRRR (illustrative)</caption>
              <tbody>
                <tr><td>Down payment (20%)</td><td className="text-right">$90,000</td></tr>
                <tr><td>Ontario land transfer tax</td><td className="text-right">$5,475</td></tr>
                <tr><td>Legal, title insurance, inspection</td><td className="text-right">$2,500</td></tr>
                <tr><td>Renovation</td><td className="text-right">$75,000</td></tr>
                <tr><td>Mortgage payments, 6 months</td><td className="text-right">$12,440</td></tr>
                <tr><td>Taxes, insurance, utilities, 6 months</td><td className="text-right">$3,600</td></tr>
                <tr><td>Prepayment penalty (3 months’ interest)</td><td className="text-right">$4,364</td></tr>
                <tr><td>Appraisal and legal for the refinance</td><td className="text-right">$1,500</td></tr>
                <tr><td><strong>Total cash invested</strong></td><td className="text-right"><strong>$194,879</strong></td></tr>
                <tr><td>New mortgage (80% × $640,000)</td><td className="text-right">$512,000</td></tr>
                <tr><td>Old mortgage paid off</td><td className="text-right">−$356,254</td></tr>
                <tr><td><strong>Cash returned</strong></td><td className="text-right"><strong>$155,746</strong></td></tr>
                <tr><td><strong>Cash left in the deal</strong></td><td className="text-right"><strong>$39,133</strong></td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            The investor gets back <strong>80%</strong> of their cash and keeps $128,000 of equity. At 4.9% over 30
            years the new $512,000 mortgage costs $2,702 a month, and the duplex still clears about $780 a month before
            management and a capital reserve.
          </p>
        </>
      ),
    },
    {
      id: 'capital-recovered',
      title: 'Capital recovered and cash left in the deal',
      body: (
        <>
          <p>
            <strong>
              Capital recovered is the cash the refinance returns divided by all the cash you put in; whatever is not
              recovered is your cash left in the deal.
            </strong>
          </p>
          <Formula>Capital recovered = Cash returned at refinance ÷ Total cash invested</Formula>
          <p>
            In the duplex example, $155,746 ÷ $194,879 = <strong>79.9%</strong>, leaving $39,133 in the property. If
            the investor has $200,000 to work with, they can start the next deal with about $161,000 instead of
            $5,000.
          </p>
          <p>
            Count every dollar in the denominator: closing costs, mortgage payments and carrying costs during the
            renovation, refinance fees and any prepayment penalty. Leaving these out is the most common way BRRRR
            projections overstate what comes back.
          </p>
          <p>
            When capital recovered reaches 100%, you have none of your own money left in the property, so any positive
            cash flow is an <strong>infinite cash-on-cash return</strong>. That is the goal, but in Canada it usually
            takes a deep discount on the purchase. Because of the 80% cap, the appraisal must be at least 1.25 times
            the project’s total cost, cash and borrowed money together. For the duplex that is about $689,000.
          </p>
        </>
      ),
    },
    {
      id: 'dscr-and-rental-income',
      title: 'How DSCR and rental income cap the new loan',
      body: (
        <>
          <p>
            <strong>
              A lender will only refinance as much as the rent can carry, so the new loan is the lower of 80% of value
              and the amount the property’s income supports.
            </strong>{' '}
            On five or more units the test is the debt service coverage ratio: net operating income divided by annual
            mortgage payments (see <Link href="/learn/what-is-dscr">what is DSCR?</Link>). On 1–4 units, banks usually
            add part of the rent to your personal income, while many rental-focused lenders size the loan on the
            property’s own DSCR.
          </p>
          <p>
            The duplex’s net operating income is $41,784 a year after 3% vacancy, taxes, insurance, water and
            maintenance. On a 30-year amortization the $512,000 loan has a DSCR of <strong>1.29</strong>, so it passes
            a 1.20 test. On a 25-year amortization the payment rises to $35,385 a year and DSCR drops to 1.18. At a
            1.20 minimum the largest loan becomes about <strong>$503,800</strong>, cash returned falls to $147,573 and
            capital recovered falls to 75.7%.
          </p>
          <p>
            The lesson: estimate rent and expenses conservatively before you buy. See{' '}
            <Link href="/learn/vacancy-and-operating-expense-assumptions">vacancy and operating expense assumptions</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'appraisal-risk',
      title: 'Appraisal risk: when the ARV comes in low',
      body: (
        <>
          <p>
            <strong>
              The appraisal sets your loan, so every $10,000 the appraiser takes off the value is $8,000 less cash back.
            </strong>{' '}
            Your own ARV estimate does not count; the lender’s appraiser values the property from recent comparable
            sales, and OSFI expects federally regulated lenders to be conservative about values in fast-rising markets.
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th>Appraised value</th><th className="text-right">New loan (80%)</th><th className="text-right">Cash returned</th><th className="text-right">Capital recovered</th></tr>
              </thead>
              <tbody>
                <tr><td>$640,000</td><td className="text-right">$512,000</td><td className="text-right">$155,746</td><td className="text-right">79.9%</td></tr>
                <tr><td>$600,000</td><td className="text-right">$480,000</td><td className="text-right">$123,746</td><td className="text-right">63.5%</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            An appraisal $40,000 (6%) lower leaves $71,133 in the deal instead of $39,133. To protect yourself, base ARV on sold
            comparables of renovated properties nearby (not asking prices), keep your renovation in line with the
            neighbourhood, and give the appraiser a list of the work done with invoices and permits.
          </p>
        </>
      ),
    },
    {
      id: 'seasoning-and-timing',
      title: 'Seasoning, timing and prepayment penalties',
      body: (
        <>
          <p>
            <strong>
              Many lenders will not use the new appraised value if you refinance soon after buying, so timing can
              matter as much as the renovation itself.
            </strong>{' '}
            “Seasoning” is the time a lender wants you to have owned the property. Policies vary, but a common approach
            for a refinance within roughly 6 to 12 months of purchase is to cap the value at the purchase price plus
            documented renovation costs.
          </p>
          <p>
            In the duplex example that cap would be $450,000 + $75,000 = $525,000. At 80%, the new loan is $420,000,
            cash returned is just $63,746 and capital recovered drops to <strong>32.7%</strong>. Ask lenders about
            their seasoning policy before you buy, not when the renovation is done.
          </p>
          <p>
            The first mortgage matters too. Breaking a fixed-rate mortgage early can cost an interest rate
            differential penalty far above the three months’ interest in our example. Investors planning a BRRRR often
            use a variable-rate, open or private mortgage for the purchase, or arrange to refinance with the same
            lender.
          </p>
        </>
      ),
    },
    {
      id: 'brrrr-in-propstack',
      title: 'Modelling a BRRRR in PropStack',
      body: (
        <>
          <p>
            PropStack’s Buy · Optimize · Refi strategy models the cash-out refinance for you. Enter the post-rehab
            appraisal, the new loan-to-value, the new rate and the post-refinance rent and expenses, and it shows the
            cash-out amount, cash left in the deal, capital recovered, equity retained and new monthly cash flow. An
            infinite ROI indicator shows when you have recovered all your cash.
          </p>
          <p>
            Because buy-and-hold, flip and refinance are compared side by side on the same deal, you can see whether
            holding, flipping or refinancing works best (see{' '}
            <Link href="/learn/buy-and-hold-vs-brrrr-vs-flip">buy and hold vs. BRRRR vs. flip</Link>).{' '}
            <Link href={TRY_URL}>Try it on a listing</Link>, no account needed.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'Can I refinance a rental property above 80% in Canada?',
      answer:
        'Not with a regular residential mortgage on a 1–4 unit property. Banks cannot lend above 80% of value without mortgage insurance, and insurance is not available for refinancing a rental. Some investors add a private second mortgage, at much higher rates. Buildings with five or more units can use CMHC-insured multi-unit financing.',
    },
    {
      question: 'How soon can I refinance after buying a property?',
      answer:
        'There is no legal waiting period, but lender seasoning policies vary. Many lenders refinancing within about 6 to 12 months of purchase will cap the value at the purchase price plus documented renovation costs instead of using the full new appraisal.',
    },
    {
      question: 'Does the stress test apply to a refinance?',
      answer:
        'Yes. A refinance with a federally regulated lender is a new uninsured mortgage, so you must qualify at the greater of your contract rate plus 2% or 5.25%.',
    },
    {
      question: 'What is a good capital recovered percentage for BRRRR?',
      answer:
        'It depends on your goals, but many investors aim to recover 75% or more of their cash so they can repeat quickly. 100% means no money left in the deal. A lower figure can still be a good investment if the property cash flows well.',
    },
    {
      question: 'Is the cash from a refinance taxable?',
      answer:
        'Borrowed money is not income, so the refinance itself does not create tax. How the interest on the new loan can be deducted depends on what the money is used for, so ask an accountant before you refinance.',
    },
  ],
  sources: [
    {
      title: 'Bank Act, section 418 (residential mortgages over 80% of value)',
      publisher: 'Justice Laws Website, Government of Canada',
      url: 'https://laws-lois.justice.gc.ca/eng/acts/b-1.01/section-418.html',
    },
    {
      title: 'Guideline B-20: Residential Mortgage Underwriting Practices and Procedures',
      publisher: 'Office of the Superintendent of Financial Institutions (OSFI)',
      url: 'https://www.osfi-bsif.gc.ca/en/guidance/guidance-library/residential-mortgage-underwriting-practices-procedures-guideline-2017',
    },
    {
      title: 'Minimum qualifying rate for uninsured mortgages',
      publisher: 'Office of the Superintendent of Financial Institutions (OSFI)',
      url: 'https://www.osfi-bsif.gc.ca/en/supervision/financial-institutions/banks/minimum-qualifying-rate-uninsured-mortgages',
    },
    {
      title: 'Calculating land transfer tax',
      publisher: 'Government of Ontario',
      url: 'https://www.ontario.ca/document/land-transfer-tax/calculating-land-transfer-tax',
    },
  ],
  related: ['what-is-dscr', 'buy-and-hold-vs-brrrr-vs-flip', 'fix-and-flip-profit-calculator'],
};
