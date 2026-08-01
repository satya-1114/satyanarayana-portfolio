import { Brain, Cloud, Code2, Database, Layout, Server } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Reveal, Section } from "@/components/site/Section";
import { skillGroups } from "@/data/portfolio";

const iconMap = { Code2, Layout, Server, Database, Cloud, Brain } as const;

export function Skills() {
  const reduced = useReducedMotion();

  return (
    <Section
      id="skills"
      eyebrow="04 — Skills"
      title="The toolkit, honestly rated."
      lede="Depth where it counts — APIs, data modelling and deployment — with enough frontend to own a feature from schema to screen."
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon as keyof typeof iconMap] ?? Code2;
          return (
            <Reveal as="li" key={group.category} delay={i * 0.05}>
              <div className="card-gradient h-full rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-muted/40">
                    <Icon className="h-4.5 w-4.5 text-secondary" aria-hidden />
                  </span>
                  <h3 className="truncate text-base font-semibold">{group.category}</h3>
                </div>

                <ul className="mt-6 space-y-4">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <span className="min-w-0 truncate text-muted-foreground">{skill.name}</span>
                        <span className="shrink-0 font-mono text-[0.7rem] text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted"
                        role="img"
                        aria-label={`${skill.name}: ${skill.level} percent proficiency`}
                      >
                        <motion.div
                          initial={reduced ? false : { width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-[image:var(--gradient-brand)]"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
