import type { LearnAuthor } from './types';

export const SEAN_MORRIER: LearnAuthor = {
  slug: 'sean-morrier',
  name: 'Sean Morrier',
  role: 'Co-founder, PropStack',
  image: '/sean-morrier.png',
  bio: [
    'Sean Morrier is the co-founder and technical lead of PropStack, a deal analysis and portfolio platform for Canadian real estate investors.',
    'He started building PropStack after buying his first rental property and finding the process fragmented and hard to follow for a new investor.',
    'Sean writes PropStack’s guides to rental property metrics such as DSCR, cap rate and cash-on-cash return, and builds the calculations behind them in the PropStack calculator.',
  ],
  sameAs: [],
};

export const MICHAEL_SEDLEZKY: LearnAuthor = {
  slug: 'michael-sedlezky',
  name: 'Michael Sedlezky',
  role: 'Co-founder, PropStack',
  image: '/michael-sedlezky.jpg',
  bio: [
    'Michael Sedlezky is a co-founder of PropStack and an active real estate investor.',
    'After years of investing across multiple platforms that didn’t talk to each other, he set out to put deal analysis, documents and portfolio tracking in one place, built the way investors actually think.',
  ],
  sameAs: [],
};

export const AUTHORS: readonly LearnAuthor[] = [SEAN_MORRIER, MICHAEL_SEDLEZKY];

export function getAuthor(slug: string): LearnAuthor | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}

export function authorPath(slug: string): string {
  return `/authors/${slug}`;
}
