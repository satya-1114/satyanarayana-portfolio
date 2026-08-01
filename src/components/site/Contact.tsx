import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Reveal, Section } from "@/components/site/Section";
import { person } from "@/data/portfolio";

/** Contact form composes a mailto: draft — no backend, no data retention. */
function ContactForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }

    setSending(true);
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    window.setTimeout(() => setSending(false), 1200);
  };

  return (
    <form onSubmit={onSubmit} className="card-gradient rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-input bg-surface/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            placeholder="Priya Sharma"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-input bg-surface/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full resize-y rounded-xl border border-input bg-surface/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          placeholder="We're hiring backend engineers for…"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        <Send className="h-4 w-4" aria-hidden /> {sending ? "Opening…" : "Send message"}
      </button>
    </form>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(person.email);
    setCopied(true);
    toast.success("Email copied to clipboard");
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section
      id="contact"
      eyebrow="09 — Contact"
      title="Let's talk about the role."
      lede="Available for full-time Full Stack / Backend positions from 2027, and for internships before that. I reply to every genuine message."
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
        <Reveal>
          <div className="space-y-3">
            <div className="card-gradient rounded-2xl p-5">
              <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                Email
              </p>
              <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <a
                  href={`mailto:${person.email}`}
                  className="truncate text-sm transition-colors hover:text-secondary"
                >
                  {person.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-secondary" aria-hidden />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden />
                  )}
                </button>
              </div>
            </div>

            {[
              {
                icon: Phone,
                label: "Phone",
                value: person.phone,
                href: `tel:${person.phone.replace(/\s/g, "")}`,
              },
              { icon: Github, label: "GitHub", value: person.githubHandle, href: person.github },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: person.linkedinHandle,
                href: person.linkedin,
              },
              { icon: MapPin, label: "Location", value: person.location },
            ].map((item) => (
              <div key={item.label} className="card-gradient rounded-2xl p-5">
                <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <item.icon className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      className="truncate text-sm transition-colors hover:text-secondary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="truncate text-sm">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-10 sm:flex sm:flex-wrap sm:justify-between sm:px-8">
        <div className="min-w-0">
          <p className="font-display text-sm font-semibold">{person.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Built with TanStack Start, React 19, TypeScript and Tailwind CSS v4.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={person.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={`mailto:${person.email}`}
            aria-label="Send an email"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-8 text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} {person.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
