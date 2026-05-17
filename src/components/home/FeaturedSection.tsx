import { Container } from "@/components/layout/Container";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { PostCard } from "@/components/blog/PostCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ROUTES } from "@/lib/constants";
import { section } from "@/lib/layout";
import type { Post } from "@/types/blog";

interface FeaturedSectionProps {
  featuredPosts: Post[];
  recentPosts: Post[];
}

export function FeaturedSection({ featuredPosts, recentPosts }: FeaturedSectionProps) {
  const [hero, ...sideFeatured] = featuredPosts;
  const gridPosts = recentPosts.filter((p) => p._id !== hero?._id).slice(0, 6);

  return (
    <section className={`border-b border-border bg-surface-muted ${section.py}`}>
      <Container>
        <SectionHeader
          eyebrow="Featured"
          title="Editor's picks"
          action={{ label: "See all stories →", href: ROUTES.blog }}
        />

        {hero && (
          <div className={`${section.headerMb} ${section.stack}`}>
            <FeaturedPost post={hero} size="hero" />
            {sideFeatured.length > 0 && (
              <div className={`grid sm:grid-cols-2 ${section.cardGrid}`}>
                {sideFeatured.slice(0, 2).map((post) => (
                  <FeaturedPost key={post._id} post={post} size="side" />
                ))}
              </div>
            )}
          </div>
        )}

        <div className={section.stack}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Latest articles
            </h3>
            <p className="text-sm text-subtle-foreground">Fresh from the editorial desk</p>
          </div>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 ${section.cardGrid}`}>
            {gridPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
