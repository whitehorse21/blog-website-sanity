import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { BackLink } from "@/components/blog/BackLink";
import { PostByline } from "@/components/blog/PostByline";
import { PostCard } from "@/components/blog/PostCard";
import { PostImage } from "@/components/blog/PostImage";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import { Badge } from "@/components/ui/Badge";
import { ROUTES } from "@/lib/constants";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/data";
import { section } from "@/lib/layout";

export const revalidate = 60;

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

  const relatedPosts = await getRelatedPosts(slug);

  return (
    <article>
      <header className={`relative border-b border-border bg-surface ${section.pyCompact}`}>
        <div className="pointer-events-none absolute inset-0 section-mesh opacity-20" aria-hidden />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {post.categories.map((cat) => (
                <Badge
                  key={cat._id}
                  label={cat.title}
                  href={ROUTES.blogCategory(cat.slug)}
                  color={cat.color}
                />
              ))}
            </div>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">{post.excerpt}</p>
            <PostByline
              author={post.author}
              publishedAt={post.publishedAt}
              readingTime={post.readingTime}
              avatarSize="md"
              className="mt-8 justify-center gap-4"
            />
          </div>
        </Container>
      </header>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="relative -mt-8 aspect-[21/9] overflow-hidden rounded-2xl shadow-xl sm:-mt-12 lg:rounded-3xl">
          <PostImage image={post.mainImage} alt={post.title} priority sizes="(max-width: 1200px) 100vw, 1024px" />
        </div>
      </div>

      <Container className={`bg-background ${section.pyCompact}`}>
        <div className="mx-auto max-w-3xl">
          {post.body && post.body.length > 0 ? (
            <PortableTextRenderer value={post.body} />
          ) : (
            <p className="text-lg text-muted-foreground">Content coming soon.</p>
          )}

          <div className="mt-14">
            <AuthorCard author={post.author} />
          </div>
        </div>
      </Container>

      {relatedPosts.length > 0 && (
        <section className={`border-t border-border bg-surface-muted ${section.pyCompact}`}>
          <Container>
            <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Related stories
            </h2>
            <div className={`mt-10 grid sm:grid-cols-2 lg:grid-cols-3 ${section.cardGrid}`}>
              {relatedPosts.map((related) => (
                <PostCard key={related._id} post={related} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <BackLink label="← Back to all articles" />
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
