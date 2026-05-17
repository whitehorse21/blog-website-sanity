import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PostCard } from "@/components/blog/PostCard";
import { getCategories, getPostsByCategory } from "@/lib/data";
import { getCategoryColorClass, cn } from "@/lib/utils";

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
      <section className="border-b border-stone-200/80 bg-white py-14 sm:py-18">
        <Container>
          <Link
            href="/blog"
            className="text-sm font-medium text-amber-700 transition-colors hover:text-amber-900"
          >
            ← All articles
          </Link>
          <span
            className={cn(
              "mt-6 inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
              getCategoryColorClass(category.color),
            )}
          >
            Category
          </span>
          <h1 className="font-display mt-4 text-4xl font-semibold text-stone-900 sm:text-5xl">
            {category.title}
          </h1>
          {category.description && (
            <p className="mt-4 max-w-2xl text-lg text-stone-600">{category.description}</p>
          )}
          <p className="mt-6 text-sm text-stone-500">
            {posts.length} {posts.length === 1 ? "article" : "articles"}
          </p>
        </Container>
      </section>

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
