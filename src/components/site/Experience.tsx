import { BadgeCheck } from "lucide-react";

import { Reveal, Section } from "@/components/site/Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 — Experience"
      title="Six internships, one throughline: ship something real."
      lede="Cloud infrastructure at a state skill-development corporation, agentic AI with IBM, enterprise platforms with Salesforce and ServiceNow, and web engineering in production."
    >
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
        {experience.map((role, i) => (
          <Reveal as="li" key={`${role.company}-${role.role}`} delay={i * 0.05}>
            <span
              aria-hidden
              className="absolute -left-[7px] mt-6 h-3.5 w-3.5 rounded-full border-2 border-background bg-[image:var(--gradient-brand)]"
            />
            <article className="card-gradient rounded-2xl p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold sm:text-xl">{role.role}</h3>
                  <p className="mt-1 text-sm text-secondary">{role.company}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-mono text-xs text-muted-foreground">{role.period}</p>
                  {role.status ? (
                    <span className="mt-2 inline-block rounded-full border border-secondary/40 bg-secondary/10 px-2.5 py-0.5 text-[0.7rem] text-secondary">
                      {role.status}
                    </span>
                  ) : null}
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {role.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-border bg-muted/40 px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {role.credential ? (
                <p className="mt-4 font-mono text-[0.7rem] text-muted-foreground">
                  Credential · {role.credential}
                </p>
              ) : null}
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
