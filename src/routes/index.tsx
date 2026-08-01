import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Background } from "@/components/site/Background";
import { Certifications } from "@/components/site/Certifications";
import { Contact, Footer } from "@/components/site/Contact";
import { Education } from "@/components/site/Education";
import { Experience } from "@/components/site/Experience";
import { GithubResume } from "@/components/site/GithubResume";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { Projects } from "@/components/site/Projects";
import { Research } from "@/components/site/Research";
import { Skills } from "@/components/site/Skills";
import { person, profileImage } from "@/data/portfolio";

const title = "Satyanarayana Annamneedi | Software Engineer";
const description =
  "Software Engineer specializing in Java, Full Stack Development, Cloud, and AI. Explore my projects, experience, certifications, and technical journey.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: person.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: profileImage, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: person.name,
          jobTitle: "Software Engineer",
          email: `mailto:${person.email}`,
          telephone: person.phone,
          url: "/",
          sameAs: [person.github, person.linkedin],
          address: {
            "@type": "PostalAddress",
            addressRegion: "Andhra Pradesh",
            addressCountry: "IN",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Bonam Venkata Chalamayya Engineering College",
          },
          knowsAbout: [
            "Java",
            "Node.js",
            "FastAPI",
            "React",
            "PostgreSQL",
            "AWS",
            "REST APIs",
            "Data Structures and Algorithms",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-dvh">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Background />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Research />
        <Certifications />
        <GithubResume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
