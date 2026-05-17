import type { Metadata } from "next";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ABOUT_HERO_IMAGE, aboutValues } from "@/lib/about-content";
import { ROUTES } from "@/lib/constants";
import { getAuthors } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Inkwell — our mission, team, and editorial standards.",
};

export default async function AboutPage() {
  const authors = await getAuthors();

  return (
    <>
      <section className="border-b border-stone-200/80 bg-white py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="About us"
            title="We believe stories shape how we see the world"
            description="Inkwell launched in 2024 as an independent editorial studio—a place for designers, technologists, and culture writers to publish work that deserves more than a scroll."
            align="center"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200 shadow-xl">
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
              <h2 className="font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
                An editorial studio for the curious
              </h2>
              <p className="mt-6 text-base leading-relaxed text-stone-600">
                We partner with practitioners—designers, engineers, photographers, and thinkers—who
                have something substantive to say. Our production process includes developmental
                editing, fact-checking, and art direction so every piece meets a high bar.
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Content is managed in Sanity CMS, giving our team a flexible, structured workflow
                while keeping the front end fast and beautiful with Next.js.
              </p>
              <div className="mt-8">
                <Button href={ROUTES.blog} variant="secondary">
                  Read our stories
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200/80 bg-stone-50 py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-center text-3xl font-semibold text-stone-900 sm:text-4xl">
            What we stand for
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {aboutValues.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-stone-200/80 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-amber-500" />
                <h3 className="font-display text-xl font-semibold text-stone-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="team" className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="The team"
            title="Meet our editors"
            align="center"
            className="justify-center"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {authors.map((author) => (
              <TeamMemberCard key={author._id} author={author} />
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="border-t border-stone-200/80 bg-stone-900 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Work with us
            </h2>
            <p className="mt-4 text-stone-400">
              Interested in contributing, partnering, or advertising? We&apos;d love to hear from you.
            </p>
            <a
              href="mailto:hello@inkwell.blog"
              className="mt-6 inline-block text-lg font-medium text-amber-400 transition-colors hover:text-amber-300"
            >
              hello@inkwell.blog
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
