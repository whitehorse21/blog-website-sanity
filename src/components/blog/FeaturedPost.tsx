import Link from "next/link";
import { PostImage } from "./PostImage";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/types/blog";

interface FeaturedPostProps {
  post: Post;
  size?: "hero" | "side";
}

export function FeaturedPost({ post, size = "hero" }: FeaturedPostProps) {
  const primaryCategory = post.categories[0];
  const postHref = `/blog/${post.slug}`;

  if (size === "side") {
    return (
      <article className="group relative overflow-hidden rounded-2xl">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <PostImage image={post.mainImage} alt={post.title} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 sm:p-6">
          {primaryCategory && (
            <Badge label={primaryCategory.title} color={primaryCategory.color} className="mb-3" />
          )}
          <h3 className="font-display text-lg font-semibold leading-snug text-white sm:text-xl">
            {post.title}
          </h3>
          <p className="mt-2 text-xs text-stone-300">
            {post.author.name} · {formatDate(post.publishedAt)}
          </p>
        </div>
        <Link href={postHref} className="absolute inset-0 z-0 rounded-2xl" aria-label={post.title}>
          <span className="sr-only">{post.title}</span>
        </Link>
      </article>
    );
  }

  return (
    <article className="group relative overflow-hidden rounded-3xl bg-stone-900 shadow-2xl shadow-stone-900/20">
      <div className="relative aspect-[16/9] min-h-[420px] sm:aspect-[21/9] lg:min-h-[520px]">
        <PostImage
          image={post.mainImage}
          alt={post.title}
          priority
          sizes="100vw"
          className="opacity-90 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-stone-900/10" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6 sm:p-10 lg:p-12">
        <div className="max-w-3xl">
          {primaryCategory && (
            <Badge
              label={primaryCategory.title}
              href={`/blog/category/${primaryCategory.slug}`}
              color={primaryCategory.color}
              className="pointer-events-auto mb-4"
            />
          )}
          <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg line-clamp-2">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-stone-400">
            <span className="font-medium text-stone-200">{post.author.name}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {post.readingTime && (
              <>
                <span aria-hidden>·</span>
                <span>{post.readingTime} min read</span>
              </>
            )}
          </div>
        </div>
      </div>
      <Link href={postHref} className="absolute inset-0 z-0" aria-label={post.title}>
        <span className="sr-only">{post.title}</span>
      </Link>
    </article>
  );
}
