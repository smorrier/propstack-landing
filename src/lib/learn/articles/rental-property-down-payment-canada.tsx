import Link from "next/link";
import { TRY_URL } from "@/lib/constants";
import { Formula, TableWrap } from '@/components/learn/blocks';
import { SEAN_MORRIER } from '../authors';
import type { LearnArticle } from '../types';

/*
 * 1–4 unit examples: duplex 900,000 not owner-occupied → 20% = 180,000.
 *   Owner-occupied duplex 900,000 → 5% × 500,000 + 10% × 400,000 = 25,000 + 40,000 = 65,000.
 *   Owner-occupied fourplex 1,200,000 → 10% = 120,000. Fourplex 1,600,000 (≥ 1.5M cap) → 20% = 320,000.
 * Same 8-unit example as what-is-dscr: price 1,950,000, NOI 107,040, 4.9% semi-annual compounding,
 * rate held constant across options for comparison. Max loan = PV of (NOI ÷ DSCR) at the amortization.
 *   Conventional 75% / 25 yr / 1.20: LTV loan 1,462,500; DSCR loan 1,290,676 (66.2%) → down 659,324 (33.8%).
 *   CMHC standard 85% / 40 yr / 1.20 (7+ units, 10+ yr term): LTV 1,657,500; DSCR 1,573,687 (80.7%)
 *     → down 376,313 (19.3%).
 *   MLI Select 100 pts 95% / 50 yr / 1.10: LTV 1,852,500; DSCR 1,827,777 (93.7%) → down 122,223 (6.3%).
 *   At 1.25 / 25 yr → 1,239,049 (63.5%).
 *   Premiums ignored here; with the premium financed inside the 1.10 cap, MLI Select 100 pts nets 1,740,657
 *   and the down payment is 209,343 (see cmhc-mli-select-explained).
 * Ontario LTT on 1,950,000 (not single-family): 275 + 1,950 + 2,250 + 2% × 1,550,000 = 35,475.
 * Closing costs 45,000 (as in cap-rate-vs-cash-on-cash) → conventional cash needed 704,324.
 */
export const downPaymentArticle: LearnArticle = {
  slug: 'rental-property-down-payment-canada',
  title: 'How Much Down Payment Do You Need for an Investment Property in Canada?',
  shortTitle: 'Investment property down payment',
  seoTitle: 'Investment Property Down Payment in Canada',
  description:
    'Canadian rentals need 20% down unless you live in one unit. See owner-occupied 2–4 unit rules, 5+ unit and CMHC options, and how DSCR raises your down payment.',
  summary: [
    'A 1–4 unit rental property you will not live in needs a down payment of at least 20% in Canada, because default insurance on non-owner-occupied homes requires 20% down.',
    'If you live in one of the units, an insured mortgage needs 5% on the first $500,000 and 10% above that for 1–2 units, or 10% for 3–4 units, on prices below $1.5 million.',
    'Buildings with 5 or more units are commercial: conventional lenders usually lend 65–75% of value, while CMHC-insured loans go up to 85%, and up to 95% under MLI Select.',
    'Lenders also cap the loan by DSCR, so on many Canadian deals the real down payment is higher than the loan-to-value limit suggests, before closing costs are added on top.',
  ],
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  author: SEAN_MORRIER,
  readingMinutes: 7,
  keywords: [
    'down payment investment property Canada',
    'rental property down payment',
    'minimum down payment rental property Canada',
    'owner-occupied fourplex down payment',
    'multiplex financing Canada',
    'CMHC multi-unit',
    'MLI Select',
  ],
  sections: [
    {
      id: 'short-answer',
      title: 'How much down payment do you need for a rental property?',
      body: (
        <>
          <p>
            <strong>
              In Canada, you need at least 20% down to buy a 1–4 unit rental property you will not live in. If you
              live in one of the units, you can put down as little as 5–10%.
            </strong>{' '}
            Buildings with five or more units follow commercial rules, where the minimum depends on the lender, the
            building’s income and whether the loan is CMHC-insured.
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th>Property and occupancy</th><th>Minimum down payment</th></tr>
              </thead>
              <tbody>
                <tr><td>1–4 units, not owner-occupied</td><td>20%</td></tr>
                <tr><td>1–2 units, owner-occupied, under $1.5M</td><td>5% of the first $500,000, 10% of the rest</td></tr>
                <tr><td>3–4 units, owner-occupied, under $1.5M</td><td>10%</td></tr>
                <tr><td>1–4 units, owner-occupied, $1.5M or more</td><td>20%</td></tr>
                <tr><td>5+ units, conventional</td><td>Usually 25–35%</td></tr>
                <tr><td>5+ units, CMHC-insured</td><td>15%; as low as 5% under MLI Select</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            These are minimums. As the rest of this guide shows, the building’s income often forces a bigger down
            payment, and closing costs always come on top.
          </p>
        </>
      ),
    },
    {
      id: 'non-owner-occupied',
      title: '1–4 unit rentals you won’t live in: 20% minimum',
      body: (
        <>
          <p>
            <strong>
              A house, duplex, triplex or fourplex bought purely as a rental needs at least 20% down, whatever the
              price.
            </strong>{' '}
            Federally regulated lenders must insure any home mortgage with less than 20% down, and since April 19,
            2010, government-backed mortgage insurance on non-owner-occupied properties has required a minimum 20%
            down payment. Without insurance available below that level, practically every lender sets 20% as the
            floor.
          </p>
          <p>
            For a $900,000 duplex, that is <strong>$180,000</strong>. Some lenders ask for more, for example 25–35%,
            if you already own several rentals, are self-employed, or are buying in a small market.
          </p>
          <p>
            At 20% down there is no insurance premium to pay, but the deal still has to qualify. Lenders count part of
            the rent toward your income and test your total debt, so a second or third rental can be limited by your
            personal debt ratios even when the building itself cash flows. Check the property’s{' '}
            <Link href="/learn/rental-property-cash-flow-canada">cash flow</Link> at 20% down before you assume more
            leverage will help.
          </p>
        </>
      ),
    },
    {
      id: 'owner-occupied',
      title: 'Living in one unit: 5% to 10% down on 2–4 units',
      body: (
        <>
          <p>
            <strong>
              If you live in one unit, a 2–4 unit property can be bought with an insured mortgage and a down payment
              of 5–10%, as long as the price is below $1.5 million.
            </strong>{' '}
            CMHC requires 5% of the first $500,000 and 10% of the remainder for 1–2 units, and 10% of the price for
            3–4 units. The $1.5 million limit took effect on December 15, 2024, up from $1 million.
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th>Owner-occupied example</th><th className="text-right">Minimum down</th></tr>
              </thead>
              <tbody>
                <tr><td>Duplex at $900,000</td><td className="text-right">$65,000 (7.2%)</td></tr>
                <tr><td>Fourplex at $1,200,000</td><td className="text-right">$120,000 (10%)</td></tr>
                <tr><td>Fourplex at $1,600,000</td><td className="text-right">$320,000 (20%)</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            Compared with the $180,000 needed on the same duplex as a pure rental, living in it cuts the down payment
            by $115,000. The trade-off is a mortgage insurance premium, which is added to the loan; the Financial Consumer
            Agency of Canada puts premiums between 0.6% and 4.5% of the mortgage, falling as your down payment rises. You must intend
            to live in the property, and in some provinces, including Ontario and Quebec, sales tax on the premium is
            due in cash at closing.
          </p>
        </>
      ),
    },
    {
      id: 'five-plus-conventional',
      title: '5+ unit buildings with conventional financing',
      body: (
        <>
          <p>
            <strong>
              For buildings with five or more units, conventional (uninsured) lenders usually lend 65–75% of value, so
              expect to put down 25–35%.
            </strong>{' '}
            These are commercial mortgages: the lender looks first at the building’s net operating income and second
            at you.
          </p>
          <p>
            Three things set the final amount:
          </p>
          <ul>
            <li>
              <strong>Loan-to-value:</strong> the lender’s maximum, often 75% for a stabilized apartment building with
              a strong borrower and lower for older or smaller-market properties.
            </li>
            <li>
              <strong>DSCR:</strong> most banks and credit unions want 1.20–1.30, measured on their own version of
              NOI. This is often the binding limit, as the example below shows.
            </li>
            <li>
              <strong>Your covenant:</strong> net worth, liquidity and experience operating rental buildings. Many
              lenders ask for a personal guarantee.
            </li>
          </ul>
          <p>
            Conventional loans usually have shorter amortizations, often 25 to 30 years, which raises the payment and
            makes the DSCR test harder to pass than on insured loans.
          </p>
        </>
      ),
    },
    {
      id: 'cmhc-insured',
      title: '5+ unit buildings with CMHC insurance and MLI Select',
      body: (
        <>
          <p>
            <strong>
              CMHC-insured multi-unit mortgages allow up to 85% loan-to-value on a purchase, a 15% down payment, and
              MLI Select can go up to 95%.
            </strong>{' '}
            In exchange, you pay an insurance premium and meet CMHC’s borrower rules.
          </p>
          <ul>
            <li>
              <strong>Standard multi-unit insurance:</strong> up to 85% of the purchase price or CMHC’s lending value,
              whichever is less, with amortizations of up to 40 years. Minimum DCR is 1.10 on a 5–6 unit purchase and
              1.20 to 1.30 on 7+ units, depending on the term.
            </li>
            <li>
              <strong>MLI Select:</strong> points for commitments on affordability, energy efficiency or
              accessibility. On existing buildings, 50 points allows up to 85% loan-to-value and 70 or more allows up
              to 95%, with amortizations of up to 50 years at 100 points.
            </li>
            <li>
              <strong>Borrower rules:</strong> net worth of at least 25% of the loan (minimum $100,000), and five
              years of experience managing similar buildings or a professional property manager.
            </li>
          </ul>
          <p>
            The points come with real obligations, such as keeping a share of units at affordable rents for at least
            10 years. See <Link href="/learn/cmhc-mli-select-explained">CMHC MLI Select explained</Link> for how the
            scoring works.
          </p>
        </>
      ),
    },
    {
      id: 'dscr-caps-the-loan',
      title: 'Why DSCR often decides your real down payment',
      body: (
        <>
          <p>
            <strong>
              Lenders lend the lower of their loan-to-value limit and the largest loan the building’s income can
              support at their minimum DSCR, so your down payment is whatever is left.
            </strong>
          </p>
          <Formula>Down payment = Price − lower of (LTV loan, DSCR loan)</Formula>
          <p>
            Here is an 8-unit building at <strong>$1,950,000</strong> with <strong>$107,040</strong> of NOI, using the
            same illustrative 4.9% rate for each option:
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr>
                  <th>Financing</th>
                  <th className="text-right">LTV limit</th>
                  <th className="text-right">DSCR limit</th>
                  <th className="text-right">Down payment</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Conventional, 25 yr, 1.20</td><td className="text-right">$1,462,500</td><td className="text-right">$1,290,676</td><td className="text-right">$659,324 (34%)</td></tr>
                <tr><td>CMHC standard, 40 yr, 1.20</td><td className="text-right">$1,657,500</td><td className="text-right">$1,573,687</td><td className="text-right">$376,313 (19%)</td></tr>
                <tr><td>MLI Select 100 pts, 50 yr, 1.10</td><td className="text-right">$1,852,500</td><td className="text-right">$1,827,777</td><td className="text-right">$122,223 (6%)</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            In every case DSCR, not loan-to-value, sets the loan. The conventional buyer needs $171,800 more than a 25%
            down payment. The insured rows leave out the CMHC premium: it is usually added to the loan, and the total
            must still pass the coverage test, so financing it raises the down payment (to about $209,000 at 100 MLI
            Select points). Affordability commitments can also lower rents and shrink the loan further. Our{' '}
            <Link href="/learn/what-is-dscr">DSCR guide</Link> shows the calculation step by step.
          </p>
        </>
      ),
    },
    {
      id: 'closing-costs',
      title: 'Closing costs come on top of the down payment',
      body: (
        <>
          <p>
            <strong>
              Closing costs are paid in cash on top of your down payment, and on a Canadian rental they are often 2–4%
              of the price.
            </strong>{' '}
            Lenders will not fold them into the mortgage, so budget for them from day one.
          </p>
          <ul>
            <li>
              <strong>Land transfer tax</strong>, usually the largest item. Ontario’s provincial tax on the $1,950,000
              building is $35,475, and buyers in Toronto pay a municipal land transfer tax as well.
            </li>
            <li>
              <strong>Legal fees and title insurance.</strong>
            </li>
            <li>
              <strong>Appraisal, building inspection and, for larger buildings, an environmental report.</strong>
            </li>
            <li>
              <strong>Lender, broker and CMHC application fees</strong>, plus sales tax on the insurance premium in
              some provinces.
            </li>
          </ul>
          <p>
            For the 8-unit building, closing costs of about $45,000 bring the conventional buyer’s total cash to
            roughly <strong>$704,000</strong>. Add money for upfront repairs and a cash reserve, and your
            cash-on-cash return should be measured against that full amount, as explained in{' '}
            <Link href="/learn/cap-rate-vs-cash-on-cash">cap rate vs. cash-on-cash return</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'down-payment-in-propstack',
      title: 'Testing down payments in PropStack',
      body: (
        <>
          <p>
            PropStack lets you save scenarios for the same property with different down payments, rates and
            amortizations, and compare their cash flow, cash-on-cash return and DSCR side by side. DSCR is checked
            for every year of a 10-year projection, and the “price that works” figure solves for the purchase price
            that reaches a 1.20 DSCR, a useful anchor when the down payment the lender needs is more than you planned.
          </p>
          <p>
            <Link href={TRY_URL}>Paste a listing link or enter a deal</Link> to try it, no account needed.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'Can I buy a rental property with 5% down in Canada?',
      answer:
        'Only if you live in it. A 1–2 unit home you occupy can be bought with 5% on the first $500,000 and 10% above that, under $1.5 million. A rental you will not live in needs at least 20% down.',
    },
    {
      question: 'What is the minimum down payment on an owner-occupied fourplex?',
      answer:
        'For a 3–4 unit property where you live in one unit, the minimum is 10% of the price if it is below $1.5 million, with mortgage loan insurance. At $1.5 million or more, insurance is not available and the minimum is 20%.',
    },
    {
      question: 'Do I need mortgage insurance on a rental with 20% down?',
      answer:
        'No. Mortgage loan insurance is required when the down payment is under 20%, so a 1–4 unit rental with 20% down is usually uninsured.',
    },
    {
      question: 'Can I borrow the down payment for an investment property?',
      answer:
        'Many investors use a home equity line of credit on another property. Conventional lenders often accept it, but they count the line’s payment in your debt ratios, and the building’s cash flow has to carry the extra debt.',
    },
    {
      question: 'How much down payment do I need for an apartment building?',
      answer:
        'Conventional lenders usually want 25–35% down on 5+ unit buildings. CMHC insurance allows 15% down, or as little as 5% under MLI Select, but the DSCR test often raises the real figure.',
    },
  ],
  sources: [
    {
      title: 'How much you need for a down payment',
      publisher: 'Financial Consumer Agency of Canada',
      url: 'https://www.canada.ca/en/financial-consumer-agency/services/mortgages/down-payment.html',
    },
    {
      title: 'Government announces mortgage reform details to ensure Canadians can access lower monthly mortgage payments by December 15',
      publisher: 'Department of Finance Canada (September 2024)',
      url: 'https://www.canada.ca/en/department-finance/news/2024/09/government-announces-mortgage-reform-details-to-ensure-canadians-can-access-lower-monthly-mortgage-payments-by-december-15.html',
    },
    {
      title: 'Government of Canada takes action to strengthen housing financing (2010 measures)',
      publisher: 'Government of Canada',
      url: 'https://www.canada.ca/en/news/archive/2011/01/government-canada-takes-action-strengthen-housing-financing.html',
    },
    {
      title: 'CMHC Purchase: homeowner mortgage loan insurance',
      publisher: 'Canada Mortgage and Housing Corporation (CMHC)',
      url: 'https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/purchase',
    },
    {
      title: 'Multi-Unit Mortgage Loan Insurance Reference Guide',
      publisher: 'Canada Mortgage and Housing Corporation (CMHC)',
      url: 'https://assets.cmhc-schl.gc.ca/sf/project/cmhc/pdfs/content/en/reference-guide.pdf',
    },
    {
      title: 'MLI Select fact sheet',
      publisher: 'Canada Mortgage and Housing Corporation (CMHC, October 2025)',
      url: 'https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/mortgage-loan-insurance/multi-unit-insurance/mliselect/mli-select.pdf',
    },
    {
      title: 'Calculating land transfer tax',
      publisher: 'Government of Ontario',
      url: 'https://www.ontario.ca/document/land-transfer-tax/calculating-land-transfer-tax',
    },
  ],
  related: ['what-is-dscr', 'cmhc-mli-select-explained', 'rental-property-cash-flow-canada'],
};
