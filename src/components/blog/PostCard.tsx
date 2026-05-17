import Link from "next/link";
import { AuthorAvatar } from "./AuthorAvatar";
import { PostImage } from "./PostImage";
import { Badge } from "@/components/ui/Badge";
import { ROUTES } from "@/lib/constants";
import { cn, formatReadingTime, formatShortDate } from "@/lib/utils";
import type { Post } from "@/types/blog";

interface PostCardProps {
  post: Post;
  variant?: "default" | "horizontal" | "compact";
  className?: string;
}

const cardBase = "editorial-card overflow-hidden rounded-2xl";

export function PostCard({ post, variant = "default", className }: PostCardProps) {
  const primaryCategory = post.categories[0];
  const postHref = ROUTES.blogPost(post.slug);

  if (variant === "horizontal") {
    return (
      <article
        className={cn(
          "group grid gap-6 p-4 sm:grid-cols-[200px_1fr] sm:p-6 lg:grid-cols-[280px_1fr]",
          cardBase,
          className,
        )}
      >
        <Link
          href={postHref}
          className="relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-auto sm:min-h-[180px]"
        >
          <PostImage image={post.mainImage} alt={post.title} sizes="280px" />
          <div
            className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/5"
            aria-hidden
          />
        </Link>
        <PostCardContent post={post} primaryCategory={primaryCategory} />
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className={cn("group", className)}>
        <Link href={postHref} className="flex gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg ring-1 ring-border">
            <PostImage image={post.mainImage} alt={post.title} sizes="80px" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-amber-700 dark:group-hover:text-amber-400 line-clamp-2">
              {post.title}
            </h3>
            <p className="mt-1.5 text-xs text-subtle-foreground">{formatShortDate(post.publishedAt)}</p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className={cn("group flex flex-col", cardBase, className)}>
      <Link href={postHref} className="relative aspect-[16/10] overflow-hidden">
        <PostImage image={post.mainImage} alt={post.title} />
        <div
          className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <PostCardContent post={post} primaryCategory={primaryCategory} />
      </div>
    </article>
  );
}

function PostCardContent({
  post,
  primaryCategory,
}: {
  post: Post;
  primaryCategory?: Post["categories"][0];
}) {
  return (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {primaryCategory && (
          <Badge
            label={primaryCategory.title}
            href={ROUTES.blogCategory(primaryCategory.slug)}
            color={primaryCategory.color}
          />
        )}
        {post.readingTime && (
          <span className="text-xs text-subtle-foreground">{formatReadingTime(post.readingTime)}</span>
        )}
      </div>
      <Link href={ROUTES.blogPost(post.slug)}>
        <h3 className="font-display text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-amber-800 dark:group-hover:text-amber-400 sm:text-2xl">
          {post.title}
        </h3>
      </Link>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {post.excerpt}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
        <div className="flex items-center gap-3">
          <AuthorAvatar author={post.author} size="sm" />
          <div>
            <p className="text-sm font-medium text-foreground">{post.author.name}</p>
            <p className="text-xs text-subtle-foreground">{formatShortDate(post.publishedAt)}</p>
          </div>
        </div>
        <span className="text-sm font-medium text-amber-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-amber-400">
          Read →
        </span>
      </div>
    </>
  );
}
