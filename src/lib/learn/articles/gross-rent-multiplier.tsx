import Link from "next/link";
import { TRY_URL } from "@/lib/constants";
import { Formula, TableWrap } from '@/components/learn/blocks';
import { SEAN_MORRIER } from '../authors';
import type { LearnArticle } from '../types';

/*
 * Same 8-unit example as what-is-dscr: price 1,950,000, GPR 168,000 (monthly 14,000), NOI 107,040.
 * GRM = 1,950,000 ÷ 168,000 = 11.61; monthly GRM = 139.3. At a market GRM of 12 → 2,016,000.
 * NOI margin on GPR = 107,040 ÷ 168,000 = 63.7%. GRM = margin ÷ cap: 4% → 15.9, 5% → 12.7, 5.49% → 11.6, 6% → 10.6.
 * Building B: same price and rent, owner pays heat, opex 70,000 → NOI 92,960, cap 4.77%.
 *   At a 5.5% cap: A 1,946,182 vs B 1,690,182 (≈ 256,000 apart) with the same GRM.
 * Rent uplift: 2 units +$200/mo → 4,800/yr. GRM: 4,800 × 11.61 = 55,714; minus 2 × 8,000 = 39,714 net.
 *   Cap rate method: NOI +4,800 − 3% vacancy 144 − 4% management 192 = 4,464 ÷ 5.489% = 81,323.
 */
export const grossRentMultiplierArticle: LearnArticle = {
  slug: 'gross-rent-multiplier',
  title: 'Gross Rent Multiplier (GRM): Formula, Examples and Limits',
  shortTitle: 'Gross rent multiplier',
  seoTitle: 'Gross Rent Multiplier (GRM) Explained',
  description:
    'GRM is a property’s price divided by its gross annual rent. Learn the formula, how to use it to screen deals and value rent increases, and where it misleads.',
  summary: [
    'The gross rent multiplier (GRM) is a property’s price divided by its gross annual rent. A lower GRM means you pay less for each dollar of rent.',
    'An 8-unit building priced at $1,950,000 with $168,000 of annual rent has a GRM of 11.6.',
    'GRM ignores vacancy and operating expenses, so two buildings with the same GRM can have very different cap rates and values.',
    'GRM is best for quick screening and for estimating what a rent increase adds to value; use NOI and cap rate before you make an offer.',
  ],
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  author: SEAN_MORRIER,
  readingMinutes: 6,
  keywords: [
    'gross rent multiplier',
    'GRM',
    'GRM formula',
    'good GRM',
    'gross income multiplier',
    'GRM real estate Canada',
    'rent multiplier calculator',
  ],
  sections: [
    {
      id: 'what-is-grm',
      title: 'What is the gross rent multiplier?',
      body: (
        <>
          <p>
            <strong>
              The gross rent multiplier (GRM) is the ratio of a rental property’s price to its gross annual rent.
            </strong>{' '}
            It tells you how many years of rent, before any expenses, it would take to equal the purchase price. A GRM
            of 12 means the price is 12 times the yearly rent.
          </p>
          <Formula>GRM = Purchase price ÷ Gross annual rent</Formula>
          <p>
            For an 8-unit building priced at <strong>$1,950,000</strong>, with every unit renting at $1,750 a month,
            gross annual rent is 8 × $1,750 × 12 = $168,000. The GRM is $1,950,000 ÷ $168,000 ={' '}
            <strong>11.6</strong>.
          </p>
          <p>
            GRM is popular because it needs only two numbers that are in almost every listing: the price and the rent.
            You can calculate it in your head while scrolling listings, long before you have the tax bill or a list of
            utility costs.
          </p>
        </>
      ),
    },
    {
      id: 'annual-vs-monthly',
      title: 'Annual vs. monthly GRM',
      body: (
        <>
          <p>
            <strong>
              GRM is usually calculated on annual rent in Canada, but some sources, especially American ones, use
              monthly rent instead.
            </strong>{' '}
            The method is the same; only the scale changes. The 8-unit building’s monthly GRM is $1,950,000 ÷ $14,000 =
            139.3, which is simply the annual GRM of 11.6 multiplied by 12.
          </p>
          <p>
            Check which version a source uses before comparing numbers. A “GRM of 120” is cheap on a monthly basis (10
            on an annual basis), but would be absurdly expensive if read as annual.
          </p>
          <p>
            You will also see the <strong>gross income multiplier (GIM)</strong>. It works the same way but includes
            other income such as parking, laundry and storage in the denominator, not just rent. Appraisers sometimes
            use effective gross income (after vacancy) instead of potential rent. Whichever version you use, use it
            consistently across every property you compare.
          </p>
        </>
      ),
    },
    {
      id: 'valuation',
      title: 'Using GRM to estimate value',
      body: (
        <>
          <p>
            <strong>
              If similar buildings in an area sell at a known GRM, multiplying a property’s rent by that GRM gives a
              quick estimate of its value.
            </strong>{' '}
            This is a simplified form of the income approach that appraisers use for small rental properties.
          </p>
          <Formula>Estimated value = Gross annual rent × Market GRM</Formula>
          <p>
            If recent sales of comparable 6–10 unit buildings nearby averaged a GRM of 12, the 8-unit building’s
            $168,000 of rent suggests a value of about <strong>$2,016,000</strong>. At an asking price of $1,950,000, it
            looks slightly cheaper than its neighbours.
          </p>
          <p>
            The estimate is only as good as the comparables. They should be similar in size, age, location and, most
            importantly, in who pays which expenses. A sale where tenants pay their own heat is not comparable to one
            where the owner pays it, even if the rents look alike. The next section shows why.
          </p>
        </>
      ),
    },
    {
      id: 'limits',
      title: 'Why GRM can mislead',
      body: (
        <>
          <p>
            <strong>
              GRM ignores vacancy and operating expenses, so two buildings with the same price and rent can be worth
              very different amounts.
            </strong>{' '}
            Imagine a second 8-unit building, also priced at $1,950,000 with $168,000 of rent, but the owner pays heat
            and its expenses are $70,000 instead of $55,920.
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th></th><th className="text-right">Building A</th><th className="text-right">Building B</th></tr>
              </thead>
              <tbody>
                <tr><td>Price</td><td className="text-right">$1,950,000</td><td className="text-right">$1,950,000</td></tr>
                <tr><td>Gross annual rent</td><td className="text-right">$168,000</td><td className="text-right">$168,000</td></tr>
                <tr><td>GRM</td><td className="text-right">11.6</td><td className="text-right">11.6</td></tr>
                <tr><td>Net operating income</td><td className="text-right">$107,040</td><td className="text-right">$92,960</td></tr>
                <tr><td>Cap rate</td><td className="text-right">5.49%</td><td className="text-right">4.77%</td></tr>
                <tr><td>Value at a 5.5% market cap rate</td><td className="text-right">$1,946,000</td><td className="text-right">$1,690,000</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            The GRM is identical, but Building B is worth about <strong>$256,000 less</strong> on its income. GRM also
            ignores below-market rents, deferred maintenance and property tax differences between cities. Use it to
            decide which listings deserve a closer look, then switch to{' '}
            <Link href="/learn/what-is-noi">net operating income</Link> and cap rate.
          </p>
        </>
      ),
    },
    {
      id: 'grm-and-cap-rate',
      title: 'How GRM relates to cap rate',
      body: (
        <>
          <p>
            <strong>
              GRM equals the share of rent that becomes NOI divided by the cap rate, so GRM and cap rate move in
              opposite directions.
            </strong>{' '}
            A building that keeps a larger share of its rent as NOI can justify a higher GRM at the same cap rate.
          </p>
          <Formula>GRM = (NOI ÷ Gross annual rent) ÷ Cap rate</Formula>
          <p>
            Building A keeps 63.7% of its gross rent as NOI. At that margin, here is the GRM that matches each cap rate:
          </p>
          <TableWrap>
            <table>
              <thead>
                <tr><th>Cap rate</th><th className="text-right">GRM at a 63.7% NOI margin</th></tr>
              </thead>
              <tbody>
                <tr><td>4.0%</td><td className="text-right">15.9</td></tr>
                <tr><td>5.0%</td><td className="text-right">12.7</td></tr>
                <tr><td>5.5%</td><td className="text-right">11.6</td></tr>
                <tr><td>6.0%</td><td className="text-right">10.6</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            This gives you a way to translate. If you know the cap rates buildings trade at in your city and roughly
            what share of rent your building keeps, you can work out the GRM a fair price implies. For more on cap
            rate, see <Link href="/learn/cap-rate-vs-cash-on-cash">cap rate vs. cash-on-cash return</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'good-grm',
      title: 'What is a good GRM?',
      body: (
        <>
          <p>
            <strong>
              A good GRM is one at or below what comparable buildings in the same market sell for. There is no single
              Canadian number, because GRMs vary widely by city and building type.
            </strong>{' '}
            Markets with low cap rates, such as Vancouver and Toronto, have high GRMs; markets with higher cap rates
            have lower ones.
          </p>
          <p>
            Rules of thumb such as “under 10 is good” come from markets and eras with higher cap rates. Applied to a
            city where buildings trade at a 4.5% cap rate, they would rule out almost every listing. A better approach
            is to work out the GRM of recent sales of similar buildings nearby and compare against that.
          </p>
          <p>
            A low GRM is not automatically a bargain. It can mean high expenses, an older building that needs work,
            weak demand or rents that are unusually high and may not last. Always ask why a building is cheaper per
            dollar of rent than its neighbours.
          </p>
        </>
      ),
    },
    {
      id: 'rent-increases',
      title: 'Using GRM to value a rent increase',
      body: (
        <>
          <p>
            <strong>
              Multiplying an annual rent increase by the GRM gives a quick, conservative estimate of how much value it
              adds.
            </strong>{' '}
            This is useful when deciding whether a unit renovation pays for itself.
          </p>
          <p>
            Say you plan to refresh two units at $8,000 each when they turn over and raise their rent from $1,750 to
            $1,950. That is $200 × 2 × 12 = <strong>$4,800</strong> a year of extra rent. At the building’s GRM of 11.6,
            that adds about $55,700 of value, or <strong>$39,700</strong> after the $16,000 cost.
          </p>
          <p>
            The GRM method is conservative because it assumes expenses rise in step with rent. A higher rent usually
            adds little cost, so the NOI method gives more: $4,464 of added NOI at a 5.49% cap rate is about $81,300.
            Treat the GRM figure as a floor and the cap rate figure as closer to what a buyer would pay. Where rent
            control applies, as in British Columbia and for most older units in Ontario, increases for sitting tenants
            are capped, so plan them around turnover.
          </p>
        </>
      ),
    },
    {
      id: 'grm-in-propstack',
      title: 'Modelling rent upside in PropStack',
      body: (
        <>
          <p>
            PropStack’s rent optimization tool lets you set a target rent and an optimization cost for each unit, then
            shows the monthly uplift, annual uplift and net value added using GRM. You choose which units to include,
            and the plan summary updates the total cost, net upside and new property value as you go.
          </p>
          <p>
            Every deal also shows NOI, cap rate, cash-on-cash return and DSCR, so you can check the full picture once a
            listing passes the GRM screen. <Link href={TRY_URL}>Try it on a listing</Link>, no account needed.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'Is a higher or lower GRM better?',
      answer:
        'For a buyer, lower is generally better: you pay less for each dollar of rent. But a low GRM can reflect high expenses, an older building or weak demand, so compare against similar buildings and check NOI before deciding.',
    },
    {
      question: 'What is the difference between GRM and cap rate?',
      answer:
        'GRM divides price by gross rent and ignores expenses. Cap rate divides net operating income by price, so it accounts for vacancy and operating costs. Cap rate is the more reliable measure; GRM is faster to calculate.',
    },
    {
      question: 'Is GRM the same as the gross income multiplier?',
      answer:
        'Nearly. GRM uses rent only, while the gross income multiplier (GIM) also includes other income such as parking, laundry and storage. On buildings with little other income, the two are almost the same.',
    },
    {
      question: 'Should I use monthly or annual rent?',
      answer:
        'Either works if you are consistent. Canadian investors usually use annual rent, giving GRMs in the range of roughly 8 to 20. A monthly GRM is 12 times larger.',
    },
    {
      question: 'Do lenders use GRM?',
      answer:
        'Rarely for loan decisions. Lenders on rental buildings size loans using NOI, loan-to-value and debt service coverage. Appraisers may refer to income multipliers for small rental properties alongside other methods.',
    },
  ],
  sources: [
    {
      title: 'Lesson 9: Multipliers, Derivation and Valuation (The Income Approach to Value)',
      publisher: 'California State Board of Equalization',
      url: 'https://www.boe.ca.gov/info/iav/lesson9cyk.htm',
    },
  ],
  related: ['what-is-noi', 'cap-rate-vs-cash-on-cash', 'how-to-analyze-a-multiplex-deal'],
};
