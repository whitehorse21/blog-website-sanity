import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { BlogPageHeader } from "@/components/blog/BlogPageHeader";
import { PostCard } from "@/components/blog/PostCard";
import { getCategories, getPosts } from "@/lib/data";
import { section } from "@/lib/layout";
import { formatArticleCount } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Articles",
  description: "Browse all stories on design, technology, culture, and more.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);

  return (
    <>
      <BlogPageHeader
        eyebrow="The journal"
        title="All articles"
        description="Deep dives, visual essays, and thoughtful perspectives from our editorial team and contributors."
        categories={categories}
        activeCategorySlug={null}
      />

      <section className={`bg-background ${section.pyCompact}`}>
        <Container>
          <p className="mb-10 text-sm text-subtle-foreground">{formatArticleCount(posts.length)}</p>
          <div className={`grid lg:grid-cols-2 ${section.cardGrid}`}>
            {posts.map((post, index) => (
              <PostCard
                key={post._id}
                post={post}
                variant={index < 2 ? "horizontal" : "default"}
                className={index >= 2 ? "lg:col-span-1" : ""}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
