import type { Metadata } from "next";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ABOUT_HERO_IMAGE, aboutValues } from "@/lib/about-content";
import { ROUTES } from "@/lib/constants";
import { getAuthors } from "@/lib/data";
import { section } from "@/lib/layout";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Inkwell — our mission, team, and editorial standards.",
};

export default async function AboutPage() {
  const authors = await getAuthors();

  return (
    <>
      <section className={`relative border-b border-border bg-surface ${section.py}`}>
        <div className="pointer-events-none absolute inset-0 section-mesh opacity-25" aria-hidden />
        <Container className="relative">
          <SectionHeader
            eyebrow="About us"
            title="We believe stories shape how we see the world"
            description="Inkwell launched in 2024 as an independent editorial studio—a place for designers, technologists, and culture writers to publish work that deserves more than a scroll."
            align="center"
          />
        </Container>
      </section>

      <section className={`bg-background ${section.py}`}>
        <Container>
          <div className={`grid items-center lg:grid-cols-2 ${section.grid}`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface-muted shadow-xl ring-1 ring-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ABOUT_HERO_IMAGE}
                alt="Inkwell editorial studio"
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                decoding="async"
                suppressHydrationWarning
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                An editorial studio for the curious
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We partner with practitioners—designers, engineers, photographers, and thinkers—who
                have something substantive to say. Our production process includes developmental
                editing, fact-checking, and art direction so every piece meets a high bar.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Content is managed in Sanity CMS, giving our team a flexible, structured workflow
                while keeping the front end fast and beautiful with Next.js.
              </p>
              <div className="mt-10">
                <Button href={ROUTES.blog} variant="secondary">
                  Read our stories
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={`border-y border-border bg-surface-muted ${section.py}`}>
        <Container>
          <h2 className="font-display text-center text-3xl font-semibold text-foreground sm:text-4xl">
            What we stand for
          </h2>
          <div className={`mt-14 grid md:grid-cols-3 ${section.cardGrid}`}>
            {aboutValues.map((value) => (
              <div key={value.title} className="editorial-card rounded-2xl p-8">
                <div className="mb-5 h-1 w-12 rounded-full bg-amber-500" />
                <h3 className="font-display text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="team" className={`bg-background ${section.py}`}>
        <Container>
          <SectionHeader
            eyebrow="The team"
            title="Meet our editors"
            align="center"
            className="justify-center"
          />
          <div className={`mt-14 grid sm:grid-cols-2 lg:grid-cols-3 ${section.cardGrid}`}>
            {authors.map((author) => (
              <TeamMemberCard key={author._id} author={author} />
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className={`inverted-band border-t border-inverted ${section.py}`}>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Work with us</h2>
            <p className="mt-5 text-inverted-muted">
              Interested in contributing, partnering, or advertising? We&apos;d love to hear from you.
            </p>
            <a
              href="mailto:hello@inkwell.blog"
              className="mt-8 inline-block text-lg font-medium text-amber-400 transition-colors hover:text-amber-300"
            >
              hello@inkwell.blog
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
