import { BookOpen, ExternalLink, FlaskConical, Github } from "lucide-react";

import { Reveal, Section } from "@/components/site/Section";
import { research } from "@/data/portfolio";

export function Research() {
  return (
    <Section
      id="research"
      eyebrow="06 — Research"
      title="Published work on tamper-proof news distribution."
    >
      <Reveal>
        <article className="card-gradient rounded-3xl p-6 sm:p-9">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)]">
              <FlaskConical className="h-5 w-5 text-white" aria-hidden />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-secondary">
              Peer-reviewed publication
            </p>
          </div>

          <h3 className="mt-6 text-balance font-display text-2xl font-semibold leading-snug sm:text-3xl">
            {research.title}
          </h3>

          <p className="mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {research.abstract}
          </p>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              { term: "Journal", value: research.journal },
              { term: "Issue", value: research.volume },
              { term: "Published", value: research.published },
              { term: "Impact factor", value: research.impactFactor },
            ].map((row) => (
              <div key={row.term} className="bg-surface/70 px-5 py-4 backdrop-blur">
                <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                  {row.term}
                </dt>
                <dd className="mt-1.5 text-sm">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <BookOpen className="h-4 w-4" aria-hidden /> {research.area}
            </span>
            <span className="text-muted-foreground">Co-authors: {research.coAuthors}</span>

            {/* Publication / Read Paper */}
            {research.publication ? (
              <a
                href={research.publication}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition transform hover:scale-105 hover:text-foreground"
              >
                <BookOpen className="h-4 w-4" aria-hidden />
                Read Paper
                <ExternalLink className="h-3.5 w-3.5 ml-1 text-muted-foreground" aria-hidden />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground opacity-70">
                <BookOpen className="h-4 w-4" aria-hidden />
                Publication (Coming Soon)
              </span>
            )}

            {/* Source code */}
            {research.repo ? (
              <a
                href={research.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition transform hover:scale-105 hover:text-foreground"
              >
                <Github className="h-4 w-4" aria-hidden />
                Source Code
                <ExternalLink className="h-3.5 w-3.5 ml-1 text-muted-foreground" aria-hidden />
              </a>
            ) : null}
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
