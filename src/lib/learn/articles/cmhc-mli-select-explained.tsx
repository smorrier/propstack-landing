import Link from "next/link";
import { TRY_URL } from "@/lib/constants";
import { Formula, TableWrap } from '@/components/learn/blocks';
import { SEAN_MORRIER } from '../authors';
import type { LearnArticle } from '../types';

/*
 * Rules as of 2026-10-24: CMHC MLI Select fact sheet (66792 20251029-008A, Nov 2025),
 * CMHC Multi-unit Fees and Premiums (66798 20250513-002A), premiums effective July 14, 2025.
 * Existing 8-unit example: price 1,950,000, NOI 107,040, 4.9% semi-annual compounding (rate held
 * constant to isolate LTV/amortization; insured rates are usually lower).
 * Conventional at 1.20 DSCR / 25 yr: DS 89,200 → loan 1,290,676 (66.2%), down 659,324, CF 17,840.
 * MLI Select loans sized at DCR 1.10 → DS 97,309, CF 9,731. Premium added to loan:
 *  50 pts / 40 yr: total 1,716,749; premium (5.35% + 0.75%) × 0.9 = 5.49% → net 1,627,405 (83.5%),
 *    premium 89,345, down 322,595.
 *  70 pts / 45 yr: total 1,778,949; (5.90% + 1.00%) × 0.8 = 5.52% → net 1,685,888 (86.5%),
 *    premium 93,061, down 264,112.
 *  100 pts / 50 yr: total 1,827,777; (5.90% + 1.25%) × 0.7 = 5.005% → net 1,740,657 (89.3%),
 *    premium 87,120, down 209,343.
 * Affordability cost: 4 of 8 units (≥40%) cut from 1,750 to 1,560 → GPR −9,120; EGI −8,846 (3% vacancy),
 *  management (4% of GPR) −365 → NOI −8,482 = 98,558. 50 pts / 40 yr: total 1,580,718;
 *  (4.35% + 0.75%) × 0.9 = 4.59% → net 1,511,347 (77.5%), down 438,653.
 * Year-5 balance per $1M at 4.9%: 25 yr 883,678; 40 yr 953,847; 50 yr 973,285
 *  (paydown 116,322 / 46,153 / 26,715).
 */
export const mliSelectArticle: LearnArticle = {
  slug: 'cmhc-mli-select-explained',
  title: 'CMHC MLI Select Explained: Requirements, Points and Benefits',
  shortTitle: 'CMHC MLI Select explained',
  seoTitle: 'CMHC MLI Select: Requirements, Points, Benefits',
  description:
    'CMHC MLI Select insures 5+ unit rentals at up to 95% LTV and 50-year amortization in exchange for affordability, energy or accessibility points. How it works.',
  summary: [
    'MLI Select is CMHC’s mortgage insurance for rental buildings with 5 or more units that rewards affordability, energy efficiency and accessibility commitments with better loan terms.',
    'A project needs at least 50 points to qualify; 50, 70 and 100 points unlock amortizations of up to 40, 45 and 50 years and premium discounts of 10%, 20% and 30%.',
    'Existing buildings can borrow up to 85% of value at 50 points and up to 95% at 70 or more, but the loan must still meet a minimum debt coverage ratio of 1.10.',
    'The trade-off is real: affordability points cap rents on a share of units for at least 10 years, with annual compliance reporting, and premiums now run about 5% of the loan.',
  ],
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  author: SEAN_MORRIER,
  readingMinutes: 7,
  keywords: [
    'MLI Select',
    'CMHC MLI Select',
    'MLI Select points',
    'MLI Select requirements',
    'CMHC multi-unit insurance',
    '50 year amortization',
    'multiplex financing Canada',
  ],
  sections: [
    {
      id: 'what-is-mli-select',
      title: 'What is CMHC MLI Select?',
      body: (
        <>
          <p>
            <strong>
              MLI Select is a CMHC mortgage loan insurance product for rental buildings of 5 or more units that offers
              higher loan-to-value, longer amortizations, a lower debt coverage requirement and cheaper premiums in
              exchange for social commitments.
            </strong>{' '}
            Those commitments are scored with points in three categories: affordability, energy efficiency and
            accessibility.
          </p>
          <p>
            CMHC launched MLI Select on March 7, 2022, replacing the earlier MLI Flex product. It sits alongside
            standard multi-unit insurance (often called MLI Standard or market MLI), which has no social criteria but
            lower leverage and shorter amortizations. Because CMHC insures the lender against default, insured
            multi-unit loans usually carry lower interest rates than conventional ones.
          </p>
          <p>
            The rules have changed several times since launch, most recently with a new premium schedule in July 2025
            and program updates announced in late 2025. This guide describes the program as of October 2026. Always
            confirm current terms with a CMHC-approved lender before you make an offer.
          </p>
        </>
      ),
    },
    {
      id: 'eligibility',
      title: 'Who is eligible for MLI Select?',
      body: (
        <>
          <p>
            <strong>
              MLI Select is open to new and existing standard rental buildings of at least 5 self-contained units, as
              well as single room occupancy, supportive housing and retirement homes (50+ units or beds).
            </strong>{' '}
            It covers construction, purchase and refinance loans. Student housing can qualify only through energy
            efficiency and accessibility points.
          </p>
          <ul>
            <li>
              <strong>Non-residential space</strong> (such as ground-floor retail) cannot exceed 30% of gross floor
              area or 30% of total lending value.
            </li>
            <li>
              <strong>Experience:</strong> the borrower, or an affiliated company, needs at least five years of
              experience managing similar multi-unit buildings, or a contract with a professional property manager.
            </li>
            <li>
              <strong>Net worth:</strong> at least 25% of the loan amount, with a minimum of $100,000. CMHC may allow
              flexibility for projects scoring 100 points or more.
            </li>
          </ul>
          <p>
            Buildings with 1–4 units are financed as residential mortgages and are not eligible. If you are weighing
            a fourplex against a sixplex, MLI Select is one of the biggest differences between them. See{' '}
            <Link href="/learn/rental-property-down-payment-canada">rental property down payments in Canada</Link>{' '}
            for how the smaller-building rules compare.
          </p>
        </>
      ),
    },
    {
      id: 'points-system',
      title: 'How the MLI Select points system works',
      body: (
        <>
          <p>
            <strong>
              A project needs at least 50 points, earned from any combination of affordability, energy efficiency and
              accessibility commitments.
            </strong>{' '}
            The thresholds are much harder for existing buildings on affordability, and are measured differently on
            energy:
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th>Outcome</th><th>New construction</th><th>Existing building</th><th className="text-right">Points</th></tr>
              </thead>
              <tbody>
                <tr><td>Affordability, level 1</td><td>10% of units affordable</td><td>40% of units affordable</td><td className="text-right">50</td></tr>
                <tr><td>Affordability, level 2</td><td>15% of units</td><td>60% of units</td><td className="text-right">70</td></tr>
                <tr><td>Affordability, level 3</td><td>25% of units</td><td>80% of units</td><td className="text-right">100</td></tr>
                <tr><td>Affordability for 20+ years</td><td colSpan={2}>Bonus on top of the level achieved</td><td className="text-right">+30</td></tr>
                <tr><td>Energy, level 1</td><td>25% better than NECB or 20% better than NBC</td><td>15% reduction from current use</td><td className="text-right">20</td></tr>
                <tr><td>Energy, level 2</td><td>50% better than NECB or 40% better than NBC</td><td>25% reduction</td><td className="text-right">35</td></tr>
                <tr><td>Energy, level 3</td><td>60% better than NECB or 70% better than NBC</td><td>40% reduction</td><td className="text-right">50</td></tr>
                <tr><td>Accessibility, level 1</td><td colSpan={2}>15% of units accessible (CSA B651:23) or universal design</td><td className="text-right">20</td></tr>
                <tr><td>Accessibility, level 2</td><td colSpan={2}>Higher shares of accessible or universal-design units</td><td className="text-right">30</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            An “affordable” unit rents at or below <strong>30% of the median renter household income</strong> for
            the market, as published by CMHC. Accessibility points also require every unit to be visitable and common
            areas to be barrier-free. Energy and accessibility only need to be proven once; affordability must be
            maintained for at least 10 years.
          </p>
        </>
      ),
    },
    {
      id: 'benefits-by-tier',
      title: 'MLI Select benefits by points tier',
      body: (
        <>
          <p>
            <strong>
              More points unlock longer amortizations, larger premium discounts and, at 100 points, limited recourse;
              every tier gets a minimum debt coverage ratio of 1.10 on standard rental housing.
            </strong>
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr>
                  <th>Points</th>
                  <th>Max loan (new / existing)</th>
                  <th>Max amortization</th>
                  <th>Premium discount</th>
                  <th>Recourse</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>50+</td><td>95% of cost / 85% of value</td><td>40 years</td><td>10%</td><td>Full</td></tr>
                <tr><td>70+</td><td>95% / 95%</td><td>45 years</td><td>20%</td><td>Full</td></tr>
                <tr><td>100+</td><td>95% / 95%</td><td>50 years</td><td>30%</td><td>Limited</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            For comparison, CMHC’s standard multi-unit insurance on existing buildings tops out at 85% loan-to-value,
            and its minimum coverage ratios run from 1.10 to 1.30 depending on building size and term. Conventional
            bank loans usually require 1.20 to 1.30. Replacement reserves are discretionary under MLI Select, which
            also helps cash flow. The amortization can never exceed the building’s remaining economic life, so an old
            building may not get the full 50 years even at 100 points.
          </p>
        </>
      ),
    },
    {
      id: 'premiums',
      title: 'MLI Select premiums',
      body: (
        <>
          <p>
            <strong>
              Since July 14, 2025, MLI Select premiums start from the same risk-based grid as other CMHC multi-unit
              insurance, plus surcharges, minus a discount of 10%, 20% or 30% based on points.
            </strong>{' '}
            The premium is a one-time charge, usually added to the loan.
          </p>
          <Formula>Premium = (Base rate + surcharges) × (1 − points discount) × Loan</Formula>
          <p>
            For standard rental purchases and refinances, base rates run from 2.60% at 65% loan-to-value up to 5.35%
            at 85%, 5.90% at 90% and 6.15% above 90%. Construction loans cost more. The most common surcharge is for
            amortization: 0.25% for every five years beyond 25, so 40 years adds 0.75% and 50 years adds 1.25%.
          </p>
          <p>
            Example: an 83.5% loan over 40 years at 50 points costs (5.35% + 0.75%) × 0.90 = <strong>5.49%</strong>{' '}
            of the loan. On a $1.63 million loan that is about $89,300, financed into the mortgage. Premiums were
            noticeably lower before July 2025, so check any older pro forma against the current grid.
          </p>
        </>
      ),
    },
    {
      id: 'example',
      title: 'Example: MLI Select on an 8-unit building',
      body: (
        <>
          <p>
            Take the 8-unit building from our other guides: <strong>$1,950,000</strong> price and{' '}
            <strong>$107,040</strong> of NOI. We hold the rate at 4.9% (semi-annual compounding) in every column to
            isolate the effect of leverage and amortization; insured rates are usually lower in practice. Each MLI
            Select loan is sized to the 1.10 minimum coverage, including the premium.
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className="text-right">Loan (LTV)</th>
                  <th className="text-right">Premium</th>
                  <th className="text-right">Down payment</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Conventional, 1.20 DSCR, 25 yrs</td><td className="text-right">$1,290,700 (66%)</td><td className="text-right">$0</td><td className="text-right">$659,300</td></tr>
                <tr><td>MLI Select 50 pts, 40 yrs</td><td className="text-right">$1,627,400 (83.5%)</td><td className="text-right">$89,300</td><td className="text-right">$322,600</td></tr>
                <tr><td>MLI Select 70 pts, 45 yrs</td><td className="text-right">$1,685,900 (86.5%)</td><td className="text-right">$93,100</td><td className="text-right">$264,100</td></tr>
                <tr><td>MLI Select 100 pts, 50 yrs</td><td className="text-right">$1,740,700 (89.3%)</td><td className="text-right">$87,100</td><td className="text-right">$209,300</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            Even at 100 points, coverage, not the 95% ceiling, sets the loan. Compared with conventional financing,
            the 50-point loan cuts the down payment roughly in half. But annual cash flow falls from $17,840 to $9,731,
            because the building now carries more debt. And this table assumes the points are free, which for an
            existing building they rarely are.
          </p>
        </>
      ),
    },
    {
      id: 'trade-offs',
      title: 'The trade-offs: rent limits, reporting and slower equity',
      body: (
        <>
          <p>
            <strong>
              MLI Select’s leverage is paid for with lower rents on committed units, compliance work and a loan that
              pays down slowly.
            </strong>
          </p>
          <ul>
            <li>
              <strong>Rent restrictions.</strong> An existing 8-unit building needs 4 affordable units for 50
              affordability points. If 30% of median renter income in your market is $1,560 a month and those units
              rent for $1,750, NOI falls to about $98,600. The maximum 40-year loan drops to about $1,511,300 (78%),
              and the down payment rises to about $438,700. Rents on committed units can only rise by the provincial
              guideline, or by CPI where there is none, for at least 10 years.
            </li>
            <li>
              <strong>Reporting.</strong> Affordability needs an annual certificate of compliance for the whole
              commitment period. Energy points need a qualified professional’s modelling and attestation.
            </li>
            <li>
              <strong>Slower paydown.</strong> At 4.9%, a 25-year loan repays $116,300 of every $1 million in five
              years. Over 40 years it repays $46,200, and over 50 years only $26,700.
            </li>
            <li>
              <strong>Rule changes.</strong> Since September 30, 2026, new-construction energy points have been
              scored against the 2020 editions of the national codes, which makes them harder to earn than under the
              older 2015 and 2017 codes.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'mli-select-in-propstack',
      title: 'Modelling MLI Select in PropStack',
      body: (
        <>
          <p>
            Before you commit to affordability or retrofit work, run the deal both ways. In PropStack you can line
            up a conventional scenario and an insured one side by side, changing the down payment, rate and
            amortization, and see cap rate, cash flow, DSCR and a 10-year projection for each, with Canadian
            semi-annual compounding. Remember that the premium is financed, so it raises the payment too.
          </p>
          <p>
            If an affordability commitment lowers rents, enter those rents and check whether the extra leverage
            still beats the conventional case. For the vacancy and expense inputs lenders will use, see{' '}
            <Link href="/learn/vacancy-and-operating-expense-assumptions">our guide to underwriting assumptions</Link>.{' '}
            <Link href={TRY_URL}>Try it on a listing</Link>, no account needed.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'How many units do you need for CMHC MLI Select?',
      answer:
        'At least 5 self-contained units for standard rental housing, or 50 units or beds for retirement homes. Buildings with 1–4 units use residential mortgage rules instead.',
    },
    {
      question: 'How many points do you need for MLI Select?',
      answer:
        'At least 50 points from affordability, energy efficiency and accessibility combined. Reaching 70 points extends the maximum amortization to 45 years, and 100 points allows 50 years and limited recourse.',
    },
    {
      question: 'What is the minimum DSCR for MLI Select?',
      answer:
        'CMHC’s minimum debt coverage ratio is 1.10 for standard rental housing, 1.20 for other shelter types such as supportive and retirement housing, and 1.40 for non-residential space.',
    },
    {
      question: 'How long do MLI Select affordability commitments last?',
      answer:
        'At least 10 years, from first occupancy for new construction or from the interest adjustment date for existing buildings. Committing to 20 years or more earns an extra 30 points.',
    },
    {
      question: 'What does MLI Select insurance cost?',
      answer:
        'Since July 14, 2025, premiums use CMHC’s risk-based multi-unit grid, about 2.6% to 6.15% of the loan for standard rental purchases, plus 0.25% per five years of amortization beyond 25, less a 10–30% points discount.',
    },
  ],
  sources: [
    {
      title: 'CMHC MLI Select (product fact sheet)',
      publisher: 'Canada Mortgage and Housing Corporation (CMHC), 2025',
      url: 'https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/mortgage-loan-insurance/multi-unit-insurance/mliselect/mli-select.pdf',
    },
    {
      title: 'CMHC Multi-unit Fees and Premiums',
      publisher: 'CMHC, 2025',
      url: 'https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/mortgage-loan-insurance/multi-unit-insurance/mliselect/mli-select-multi-unit-fees-and-premiums-at-a-glance-en.pdf',
    },
    {
      title: 'CMHC to update multi-unit mortgage loan insurance premiums',
      publisher: 'CMHC notice (July 3, 2025)',
      url: 'https://www.cmhc-schl.gc.ca/media-newsroom/notices/2025/cmhc-to-update-multi-unit-mortgage-loan-insurance-premiums',
    },
    {
      title: 'CMHC Advice 268: CMHC MLI Select changes',
      publisher: 'Peakhill Capital (December 1, 2025)',
      url: 'https://www.peakhillcapital.com/cmhc-advice-268-cmhc-mli-select-changes/',
    },
  ],
  related: ['vacancy-and-operating-expense-assumptions', 'rental-property-down-payment-canada', 'what-is-noi'],
};
