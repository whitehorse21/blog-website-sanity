import { Container } from "@/components/layout/Container";
import { BackLink } from "@/components/blog/BackLink";
import { CategoryNav } from "@/components/blog/CategoryNav";
import { section } from "@/lib/layout";
import { cn, formatArticleCount, getCategoryColorClass } from "@/lib/utils";
import type { Category } from "@/types/blog";

interface BlogPageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  articleCount?: number;
  categories?: Category[];
  activeCategorySlug?: string | null;
  showBackLink?: boolean;
  categoryBadge?: Category;
}

export function BlogPageHeader({
  eyebrow,
  title,
  description,
  articleCount,
  categories,
  activeCategorySlug,
  showBackLink = false,
  categoryBadge,
}: BlogPageHeaderProps) {
  return (
    <section className={`relative border-b border-border bg-surface ${section.pyCompact}`}>
      <div className="pointer-events-none absolute inset-0 section-mesh opacity-30" aria-hidden />
      <Container className="relative">
        {showBackLink && <BackLink className="mb-8 block" />}
        {categoryBadge && (
          <span
            className={cn(
              "inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
              getCategoryColorClass(categoryBadge.color),
            )}
          >
            Category
          </span>
        )}
        {eyebrow && !categoryBadge && (
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400">
            {eyebrow}
          </p>
        )}
        <h1
          className={cn(
            "font-display text-4xl font-semibold text-foreground sm:text-5xl",
            (eyebrow || categoryBadge) && "mt-3",
            categoryBadge && "mt-4",
          )}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        )}
        {articleCount != null && (
          <p className="mt-6 text-sm text-subtle-foreground">{formatArticleCount(articleCount)}</p>
        )}
        {categories && categories.length > 0 && (
          <CategoryNav
            categories={categories}
            activeSlug={activeCategorySlug}
            className="mt-12"
          />
        )}
      </Container>
    </section>
  );
}
