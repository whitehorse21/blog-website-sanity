import Link from "next/link";
import { PostImage } from "./PostImage";
import { Badge } from "@/components/ui/Badge";
import { formatShortDate } from "@/lib/utils";
import type { Post } from "@/types/blog";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  variant?: "default" | "horizontal" | "compact";
  className?: string;
}

export function PostCard({ post, variant = "default", className }: PostCardProps) {
  const primaryCategory = post.categories[0];

  if (variant === "horizontal") {
    return (
      <article
        className={cn(
          "group grid gap-6 overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:border-stone-300 hover:shadow-md sm:grid-cols-[200px_1fr] sm:p-5 lg:grid-cols-[280px_1fr]",
          className,
        )}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-auto sm:min-h-[180px]"
        >
          <PostImage image={post.mainImage} alt={post.title} sizes="280px" />
          <div className="absolute inset-0 bg-stone-900/0 transition-colors group-hover:bg-stone-900/10" />
        </Link>
        <PostCardContent post={post} primaryCategory={primaryCategory} />
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className={cn("group", className)}>
        <Link href={`/blog/${post.slug}`} className="flex gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
            <PostImage image={post.mainImage} alt={post.title} sizes="80px" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-base font-semibold leading-snug text-stone-900 transition-colors group-hover:text-amber-700 line-clamp-2">
              {post.title}
            </h3>
            <p className="mt-1 text-xs text-stone-500">{formatShortDate(post.publishedAt)}</p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:border-stone-300 hover:shadow-lg",
        className,
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-[16/10] overflow-hidden"
      >
        <PostImage image={post.mainImage} alt={post.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
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
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {primaryCategory && (
          <Badge
            label={primaryCategory.title}
            href={`/blog/category/${primaryCategory.slug}`}
            color={primaryCategory.color}
          />
        )}
        {post.readingTime && (
          <span className="text-xs text-stone-400">{post.readingTime} min read</span>
        )}
      </div>
      <Link href={`/blog/${post.slug}`}>
        <h3 className="font-display text-xl font-semibold leading-snug text-stone-900 transition-colors group-hover:text-amber-800 sm:text-2xl">
          {post.title}
        </h3>
      </Link>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
        <div className="flex items-center gap-2.5">
          {post.author.image?.asset?.url && (
            <img
              src={post.author.image.asset.url}
              alt={post.author.name}
              className="h-8 w-8 rounded-full object-cover ring-2 ring-stone-100"
              suppressHydrationWarning
            />
          )}
          <div>
            <p className="text-sm font-medium text-stone-800">{post.author.name}</p>
            <p className="text-xs text-stone-500">{formatShortDate(post.publishedAt)}</p>
          </div>
        </div>
        <span className="text-sm font-medium text-amber-700 opacity-0 transition-opacity group-hover:opacity-100">
          Read →
        </span>
      </div>
    </>
  );
}
