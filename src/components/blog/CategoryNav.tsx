import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { cn, getCategoryColorClass } from "@/lib/utils";
import type { Category } from "@/types/blog";

interface CategoryNavProps {
  categories: Category[];
  activeSlug?: string | null;
  className?: string;
}

export function CategoryNav({ categories, activeSlug = null, className }: CategoryNavProps) {
  const allActive = activeSlug === null;

  return (
    <nav className={cn("flex flex-wrap gap-2", className)} aria-label="Categories">
      <Link
        href={ROUTES.blog}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors",
          allActive
            ? "bg-foreground text-background"
            : "bg-surface-muted text-muted-foreground ring-1 ring-inset ring-border hover:bg-surface-elevated",
        )}
        aria-current={allActive ? "page" : undefined}
      >
        All
      </Link>
      {categories.map((cat) => {
        const isActive = activeSlug === cat.slug;
        return (
          <Link
            key={cat._id}
            href={ROUTES.blogCategory(cat.slug)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium ring-1 ring-inset transition-colors hover:opacity-90",
              isActive
                ? "bg-foreground text-background ring-foreground"
                : getCategoryColorClass(cat.color),
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {cat.title}
          </Link>
        );
      })}
    </nav>
  );
}
