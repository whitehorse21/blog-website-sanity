import { Container } from "@/components/layout/Container";
import { section } from "@/lib/layout";

export function Newsletter() {
  return (
    <section className={`bg-background ${section.pyCompact}`}>
      <Container>
        <div className="inverted-band relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-600/10 blur-2xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Stay in the loop</h2>
            <p className="mt-5 text-base leading-relaxed text-inverted-muted sm:text-lg">
              Get our best stories delivered to your inbox every week. No spam, unsubscribe anytime.
            </p>
            <form className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-3" action="#" method="post">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-inverted bg-black/20 px-5 py-3.5 text-sm placeholder:text-inverted-muted focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              />
              <button
                type="submit"
                className="rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-amber-500"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-5 text-xs text-inverted-muted">
              Join 12,000+ readers. We respect your privacy.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
