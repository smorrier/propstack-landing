import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { LEARN_PROSE } from "@/components/learn/blocks";
import { TRY_URL } from "@/lib/constants";
import { getLearnArticle } from "@/lib/learn/articles";
import { authorPath } from "@/lib/learn/authors";
import { learnArticlePath } from "@/lib/learn/schema";
import type { LearnArticle } from "@/lib/learn/types";

export function formatLearnDate(iso: string) {
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}

export function ArticleView({ article }: { article: LearnArticle }) {
  const related = article.related
    .map((slug) => getLearnArticle(slug))
    .filter((a): a is LearnArticle => Boolean(a));
  const updated = article.updatedAt !== article.publishedAt;
  const shownDate = updated ? article.updatedAt : article.publishedAt;

  return (
    <div className="mx-auto max-w-[1160px] px-6 py-12 lg:py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link href="/" className="hover:text-white">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/learn" className="hover:text-white">Guides</Link></li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-[#e2e8f0]">{article.shortTitle}</li>
        </ol>
      </nav>

      <header className="mt-8 max-w-3xl">
        <Label>PropStack guide</Label>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-balance text-white sm:text-[2.6rem]">
          {article.title}
        </h1>
        <p className="mt-5 text-lg text-muted text-pretty">{article.description}</p>
        <p className="mt-5 text-sm text-muted">
          By{" "}
          <Link href={authorPath(article.author.slug)} rel="author" className="font-semibold text-[#e2e8f0] hover:text-white">
            {article.author.name}
          </Link>
          , {article.author.role}
          {article.reviewedBy && (
            <>
              <span aria-hidden> · </span>
              Reviewed by{" "}
              <Link href={authorPath(article.reviewedBy.slug)} className="font-semibold text-[#e2e8f0] hover:text-white">
                {article.reviewedBy.name}
              </Link>
            </>
          )}
          <span aria-hidden> · </span>
          {updated ? "Updated " : "Published "}
          <time dateTime={shownDate}>{formatLearnDate(shownDate)}</time>
          <span aria-hidden> · </span>
          {article.readingMinutes} min read
        </p>
      </header>

      <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
        <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto">
          <nav aria-labelledby="learn-toc" className="rounded-xl border border-white/8 bg-canvas p-5 lg:border-0 lg:bg-transparent lg:p-0">
            <p id="learn-toc" className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">On this page</p>
            <ol className="mt-3 space-y-2 text-sm">
              {article.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted transition-colors hover:text-white">{s.title}</a>
                </li>
              ))}
              {article.faqs.length > 0 && (
                <li><a href="#faq" className="text-muted transition-colors hover:text-white">FAQ</a></li>
              )}
            </ol>
          </nav>
        </aside>

        <article className="max-w-3xl">
          <section aria-labelledby="takeaways" className="rounded-2xl border border-brand-teal/30 bg-brand-teal/10 p-6">
            <h2 id="takeaways" className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-teal">Key takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.98rem] leading-relaxed text-[#e2e8f0]">
              {article.summary.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </section>

          {article.sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-24 pt-12">
              <h2 id={`${s.id}-title`} className="text-2xl font-bold tracking-tight text-white">{s.title}</h2>
              <div className={LEARN_PROSE}>{s.body}</div>
            </section>
          ))}

          <div className="mt-12 rounded-2xl border border-white/8 bg-canvas p-7">
            <p className="text-xl font-bold text-white">Run these numbers on a real listing</p>
            <p className="mt-2 text-muted">
              Paste a listing link or enter a price and rents. PropStack calculates NOI, DSCR, cap rate and
              cash-on-cash with Canadian mortgage math. No account needed.
            </p>
            <Button href={TRY_URL} className="mt-5">Analyze a deal free</Button>
          </div>

          {article.faqs.length > 0 && (
            <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 pt-14">
              <h2 id="faq-title" className="text-2xl font-bold tracking-tight text-white">Frequently asked questions</h2>
              <div className="mt-4 divide-y divide-white/8 border-y border-white/8">
                {article.faqs.map((f) => (
                  <div key={f.question} className="py-5">
                    <h3 className="font-semibold text-white">{f.question}</h3>
                    <p className="mt-2 leading-[1.8] text-[#c3d0e0]">{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {article.sources.length > 0 && (
            <section aria-labelledby="sources-title" className="pt-12">
              <h2 id="sources-title" className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Sources</h2>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                {article.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} rel="noopener" target="_blank" className="text-accent-blue underline-offset-4 hover:underline">{s.title}</a>
                    {" "}— {s.publisher}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-5 text-muted">
                Examples are illustrative and rounded. Lender requirements change and vary by lender, property and
                borrower. This guide is general information, not financial or mortgage advice.
              </p>
            </section>
          )}

          {related.length > 0 && (
            <section aria-labelledby="related-title" className="mt-12 border-t border-white/8 pt-8">
              <h2 id="related-title" className="text-lg font-bold text-white">Keep reading</h2>
              <ul className="mt-3 space-y-2">
                {related.map((a) => (
                  <li key={a.slug}>
                    <Link href={learnArticlePath(a.slug)} className="text-accent-blue underline-offset-4 hover:underline">{a.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </div>
    </div>
  );
}
