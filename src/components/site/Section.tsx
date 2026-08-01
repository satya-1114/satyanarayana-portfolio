import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Scroll-triggered reveal used by every section for a consistent motion language. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const reduced = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}

/** Consistent section shell: anchor id, eyebrow label, heading and lede. */
export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8", className)}
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">{eyebrow}</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {lede ? (
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            {lede}
          </p>
        ) : null}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
