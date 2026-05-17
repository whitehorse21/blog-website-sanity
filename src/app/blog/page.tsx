import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PostCard } from "@/components/blog/PostCard";
import { getCategories, getPosts } from "@/lib/data";
import { cn, getCategoryColorClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Articles",
  description: "Browse all stories on design, technology, culture, and more.",
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);

  return (
    <>
      <section className="border-b border-stone-200/80 bg-white py-14 sm:py-18">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
            The journal
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold text-stone-900 sm:text-5xl lg:text-6xl">
            All articles
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            Deep dives, visual essays, and thoughtful perspectives from our editorial team and
            contributors.
          </p>

          <nav className="mt-10 flex flex-wrap gap-2" aria-label="Categories">
            <Link
              href="/blog"
              className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-50"
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/blog/category/${cat.slug}`}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium ring-1 ring-inset transition-colors hover:opacity-90",
                  getCategoryColorClass(cat.color),
                )}
              >
                {cat.title}
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <p className="mb-8 text-sm text-stone-500">
            {posts.length} {posts.length === 1 ? "article" : "articles"}
          </p>
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
