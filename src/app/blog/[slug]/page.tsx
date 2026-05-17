import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PostImage } from "@/components/blog/PostImage";
import { PostCard } from "@/components/blog/PostCard";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { Badge } from "@/components/ui/Badge";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const categoryIds = post.categories.map((c) => c._id);
  const relatedPosts = await getRelatedPosts(slug, categoryIds);

  return (
    <article>
      <header className="border-b border-stone-200/80 bg-white">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {post.categories.map((cat) => (
                <Badge
                  key={cat._id}
                  label={cat.title}
                  href={`/blog/category/${cat.slug}`}
                  color={cat.color}
                />
              ))}
            </div>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600 sm:text-xl">{post.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-stone-500">
              <div className="flex items-center gap-2">
                {post.author.image?.asset?.url && (
                  <img
                    src={post.author.image.asset.url}
                    alt={post.author.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-stone-100"
                  />
                )}
                <span className="font-medium text-stone-800">{post.author.name}</span>
              </div>
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
        </Container>
      </header>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="relative -mt-8 aspect-[21/9] overflow-hidden rounded-2xl shadow-xl sm:-mt-12 lg:rounded-3xl">
          <PostImage image={post.mainImage} alt={post.title} priority sizes="(max-width: 1200px) 100vw, 1024px" />
        </div>
      </div>

      <Container className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl">
          {post.body && post.body.length > 0 ? (
            <PortableTextRenderer value={post.body} />
          ) : (
            <p className="text-lg text-stone-600">Content coming soon.</p>
          )}

          <div className="mt-14">
            <AuthorCard author={post.author} />
          </div>
        </div>
      </Container>

      {relatedPosts.length > 0 && (
        <section className="border-t border-stone-200/80 bg-stone-50 py-14 sm:py-16">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-stone-900 sm:text-3xl">
              Related stories
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <PostCard key={related._id} post={related} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="text-sm font-medium text-amber-700 transition-colors hover:text-amber-900"
              >
                ← Back to all articles
              </Link>
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
