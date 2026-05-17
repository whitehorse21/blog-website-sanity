import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { mockAuthors } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Inkwell — our mission, team, and editorial standards.",
};

const values = [
  {
    title: "Depth over speed",
    description:
      "We publish fewer pieces, but each one is researched, edited, and designed to reward careful reading.",
  },
  {
    title: "Craft in every detail",
    description:
      "From typography to photography, we treat the reading experience as a design problem worth solving.",
  },
  {
    title: "Honest perspectives",
    description:
      "Our writers bring expertise and point of view. We label opinion clearly and correct errors transparently.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-stone-200/80 bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">About us</p>
            <h1 className="font-display mt-4 text-4xl font-semibold text-stone-900 sm:text-5xl lg:text-6xl">
              We believe stories shape how we see the world
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600 sm:text-xl">
              Inkwell launched in 2024 as an independent editorial studio—a place for designers,
              technologists, and culture writers to publish work that deserves more than a scroll.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Inkwell editorial studio"
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                decoding="async"
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
                <Button href="/blog" variant="secondary">
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
            {values.map((value) => (
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
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">The team</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-stone-900 sm:text-4xl">
              Meet our editors
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mockAuthors.map((author) => (
              <div
                key={author._id}
                className="group rounded-2xl border border-stone-200/80 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                {author.image?.asset?.url && (
                  <img
                    src={author.image.asset.url}
                    alt={author.name}
                    className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-stone-50"
                  />
                )}
                <h3 className="font-display mt-5 text-xl font-semibold text-stone-900">{author.name}</h3>
                {author.role && <p className="text-sm text-amber-700">{author.role}</p>}
                {author.bio && (
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{author.bio}</p>
                )}
              </div>
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
