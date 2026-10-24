import Link from "next/link";
import { TRY_URL } from "@/lib/constants";
import { Formula, TableWrap } from '@/components/learn/blocks';
import { SEAN_MORRIER } from '../authors';
import type { LearnArticle } from '../types';

/*
 * Same 8-unit example as what-is-dscr: price 1,950,000, GPR 168,000, 3% vacancy 5,040, EGI 162,960,
 * opex 55,920, NOI 107,040. 4.9% / 25 yr, semi-annual compounding.
 * 65% LTV: loan 1,267,500 → 7,299.85/mo, 87,598/yr → CF 19,442 (1,620/mo).
 *   Capital reserve 50/unit/mo = 400/mo = 4,800/yr (2.9% of GPR) → CF 14,642/yr, 1,220/mo, 152.50/unit/mo.
 *   Cash invested 727,500 (down 682,500 + closing 45,000) → CoC after reserve 2.01%.
 *   Monthly: GPR 14,000, vacancy 420, EGI 13,580, opex 4,660, NOI 8,920, DS 7,300 → 1,620.
 *   Break-even occupancy (opex + DS) ÷ GPR = 143,518 ÷ 168,000 = 85.4%; with reserve 148,318 → 88.3%.
 * 75% LTV: loan 1,462,500 → 101,075/yr → CF 5,965; after reserve 1,165 (97/mo, ~12/unit/mo).
 *   At 5.9%: DS 111,245 → CF −4,205; after reserve −9,005 (−750/mo).
 *   Break-even occupancy 167,165 ÷ 168,000 = 99.5%; with reserve 171,965 → 102.4%.
 * One unit empty all year = 87.5% occupancy: above 85.4%, below 88.3%.
 */
export const rentalCashFlowArticle: LearnArticle = {
  slug: 'rental-property-cash-flow-canada',
  title: 'How to Calculate Cash Flow on a Rental Property in Canada',
  shortTitle: 'Rental property cash flow',
  seoTitle: 'Rental Property Cash Flow: How to Calculate It',
  description:
    'Rental cash flow is rent minus vacancy, operating costs, mortgage payments and a capital reserve. See the step-by-step formula and a worked Canadian example.',
  summary: [
    'Rental property cash flow is the money left each year after vacancy, operating expenses and mortgage payments are paid from the rent.',
    'The calculation runs gross rent, minus vacancy, minus operating expenses to reach NOI, then minus principal and interest payments.',
    'Subtracting a capital reserve for roofs, boilers and appliances gives a more honest figure, because those costs arrive eventually even though they are not operating expenses.',
    'In our 8-unit example at 65% loan-to-value, the building produces $1,620 a month before reserves and $1,220 a month after a $50-per-unit reserve.',
  ],
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  author: SEAN_MORRIER,
  readingMinutes: 7,
  keywords: [
    'rental property cash flow',
    'how to calculate cash flow on a rental property',
    'cash flow calculator Canada',
    'rental property calculator Canada',
    'negative cash flow rental property',
    'capex reserve',
    'NOI',
  ],
  sections: [
    {
      id: 'what-is-cash-flow',
      title: 'What is rental property cash flow?',
      body: (
        <>
          <p>
            <strong>
              Rental property cash flow is the rent you collect minus everything you pay to run and finance the
              property: vacancy, operating expenses and mortgage payments.
            </strong>{' '}
            If the number is positive, the building pays for itself and puts money in your account. If it is negative,
            you top it up from your own pocket every month.
          </p>
          <p>
            Cash flow is measured <strong>before income tax</strong>. It counts real cash in and out, so it includes
            the full mortgage payment, principal as well as interest, even though only the interest is deductible on
            your tax return. It leaves out appreciation and the equity you build by paying down the loan, because
            neither reaches your bank account until you sell or refinance.
          </p>
          <p>
            That makes cash flow the most practical test of a rental: it tells you whether you can afford to hold the
            property through a bad year, not just whether it looks good on paper.
          </p>
        </>
      ),
    },
    {
      id: 'formula',
      title: 'How to calculate cash flow, step by step',
      body: (
        <>
          <p>
            <strong>
              To calculate cash flow, start with gross rent, subtract vacancy and operating expenses to get net
              operating income (NOI), then subtract your mortgage payments.
            </strong>
          </p>
          <Formula>Cash flow = NOI − Annual debt service</Formula>
          <ol>
            <li>
              <strong>Gross potential rent:</strong> every unit at its rent for 12 months, plus parking, laundry and
              storage income.
            </li>
            <li>
              <strong>Minus vacancy and bad debt</strong> = effective gross income (EGI). Use at least 3–5% even if the
              building is full today.
            </li>
            <li>
              <strong>Minus operating expenses:</strong> property taxes, insurance, owner-paid utilities, repairs and
              maintenance, management, snow removal and admin. The result is{' '}
              <Link href="/learn/what-is-noi">net operating income</Link>.
            </li>
            <li>
              <strong>Minus debt service:</strong> 12 months of mortgage payments, principal and interest.
            </li>
            <li>
              <strong>Minus a capital reserve</strong> (recommended) for big replacements that come every 10 to 25
              years.
            </li>
          </ol>
          <p>
            Getting steps 2 and 3 right matters most. Our guide to{' '}
            <Link href="/learn/vacancy-and-operating-expense-assumptions">vacancy and operating expense assumptions</Link>{' '}
            covers what to use when the seller’s numbers look too good.
          </p>
        </>
      ),
    },
    {
      id: 'example',
      title: 'Cash flow example: an 8-unit building',
      body: (
        <>
          <p>
            Take an 8-unit building at <strong>$1,950,000</strong> with rents of $1,750 per unit, bought with 35% down:
            a $1,267,500 mortgage at an illustrative 4.9% over 25 years. Canadian fixed rates compound semi-annually,
            so the payment is $7,299.85 a month.
          </p>
          <TableWrap>
            <table>
              <caption>8-unit building, year 1, 65% loan-to-value (illustrative)</caption>
              <thead>
                <tr><th></th><th className="text-right">Annual</th><th className="text-right">Monthly</th></tr>
              </thead>
              <tbody>
                <tr><td>Gross potential rent</td><td className="text-right">$168,000</td><td className="text-right">$14,000</td></tr>
                <tr><td>Vacancy and bad debt (3%)</td><td className="text-right">−$5,040</td><td className="text-right">−$420</td></tr>
                <tr><td><strong>Effective gross income</strong></td><td className="text-right"><strong>$162,960</strong></td><td className="text-right"><strong>$13,580</strong></td></tr>
                <tr><td>Operating expenses</td><td className="text-right">−$55,920</td><td className="text-right">−$4,660</td></tr>
                <tr><td><strong>Net operating income</strong></td><td className="text-right"><strong>$107,040</strong></td><td className="text-right"><strong>$8,920</strong></td></tr>
                <tr><td>Mortgage payments</td><td className="text-right">−$87,598</td><td className="text-right">−$7,300</td></tr>
                <tr><td><strong>Cash flow before reserves</strong></td><td className="text-right"><strong>$19,442</strong></td><td className="text-right"><strong>$1,620</strong></td></tr>
                <tr><td>Capital reserve ($50 per unit per month)</td><td className="text-right">−$4,800</td><td className="text-right">−$400</td></tr>
                <tr><td><strong>Cash flow after reserves</strong></td><td className="text-right"><strong>$14,642</strong></td><td className="text-right"><strong>$1,220</strong></td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            Operating expenses are taxes $14,000, insurance $9,600, utilities $12,000, repairs $9,600, management
            $6,720 and snow, landscaping and admin $4,000. After reserves the building clears about{' '}
            <strong>$153 per unit per month</strong>. On $727,500 of cash invested (down payment plus $45,000 of
            closing costs), that is a 2.0% cash-on-cash return.
          </p>
        </>
      ),
    },
    {
      id: 'capex-reserves',
      title: 'Why you should subtract a capital reserve',
      body: (
        <>
          <p>
            <strong>
              A capital reserve sets aside money each month for large replacements, such as roofs, boilers, windows
              and appliances, so they don’t wipe out years of cash flow when they arrive.
            </strong>{' '}
            These costs are not operating expenses, so they are not in NOI, but every building has them.
          </p>
          <p>
            The Canada Revenue Agency draws the same line for tax. A <strong>current expense</strong> recurs after a
            short period, such as repainting or fixing a step. A <strong>capital expense</strong> gives a lasting
            benefit, such as new siding or a new refrigerator, and is deducted gradually through capital cost
            allowance. Your cash leaves either way, so plan for both.
          </p>
          <p>
            There is no official reserve figure. Many investors set aside 3–5% of rent or a fixed amount per unit, and
            more for older buildings or ones with original mechanicals. Our example uses $50 per unit per month,
            about 3% of rent. Ask for the roof, boiler and window ages before you buy: a building with all three near
            the end of their lives needs a bigger reserve, or a lower price.
          </p>
        </>
      ),
    },
    {
      id: 'monthly-vs-annual',
      title: 'Monthly vs. annual cash flow',
      body: (
        <>
          <p>
            <strong>
              Calculate cash flow annually, then divide by 12 for a monthly figure, because many costs arrive once or
              twice a year rather than every month.
            </strong>{' '}
            Property taxes, insurance renewals, snow contracts and heating bills are lumpy. A building can look
            excellent in a July bank statement and run short in a January one.
          </p>
          <p>
            Annual figures are also what lenders, appraisers and sellers use. NOI, cap rate and DSCR are all quoted on
            a 12-month basis, so working annually keeps your numbers comparable with theirs.
          </p>
          <p>
            Monthly figures are still useful for one thing: judging your cushion. Cash flow{' '}
            <strong>per unit per month</strong> tells you how much room you have. At $153 per unit, one month of
            vacancy on a $1,750 unit uses up nearly a year of that unit’s cash flow. Keep several months of operating
            expenses and mortgage payments in a separate account so the building never has to borrow from you on short
            notice.
          </p>
        </>
      ),
    },
    {
      id: 'negative-cash-flow',
      title: 'Positive vs. negative cash flow',
      body: (
        <>
          <p>
            <strong>
              Positive cash flow means the rent covers every cost and leaves a surplus; negative cash flow means you
              pay the difference out of pocket.
            </strong>{' '}
            The same building can be either, depending on how it is financed.
          </p>
          <p>
            Borrow 75% of the price instead of 65%, and the 8-unit building’s cash flow falls to $5,965 a year, or
            $1,165 after reserves: about $12 per unit per month. If the rate were 5.9% instead of 4.9%, payments would
            rise to $111,245 a year and cash flow would be <strong>−$4,205</strong>, or −$750 a month after reserves.
          </p>
          <p>
            A useful check is <strong>break-even occupancy</strong>: operating expenses plus mortgage payments,
            divided by gross potential rent. At 65% loan-to-value it is 85% (88% with the reserve), so the building
            covers its costs before reserves even with one of eight units empty all year. At 75% loan-to-value and
            5.9%, it is 99.5% before reserves and 102% after: the building cannot break even fully rented. Some
            investors accept negative cash flow in exchange for principal paydown and expected appreciation, but that
            is a bet on the future that needs a cash buffer to survive.
          </p>
        </>
      ),
    },
    {
      id: 'good-cash-flow',
      title: 'What is good cash flow for a Canadian rental?',
      body: (
        <>
          <p>
            <strong>
              Good cash flow is positive after a realistic vacancy allowance, full operating expenses and a capital
              reserve, with enough margin to absorb a rate increase at renewal.
            </strong>{' '}
            There is no universal dollar target, because it depends on the price, the rent level and how much you put
            down.
          </p>
          <p>
            Three ratios turn cash flow into something you can compare across deals:
          </p>
          <ul>
            <li>
              <strong>Cash-on-cash return</strong>: cash flow ÷ cash invested. See{' '}
              <Link href="/learn/cap-rate-vs-cash-on-cash">cap rate vs. cash-on-cash return</Link>.
            </li>
            <li>
              <strong>DSCR</strong>: NOI ÷ mortgage payments. Conventional lenders want 1.20 or more on most 5+ unit loans, which
              forces some cash flow into the deal. See <Link href="/learn/what-is-dscr">what is DSCR</Link>.
            </li>
            <li>
              <strong>Break-even occupancy</strong>: below about 85–90% leaves room for a bad year.
            </li>
          </ul>
          <p>
            Your down payment is the biggest lever on all three. Our guide to{' '}
            <Link href="/learn/rental-property-down-payment-canada">down payments on Canadian rental properties</Link>{' '}
            explains how much lenders require.
          </p>
        </>
      ),
    },
    {
      id: 'cash-flow-in-propstack',
      title: 'Calculating cash flow in PropStack',
      body: (
        <>
          <p>
            PropStack runs this calculation for every deal you enter. You set the rent, vacancy rate, property
            management percentage, taxes, insurance and maintenance reserve, and it shows monthly cash flow, cap rate,
            cash-on-cash return, DSCR and break-even occupancy, using Canadian semi-annual compounding. A 10-year
            projection shows how cash flow changes as rents grow and the mortgage renews.
          </p>
          <p>
            Expenses start from regional benchmarks, and you can save scenarios to compare down payments, rates and
            amortizations side by side. <Link href={TRY_URL}>Try it on a listing</Link>, no account needed.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'Is mortgage principal included in rental cash flow?',
      answer:
        'Yes. Cash flow subtracts the full mortgage payment, principal and interest, because both leave your bank account. Principal is not a tax deduction, so cash flow and taxable rental income are different numbers.',
    },
    {
      question: 'Is the mortgage an operating expense?',
      answer:
        'No. Mortgage payments are debt service, not operating expenses. They are subtracted after NOI, so that NOI describes the building and cash flow describes your financed deal.',
    },
    {
      question: 'Should I include property management if I manage the building myself?',
      answer:
        'Yes. Your time has a cost, and lenders usually deduct a 3–5% management fee anyway. Including it shows whether the deal still works if you ever hire a manager.',
    },
    {
      question: 'How much should I set aside for capital expenditures?',
      answer:
        'There is no official figure. Many investors reserve 3–5% of rent or a fixed amount per unit per month, and more for older buildings. Check the age of the roof, boiler and windows before choosing a number.',
    },
    {
      question: 'Is negative cash flow ever acceptable?',
      answer:
        'Some investors accept it in exchange for principal paydown and expected appreciation, but it means adding cash every month. Only do it deliberately, with a reserve large enough to cover the shortfall through a rate increase or a vacancy.',
    },
  ],
  sources: [
    {
      title: 'Current expenses or capital expenses',
      publisher: 'Canada Revenue Agency',
      url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/rental-income/current-expenses-capital-expenses.html',
    },
    {
      title: 'Rental Income (Guide T4036)',
      publisher: 'Canada Revenue Agency',
      url: 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4036/rental-income.html',
    },
  ],
  related: ['what-is-noi', 'vacancy-and-operating-expense-assumptions', 'what-is-dscr'],
};
