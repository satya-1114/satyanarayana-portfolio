import { Compass, GraduationCap, Sparkles, Target } from "lucide-react";

import { Reveal, Section } from "@/components/site/Section";
import { aboutStory, principles, person, profileImage } from "@/data/portfolio";

const icons = [Target, Sparkles, Compass, GraduationCap];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={<>Engineering is a way of thinking, not a job title.</>}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)]">
        <div className="space-y-5">
          {aboutStory.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={i * 0.08}>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.24}>
            <div className="mt-8 rounded-2xl border border-border bg-surface/50 p-5 font-mono text-sm text-muted-foreground backdrop-blur">
              <span className="text-secondary">$</span> whoami
              <br />
              <span className="text-foreground">{person.name}</span> — B.Tech CSE ’27 ·{" "}
              {person.location}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img
              src={profileImage}
              alt="Satyanarayana Annamneedi at work"
              loading="lazy"
              decoding="async"
              width={480}
              height={480}
              className="aspect-square w-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-brand)] opacity-15 mix-blend-overlay" />
          </div>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2">
        {principles.map((principle, i) => {
          const Icon = icons[i % icons.length]!;
          return (
            <Reveal as="li" key={principle.title} delay={i * 0.06}>
              <div className="card-gradient h-full rounded-2xl p-6">
                <Icon className="h-5 w-5 text-secondary" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
