import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { section } from "@/lib/layout";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="pointer-events-none absolute inset-0 section-mesh" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <Container className={`relative ${section.py}`}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface-elevated px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
            Editorial · Design · Culture
          </p>
          <h1 className="font-display mt-10 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:mt-12 sm:text-5xl lg:text-7xl">
            Stories crafted with{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 text-amber-700 dark:text-amber-400">intention</span>
              <span
                className="absolute -bottom-2 left-0 right-0 h-4 -rotate-1 rounded-sm bg-amber-200/70 dark:bg-amber-500/25"
                aria-hidden
              />
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
            Inkwell is a modern publication for curious minds—exploring design, technology,
            culture, and the ideas that shape how we live and create.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Button href="/blog" variant="primary">
              Explore articles
            </Button>
            <Button href="/about" variant="outline">
              About Inkwell
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-14 sm:grid-cols-4 lg:mt-24 lg:gap-10 lg:pt-16">
          {[
            { value: "120+", label: "Published stories" },
            { value: "45k", label: "Monthly readers" },
            { value: "12", label: "Expert contributors" },
            { value: "5", label: "Editorial categories" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-subtle-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
