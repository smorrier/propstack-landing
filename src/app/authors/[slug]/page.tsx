import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Label } from "@/components/ui/Label";
import { formatLearnDate } from "@/components/learn/ArticleView";
import { SITE_URL } from "@/lib/constants";
import { LEARN_ARTICLES } from "@/lib/learn/articles";
import { AUTHORS, authorPath, getAuthor } from "@/lib/learn/authors";
import { learnArticlePath } from "@/lib/learn/schema";
import { personJsonLd, serializeJsonLd } from "@/lib/schema";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return AUTHORS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const author = getAuthor((await params).slug);
  if (!author) return {};
  const path = authorPath(author.slug);
  const socialTitle = `${author.name}, ${author.role}`;
  const description = author.bio[0];
  return {
    title: author.name,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "profile",
      title: socialTitle,
      description,
      url: path,
      siteName: "PropStack",
      locale: "en_CA",
      images: [{ url: author.image, alt: author.name }],
    },
    twitter: { card: "summary", title: socialTitle, description, images: [{ url: author.image, alt: author.name }] },
  };
}

export default async function AuthorPage({ params }: { params: Promise<Params> }) {
  const author = getAuthor((await params).slug);
  if (!author) notFound();

  const articles = LEARN_ARTICLES.filter(
    (a) => a.author.slug === author.slug || a.reviewedBy?.slug === author.slug,
  );
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${SITE_URL}${authorPath(author.slug)}`,
    mainEntity: personJsonLd(author),
  };

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1160px] px-6 py-12 lg:py-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
        <div className="flex max-w-3xl flex-col gap-8 sm:flex-row sm:items-start">
          <Image
            src={author.image}
            alt={`Portrait of ${author.name}`}
            width={160}
            height={160}
            className="h-40 w-40 shrink-0 rounded-2xl object-cover object-top"
            priority
          />
          <div>
            <Label>About the author</Label>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-[2.4rem]">
              {author.name}
            </h1>
            <p className="mt-2 text-brand-teal">{author.role}</p>
            <div className="mt-5 space-y-4 text-[1.02rem] leading-[1.8] text-[#c3d0e0]">
              {author.bio.map((p) => <p key={p}>{p}</p>)}
            </div>
            {author.sameAs.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-4 text-sm">
                {author.sameAs.map((url) => (
                  <li key={url}>
                    <a href={url} rel="me noopener" target="_blank" className="text-accent-blue underline-offset-4 hover:underline">
                      {new URL(url).hostname.replace(/^www\./, "")}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {articles.length > 0 && (
          <section aria-labelledby="author-guides" className="mt-14 max-w-3xl">
            <h2 id="author-guides" className="text-xl font-bold tracking-tight text-white">
              Guides by {author.name.split(" ")[0]}
            </h2>
            <ul className="mt-4 divide-y divide-white/8 border-y border-white/8">
              {articles.map((a) => (
                <li key={a.slug} className="py-4">
                  <Link href={learnArticlePath(a.slug)} className="font-semibold text-white hover:text-accent-blue">
                    {a.title}
                  </Link>
                  <p className="mt-1 text-sm text-muted">
                    <time dateTime={a.updatedAt}>{formatLearnDate(a.updatedAt)}</time>
                    <span aria-hidden> · </span>
                    {a.readingMinutes} min read
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
