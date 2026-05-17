import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { BlogPageHeader } from "@/components/blog/BlogPageHeader";
import { PostCard } from "@/components/blog/PostCard";
import { getCategories, getPostsByCategory } from "@/lib/data";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: "Category not found" };

  return {
    title: category.title,
    description: category.description || `Articles about ${category.title}`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const [categories, posts] = await Promise.all([getCategories(), getPostsByCategory(slug)]);
  const category = categories.find((c) => c.slug === slug);

  if (!category) notFound();

  return (
    <>
      <BlogPageHeader
        title={category.title}
        description={category.description}
        articleCount={posts.length}
        showBackLink
        categoryBadge={category}
        categories={categories}
        activeCategorySlug={slug}
      />

      <section className="py-14 sm:py-16">
        <Container>
          {posts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-stone-500">No articles in this category yet.</p>
          )}
        </Container>
      </section>
    </>
  );
}
