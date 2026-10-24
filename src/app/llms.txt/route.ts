import { APP_URL, PRICE_CURRENCY, PRO_MONTHLY_PRICE, SITE_DESCRIPTION, SITE_URL, TRY_URL } from "@/lib/constants";
import { LEARN_ARTICLES } from "@/lib/learn/articles";
import { AUTHORS, authorPath } from "@/lib/learn/authors";
import { learnArticlePath } from "@/lib/learn/schema";

export const dynamic = "force-static";

/** Markdown site summary for AI assistants (https://llmstxt.org). Guides are listed from LEARN_ARTICLES, so it never drifts. */
export function GET() {
  const guides = LEARN_ARTICLES.map(
    (a) => `- [${a.title}](${SITE_URL}${learnArticlePath(a.slug)}): ${a.description}`,
  ).join("\n");
  const people = AUTHORS.map((a) => `- [${a.name}](${SITE_URL}${authorPath(a.slug)}): ${a.role}`).join("\n");

  const body = `# PropStack

> ${SITE_DESCRIPTION} It analyzes a deal under buy-and-hold, flip and BRRRR (buy, optimize, refinance) strategies side by side, using Canadian mortgage math.

PropStack is built for investors buying small and mid-size multiplexes in Canada. Enter a purchase price, rents and financing, and it calculates cash flow, NOI, cap rate, cash-on-cash return and DSCR, models rent increases unit by unit, and stores the documents, photos and notes for each property.

Unlike general-purpose or US-focused rental calculators, PropStack uses semi-annual compounding for fixed-rate mortgages, as Canadian lenders do, and its guides use Canadian lender rules and market benchmarks.

## Pricing

- Starter: free forever. Multi-strategy calculator, 4 deal profiles, side-by-side comparison.
- Pro: $${PRO_MONTHLY_PRICE} ${PRICE_CURRENCY} per month. Unlimited deals, portfolio dashboard, end-to-end deal tracking, analytics.

## Common questions PropStack answers

- How do I analyze a rental property in Canada?
- Is this multiplex a good deal, and which strategy (buy-and-hold, flip or BRRRR) works best for it?
- What DSCR do Canadian lenders require, and how much can I borrow on a rental building?
- What is the difference between cap rate and cash-on-cash return?

## Key pages

- [Home](${SITE_URL}): product overview, features and pricing
- [Try the calculator](${TRY_URL}): analyze a deal without an account
- [App](${APP_URL}): sign in or start a free trial
- [Guides](${SITE_URL}/learn): rental property investing guides for Canadian investors

## Guides

${guides}

## Authors

${people}
`;

  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
