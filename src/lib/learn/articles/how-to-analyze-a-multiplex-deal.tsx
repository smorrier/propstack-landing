import Link from "next/link";
import { TRY_URL } from "@/lib/constants";
import { Formula, TableWrap } from '@/components/learn/blocks';
import { SEAN_MORRIER } from '../authors';
import type { LearnArticle } from '../types';

/*
 * Shared 8-unit example (same as what-is-dscr and cap-rate-vs-cash-on-cash):
 * price 1,950,000; GPR 168,000 (8 × 1,750 × 12); 3% vacancy 5,040; EGI 162,960; opex 55,920
 * (34.3% of EGI, 6,990/unit); NOI 107,040; cap 5.49%; GRM 1,950,000 / 168,000 = 11.61.
 * 4.9% / 25 yr semi-annual. 75% loan 1,462,500 → 101,075/yr → DSCR 1.06.
 * Max loan at 1.20 → 89,200/yr → 1,290,676 (66.2% LTV). Cash = 659,324 + 45,000 closing = 704,324.
 * CF 107,040 − 89,200 = 17,840 → CoC 2.53%. Y1 paydown 27,192 → (17,840 + 27,192) / 704,324 = 6.39%.
 * Value-add: 3 units +250/mo on turnover = +9,000/yr rent; less 3% vacancy (270) and 4% management (360)
 *   = +8,370 NOI (same method as gross-rent-multiplier). At 5.49% cap → +152,481; by GRM 11.61 on the rent
 *   → +104,464 (34,821/unit). DSCR on the 1,290,676 loan → 115,410 / 89,200 = 1.29.
 * Stress on the 1,290,676 loan (DS 89,200): 5% vacancy NOI 103,680 → 1.16; 8% → 98,640 → 1.11;
 *   opex +10% → 101,448 → 1.14. Renewal after 5 yrs: balance 1,140,542, 20 yrs left.
 *   At 5.9% DS 96,707 → flat NOI 1.11; NOI grown 2.5%/yr (121,106) → 1.25. At 6.9% DS 104,498 → 1.16 (grown).
 * Exit after 10 yrs: NOI × 1.025^10 = 137,020. Value at 5.49% 2,495,815; 6.0% 2,283,671; 6.5% 2,108,004.
 *   Loan balance 949,293 → equity before selling costs 1,546,522 / 1,334,378 / 1,158,711.
 */
export const multiplexAnalysisArticle: LearnArticle = {
  slug: 'how-to-analyze-a-multiplex-deal',
  title: 'How to Analyze a Multiplex Deal in Canada: A Step-by-Step Guide',
  shortTitle: 'How to analyze a multiplex deal',
  seoTitle: 'How to Analyze a Multiplex Deal in Canada',
  description:
    'A step-by-step guide to analyzing a Canadian multiplex: rent roll, vacancy and expenses, NOI, cap rate, DSCR, returns, value-add, exit and stress tests.',
  summary: [
    'Analyze a multiplex in order: verify rents, set realistic vacancy and expenses, calculate NOI, compare the cap rate with the market, then size the loan and measure your returns.',
    'In our 8-unit example, NOI of $107,040 on a $1,950,000 price is a 5.49% cap rate, within CBRE’s Q2 2026 range for Canadian low-rise apartments.',
    'A 1.20 DSCR requirement limits the loan to about $1,290,700, or 66% of the price, which sets the real cash needed at about $704,300.',
    'Stress-test vacancy, expenses, the renewal rate and the exit cap rate before you offer, because thin Canadian cash flow leaves little room for error.',
  ],
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  author: SEAN_MORRIER,
  readingMinutes: 10,
  keywords: [
    'how to analyze a multiplex',
    'multiplex deal analysis',
    'apartment building analysis Canada',
    'multifamily underwriting',
    'rent roll analysis',
    'multiplex investing Canada',
    'DSCR',
    'cap rate',
  ],
  sections: [
    {
      id: 'overview',
      title: 'How to analyze a multiplex deal: the steps',
      body: (
        <>
          <p>
            <strong>
              To analyze a multiplex, work from the income to the financing to the exit: verify rents, subtract
              vacancy and expenses to get NOI, compare the cap rate with the market, size the loan from DSCR, then
              measure returns, upside and downside.
            </strong>{' '}
            Each step depends on the one before it, so an error in the rent roll flows through to every number after
            it.
          </p>
          <ol>
            <li>Verify the rent roll and market rents.</li>
            <li>Set vacancy and operating expense assumptions.</li>
            <li>Calculate net operating income (NOI).</li>
            <li>Compare the cap rate and price with the market.</li>
            <li>Size the mortgage with DSCR.</li>
            <li>Measure cash-on-cash and total return.</li>
            <li>Price the value-add and rent upside.</li>
            <li>Plan the exit.</li>
            <li>Stress-test the deal.</li>
          </ol>
          <p>
            We’ll use one example throughout: an <strong>8-unit building listed at $1,950,000</strong>, with every
            unit rented at $1,750 a month. Each step links to a dedicated guide if you want more depth.
          </p>
        </>
      ),
    },
    {
      id: 'rent-roll',
      title: 'Step 1: Verify the rent roll',
      body: (
        <>
          <p>
            <strong>
              Start by confirming what each unit actually rents for, then compare those rents with the market, because
              the rent roll is the foundation of every other number.
            </strong>{' '}
            Ask the seller for a rent roll listing each unit, its rent, lease start date, deposit and any
            arrears, and check it against leases and bank deposits during due diligence.
          </p>
          <p>
            Our 8-unit building has <strong>gross potential rent of $168,000</strong> (8 × $1,750 × 12). Add parking,
            laundry and storage income if there is any. Then check current listings for similar units: if market rent
            is $2,000, the building has upside; if it is $1,600, the current rents may not survive turnover.
          </p>
          <p>
            A quick screen at this stage is the gross rent multiplier: price ÷ gross annual rent. Here it is $1,950,000
            ÷ $168,000 = <strong>11.6</strong>. Comparing GRMs across listings in the same area shows which buildings
            are priced high relative to their rent before you spend time on expenses. See{' '}
            <Link href="/learn/gross-rent-multiplier">the gross rent multiplier guide</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'vacancy-and-expenses',
      title: 'Step 2: Set vacancy and operating expenses',
      body: (
        <>
          <p>
            <strong>
              Subtract a vacancy allowance and every operating expense the owner pays, using your own estimates
              instead of the seller’s.
            </strong>{' '}
            Listings often show taxes and insurance but leave out management, repairs or a vacancy allowance.
          </p>
          <TableWrap>
            <table>
              <caption>8-unit building, year 1 (illustrative)</caption>
              <tbody>
                <tr><td>Gross potential rent</td><td className="text-right">$168,000</td></tr>
                <tr><td>Vacancy and bad debt (3%)</td><td className="text-right">−$5,040</td></tr>
                <tr><td><strong>Effective gross income</strong></td><td className="text-right"><strong>$162,960</strong></td></tr>
                <tr><td>Property taxes</td><td className="text-right">−$14,000</td></tr>
                <tr><td>Insurance</td><td className="text-right">−$9,600</td></tr>
                <tr><td>Utilities (common areas, water)</td><td className="text-right">−$12,000</td></tr>
                <tr><td>Repairs and maintenance</td><td className="text-right">−$9,600</td></tr>
                <tr><td>Property management (4% of gross rent)</td><td className="text-right">−$6,720</td></tr>
                <tr><td>Snow, landscaping, admin</td><td className="text-right">−$4,000</td></tr>
                <tr><td><strong>Total operating expenses</strong></td><td className="text-right"><strong>−$55,920</strong></td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            Expenses here are 34% of effective gross income, or $6,990 per unit per year. Include management even if
            you plan to self-manage, because lenders will. For how to pick these figures, see{' '}
            <Link href="/learn/vacancy-and-operating-expense-assumptions">vacancy and operating expense assumptions</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'noi',
      title: 'Step 3: Calculate net operating income',
      body: (
        <>
          <p>
            <strong>
              Net operating income is effective gross income minus operating expenses: the building’s profit before
              mortgage payments, income tax and capital spending.
            </strong>{' '}
            For our building, $162,960 − $55,920 = <strong>$107,040</strong>.
          </p>
          <Formula>NOI = Gross potential rent − vacancy − operating expenses</Formula>
          <p>
            NOI is the number that cap rate, DSCR and valuation all start from, so it is worth getting right. It
            excludes mortgage principal and interest, depreciation (capital cost allowance) and one-time renovations,
            so the same building has the same NOI no matter who owns it or how it is financed.
          </p>
          <p>
            Two checks help. First, compare the NOI you calculate with the seller’s: a gap usually means missing
            expenses or a vacancy allowance of zero. Second, look at NOI per unit ($13,380 here) against similar
            buildings you have analyzed. The full method, including what counts as an operating expense, is in{' '}
            <Link href="/learn/what-is-noi">what is NOI</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'cap-rate',
      title: 'Step 4: Compare the cap rate with the market',
      body: (
        <>
          <p>
            <strong>
              Divide NOI by the price to get the cap rate, then compare it with recent sales of similar buildings to
              judge whether the price is reasonable.
            </strong>{' '}
            Our building’s cap rate is $107,040 ÷ $1,950,000 = <strong>5.49%</strong>.
          </p>
          <Formula>Cap rate = NOI ÷ Purchase price</Formula>
          <p>
            CBRE’s Q2 2026 survey put Canadian low-rise Class B apartment cap rates at roughly 3.75% to 6% depending on
            the city, from Vancouver at the low end to Quebec City at the high end. A 5.49% cap rate is reasonable in
            Calgary, Edmonton or Halifax, and generous in Toronto or Vancouver if the NOI holds up.
          </p>
          <p>
            Run it backwards too: value = NOI ÷ market cap rate. If similar buildings trade at 5.75%, this NOI supports
            about $1,861,600, which is a useful anchor for an offer. Small multiplexes can trade at different cap
            rates from the larger buildings in broker surveys, so weight local sales most. See{' '}
            <Link href="/learn/cap-rate-vs-cash-on-cash">cap rate vs. cash-on-cash return</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'financing',
      title: 'Step 5: Size the mortgage with DSCR',
      body: (
        <>
          <p>
            <strong>
              On a building of five or more units, the lender sizes the loan from DSCR (NOI ÷ annual mortgage
              payments), and that often allows less than the advertised loan-to-value.
            </strong>{' '}
            At 75% loan-to-value, $1,462,500 at an illustrative 4.9% over 25 years costs $101,075 a year, a DSCR of
            only <strong>1.06</strong>.
          </p>
          <p>
            A conventional lender requiring 1.20 will cap the annual payment at $107,040 ÷ 1.20 = $89,200, which
            supports a loan of about <strong>$1,290,700</strong>: 66% of the price. The down payment rises from
            $487,500 to about $659,300. Full detail is in <Link href="/learn/what-is-dscr">what is DSCR</Link>, and
            down payment rules by property type are in{' '}
            <Link href="/learn/rental-property-down-payment-canada">rental property down payments in Canada</Link>.
          </p>
          <p>
            CMHC-insured financing changes the picture. Its MLI Select program offers up to 95% loan-to-value and a
            1.10 minimum debt coverage ratio on standard rental buildings, in exchange for affordability, energy
            efficiency or accessibility commitments and an insurance premium. Whether this building qualifies, and on
            what terms, is covered in <Link href="/learn/cmhc-mli-select-explained">CMHC MLI Select explained</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'returns',
      title: 'Step 6: Measure cash-on-cash and total return',
      body: (
        <>
          <p>
            <strong>
              Once you know the loan, measure what your own cash earns: cash-on-cash return counts only cash flow,
              while total return also counts principal paydown.
            </strong>{' '}
            Using the DSCR-limited loan of $1,290,700 and $45,000 of closing costs, the buyer invests about $704,300.
          </p>
          <TableWrap>
            <table>
              <caption>Year 1 at 66% loan-to-value</caption>
              <tbody>
                <tr><td>NOI</td><td className="text-right">$107,040</td></tr>
                <tr><td>Mortgage payments</td><td className="text-right">−$89,200</td></tr>
                <tr><td><strong>Cash flow</strong></td><td className="text-right"><strong>$17,840</strong></td></tr>
                <tr><td>Cash-on-cash return ($17,840 ÷ $704,324)</td><td className="text-right">2.53%</td></tr>
                <tr><td>Principal paydown</td><td className="text-right">$27,192</td></tr>
                <tr><td><strong>Total return on cash, before appreciation</strong></td><td className="text-right"><strong>6.39%</strong></td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            A 2.5% cash yield is typical when Canadian cap rates sit below the mortgage constant (6.91% here). Decide
            whether paydown, rent growth and value-add make up the difference for you. See{' '}
            <Link href="/learn/rental-property-cash-flow-canada">rental property cash flow in Canada</Link> for how to
            judge thin cash flow.
          </p>
        </>
      ),
    },
    {
      id: 'value-add',
      title: 'Step 7: Price the value-add and rent upside',
      body: (
        <>
          <p>
            <strong>
              Value-add means raising NOI through higher rents, new income or lower costs, and every extra dollar of
              NOI is worth roughly NOI ÷ cap rate in building value.
            </strong>{' '}
            Suppose three units turn over in the first two years and re-rent $250 a month higher after light updates.
          </p>
          <p>
            That adds $9,000 a year of rent and, after vacancy and management, about $8,370 of NOI. At a 5.49% cap
            rate it adds about <strong>$152,500</strong> of value; using the more conservative GRM method (rent
            increase × GRM of 11.6) it adds about $104,500, or $34,800 per unit. DSCR on the existing loan rises from
            1.20 to 1.29, which can support a refinance later; see{' '}
            <Link href="/learn/brrrr-canada-cash-out-refinance">BRRRR and cash-out refinancing</Link>.
          </p>
          <p>
            Check rent rules before counting on upside. In Ontario, rent increases for sitting tenants in units first
            occupied on or before November 15, 2018 are capped by the annual guideline (2.1% for 2026), and the rent
            can reset only when a unit turns over. Other provinces have their own rules. PropStack’s rent optimization
            tool models target rent and cost unit by unit and shows monthly uplift and value added using GRM.
          </p>
        </>
      ),
    },
    {
      id: 'exit',
      title: 'Step 8: Plan the exit',
      body: (
        <>
          <p>
            <strong>
              Estimate what the building could sell or refinance for in five to ten years by applying a cap rate to
              future NOI, and test a higher exit cap rate than today’s.
            </strong>{' '}
            If rents and expenses both grow 2.5% a year, NOI reaches about $137,000 after ten years, and the loan
            balance falls to about $949,300.
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th>Exit cap rate</th><th className="text-right">Value</th><th className="text-right">Equity before selling costs</th></tr>
              </thead>
              <tbody>
                <tr><td>5.49% (same as today)</td><td className="text-right">$2,495,800</td><td className="text-right">$1,546,500</td></tr>
                <tr><td>6.00%</td><td className="text-right">$2,283,700</td><td className="text-right">$1,334,400</td></tr>
                <tr><td>6.50%</td><td className="text-right">$2,108,000</td><td className="text-right">$1,158,700</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            A one-point rise in cap rates erases about $388,000 of value even with ten years of NOI growth. Your exit
            can also be a refinance, a sale to fund a larger building, or holding indefinitely; the choice affects tax
            and risk. See <Link href="/learn/buy-and-hold-vs-brrrr-vs-flip">buy and hold vs. BRRRR vs. flip</Link> for
            how the strategies compare.
          </p>
        </>
      ),
    },
    {
      id: 'stress-tests',
      title: 'Step 9: Stress-test the deal',
      body: (
        <>
          <p>
            <strong>
              Before you offer, change the assumptions that can go wrong (vacancy, expenses and the mortgage rate at
              renewal) and confirm the building still covers its debt.
            </strong>{' '}
            Here is the 66% loan (DSCR 1.20 in the base case) under pressure:
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th>Scenario</th><th className="text-right">NOI</th><th className="text-right">DSCR</th></tr>
              </thead>
              <tbody>
                <tr><td>Base case</td><td className="text-right">$107,040</td><td className="text-right">1.20</td></tr>
                <tr><td>Vacancy 5%</td><td className="text-right">$103,680</td><td className="text-right">1.16</td></tr>
                <tr><td>Vacancy 8%</td><td className="text-right">$98,640</td><td className="text-right">1.11</td></tr>
                <tr><td>Expenses +10%</td><td className="text-right">$101,448</td><td className="text-right">1.14</td></tr>
                <tr><td>Renew at 5.9% in year 5, NOI flat</td><td className="text-right">$107,040</td><td className="text-right">1.11</td></tr>
                <tr><td>Renew at 5.9% in year 5, NOI +2.5%/yr</td><td className="text-right">$121,106</td><td className="text-right">1.25</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            The building stays above 1.00 in every case, which is what conservative loan sizing buys you. At 75%
            loan-to-value, where DSCR starts at 1.06, an 8% vacancy rate alone would push it below 1.00.
          </p>
          <p>
            PropStack runs a 10-year projection with Canadian semi-annual compounding and renewals, and you can save
            each scenario with your documents, photos and notes on the property. <Link href={TRY_URL}>Analyze a
            multiplex</Link> without an account.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'What is the first thing to check on a multiplex listing?',
      answer:
        'The rent roll. Confirm each unit’s actual rent, lease dates and arrears against leases and deposits, and compare rents with current market listings. Every later number, from NOI to the loan amount, depends on it.',
    },
    {
      question: 'What vacancy rate should I use for a multiplex in Canada?',
      answer:
        'Use at least 3% to 5% even if the building is full. Lenders typically apply a vacancy allowance in that range regardless of current occupancy, and your analysis should be at least as conservative as theirs.',
    },
    {
      question: 'How do lenders decide how much to lend on a multiplex?',
      answer:
        'On buildings with five or more units, lenders lend the lower of their loan-to-value limit and the loan the NOI can support at their minimum DSCR, often 1.20 to 1.30 on conventional loans. CMHC-insured programs use lower minimums.',
    },
    {
      question: 'What is a good cap rate for a multiplex in Canada?',
      answer:
        'It depends on the city. CBRE’s Q2 2026 survey put low-rise apartment cap rates at roughly 3.75% to 6%, lowest in Vancouver and Toronto and highest in Quebec City and the Prairies. Compare with recent local sales of similar buildings.',
    },
    {
      question: 'How do I value rent upside in a multiplex?',
      answer:
        'Estimate the extra annual NOI from higher rents, then divide by the market cap rate, or multiply the extra gross rent by the gross rent multiplier for a more conservative figure. Check provincial rent rules first, since increases for sitting tenants may be capped.',
    },
  ],
  sources: [
    {
      title: 'Canadian Cap Rates & Investment Insights, Q2 2026',
      publisher: 'CBRE (July 2026)',
      url: 'https://www.cbre.ca/insights/reports/canada-cap-rates-investment-insights-q2-2026',
    },
    {
      title: 'Multi-Unit Mortgage Loan Insurance Reference Guide',
      publisher: 'Canada Mortgage and Housing Corporation (CMHC)',
      url: 'https://assets.cmhc-schl.gc.ca/sf/project/cmhc/pdfs/content/en/reference-guide.pdf',
    },
    {
      title: 'MLI Select quick reference',
      publisher: 'Canada Mortgage and Housing Corporation (CMHC)',
      url: 'https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/mortgage-loan-insurance/multi-unit-insurance/mliselect/mli-select.pdf',
    },
    {
      title: 'Residential rent increases',
      publisher: 'Government of Ontario',
      url: 'https://www.ontario.ca/page/residential-rent-increases',
    },
  ],
  related: ['what-is-dscr', 'cap-rate-vs-cash-on-cash', 'what-is-noi'],
};
