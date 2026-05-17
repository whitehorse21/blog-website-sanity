import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200/80 bg-[#FAF8F5]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(217, 119, 6, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(120, 113, 108, 0.06) 0%, transparent 40%)`,
        }}
      />
      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-800">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Editorial · Design · Culture
          </p>
          <h1 className="font-display mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-stone-900 sm:text-5xl lg:text-7xl">
            Stories crafted with{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">intention</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-amber-200/60 -rotate-1" aria-hidden />
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
            Inkwell is a modern publication for curious minds—exploring design, technology,
            culture, and the ideas that shape how we live and create.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/blog" variant="primary">
              Explore articles
            </Button>
            <Button href="/about" variant="outline">
              About Inkwell
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-stone-200/80 pt-12 sm:grid-cols-4 lg:mt-20">
          {[
            { value: "120+", label: "Published stories" },
            { value: "45k", label: "Monthly readers" },
            { value: "12", label: "Expert contributors" },
            { value: "5", label: "Editorial categories" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-2xl font-semibold text-stone-900 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-stone-500 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
