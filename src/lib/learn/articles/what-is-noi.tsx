import Link from "next/link";
import { TRY_URL } from "@/lib/constants";
import { Formula, TableWrap } from '@/components/learn/blocks';
import { SEAN_MORRIER } from '../authors';
import type { LearnArticle } from '../types';

/*
 * Same 8-unit example as what-is-dscr: 8 × $1,750 × 12 = GPR 168,000; 3% vacancy 5,040 → EGI 162,960.
 * Opex 14,000 + 9,600 + 12,000 + 9,600 + 6,720 + 4,000 = 55,920 (34.3% of EGI) → NOI 107,040.
 * Value at 5.5% cap: 107,040 ÷ 0.055 = 1,946,182 (~$1.95M). $1 of NOI at 5.5% ≈ $18.18 of value.
 * Parking $100/unit/mo → 9,600/yr → ÷ 0.055 = 174,545.
 * Lender view (same as vacancy-and-operating-expense-assumptions): 5% vacancy → EGI 159,600; management
 * 4% of EGI 6,384; reserve $250/unit 2,000 → opex 57,584 → NOI 102,016 (−5,024); DSCR on 101,075 → 1.009.
 * Mortgage payments: 12 × 8,422.91 = 101,075 → cash flow 5,965.
 */
export const noiArticle: LearnArticle = {
  slug: 'what-is-noi',
  title: 'What Is NOI? How to Calculate Net Operating Income on a Rental Property',
  shortTitle: 'What is NOI?',
  seoTitle: 'Net Operating Income (NOI): How to Calculate',
  description:
    'NOI is rental income minus vacancy and operating expenses, before the mortgage. Learn the formula, what to include and exclude, and a Canadian 8-unit example.',
  summary: [
    'Net operating income (NOI) is a rental property’s income after vacancy and operating expenses, but before mortgage payments and income tax.',
    'The formula is gross potential rent, minus vacancy and bad debt, plus other income, minus operating expenses.',
    'NOI leaves out mortgage payments, depreciation and one-time capital spending, so the same building has the same NOI whoever owns it.',
    'NOI drives cap rate, DSCR and value: in a 5.5% cap rate market, every extra dollar of annual NOI adds about $18 of building value.',
  ],
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  author: SEAN_MORRIER,
  readingMinutes: 7,
  keywords: [
    'NOI',
    'net operating income',
    'how to calculate NOI',
    'NOI formula',
    'net operating income rental property',
    'operating expenses rental property Canada',
  ],
  sections: [
    {
      id: 'what-is-noi',
      title: 'What is net operating income?',
      body: (
        <>
          <p>
            <strong>
              Net operating income (NOI) is the money a rental property earns in a year after vacancy and operating
              expenses, before mortgage payments and income tax.
            </strong>{' '}
            It measures how well the building itself performs as a business, separate from how the owner financed it
            or what tax bracket they are in.
          </p>
          <p>
            That separation is what makes NOI so useful. Two investors can buy the same building, one with cash and one
            with a 75% mortgage, and the building’s NOI is identical for both. Their cash flow is very different, but
            the property’s ability to produce income is the same.
          </p>
          <p>
            Almost every serious rental metric starts from NOI. Cap rate is NOI divided by price. DSCR is NOI divided
            by mortgage payments. Appraisers and brokers value apartment buildings by dividing NOI by a market cap rate.
            If your NOI is wrong, every number built on it is wrong too.
          </p>
        </>
      ),
    },
    {
      id: 'formula',
      title: 'The NOI formula',
      body: (
        <>
          <p>
            <strong>
              To calculate NOI, start with the rent every unit could earn in a year, subtract vacancy, add other
              income, then subtract operating expenses.
            </strong>
          </p>
          <Formula>NOI = Gross potential rent − Vacancy and bad debt + Other income − Operating expenses</Formula>
          <ol>
            <li>
              <strong>Gross potential rent (GPR):</strong> every unit at its current or market rent for 12 months, as
              if it were always occupied.
            </li>
            <li>
              <strong>Vacancy and bad debt:</strong> an allowance for empty months and unpaid rent, usually a
              percentage of GPR.
            </li>
            <li>
              <strong>Other income:</strong> parking, laundry, storage lockers and similar recurring income. GPR minus
              vacancy plus other income is <strong>effective gross income (EGI)</strong>.
            </li>
            <li>
              <strong>Operating expenses:</strong> the recurring costs of running the building, covered in the next
              section.
            </li>
          </ol>
          <p>
            Work in annual figures. Monthly NOI is fine for a quick check, but property taxes, insurance and repairs are
            billed unevenly through the year, and lenders and appraisers always use 12 months.
          </p>
        </>
      ),
    },
    {
      id: 'included',
      title: 'What counts as an operating expense',
      body: (
        <>
          <p>
            <strong>
              Operating expenses are the recurring costs of keeping a building rented and running, paid no matter how
              the property is financed.
            </strong>{' '}
            For a Canadian multiplex, the usual list is:
          </p>
          <ul>
            <li><strong>Property taxes</strong>, at the amount the new owner will pay, not the seller’s.</li>
            <li><strong>Insurance</strong> for the building and liability.</li>
            <li><strong>Utilities the owner pays:</strong> common-area hydro, water and sewer, and heat if included in rent.</li>
            <li><strong>Repairs and maintenance:</strong> routine fixes, unit turnovers, pest control.</li>
            <li><strong>Property management</strong>, even if you manage the building yourself.</li>
            <li><strong>Snow removal, landscaping, cleaning</strong> and garbage collection.</li>
            <li><strong>Administration:</strong> accounting, legal, advertising, licences and permits.</li>
          </ul>
          <p>
            Many investors and lenders also deduct a <strong>replacement reserve</strong>: an annual amount set aside
            for roofs, boilers and appliances that wear out over time. It is not a bill you pay each year, but leaving it
            out flatters NOI for older buildings.
          </p>
        </>
      ),
    },
    {
      id: 'excluded',
      title: 'What NOI leaves out',
      body: (
        <>
          <p>
            <strong>
              NOI does not deduct mortgage payments, income tax, depreciation or one-time capital improvements.
            </strong>{' '}
            Each of these depends on the owner rather than the building, so including them would make NOI different for
            every buyer.
          </p>
          <ul>
            <li>
              <strong>Mortgage principal and interest</strong> are deducted after NOI to get cash flow.
            </li>
            <li>
              <strong>Capital cost allowance</strong> (Canada’s tax depreciation) is a tax calculation, not a cash cost.
            </li>
            <li>
              <strong>Capital expenditures</strong> such as a new roof, a full unit renovation or new windows are
              investments, not operating costs. The CRA draws the same line between current and capital expenses for tax
              purposes.
            </li>
            <li>
              <strong>Income tax</strong> depends on the owner’s situation and structure.
            </li>
          </ul>
          <p>
            A common mistake is subtracting the mortgage and calling the result NOI. That figure is cash flow, a
            different and smaller number. See{' '}
            <Link href="/learn/rental-property-cash-flow-canada">how to calculate rental property cash flow</Link> for
            the steps after NOI.
          </p>
        </>
      ),
    },
    {
      id: 'example',
      title: 'NOI example: an 8-unit building',
      body: (
        <>
          <p>
            Here is an 8-unit building listed at <strong>$1,950,000</strong>, with every unit renting for $1,750 a month
            and a 3% vacancy allowance:
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
              </tbody>
            </table>
          </TableWrap>
          <p>
            Operating expenses total $55,920, or 34.3% of effective gross income. The NOI of <strong>$107,040</strong>{' '}
            gives a cap rate of 5.49% on the asking price. With a 75% mortgage at 4.9% over 25 years ($101,075 a year),
            cash flow is only $5,965 and the{' '}
            <Link href="/learn/what-is-dscr">debt service coverage ratio</Link> is 1.06.
          </p>
        </>
      ),
    },
    {
      id: 'noi-and-value',
      title: 'Why NOI sets the value of a building',
      body: (
        <>
          <p>
            <strong>
              Apartment buildings are valued by dividing NOI by a market cap rate, so every dollar of NOI is worth many
              dollars of value.
            </strong>{' '}
            In a market where similar buildings trade at a 5.5% cap rate, the 8-unit building’s $107,040 of NOI
            supports a value of about $1,946,000.
          </p>
          <Formula>Value = NOI ÷ Market cap rate</Formula>
          <p>
            At 5.5%, each extra dollar of annual NOI adds about <strong>$18</strong> of value. Charging $100 a month for
            parking on all eight units adds $9,600 of NOI and roughly $174,500 of value, if buyers in that market would
            pay for it. The same works in reverse: a $5,000 jump in insurance takes about $91,000 off the value.
          </p>
          <p>
            This is why value-add investors focus on NOI rather than rent alone. Raising rent helps only if expenses
            don’t rise as fast. For how price and NOI combine, see{' '}
            <Link href="/learn/cap-rate-vs-cash-on-cash">cap rate vs. cash-on-cash return</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'lender-noi',
      title: 'Your NOI vs. the lender’s NOI',
      body: (
        <>
          <p>
            <strong>
              Lenders recalculate NOI with their own assumptions, and their figure is usually lower than the one in a
              listing.
            </strong>{' '}
            Listings often show actual rents with no vacancy, no management fee and the seller’s old property taxes.
          </p>
          <p>
            A lender underwriting the same 8-unit building might use 5% vacancy instead of 3%, charge management on
            effective gross income and deduct a replacement reserve of $250 per unit. That lowers NOI from $107,040 to{' '}
            <strong>$102,016</strong>, and DSCR on the 75% loan falls to 1.01: the rent barely covers the mortgage. CMHC’s multi-unit underwriting similarly applies
            its own vacancy, expense and reserve standards rather than the seller’s figures.
          </p>
          <p>
            Before making an offer, rebuild NOI yourself: use market rents for units you can’t verify, a realistic
            vacancy rate, a management fee, the tax bill after a sale, and a reserve. If the deal still works on that
            NOI, it will usually survive the lender’s review.
          </p>
        </>
      ),
    },
    {
      id: 'noi-in-propstack',
      title: 'Calculating NOI in PropStack',
      body: (
        <>
          <p>
            PropStack builds NOI from your rents, vacancy rate and an itemized expense list, then carries it into cap rate,
            cash-on-cash return and DSCR for every year of a 10-year projection. Expenses start from regional
            benchmarks and every line can be adjusted, so you can test a lender-style NOI next to your own in separate
            scenarios.
          </p>
          <p>
            <Link href={TRY_URL}>Try it on a listing</Link>, no account needed.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'Does NOI include the mortgage payment?',
      answer:
        'No. NOI is calculated before mortgage principal and interest. Subtracting the mortgage from NOI gives pre-tax cash flow, which is a different number.',
    },
    {
      question: 'Is NOI the same as profit?',
      answer:
        'No. NOI is income before financing, income tax, depreciation and capital spending. Your profit or cash flow is what remains after those, so it is almost always lower than NOI on a financed property.',
    },
    {
      question: 'Should property management be included if I manage the building myself?',
      answer:
        'Yes. Include a management fee, commonly 3–5% of effective gross income for a multiplex. Your time has a cost, lenders usually deduct it anyway, and a future buyer will value the building as if it were professionally managed.',
    },
    {
      question: 'Are capital expenditures part of NOI?',
      answer:
        'No. One-time improvements such as a new roof or a full renovation are capital expenditures and sit below NOI. Many investors and lenders do deduct an annual replacement reserve to account for them over time.',
    },
    {
      question: 'What is a good operating expense ratio?',
      answer:
        'It depends on the building and who pays utilities. Many Canadian multiplexes run at roughly 30–45% of effective gross income. Buildings where the owner pays heat, or older buildings with high repair costs, sit at the higher end.',
    },
  ],
  sources: [
    {
      title: 'Multi-Unit Mortgage Loan Insurance Reference Guide',
      publisher: 'Canada Mortgage and Housing Corporation (CMHC)',
      url: 'https://assets.cmhc-schl.gc.ca/sf/project/cmhc/pdfs/content/en/reference-guide.pdf',
    },
    {
      title: 'T4036 Rental Income guide',
      publisher: 'Canada Revenue Agency',
      url: 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4036/rental-income.html',
    },
  ],
  related: ['what-is-dscr', 'cap-rate-vs-cash-on-cash', 'rental-property-cash-flow-canada'],
};
