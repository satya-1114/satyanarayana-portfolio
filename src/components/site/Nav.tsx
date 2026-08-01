import { Command as CommandIcon, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useTheme } from "@/hooks/use-theme";
import { navLinks, person, resumeUrl } from "@/data/portfolio";

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

/** Sticky glass navigation with theme toggle and a ⌘K command palette. */
export function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${
            scrolled ? "glass mx-4 sm:mx-6" : "mx-4 border border-transparent sm:mx-6"
          }`}
        >
          <a
            href="#top"
            className="flex min-w-0 items-center gap-3 font-display text-sm font-semibold tracking-tight"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-sm font-bold text-white">
              SA
            </span>
            <span className="hidden truncate sm:inline">{person.shortName}</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              aria-label="Open command palette"
              className="hidden items-center gap-2 rounded-lg border border-border px-2.5 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:flex"
            >
              <CommandIcon className="h-3.5 w-3.5" aria-hidden />K
            </button>
            <button
              type="button"
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" aria-hidden />
              ) : (
                <Moon className="h-4 w-4" aria-hidden />
              )}
            </button>
            <a
              href="#contact"
              className="hidden rounded-lg bg-[image:var(--gradient-brand)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:inline-block"
            >
              Hire me
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" aria-hidden />
              ) : (
                <Menu className="h-4 w-4" aria-hidden />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass mx-4 mt-2 rounded-2xl p-3 sm:mx-6 lg:hidden"
            >
              <ul className="grid gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <CommandDialog open={paletteOpen} onOpenChange={setPaletteOpen}>
        <CommandInput placeholder="Jump to a section, or open a profile…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Sections">
            {navLinks.map((link) => (
              <CommandItem
                key={link.href}
                value={link.label}
                onSelect={() => {
                  setPaletteOpen(false);
                  scrollTo(link.href);
                }}
              >
                {link.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Links">
            <CommandItem value="GitHub" onSelect={() => window.open(person.github, "_blank")}>
              <Github className="mr-2 h-4 w-4" aria-hidden /> GitHub
            </CommandItem>
            <CommandItem value="LinkedIn" onSelect={() => window.open(person.linkedin, "_blank")}>
              <Linkedin className="mr-2 h-4 w-4" aria-hidden /> LinkedIn
            </CommandItem>
            <CommandItem value="Download résumé" onSelect={() => window.open(resumeUrl, "_blank")}>
              Download résumé
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
