import Link from "next/link";
import { TRY_URL } from "@/lib/constants";
import { Formula, TableWrap } from '@/components/learn/blocks';
import { SEAN_MORRIER } from '../authors';
import type { LearnArticle } from '../types';

/*
 * One dated duplex, three plans. 4.9% / 25 yr, semi-annual compounding (mortgage constant 6.911%).
 * Purchase 560,000, 80% loan 448,000 → 2,580.15/mo, 30,962/yr. Down 112,000. Closing costs 11,500.
 * Opex (tenants pay own hydro): taxes 5,000, insurance 2,600, maintenance 2,200, other 1,500 = 11,300.
 * BUY & HOLD: light work 10,000. Rent 2 × 1,850 × 12 = 44,400; 3% vacancy → EGI 43,068; NOI 31,768 (cap 5.67%).
 *   Cash in 133,500. CF 806/yr (67/mo), CoC 0.60%. Y1 paydown 9,439 → (806 + 9,439) / 133,500 = 7.7%.
 *   Equity on day one 560,000 − 448,000 = 112,000.
 * BRRRR: reno 80,000, refinance in month 5. Holding 5 mo = payments 12,901 + taxes 2,083 + vacant insurance
 *   1,500 (3,600/yr) + utilities 1,500 = 17,984. Cash in 112,000 + 11,500 + 80,000 + 17,984 = 221,484.
 *   ARV 760,000; new loan 80% = 608,000. Payoff after 5 payments 444,123. Penalty 3 mo interest
 *   on the balance 444,123 × 4.9% / 4 = 5,441. Refi costs 2,500. Cash back 608,000 − 444,123 − 5,441 − 2,500
 *   = 155,936.
 *   Left in deal 65,548 (70.4% recovered). Rent 2 × 2,350 × 12 = 56,400; EGI 54,708; NOI 43,408.
 *   New DS 42,020 → CF 1,388/yr, NOI/DS 1.03, CoC on cash left 2.12%. Equity 760,000 − 608,000 = 152,000.
 *   Y1 paydown on new loan 12,809 → (1,388 + 12,809) / 65,548 = 21.7%.
 * FLIP: same purchase and reno, sold at 760,000 in month 6. Holding 6 mo = payments 15,481 + taxes 2,500
 *   + insurance 1,800 + utilities 1,800 = 21,581. Cash in 225,081. Selling costs 4.5% = 34,200.
 *   Payoff 443,338; penalty 443,338 × 4.9% / 4 = 5,431. Proceeds 760,000 − 34,200 − 5,431 − 443,338 = 277,031.
 *   Profit 51,950 (23.1% of cash in, pre-tax). At a 43% marginal rate (as in fix-and-flip) ≈ 29,612 after tax.
 *   Sale 5% lower (722,000): selling 32,490 → profit 15,660. 70% rule max price 0.7 × 760,000 − 80,000 = 452,000.
 */
export const strategyComparisonArticle: LearnArticle = {
  slug: 'buy-and-hold-vs-brrrr-vs-flip',
  title: 'Buy and Hold vs. BRRRR vs. Flip: One Canadian Property, Three Strategies',
  shortTitle: 'Buy and hold vs. BRRRR vs. flip',
  seoTitle: 'Buy and Hold vs. BRRRR vs. Flip: Which Wins?',
  description:
    'We run one Canadian duplex through buy and hold, BRRRR and a flip, then compare cash needed, cash flow, profit, capital recovered, risk and tax side by side.',
  summary: [
    'Buy and hold needs the least cash and work, BRRRR recycles most of your cash into the next deal, and a flip turns the work into one lump of taxable profit.',
    'In our duplex example, buy and hold ties up $133,500, BRRRR leaves $65,500 in the deal after refinancing, and the flip returns about $52,000 of pre-tax profit in six months.',
    'Flip profits in Canada are generally taxed as business income, and properties sold within 365 days are deemed business income under the federal flipping rule.',
    'The best strategy depends on your goal: steady equity growth, scaling with limited cash, or a near-term cash return you are prepared to pay full tax on.',
  ],
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  author: SEAN_MORRIER,
  readingMinutes: 8,
  keywords: [
    'buy and hold vs BRRRR',
    'BRRRR vs flip',
    'buy and hold vs flip',
    'real estate investing strategies Canada',
    'BRRRR Canada',
    'house flipping tax Canada',
    'cash-out refinance',
  ],
  sections: [
    {
      id: 'short-answer',
      title: 'Which strategy is best?',
      body: (
        <>
          <p>
            <strong>
              No strategy wins every deal: buy and hold suits investors who want long-term equity with the least work,
              BRRRR suits investors who want to reuse their cash, and flipping suits investors who want a one-time
              profit and accept higher risk and tax.
            </strong>{' '}
            The right answer comes from running the same property through all three and comparing the results with
            your goal, your cash and your time.
          </p>
          <ul>
            <li>
              <strong>Buy and hold:</strong> buy a property that already works, rent it out and keep it for years.
            </li>
            <li>
              <strong>BRRRR</strong> (buy, renovate, rent, refinance, repeat): buy below value, renovate, rent at the
              higher rent, then refinance to pull most of your cash back out. See{' '}
              <Link href="/learn/brrrr-canada-cash-out-refinance">BRRRR in Canada</Link> for the full process.
            </li>
            <li>
              <strong>Fix and flip:</strong> buy, renovate and sell within months. See{' '}
              <Link href="/learn/fix-and-flip-profit-calculator">how to calculate flip profit</Link>.
            </li>
          </ul>
          <p>
            The rest of this guide runs one property through each plan with the same purchase price, rate and
            costs, so the differences come from the strategy alone.
          </p>
        </>
      ),
    },
    {
      id: 'the-property',
      title: 'The example: one dated duplex',
      body: (
        <>
          <p>
            <strong>
              The example is a dated side-by-side duplex listed at $560,000, with two vacant units that would rent for
              $1,850 each as they are or $2,350 each after an $80,000 renovation.
            </strong>{' '}
            Comparable renovated duplexes nearby sell for about <strong>$760,000</strong>, which is the after-repair
            value (ARV).
          </p>
          <p>
            Every plan uses the same purchase financing: 20% down ($112,000) and a $448,000 mortgage at an
            illustrative 4.9% over 25 years, with Canadian semi-annual compounding. That is $2,580 a month, or $30,962
            a year. Closing costs (land transfer tax, legal, inspection) are $11,500. Tenants pay their own hydro, so
            the owner’s operating expenses are $11,300 a year: property taxes $5,000, insurance $2,600, maintenance
            $2,200 and other costs $1,500.
          </p>
          <p>
            Lenders generally need at least 20% down on a rental you won’t live in; see{' '}
            <Link href="/learn/rental-property-down-payment-canada">rental property down payments in Canada</Link>.
            Renovation is paid in cash. While the units are empty, the owner also pays utilities and vacant-home
            insurance.
          </p>
        </>
      ),
    },
    {
      id: 'buy-and-hold',
      title: 'Plan 1: buy and hold',
      body: (
        <>
          <p>
            <strong>
              As a buy and hold, the duplex needs $133,500 of cash and roughly breaks even: about $800 a year of cash
              flow plus $9,400 of mortgage paydown in year one.
            </strong>{' '}
            The owner spends $10,000 on paint and flooring and rents both units at $1,850.
          </p>
          <TableWrap>
            <table>
              <caption>Buy and hold, year 1</caption>
              <tbody>
                <tr><td>Gross rent (2 × $1,850 × 12)</td><td className="text-right">$44,400</td></tr>
                <tr><td>Vacancy (3%)</td><td className="text-right">−$1,332</td></tr>
                <tr><td>Operating expenses</td><td className="text-right">−$11,300</td></tr>
                <tr><td><strong>Net operating income</strong></td><td className="text-right"><strong>$31,768</strong></td></tr>
                <tr><td>Mortgage payments</td><td className="text-right">−$30,962</td></tr>
                <tr><td><strong>Cash flow</strong></td><td className="text-right"><strong>$806</strong></td></tr>
                <tr><td>Cash invested (down payment, closing, light work)</td><td className="text-right">$133,500</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            Cash-on-cash return is only 0.6%, but cash flow plus principal paydown is 7.7% of the cash invested before
            any appreciation. That pattern is typical in Canada, where cap rates often sit below the mortgage
            constant; see <Link href="/learn/cap-rate-vs-cash-on-cash">cap rate vs. cash-on-cash return</Link> and{' '}
            <Link href="/learn/rental-property-cash-flow-canada">rental property cash flow</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'brrrr',
      title: 'Plan 2: BRRRR',
      body: (
        <>
          <p>
            <strong>
              As a BRRRR, the duplex takes $221,500 up front, but a refinance at 80% of the $760,000 value returns about
              $155,900, leaving $65,500 in the deal and $152,000 of equity.
            </strong>{' '}
            The renovation takes four months and the refinance closes in month five.
          </p>
          <TableWrap>
            <table>
              <caption>BRRRR, purchase to refinance</caption>
              <tbody>
                <tr><td>Down payment + closing + renovation</td><td className="text-right">$203,500</td></tr>
                <tr><td>Holding costs, 5 months (mortgage, tax, insurance, utilities)</td><td className="text-right">$17,984</td></tr>
                <tr><td><strong>Total cash in</strong></td><td className="text-right"><strong>$221,484</strong></td></tr>
                <tr><td>New mortgage (80% of $760,000)</td><td className="text-right">$608,000</td></tr>
                <tr><td>Pay off first mortgage</td><td className="text-right">−$444,123</td></tr>
                <tr><td>Prepayment penalty (3 months’ interest) and refinance fees</td><td className="text-right">−$7,941</td></tr>
                <tr><td><strong>Cash back</strong></td><td className="text-right"><strong>$155,936</strong></td></tr>
                <tr><td><strong>Cash left in the deal</strong></td><td className="text-right"><strong>$65,548</strong></td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            With rents at $2,350, NOI rises to $43,408, but the bigger loan costs $42,020 a year, so cash flow is about
            $1,400 a year. Uninsured mortgages in Canada are capped at 80% of value, and breaking a fixed-rate mortgage
            early usually costs the higher of three months’ interest and the interest rate differential, so an open or
            portable first mortgage is worth arranging before you buy.
          </p>
        </>
      ),
    },
    {
      id: 'flip',
      title: 'Plan 3: fix and flip',
      body: (
        <>
          <p>
            <strong>
              As a flip, the same duplex earns about $52,000 before tax on $225,100 of cash in six months, a 23%
              return, but the margin is thin enough that a 5% lower sale price cuts profit to about $15,700.
            </strong>{' '}
            The renovation matches the BRRRR plan, and the property sells at $760,000 in month six.
          </p>
          <Formula>Flip profit = Sale price − selling costs − purchase − closing − renovation − holding costs</Formula>
          <p>
            Selling costs (commission and legal) at 4.5% are $34,200, the mortgage penalty is $5,431, and six months
            of holding costs are $21,581, of which $4,662 is principal you get back at closing. After paying off the
            $443,338 balance, the sale returns $277,031 against $225,081 of cash put in.
          </p>
          <p>
            At $560,000 the duplex fails the 70% rule (pay no more than 70% of ARV minus renovation, here $452,000),
            which is why its profit is so sensitive to the sale price. Many flippers also use private loans: our{' '}
            <Link href="/learn/fix-and-flip-profit-calculator">flip profit guide</Link> runs a similar $560,000
            purchase at 9% interest with full Ontario selling costs, and profit falls to about $37,700.
          </p>
        </>
      ),
    },
    {
      id: 'side-by-side',
      title: 'Side-by-side comparison',
      body: (
        <>
          <p>
            <strong>
              Side by side, BRRRR builds the most equity per dollar left in the deal, the flip produces the most cash
              soonest, and buy and hold needs the least cash and carries the least execution risk.
            </strong>
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th></th><th>Buy and hold</th><th>BRRRR</th><th>Flip</th></tr>
              </thead>
              <tbody>
                <tr><td>Cash needed up front</td><td>$133,500</td><td>$221,500</td><td>$225,100</td></tr>
                <tr><td>Cash left in deal</td><td>$133,500</td><td>$65,500</td><td>$0</td></tr>
                <tr><td>Year-1 cash flow</td><td>$806</td><td>$1,388 (after refi)</td><td>None (sold)</td></tr>
                <tr><td>Profit or equity</td><td>$112,000 equity</td><td>$152,000 equity</td><td>$52,000 profit, pre-tax</td></tr>
                <tr><td>Capital recovered</td><td>0% until sale or refinance</td><td>70% at month 5</td><td>100% plus profit at month 6</td></tr>
                <tr><td>Year-1 return on cash left in</td><td>7.7% (with paydown)</td><td>21.7% (with paydown)</td><td>23% in six months</td></tr>
                <tr><td>Main risks</td><td>Thin cash flow, rate at renewal</td><td>Budget, appraisal, refinance terms</td><td>Budget, timeline, sale price</td></tr>
                <tr><td>Tax (high level)</td><td>Rental income yearly; capital gain on sale</td><td>Same as buy and hold; refinance cash is a loan</td><td>Business income, fully taxable</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            BRRRR’s high return on cash comes from leaving little cash in, not from strong cash flow: NOI covers the
            new mortgage only 1.03 times. If the appraisal comes in low or the lender limits the refinance, more cash
            stays in and the return falls.
          </p>
        </>
      ),
    },
    {
      id: 'tax',
      title: 'How each strategy is taxed in Canada',
      body: (
        <>
          <p>
            <strong>
              Rental profits are taxed each year as income, a long-term rental sale is usually a capital gain with
              half the gain taxable, and flip profits are generally fully taxable business income.
            </strong>{' '}
            This is general information, not tax advice; speak with an accountant before you act.
          </p>
          <ul>
            <li>
              <strong>Buy and hold and BRRRR:</strong> net rental income is added to your income each year, and
              mortgage interest is deductible when the money is used to buy or improve the rental. Any capital cost
              allowance claimed may be recaptured on sale. The capital gains inclusion rate remains one-half; the
              proposed increase was cancelled in March 2025.
            </li>
            <li>
              <strong>BRRRR refinance:</strong> cash-out proceeds are a loan, not income. Interest on them is
              deductible only if the money is used to earn income, such as buying the next rental.
            </li>
            <li>
              <strong>Flip:</strong> the CRA treats profit from buying to resell as business income, and since January
              1, 2023, residential property held under 365 days is deemed a flip, with limited life-event exceptions.
              B.C. adds its own flipping tax; our flip profit guide has the details.
            </li>
          </ul>
          <p>
            In our example, at a 43% marginal rate the $52,000 flip profit becomes about $29,600 after tax.
          </p>
        </>
      ),
    },
    {
      id: 'which-fits',
      title: 'Which strategy fits your goal?',
      body: (
        <>
          <p>
            <strong>
              Choose the strategy that matches what you need from the deal: buy and hold for steady, low-effort equity,
              BRRRR for scaling with limited cash, and flipping for a near-term lump sum.
            </strong>
          </p>
          <ul>
            <li>
              <strong>You have cash, little time and a long horizon:</strong> buy and hold. Focus on a building that
              covers its costs with realistic vacancy and expense assumptions.
            </li>
            <li>
              <strong>You want to buy a property every year or two with the same pool of cash:</strong> BRRRR, if you can
              find properties below value and manage a renovation. Check your lender’s refinance rules before you
              buy.
            </li>
            <li>
              <strong>You want cash back within a year and can absorb a loss:</strong> a flip, but only at a price that
              leaves a margin for overruns. Plan for full business-income tax.
            </li>
          </ul>
          <p>
            PropStack’s strategy view runs buy and hold, flip and buy-optimize-refinance on the same deal side by side
            and recommends a best path based on return and capital efficiency. You can change the renovation budget,
            after-repair value or refinance terms and watch all three update. <Link href={TRY_URL}>Try it on a
            listing</Link>, no account needed.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'Is BRRRR better than buy and hold?',
      answer:
        'Not automatically. BRRRR can leave much less cash in a deal, which raises your return on cash and lets you buy again sooner, but it adds renovation, appraisal and refinancing risk. Buy and hold needs no renovation and is simpler to execute.',
    },
    {
      question: 'How are house flipping profits taxed in Canada?',
      answer:
        'The CRA generally treats profit from buying a property to resell it as business income, which is fully taxable at your marginal rate. Since January 1, 2023, residential property held for less than 365 days is deemed to be a flip unless a listed life-event exception applies.',
    },
    {
      question: 'How much can I refinance a rental property for in Canada?',
      answer:
        'Uninsured mortgages are capped at 80% of the property’s value, so a BRRRR refinance can usually pull out up to 80% of the appraised value minus what you still owe. Some lenders limit refinances soon after purchase, so confirm their rules before you buy.',
    },
    {
      question: 'Do I pay tax on money from a cash-out refinance?',
      answer:
        'No. Refinance proceeds are a loan, not income. Interest on the new borrowing is deductible against rental income only to the extent the money is used to earn income, such as buying or improving a rental.',
    },
    {
      question: 'What is the 70% rule for flipping?',
      answer:
        'It is a screening rule of thumb: pay no more than 70% of the after-repair value minus renovation costs. The remaining 30% is meant to cover closing, holding and selling costs and leave a profit. It is a starting point, not a substitute for a full budget.',
    },
  ],
  sources: [
    {
      title: 'Tax Measures: Supplementary Information, Budget 2022 (residential property flipping rule)',
      publisher: 'Department of Finance Canada',
      url: 'https://www.budget.canada.ca/2022/report-rapport/tm-mf-en.html',
    },
    {
      title: 'Prime Minister Carney cancels proposed capital gains tax increase',
      publisher: 'Prime Minister of Canada (March 21, 2025)',
      url: 'https://www.pm.gc.ca/en/news/news-releases/2025/03/21/prime-minister-mark-carney-cancels-proposed-capital-gains-tax-increase',
    },
    {
      title: 'T4036 Rental Income guide',
      publisher: 'Canada Revenue Agency',
      url: 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4036/rental-income.html',
    },
    {
      title: 'BC home flipping tax',
      publisher: 'Government of British Columbia',
      url: 'https://www.gov.bc.ca/gov/content/taxes/income-taxes/bc-home-flipping-tax',
    },
    {
      title: 'GST/HST and home construction',
      publisher: 'Canada Revenue Agency',
      url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-home-construction.html',
    },
    {
      title: 'Mortgage fees: Prepayment penalties',
      publisher: 'Financial Consumer Agency of Canada',
      url: 'https://www.canada.ca/en/financial-consumer-agency/services/mortgages/reduce-prepayment-penalties.html',
    },
    {
      title: 'Borrowing money using home equity',
      publisher: 'Financial Consumer Agency of Canada',
      url: 'https://www.canada.ca/en/financial-consumer-agency/services/mortgages/borrow-home-equity.html',
    },
  ],
  related: ['brrrr-canada-cash-out-refinance', 'fix-and-flip-profit-calculator', 'rental-property-cash-flow-canada'],
};
