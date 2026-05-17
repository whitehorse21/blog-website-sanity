import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { BlogPageHeader } from "@/components/blog/BlogPageHeader";
import { PostCard } from "@/components/blog/PostCard";
import { getCategories, getPosts } from "@/lib/data";
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

      <section className="py-14 sm:py-16">
        <Container>
          <p className="mb-8 text-sm text-stone-500">{formatArticleCount(posts.length)}</p>
          <div className="grid gap-8 lg:grid-cols-2">
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
