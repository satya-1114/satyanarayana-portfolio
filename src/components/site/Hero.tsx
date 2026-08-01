import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { heroStats, person, profileImage, resumeUrl } from "@/data/portfolio";

/** Cycling role typewriter used in the hero headline block. */
function Typewriter({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const done = !deleting && text === word;
    const cleared = deleting && text === "";

    const timeout = window.setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
          return;
        }
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      },
      done ? 1600 : deleting ? 35 : 70,
    );

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className="text-secondary">
      {text}
      <span className="caret ml-1 h-[0.9em] align-[-0.05em]" aria-hidden />
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            Open to Full Stack / Backend roles · 2027 graduate
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">Satyanarayana</span>
            <br />
            Annamneedi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-mono text-base sm:text-lg"
          >
            <span className="text-muted-foreground">const role = </span>
            <Typewriter words={person.roles} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {person.tagline} Java, Node.js, FastAPI, PostgreSQL and AWS — from the schema to the
            reverse proxy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              <Download
                className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                aria-hidden
              />
              Download résumé
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-primary/60"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Contact me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
          >
            <a
              href={person.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" aria-hidden /> {person.githubHandle}
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" aria-hidden /> {person.linkedinHandle}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden /> {person.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glow-ring relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-[image:var(--gradient-brand)] opacity-20" />
            <img
              src={profileImage}
              alt="Portrait of Satyanarayana Annamneedi"
              width={520}
              height={620}
              fetchPriority="high"
              decoding="async"
              className="relative aspect-[4/5] w-full object-cover object-top contrast-[1.05] saturate-[1.05]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="glass absolute -bottom-6 -left-4 rounded-2xl px-4 py-3 sm:-left-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
              Currently
            </p>
            <p className="mt-1 text-sm font-medium">AI/ML Intern · Infosys Springboard</p>
          </div>
        </motion.div>
      </div>

      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
      >
        {heroStats.map((stat) => (
          <div key={stat.label} className="bg-surface/70 px-5 py-6 backdrop-blur">
            <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
              {stat.label}
            </dt>
            <dd className="mt-2 font-display text-3xl font-semibold">{stat.value}</dd>
          </div>
        ))}
      </motion.dl>

      <div className="mt-14 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          Scroll
          <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden />
        </a>
      </div>
    </section>
  );
}
