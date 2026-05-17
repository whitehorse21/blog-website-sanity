import { Container } from "@/components/layout/Container";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { PostCard } from "@/components/blog/PostCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ROUTES } from "@/lib/constants";
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
        <SectionHeader
          eyebrow="Featured"
          title="Editor's picks"
          action={{ label: "See all stories →", href: ROUTES.blog }}
        />

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
