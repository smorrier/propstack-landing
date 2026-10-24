import Link from "next/link";
import { TRY_URL } from "@/lib/constants";
import { Formula, TableWrap } from '@/components/learn/blocks';
import { SEAN_MORRIER } from '../authors';
import type { LearnArticle } from '../types';

/*
 * Same 8-unit example as the other guides: price 1,950,000, GPR 168,000 (8 × 1,750 × 12),
 * 4.9% / 25 yr semi-annual compounding, 75% LTV loan 1,462,500 → DS 101,075/yr.
 * Seller-style: vacancy 3% (5,040) → EGI 162,960; opex 55,920 (taxes 14,000, insurance 9,600,
 * utilities 12,000, R&M 9,600, mgmt 6,720 = 4% of GPR, snow/landscaping/admin 4,000) → NOI 107,040.
 * OER = 55,920 ÷ 162,960 = 34.3%. DSCR 1.059. Cap rate 5.49%.
 * Lender-style: vacancy 5% (8,400) → EGI 159,600; mgmt 4% of EGI 6,384; reserve 250/unit 2,000;
 * opex 57,584 (36.1% of EGI) → NOI 102,016 (−5,024). DSCR 1.009.
 * Value at 5.49% cap: 1,858,215 (−91,785). Max loan at 1.20 / 25 yr: 1,230,098 vs 1,290,676 (−60,578).
 * Sensitivities: 1 pt vacancy = 1,680 NOI = 0.017 DSCR = ~30,600 of value at 5.49%.
 * $1,000/yr of opex = 0.0099 DSCR, ~18,200 of value. Insurance +30% = 2,880 → DSCR −0.028.
 * Turnover: 1 unit empty 1 month of 96 unit-months = 1.04%; each unit turning every 3 yrs with
 * 1 month empty = 1/36 = 2.8%.
 * CMHC 2025 Rental Market Report (Dec 11, 2025), purpose-built rental apartments, Oct 2025 survey.
 */
export const operatingAssumptionsArticle: LearnArticle = {
  slug: 'vacancy-and-operating-expense-assumptions',
  title: 'Vacancy Rate and Operating Expense Assumptions for Canadian Rental Properties',
  shortTitle: 'Vacancy and expense assumptions',
  seoTitle: 'Vacancy Rate & Operating Expense Assumptions',
  description:
    'What vacancy rate and operating expense ratio to use for a Canadian rental: CMHC vacancy data by city, lender floors, line-item expense checklist and examples.',
  summary: [
    'Use at least your city’s CMHC purpose-built vacancy rate, and never less than the 3–5% that most Canadian lenders apply, even to a full building.',
    'CMHC’s 2025 Rental Market Report put the national purpose-built vacancy rate at 3.1%, ranging from 2.4% in Quebec City to 5.0% in Calgary.',
    'The operating expense ratio is operating expenses divided by effective gross income; many small Canadian multiplexes land between about 30% and 45%.',
    'In our 8-unit example, switching from a seller’s assumptions to a lender’s cuts NOI by $5,024, DSCR from 1.06 to 1.01 and the supportable loan by about $60,600.',
  ],
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  author: SEAN_MORRIER,
  readingMinutes: 7,
  keywords: [
    'vacancy rate assumption',
    'operating expense ratio',
    'rental property expenses Canada',
    'CMHC vacancy rate 2025',
    'vacancy rate by city Canada',
    'multiplex underwriting',
    'NOI',
  ],
  sections: [
    {
      id: 'short-answer',
      title: 'What vacancy rate and expense ratio should you use?',
      body: (
        <>
          <p>
            <strong>
              Use the higher of your city’s CMHC vacancy rate and 3–5%, then build expenses line by line instead of
              trusting a single percentage.
            </strong>{' '}
            Vacancy and operating expenses are the two assumptions that turn gross rent into{' '}
            <Link href="/learn/what-is-noi">net operating income (NOI)</Link>, and NOI drives everything else: cap
            rate, cash flow, debt coverage and value.
          </p>
          <p>
            A seller’s listing usually shows the most flattering version: 0–2% vacancy, no management fee because the
            owner self-manages, and repairs from a quiet year. A lender, an appraiser and the next buyer will all
            rebuild those numbers with their own assumptions. If your analysis is more optimistic than theirs, you
            will find out at the financing stage, after you have paid for inspections and an appraisal.
          </p>
          <p>
            The goal is not to be pessimistic. It is to use the numbers the building will be judged on, so the deal
            still works when someone else checks it.
          </p>
        </>
      ),
    },
    {
      id: 'cmhc-vacancy-by-city',
      title: 'CMHC vacancy rates by city (2025)',
      body: (
        <>
          <p>
            <strong>
              CMHC’s 2025 Rental Market Report put Canada’s purpose-built rental vacancy rate at 3.1%, up from 2.2% in
              2024 and above its 10-year average.
            </strong>{' '}
            CMHC linked the increase to record rental completions and slower population growth. Rates for major
            centres:
          </p>
          <TableWrap>
            <table>
              <caption>Purpose-built rental vacancy rates, October 2025 (CMHC)</caption>
              <thead>
                <tr><th>Market</th><th className="text-right">Vacancy rate</th></tr>
              </thead>
              <tbody>
                <tr><td>Calgary</td><td className="text-right">5.0%</td></tr>
                <tr><td>Kitchener–Cambridge–Waterloo</td><td className="text-right">4.1%</td></tr>
                <tr><td>London</td><td className="text-right">4.0%</td></tr>
                <tr><td>Edmonton</td><td className="text-right">3.8%</td></tr>
                <tr><td>Vancouver</td><td className="text-right">3.7%</td></tr>
                <tr><td>Hamilton</td><td className="text-right">3.6%</td></tr>
                <tr><td>Victoria</td><td className="text-right">3.3%</td></tr>
                <tr><td>Saskatoon</td><td className="text-right">3.3%</td></tr>
                <tr><td>Toronto</td><td className="text-right">3.0%</td></tr>
                <tr><td>Ottawa</td><td className="text-right">3.0%</td></tr>
                <tr><td>Montreal</td><td className="text-right">2.9%</td></tr>
                <tr><td>Winnipeg</td><td className="text-right">2.8%</td></tr>
                <tr><td>Halifax</td><td className="text-right">2.7%</td></tr>
                <tr><td>Regina</td><td className="text-right">2.7%</td></tr>
                <tr><td>Quebec City</td><td className="text-right">2.4%</td></tr>
                <tr><td><strong>Canada</strong></td><td className="text-right"><strong>3.1%</strong></td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            These are city-wide averages for purpose-built apartments. CMHC also publishes rates by neighbourhood zone
            and bedroom count, which are a better match for a specific building. The survey runs each October, so
            check that you are using the latest report.
          </p>
        </>
      ),
    },
    {
      id: 'small-building-vacancy',
      title: 'Why small buildings need a vacancy cushion',
      body: (
        <>
          <p>
            <strong>
              A city’s vacancy rate is an average across thousands of units; in a small building, one empty unit is a
              much bigger share of income.
            </strong>{' '}
            In an 8-unit building, a single unit empty for one month is 1 of 96 unit-months, or 1.0% vacancy. If each
            unit turns over every three years and sits empty for a month between tenants, that alone is 2.8%, before
            any tenant stops paying.
          </p>
          <p>
            That is why your allowance should cover three things, not one:
          </p>
          <ul>
            <li><strong>Market vacancy:</strong> the CMHC rate for your zone and unit type.</li>
            <li>
              <strong>Turnover time:</strong> cleaning, painting and showing a unit between tenants, which is often
              longer in older buildings.
            </li>
            <li>
              <strong>Bad debt:</strong> rent you never collect. Eviction timelines at provincial landlord and tenant
              boards can stretch to months, so a single non-paying tenant can cost several months of rent.
            </li>
          </ul>
          <p>
            For most multiplexes, 3% is a floor rather than a target, and 5% is a reasonable default in softer markets
            or for buildings with frequent turnover.
          </p>
        </>
      ),
    },
    {
      id: 'lender-assumptions',
      title: 'How lenders underwrite vacancy and expenses',
      body: (
        <>
          <p>
            <strong>
              Canadian lenders recalculate NOI with their own vacancy and expense assumptions, and they rarely accept a
              seller’s figures as presented.
            </strong>{' '}
            Practices differ by lender, but these adjustments are common on 5+ unit buildings:
          </p>
          <ul>
            <li>
              <strong>Vacancy:</strong> the higher of local market vacancy and a floor, commonly 3–5% for banks and
              credit unions, even when the rent roll is full.
            </li>
            <li>
              <strong>Management:</strong> a fee of roughly 3–5% of effective gross income whether or not you manage
              the building yourself, because the building has to work if a manager is ever hired.
            </li>
            <li>
              <strong>Repairs and reserves:</strong> a per-unit allowance for maintenance plus a replacement reserve
              for roofs, boilers and appliances, using the higher of the building’s history and the lender’s own
              benchmark.
            </li>
            <li>
              <strong>Taxes, insurance and utilities:</strong> taken from actual bills, often the most recent 12
              months, rather than the seller’s estimates.
            </li>
          </ul>
          <p>
            CMHC-insured loans follow the same pattern: CMHC asks the lender to explain the vacancy rate and expenses
            used, and checks them against market data and its own benchmarks. The result is the NOI your{' '}
            debt coverage ratio and loan size are based on.
          </p>
        </>
      ),
    },
    {
      id: 'expense-checklist',
      title: 'Operating expense checklist for a Canadian rental',
      body: (
        <>
          <p>
            <strong>
              List every recurring cost of running the building, but leave out mortgage payments, income tax,
              depreciation and one-time renovations.
            </strong>{' '}
            Here are the lines in our 8-unit example and what to check for each:
          </p>
          <TableWrap>
            <table>
              <caption>8-unit building, annual operating expenses (illustrative)</caption>
              <thead>
                <tr><th>Expense</th><th className="text-right">Amount</th><th>How to check it</th></tr>
              </thead>
              <tbody>
                <tr><td>Property taxes</td><td className="text-right">$14,000</td><td>Current tax bill; some provinces reassess after a sale</td></tr>
                <tr><td>Insurance</td><td className="text-right">$9,600</td><td>A real quote for your coverage, not the seller’s old policy</td></tr>
                <tr><td>Utilities (owner-paid)</td><td className="text-right">$12,000</td><td>12 months of bills; note who pays heat, water and hydro</td></tr>
                <tr><td>Repairs and maintenance</td><td className="text-right">$9,600</td><td>3 years of history; about $1,200 per unit per year here</td></tr>
                <tr><td>Property management</td><td className="text-right">$6,720</td><td>4% of gross rent, even if you self-manage</td></tr>
                <tr><td>Snow, landscaping, admin</td><td className="text-right">$4,000</td><td>Contracts, accounting, legal, licences</td></tr>
                <tr><td><strong>Total</strong></td><td className="text-right"><strong>$55,920</strong></td><td></td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            Many investors also add a <strong>replacement reserve</strong>, a yearly amount set aside for big-ticket
            items, so that a roof or boiler does not arrive as a surprise. Other lines to watch for: elevator and
            fire-safety contracts, pest control, garbage removal, rental licensing fees and on-site superintendent pay.
          </p>
        </>
      ),
    },
    {
      id: 'operating-expense-ratio',
      title: 'What is the operating expense ratio?',
      body: (
        <>
          <p>
            <strong>
              The operating expense ratio (OER) is total operating expenses divided by effective gross income, the rent
              you actually collect after vacancy.
            </strong>{' '}
            It is a quick way to sanity-check a listing.
          </p>
          <Formula>Operating expense ratio = Operating expenses ÷ Effective gross income</Formula>
          <p>
            In our example, $55,920 ÷ $162,960 = <strong>34.3%</strong>. Some analysts divide by gross potential rent
            instead, which gives 33.3% here, so check which version a broker is quoting.
          </p>
          <p>
            As a rule of thumb, many small Canadian multiplexes where tenants pay their own in-suite hydro land between
            about 30% and 40%. Buildings where the owner pays heat and all utilities, older buildings, and buildings
            in cities with high property taxes often run 40–50%. A listing showing 20–25% usually means something is
            missing: management, repairs, a realistic insurance quote, or utilities the owner pays.
          </p>
          <p>
            Use the ratio as a check, not a shortcut. Two buildings at 35% can have very different risks if one has
            a new roof and the other needs one.
          </p>
        </>
      ),
    },
    {
      id: 'impact-on-noi-and-dscr',
      title: 'How your assumptions move NOI, DSCR and value',
      body: (
        <>
          <p>
            <strong>
              Small changes in vacancy and expenses produce large changes in value and loan size, because every dollar
              of NOI is multiplied by the cap rate and by the lender’s coverage test.
            </strong>{' '}
            Here is the same 8-unit building under a seller’s assumptions and a lender’s:
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th></th><th className="text-right">Seller-style</th><th className="text-right">Lender-style</th></tr>
              </thead>
              <tbody>
                <tr><td>Vacancy</td><td className="text-right">3%</td><td className="text-right">5%</td></tr>
                <tr><td>Effective gross income</td><td className="text-right">$162,960</td><td className="text-right">$159,600</td></tr>
                <tr><td>Operating expenses</td><td className="text-right">$55,920</td><td className="text-right">$57,584</td></tr>
                <tr><td>Operating expense ratio</td><td className="text-right">34.3%</td><td className="text-right">36.1%</td></tr>
                <tr><td><strong>NOI</strong></td><td className="text-right"><strong>$107,040</strong></td><td className="text-right"><strong>$102,016</strong></td></tr>
                <tr><td>DSCR at 75% loan-to-value</td><td className="text-right">1.06</td><td className="text-right">1.01</td></tr>
                <tr><td>Value at a 5.49% cap rate</td><td className="text-right">$1,950,000</td><td className="text-right">$1,858,200</td></tr>
                <tr><td>Maximum loan at 1.20 DSCR</td><td className="text-right">$1,290,700</td><td className="text-right">$1,230,100</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            The lender column uses a management fee of 4% of effective gross income and a $250-per-unit reserve.
            A $5,024 drop in NOI takes about $91,800 off the value and $60,600 off the loan. Each extra point of
            vacancy costs $1,680 of NOI, and a 30% jump in the insurance premium costs $2,880 a year. For how NOI
            becomes cash flow after the mortgage, see{' '}
            <Link href="/learn/rental-property-cash-flow-canada">rental property cash flow in Canada</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'assumptions-in-propstack',
      title: 'Setting vacancy and expenses in PropStack',
      body: (
        <>
          <p>
            PropStack starts every deal with regional expense benchmarks, so a listing with missing lines does not
            look better than it is. You set the vacancy rate, property management percentage, taxes, insurance and
            maintenance reserve yourself, and the calculator shows NOI, cap rate, cash flow, DSCR and break-even
            occupancy as you change them.
          </p>
          <p>
            A useful habit is to save two scenarios for every deal: the seller’s numbers and your lender-style
            numbers. If the deal only works in the first one, you know what to negotiate.{' '}
            <Link href={TRY_URL}>Try it on a listing</Link>, no account needed.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'What vacancy rate should I use for a rental property in Canada?',
      answer:
        'Use the higher of the CMHC purpose-built vacancy rate for your city or zone and 3–5%. CMHC’s 2025 report put the national rate at 3.1%, and most lenders apply at least 3–5% even when a building is fully rented.',
    },
    {
      question: 'What is a good operating expense ratio for a multiplex?',
      answer:
        'Many small Canadian multiplexes run about 30–40% of effective gross income when tenants pay their own hydro, and 40–50% when the owner pays heat and utilities. A ratio far below 30% usually means an expense is missing.',
    },
    {
      question: 'Should I include a management fee if I manage the building myself?',
      answer:
        'Yes. Lenders usually deduct 3–5% for management regardless of who does the work, and your own time has a cost. Including it also keeps the analysis valid if you hire a manager later.',
    },
    {
      question: 'Are mortgage payments an operating expense?',
      answer:
        'No. Operating expenses exclude mortgage principal and interest, income tax, depreciation and one-time capital spending. Mortgage payments are subtracted after NOI to get cash flow.',
    },
    {
      question: 'Where can I find vacancy rates for my neighbourhood?',
      answer:
        'CMHC’s Housing Market Information Portal publishes Rental Market Survey results by city, zone and bedroom type. The survey is taken each October and released around December.',
    },
  ],
  sources: [
    {
      title: '2025 Rental Market Report',
      publisher: 'Canada Mortgage and Housing Corporation (CMHC), December 2025',
      url: 'https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/market-reports/rental-market-reports-major-centres',
    },
    {
      title: 'Canada’s vacancy rate rises amid historically high rental construction',
      publisher: 'CMHC news release (December 11, 2025)',
      url: 'https://www.cmhc-schl.gc.ca/media-newsroom/news-releases/2025/canadas-vacancy-rate-rises-amid-historically-high-rental-construction',
    },
  ],
  related: ['what-is-noi', 'rental-property-cash-flow-canada', 'gross-rent-multiplier'],
};
