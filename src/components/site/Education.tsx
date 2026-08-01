import { GraduationCap } from "lucide-react";

import { Reveal, Section } from "@/components/site/Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="05 — Education"
      title="A steady academic record, verified end to end."
      lede="Every figure below is taken from the official DigiLocker certificates and the JNTUK online result sheet."
    >
      <ol className="space-y-4">
        {education.map((item, i) => (
          <Reveal as="li" key={item.institution} delay={i * 0.06}>
            <article className="card-gradient rounded-2xl p-6 sm:p-7">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
                <div className="flex min-w-0 items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-muted/40">
                    <GraduationCap className="h-5 w-5 text-secondary" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{item.qualification}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
                  <p className="mt-2 font-display text-lg font-semibold text-gradient">
                    {item.score}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
