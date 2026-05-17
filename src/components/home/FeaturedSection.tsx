import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { PostCard } from "@/components/blog/PostCard";
import type { Post } from "@/types/blog";

interface FeaturedSectionProps {
  featuredPosts: Post[];
  recentPosts: Post[];
}

export function FeaturedSection({ featuredPosts, recentPosts }: FeaturedSectionProps) {
  const [hero, ...sideFeatured] = featuredPosts;
  const gridPosts = recentPosts.filter((p) => p._id !== hero?._id).slice(0, 6);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
              Featured
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-stone-900 sm:text-4xl">
              Editor&apos;s picks
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-amber-700 transition-colors hover:text-amber-900"
          >
            See all stories →
          </Link>
        </div>

        {hero && (
          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="lg:col-span-2">
              <FeaturedPost post={hero} size="hero" />
            </div>
            {sideFeatured.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
                {sideFeatured.slice(0, 2).map((post) => (
                  <FeaturedPost key={post._id} post={post} size="side" />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-stone-900">Latest articles</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
