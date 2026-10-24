import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Label } from "@/components/ui/Label";
import { formatLearnDate } from "@/components/learn/ArticleView";
import { SITE_URL } from "@/lib/constants";
import { LEARN_ARTICLES } from "@/lib/learn/articles";
import { SEAN_MORRIER, authorPath } from "@/lib/learn/authors";
import { learnArticlePath } from "@/lib/learn/schema";
import { ORGANIZATION_REF, serializeJsonLd } from "@/lib/schema";

const title = "Rental Property Investing Guides for Canada";
const description =
  "Plain-language guides to DSCR, cap rate, cash-on-cash return and other metrics Canadian multiplex investors use, with worked examples you can rerun.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/learn" },
  openGraph: { title, description, url: "/learn", type: "website", siteName: "PropStack", locale: "en_CA" },
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: `${SITE_URL}/learn`,
  inLanguage: "en-CA",
  publisher: ORGANIZATION_REF,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: LEARN_ARTICLES.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}${learnArticlePath(a.slug)}`,
      name: a.title,
    })),
  },
};

export default function LearnIndexPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1160px] px-6 py-12 lg:py-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
        <div className="max-w-3xl">
          <Label>PropStack guides</Label>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-balance text-white sm:text-[2.6rem]">
            Rental property metrics, explained for Canadian investors
          </h1>
          <p className="mt-5 text-lg text-muted text-pretty">
            How lenders and investors judge a multiplex: what each metric measures, how to calculate it, and what
            the numbers look like on a real Canadian deal.
          </p>
          <p className="mt-4 text-muted text-pretty">
            Canadian deals don’t run on US assumptions. Fixed-rate mortgages here compound semi-annually, most
            multiplex financing above five units goes through CMHC-insured or conventional commercial lenders with
            their own debt coverage rules, and cap rates vary widely between markets like Toronto, Calgary and
            Halifax. Each guide gives the formula in plain text, a worked example with Canadian numbers, the
            benchmarks lenders and investors actually use, and the sources behind them. Guides are written by{" "}
            <Link href={authorPath(SEAN_MORRIER.slug)} className="text-accent-blue underline-offset-4 hover:underline">
              {SEAN_MORRIER.name}
            </Link>
            , co-founder of PropStack, and dated so you can see when the numbers were last checked.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {LEARN_ARTICLES.map((a) => (
            <li key={a.slug}>
              <Link
                href={learnArticlePath(a.slug)}
                className="block h-full rounded-2xl border border-white/8 bg-canvas p-7 transition-colors hover:border-white/25"
              >
                <h2 className="text-xl font-bold tracking-tight text-white">{a.title}</h2>
                <p className="mt-3 text-muted">{a.description}</p>
                <p className="mt-5 text-sm text-muted">
                  <time dateTime={a.updatedAt}>{formatLearnDate(a.updatedAt)}</time>
                  <span aria-hidden> · </span>
                  {a.readingMinutes} min read
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
