import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

/** Shared size for every opengraph-image / twitter-image route (the 1.91:1 card Facebook, LinkedIn and X expect). */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

// Brand colours, mirrored from the @theme tokens in src/app/globals.css.
const MIDNIGHT = '#0a192f';
const CANVAS = '#162032';
const BRAND_TEAL = '#0d9488';
const BRAND_BLUE = '#1d4ed8';
const MUTED = '#8ba3bf';

async function loadFonts() {
  const dir = join(process.cwd(), 'assets/fonts');
  const [regular, bold] = await Promise.all([
    readFile(join(dir, 'inter-latin-400-normal.woff')),
    readFile(join(dir, 'inter-latin-700-normal.woff')),
  ]);
  return [
    { name: 'Inter', data: regular, weight: 400 as const, style: 'normal' as const },
    { name: 'Inter', data: bold, weight: 700 as const, style: 'normal' as const },
  ];
}

type OgCardProps = {
  /** Small label above the headline, e.g. "PropStack guide". Omit for the site default card. */
  eyebrow?: string;
  headline: string;
  /** Font size for the headline; defaults to 64, or 52 for titles long enough to need a fourth line. */
  headlineSize?: number;
};

/** Renders the PropStack share card: wordmark top-left, headline, teal-to-blue accent bar along the bottom. */
export async function renderOgImage({ eyebrow, headline, headlineSize }: OgCardProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${MIDNIGHT} 55%, ${CANVAS} 100%)`,
          fontFamily: 'Inter',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', padding: '72px 80px 0' }}>
          <div style={{ display: 'flex', fontSize: 52, fontWeight: 700, letterSpacing: '-0.02em' }}>
            <span>Prop</span>
            <span style={{ color: BRAND_TEAL }}>Stack</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 80px', maxWidth: 1100 }}>
          {eyebrow && (
            <div
              style={{
                display: 'flex',
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: BRAND_TEAL,
                marginBottom: 24,
              }}
            >
              {eyebrow}
            </div>
          )}
          <div
            style={{
              display: 'flex',
              fontSize: headlineSize ?? (headline.length > 90 ? 52 : 64),
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              textWrap: 'balance',
            }}
          >
            {headline}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', padding: '0 80px 40px', fontSize: 24, color: MUTED }}>propstack.ca</div>
          <div
            style={{
              display: 'flex',
              height: 12,
              background: `linear-gradient(90deg, ${BRAND_TEAL} 0%, ${BRAND_BLUE} 100%)`,
            }}
          />
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await loadFonts() },
  );
}
