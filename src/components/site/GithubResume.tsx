import { Download, FileText, Github, Star } from "lucide-react";

import { Reveal, Section } from "@/components/site/Section";
import { person, resumeUrl } from "@/data/portfolio";

const resumeHighlights = [
  "ATS-friendly, single-page format",
  "Java · Node.js · FastAPI · PostgreSQL · AWS",
  "3 shipped full-stack projects with measurable scope",
  "6 internships including AWS DevOps and IBM emerging tech",
];

export function GithubResume() {
  return (
    <Section
      id="resume"
      eyebrow="08 — Code & résumé"
      title="Read the code, then read the résumé."
      lede="Public repositories, contribution history and a one-page ATS-friendly document — everything a hiring loop needs before the first call."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <article className="card-gradient flex h-full flex-col rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Github className="h-6 w-6" aria-hidden />
              <div className="min-w-0">
                <h3 className="truncate text-lg font-semibold">github.com/{person.githubHandle}</h3>
                <p className="text-sm text-muted-foreground">Public repositories & contributions</p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface/60">
              <img
                src={`https://ghchart.rshah.org/6366F1/${person.githubHandle}`}
                alt={`GitHub contribution graph for ${person.githubHandle}`}
                loading="lazy"
                decoding="async"
                width={720}
                height={112}
                className="w-full p-4"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Primary languages", value: "Java · JS · Python" },
                { label: "Shipped projects", value: "3 full-stack" },
                { label: "Internships", value: "6 programmes" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border bg-surface/60 p-4">
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm font-medium">{stat.value}</p>
                </div>
              ))}
            </div>

            <a
              href={person.github}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 self-start rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/60"
            >
              <Star className="h-4 w-4" aria-hidden /> Browse repositories
            </a>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="card-gradient flex h-full flex-col rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6" aria-hidden />
              <div>
                <h3 className="text-lg font-semibold">Résumé</h3>
                <p className="text-sm text-muted-foreground">Updated for 2026 hiring cycles</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {resumeHighlights.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-border bg-surface/60 p-5 font-mono text-xs leading-relaxed text-muted-foreground">
              <p className="text-foreground">{person.name}</p>
              <p className="mt-1">
                {person.email} · {person.phone}
              </p>
              <p className="mt-3">
                Computer Science undergraduate (2027). Java · Spring Boot fundamentals · React ·
                FastAPI · Node.js · PostgreSQL · REST APIs · AWS.
              </p>
            </div>

            <a
              href={resumeUrl}
              download
              className="mt-auto inline-flex items-center gap-2 self-start rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" aria-hidden /> Download résumé
            </a>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
