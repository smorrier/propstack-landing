import { APP_URL, PRICE_CURRENCY, PRO_MONTHLY_PRICE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/constants';
import { AUTHORS, authorPath } from '@/lib/learn/authors';
import type { LearnAuthor } from '@/lib/learn/types';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** Short Organization reference for `publisher` fields on other pages. */
export const ORGANIZATION_REF = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.svg` },
};

/** The author page is the canonical home for each Person; every other mention reuses this `@id`. */
export function personJsonLd(author: LearnAuthor) {
  const url = `${SITE_URL}${authorPath(author.slug)}`;
  return {
    '@type': 'Person',
    '@id': `${url}#person`,
    name: author.name,
    jobTitle: author.role,
    description: author.bio[0],
    url,
    image: `${SITE_URL}${author.image}`,
    worksFor: { '@id': ORGANIZATION_ID },
    ...(author.sameAs.length > 0 && { sameAs: author.sameAs }),
  };
}

/** Organization + WebSite + SoftwareApplication for the homepage. Prices mirror the Pricing section. */
export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...ORGANIZATION_REF,
        description: SITE_DESCRIPTION,
        areaServed: { '@type': 'Country', name: 'Canada' },
        founder: AUTHORS.map(personJsonLd),
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: 'en-CA',
        publisher: { '@id': ORGANIZATION_ID },
      },
      {
        '@type': 'SoftwareApplication',
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: APP_URL,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        publisher: { '@id': ORGANIZATION_ID },
        offers: [
          { '@type': 'Offer', name: 'Starter', price: '0', priceCurrency: PRICE_CURRENCY },
          {
            '@type': 'Offer',
            name: 'Pro',
            price: String(PRO_MONTHLY_PRICE),
            priceCurrency: PRICE_CURRENCY,
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: PRO_MONTHLY_PRICE,
              priceCurrency: PRICE_CURRENCY,
              billingDuration: 'P1M',
            },
          },
        ],
      },
    ],
  };
}

/** JSON for a `<script type="application/ld+json">`, with `<` escaped so content can't close the tag. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
