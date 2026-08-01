import { ArrowUpRight, Github, Layers, Lightbulb, ShieldAlert, Workflow, FileText, Globe, ExternalLink } from "lucide-react";
import { useState } from "react";

import { Reveal, Section } from "@/components/site/Section";
import { projects, type Project } from "@/data/portfolio";

function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="grid gap-6 border-t border-border pt-6 md:grid-cols-2">
      <div>
        <h4 className="flex items-center gap-2 text-sm font-semibold">
          <Workflow className="h-4 w-4 text-secondary" aria-hidden /> Architecture
        </h4>
        <ul className="mt-3 space-y-2">
          {project.architecture.map((item) => (
            <li key={item} className="text-sm leading-relaxed text-muted-foreground">
              — {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-6">
        <div>
          <h4 className="flex items-center gap-2 text-sm font-semibold">
            <ShieldAlert className="h-4 w-4 text-secondary" aria-hidden /> Hardest problem
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
        </div>
        <div>
          <h4 className="flex items-center gap-2 text-sm font-semibold">
            <Lightbulb className="h-4 w-4 text-secondary" aria-hidden /> What I took from it
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.learning}</p>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `case-${project.slug}`;

  return (
    <Reveal as="li" delay={index * 0.06}>
      <article className="card-gradient overflow-hidden rounded-3xl">
        <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} aria-hidden />
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 truncate font-display text-2xl font-semibold sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-secondary">{project.headline}</p>
            </div>
            <div
              aria-hidden
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${project.accent} font-display text-lg font-bold text-white`}
            >
              {project.name.slice(0, 1)}
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                Problem
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                Solution
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
              >
                {feature}
              </li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="font-mono text-[0.7rem] text-primary">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {/* Case study toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition transform hover:scale-105 hover:border-primary/60"
            >
              <FileText className="h-4 w-4" aria-hidden />
              {open ? "Hide case study" : " Case Study"}
            </button>

            {/* GitHub / Source */}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition transform hover:scale-105 hover:text-foreground"
              >
                <Github className="h-4 w-4" aria-hidden />
                 GitHub
                <ExternalLink className="h-3.5 w-3.5 ml-1 text-muted-foreground" aria-hidden />
              </a>
            ) : null}

            {/* Live demo (only if present) */}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition transform hover:scale-105 hover:text-foreground"
              >
                <Globe className="h-4 w-4" aria-hidden />
                 Live Demo
                <ExternalLink className="h-3.5 w-3.5 ml-1 text-muted-foreground" aria-hidden />
              </a>
            ) : null}
          </div>

          {open ? (
            <div id={panelId} className="mt-6">
              <CaseStudy project={project} />
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title="Five systems, built end to end."
      lede="Each one started as a problem statement, not a tutorial. Open a case study for the architecture, the hardest problem and what it taught me."
    >
      <ul className="space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </ul>
    </Section>
  );
}
