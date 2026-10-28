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
 * City GRMs are derived, not observed: CBRE Q2 2026 low-rise Class B cap rate ranges divided into NOI ÷ gross rent of
 * 63.7% (this example's margin): GRM ≈ 0.637 ÷ cap rate.
 *   Vancouver 3.75–4.75% → 13.4–17.0 (mid 15.0) | Toronto 4.15–5.15% → 12.4–15.3 (mid 13.7)
 *   Montreal 4.25–4.50% → 14.2–15.0 (mid 14.6) | Calgary 5.00–5.50% → 11.6–12.7 (mid 12.1)
 *   At a 55% margin: Van 11.6–14.7, Tor 10.7–13.3, Mtl 12.2–12.9, Cgy 10.0–11.0. At 70%: Van 14.7–18.7, Tor 13.6–16.9, Mtl 15.6–16.5, Cgy 12.7–14.0.
 * Price of the $168,000-rent building at each mid GRM: Van 2,520,000, Tor 2,301,600, Mtl 2,452,800, Cgy 2,032,800.
 * Toronto 8-plex at 2,700,000 → GRM 16.1. Vancouver at 13.4 → 2.25M, at 17.0 → 2.86M. Vancouver 75% loan at 4.9%/25 yr
 * (constant 6.91%) vs 4.25% cap rate → DSCR ≈ 0.82.
 */
export const grossRentMultiplierArticle: LearnArticle = {
  slug: 'gross-rent-multiplier',
  title: 'What Is a Good Gross Rent Multiplier (GRM)? Formula and Canadian City Benchmarks',
  shortTitle: 'Gross rent multiplier',
  seoTitle: 'Good Gross Rent Multiplier by Canadian City',
  description:
    'A good GRM is a low one for your city: about 12 in Calgary, 14 in Toronto, 15 in Montréal and Vancouver. See the formula, city ranges and the cap rate link.',
  summary: [
    'The gross rent multiplier (GRM) is a property’s price divided by its gross annual rent. A lower GRM means you pay less for each dollar of rent.',
    'There is no single good GRM in Canada. Implied by CBRE’s Q2 2026 cap rates (derived, not observed sales), multiplex GRMs are about 12 in Calgary, 14 in Toronto and 15 in Montréal and Vancouver.',
    'An 8-unit building priced at $1,950,000 with $168,000 of annual rent has a GRM of 11.6, which is cheap for Vancouver and Montréal and about fair for Calgary.',
    'GRM ignores vacancy and operating expenses, so two buildings with the same GRM can have very different cap rates and values.',
    'GRM is best for quick screening and for estimating what a rent increase adds to value; use NOI and cap rate before you make an offer.',
  ],
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-28',
  author: SEAN_MORRIER,
  readingMinutes: 9,
  keywords: [
    'gross rent multiplier',
    'GRM',
    'GRM formula',
    'good GRM',
    'gross income multiplier',
    'GRM real estate Canada',
    'rent multiplier calculator',
    'what is a good gross rent multiplier',
    'good GRM Toronto',
    'good GRM Vancouver',
    'good GRM Calgary',
    'good GRM Montreal',
    'gross rent multiplier by city Canada',
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
      id: 'good-grm',
      title: 'What is a good gross rent multiplier?',
      body: (
        <>
          <p>
            <strong>
              A good gross rent multiplier is a low one for your city. Implied by CBRE’s Q2 2026 cap rates, multiplex
              GRMs are about 12 in Calgary, 14 in Toronto and 15 in Montréal and Vancouver.
            </strong>{' '}
            There is no single Canadian number, because GRMs vary widely by city and building type. Markets with low
            cap rates, such as Vancouver, Toronto and Montréal, have high GRMs; markets with higher cap rates, such as
            Calgary, have lower ones. The next section breaks it down by city.
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
      id: 'grm-by-city',
      title: 'GRM by city: Toronto, Vancouver, Calgary and Montréal',
      body: (
        <>
          <p>
            <strong>
              GRM climbs as cap rates fall: the cities where buyers accept the lowest cap rates, Vancouver, Toronto and
              Montréal, have multiples around 14 to 15, while Calgary sits near 12.
            </strong>{' '}
            Buyers pay more per dollar of rent where land and demand are more expensive.
          </p>
          <p>
            Brokers rarely publish GRM, so these figures are <strong>derived</strong>, not observed sale data. They
            take CBRE’s Q2 2026 cap rate range for low-rise Class B apartments (the closest category to a multiplex)
            and convert it with a simple relationship: GRM ≈ NOI as a share of gross rent ÷ cap rate. We use 63.7%, the
            ratio from our 8-unit example (NOI of $107,040 on $168,000 of gross rent). CBRE’s survey skews to larger,
            institutional-quality buildings, so small multiplexes can trade at different multiples. Data as of Q2 2026;
            we recalculate when CBRE publishes each quarter.
          </p>
          <TableWrap>
            <table>
              <caption>Implied GRM, low-rise Class B multifamily, Q2 2026</caption>
              <thead>
                <tr>
                  <th>City</th>
                  <th className="text-right">Cap rate (CBRE)</th>
                  <th className="text-right">Implied GRM range</th>
                  <th className="text-right">Midpoint</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Calgary</td><td className="text-right">5.00%–5.50%</td><td className="text-right">11.6–12.7</td><td className="text-right">12.1</td></tr>
                <tr><td>Toronto</td><td className="text-right">4.15%–5.15%</td><td className="text-right">12.4–15.3</td><td className="text-right">13.7</td></tr>
                <tr><td>Montréal</td><td className="text-right">4.25%–4.50%</td><td className="text-right">14.2–15.0</td><td className="text-right">14.6</td></tr>
                <tr><td>Vancouver</td><td className="text-right">3.75%–4.75%</td><td className="text-right">13.4–17.0</td><td className="text-right">15.0</td></tr>
              </tbody>
            </table>
          </TableWrap>
          <p>
            What that means in dollars: a building with the same $168,000 of rent would price at roughly $2.03
            million at Calgary’s midpoint, $2.30 million in Toronto, $2.45 million in Montréal and $2.52 million in
            Vancouver. That is about $490,000 more in Vancouver for identical rent.
          </p>
          <p>
            <strong>Treat these as a guide, not a quote.</strong> The 63.7% assumption matters. If a building keeps only
            55% of its rent as NOI (heat included in rent, older plant, high taxes), every GRM above drops by about
            14%; at 70% it rises by about 10%. Calgary’s range then runs from 10.0 to 14.0 on the same cap rates. A
            building’s own expenses move its GRM more than the city does at the edges, so always compare against recent
            sales of similar buildings.
          </p>
        </>
      ),
    },
    {
      id: 'grm-toronto',
      title: 'What is a good GRM in Toronto?',
      body: (
        <>
          <p>
            <strong>
              In Toronto, a multiplex GRM of about 12 to 15 is implied by CBRE’s Q2 2026 cap rates, with roughly 14 at
              the midpoint, and anything under 12 is a deal worth checking.
            </strong>{' '}
            CBRE’s low-rise Class B cap rates of 4.15% to 5.15% convert to a GRM of 12.4 to 15.3 at a 63.7%
            NOI-to-rent ratio.
          </p>
          <p>
            The width of the range is the point. The low end is typically a building with below-market rents, a
            suburban location or work needed. The high end is a well-located building where buyers pay up for
            rent-growth potential. A $2.3 million Toronto 8-plex at $168,000 of rent has a GRM of 13.7, in line with
            the market. At $2.7 million it has a GRM of 16.1, and the price has to be justified by something the rent
            roll doesn’t yet show.
          </p>
        </>
      ),
    },
    {
      id: 'grm-vancouver',
      title: 'What is a good GRM in Vancouver?',
      body: (
        <>
          <p>
            <strong>
              In Vancouver, a multiplex GRM of 13 to 17 is implied, the highest of the four cities, and a GRM near 13
              is the bargain end of the range.
            </strong>{' '}
            CBRE’s Q2 2026 cap rates of 3.75% to 4.75% imply 13.4 to 17.0 at a 63.7% NOI-to-rent ratio, with a midpoint
            of about 15.
          </p>
          <p>
            Because the multiple is already high, the gap between a fair price and a stretch is wide: at $168,000 of
            rent, 13.4 is $2.25 million and 17.0 is $2.86 million, a difference of over $600,000. Vancouver buyers
            are underwriting land value and long-term rent growth as much as today’s income, so DSCR often decides the
            offer. At a 15 GRM (a 4.25% cap rate), the NOI covers only about 0.8 times the payments on a 75% loan at
            4.9% over 25 years, so expect a larger down payment than the bank’s loan-to-value limit suggests. Check it
            against the <Link href="/learn/what-is-dscr">DSCR math</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'grm-calgary',
      title: 'What is a good GRM in Calgary?',
      body: (
        <>
          <p>
            <strong>
              In Calgary, a multiplex GRM of about 11.6 to 12.7 is implied, the lowest of the four cities, and a GRM
              under 11.5 deserves a closer look.
            </strong>{' '}
            CBRE’s Q2 2026 cap rates of 5.00% to 5.50% imply a GRM of 11.6 to 12.7, with a midpoint near 12.
          </p>
          <p>
            Calgary’s lower multiple comes with a trade-off: income, not appreciation, is the pitch, so the rent roll
            has to be solid. According to Yardi data reported by REMI Network, Calgary ended Q2 2026 with the highest
            average rental vacancy of the major markets, at 6.8%, and was the only one to record a year-over-year drop
            in average rent. A low GRM based on rents that are softening is cheaper on paper than in practice, so
            underwrite with a higher vacancy allowance than you would in Vancouver, where the same data showed 4.2%.
          </p>
        </>
      ),
    },
    {
      id: 'grm-montreal',
      title: 'What is a good GRM in Montréal?',
      body: (
        <>
          <p>
            <strong>
              In Montréal, a multiplex GRM of about 14 to 15 is implied by CBRE’s Q2 2026 cap rates, close to
              Vancouver’s.
            </strong>{' '}
            CBRE’s Q2 2026 cap rates of 4.25% to 4.50% are a narrow band, and they convert to a GRM of 14.2 to 15.0.
          </p>
          <p>
            Most Montréal plexes are two to five units and are priced off local sold comparables, so check any
            multiple against recent Centris sales before you rely on it. Two cautions apply. Where the owner pays for
            heat, or taxes are high relative to rent, the NOI-to-rent ratio falls, so a GRM of 14 can mean a thinner
            cap rate than it would elsewhere. And if in-place rents lag the market, today’s GRM overstates what you
            are really paying. Confirm both from the leases and the actual bills.
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
      question: 'What is a good gross rent multiplier?',
      answer:
        'There is no single good GRM, because it depends on the city. A lower GRM is better for a buyer. Based on CBRE’s Q2 2026 low-rise Class B cap rates, implied multiplex GRMs are about 12 in Calgary, 14 in Toronto, 15 in Montréal and 15 in Vancouver.',
    },
    {
      question: 'What is a good GRM in Toronto?',
      answer:
        'Roughly 12 to 15 for a multiplex in 2026, with a midpoint near 14, derived from CBRE’s Q2 2026 low-rise Class B cap rates of 4.15% to 5.15%, assuming NOI is about 64% of gross rent. A GRM under 12 is cheap for Toronto and worth checking for problems.',
    },
    {
      question: 'What is a good GRM in Vancouver?',
      answer:
        'About 13 to 17, with a midpoint near 15. Vancouver’s Q2 2026 low-rise cap rates of 3.75% to 4.75% (CBRE) are the lowest of the four big cities, so its multiples are the highest.',
    },
    {
      question: 'What is a good GRM in Calgary?',
      answer:
        'About 11.6 to 12.7, with a midpoint near 12. Calgary’s cap rates of 5.00% to 5.50% (CBRE, Q2 2026) are the highest of the four big cities, so its multiples are the lowest.',
    },
    {
      question: 'What is a good GRM in Montréal?',
      answer:
        'About 14 to 15 for a multiplex, based on CBRE’s Q2 2026 cap rates of 4.25% to 4.50%. Check who pays for heating and what the property taxes are, since both change how much of the rent becomes NOI.',
    },
    {
      question: 'Why is GRM higher in Toronto and Vancouver?',
      answer:
        'Buyers pay more per dollar of rent where land is expensive and demand is strong, which pushes cap rates down and GRM up.',
    },
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
      title: 'Canadian Cap Rates & Investment Insights, Q2 2026',
      publisher: 'CBRE (July 2026)',
      url: 'https://www.cbre.ca/insights/reports/canada-cap-rates-investment-insights-q2-2026',
    },
    {
      title: 'Multifamily rent growth rests on renewals',
      publisher: 'REMI Network (Yardi data, Q2 2026)',
      url: 'https://www.reminetwork.com/articles/multifamily-rent-growth-rests-on-renewals/',
    },
    {
      title: 'Lesson 9: Multipliers, Derivation and Valuation (The Income Approach to Value)',
      publisher: 'California State Board of Equalization',
      url: 'https://www.boe.ca.gov/info/iav/lesson9cyk.htm',
    },
  ],
  related: ['what-is-noi', 'cap-rate-vs-cash-on-cash', 'how-to-analyze-a-multiplex-deal'],
};
