import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ROUTES } from "@/lib/constants";
import { cn, getCategoryColorClass } from "@/lib/utils";
import type { Category } from "@/types/blog";

interface CategoriesSectionProps {
  categories: Category[];
}

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <section className="border-y border-stone-200/80 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Browse by topic"
          title="Explore categories"
          action={{ label: "View all articles →", href: ROUTES.blog }}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={ROUTES.blogCategory(category.slug)}
              className="group relative overflow-hidden rounded-2xl border border-stone-200/80 bg-[#FAF8F5] p-6 transition-all duration-300 hover:border-stone-300 hover:shadow-md"
            >
              <span
                className={cn(
                  "inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
                  getCategoryColorClass(category.color),
                )}
              >
                {category.title}
              </span>
              <h3 className="font-display mt-4 text-xl font-semibold text-stone-900 transition-colors group-hover:text-amber-800">
                {category.title}
              </h3>
              {category.description && (
                <p className="mt-2 text-sm leading-relaxed text-stone-600 line-clamp-2">
                  {category.description}
                </p>
              )}
              <p className="mt-4 text-xs font-medium text-stone-400">
                {category.postCount ?? 0} articles
              </p>
              <span className="absolute bottom-6 right-6 text-2xl text-stone-200 transition-all group-hover:translate-x-1 group-hover:text-amber-400">
                →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
