import { Award, ShieldCheck, Trophy } from "lucide-react";
import { useState } from "react";

import { Reveal, Section } from "@/components/site/Section";
import { achievements, certifications, type Certification } from "@/data/portfolio";

const categories: (Certification["category"] | "All")[] = [
  "All",
  "Engineering",
  "Cloud & Platforms",
  "AI",
  "Academic",
  "Recognition",
];

export function Certifications() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const visible =
    filter === "All" ? certifications : certifications.filter((c) => c.category === filter);

  return (
    <Section
      id="certifications"
      eyebrow="07 — Certifications & achievements"
      title="Twenty-plus credentials, all verifiable."
      lede="Sourced directly from the certificate PDFs — issuer, date and credential ID included wherever the document provides one."
    >
      <Reveal>
        <ul
          className="mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Certification category"
        >
          {categories.map((category) => (
            <li key={category}>
              <button
                type="button"
                role="tab"
                aria-selected={filter === category}
                onClick={() => setFilter(category)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  filter === category
                    ? "border-transparent bg-[image:var(--gradient-brand)] text-white"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </Reveal>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((cert, i) => (
          <Reveal as="li" key={cert.name} delay={Math.min(i, 8) * 0.04}>
            <article className="card-gradient flex h-full flex-col rounded-2xl p-5">
              <div className="flex items-start justify-between gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-secondary" aria-hidden />
                <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                  {cert.category}
                </span>
              </div>
              <h3 className="mt-4 text-pretty text-base font-semibold leading-snug">{cert.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
              <div className="mt-auto pt-4 font-mono text-[0.7rem] text-muted-foreground">
                {cert.date ? <p>{cert.date}</p> : null}
                {cert.credential ? <p className="mt-1 break-all">ID · {cert.credential}</p> : null}
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      <div className="mt-16">
        <Reveal>
          <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
            <Trophy className="h-5 w-5 text-secondary" aria-hidden /> Highlights
          </h3>
        </Reveal>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.05}>
              <div className="glass h-full rounded-2xl p-5">
                <Award className="h-5 w-5 text-primary" aria-hidden />
                <h4 className="mt-3 font-semibold">{item.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
