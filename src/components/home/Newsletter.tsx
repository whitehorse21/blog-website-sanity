import { Container } from "@/components/layout/Container";

export function Newsletter() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-stone-900 px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-600/10 blur-2xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Stay in the loop
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-400 sm:text-lg">
              Get our best stories delivered to your inbox every week. No spam, unsubscribe anytime.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2" action="#" method="post">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-stone-700 bg-stone-800 px-5 py-3.5 text-sm text-white placeholder:text-stone-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              />
              <button
                type="submit"
                className="rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-amber-500"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-stone-500">
              Join 12,000+ readers. We respect your privacy.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
