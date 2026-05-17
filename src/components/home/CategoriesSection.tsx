import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ROUTES } from "@/lib/constants";
import { section } from "@/lib/layout";
import { cn, getCategoryColorClass } from "@/lib/utils";
import type { Category } from "@/types/blog";

interface CategoriesSectionProps {
  categories: Category[];
}

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <section className={`border-y border-border bg-background ${section.py}`}>
      <Container>
        <SectionHeader
          eyebrow="Browse by topic"
          title="Explore categories"
          action={{ label: "View all articles →", href: ROUTES.blog }}
        />

        <div className={`mt-12 grid sm:grid-cols-2 lg:grid-cols-3 ${section.cardGrid}`}>
          {categories.map((category) => (
            <Link
              key={category._id}
              href={ROUTES.blogCategory(category.slug)}
              className="editorial-card group relative overflow-hidden rounded-2xl p-7 transition-transform hover:-translate-y-0.5"
            >
              <span
                className={cn(
                  "inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
                  getCategoryColorClass(category.color),
                )}
              >
                {category.title}
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold text-foreground transition-colors group-hover:text-amber-700 dark:group-hover:text-amber-400">
                {category.title}
              </h3>
              {category.description && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {category.description}
                </p>
              )}
              <p className="mt-5 text-xs font-medium text-subtle-foreground">
                {category.postCount ?? 0} articles
              </p>
              <span
                className="absolute bottom-7 right-7 text-2xl text-border transition-all group-hover:translate-x-1 group-hover:text-amber-500"
                aria-hidden
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
