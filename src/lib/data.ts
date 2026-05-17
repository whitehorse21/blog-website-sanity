import { isSanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/client";
import {
  authorsQuery,
  categoriesQuery,
  featuredPostsQuery,
  postBySlugQuery,
  postSlugsQuery,
  postsByCategoryQuery,
  postsQuery,
  relatedPostsQuery,
} from "@/sanity/lib/queries";
import { mockAuthors, mockCategories, mockPosts } from "@/lib/mock";
import type { Author, Category, Post } from "@/types/blog";

function featuredMockPosts() {
  return mockPosts.filter((p) => p.featured).slice(0, 3);
}

export async function getPosts(): Promise<Post[]> {
  if (!isSanityConfigured()) return mockPosts;
  return client.fetch(postsQuery);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  if (!isSanityConfigured()) return featuredMockPosts();
  const posts = await client.fetch<Post[]>(featuredPostsQuery);
  return posts.length > 0 ? posts : featuredMockPosts();
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSanityConfigured()) {
    return mockPosts.find((p) => p.slug === slug) ?? null;
  }
  return client.fetch(postBySlugQuery, { slug });
}

export async function getPostSlugs(): Promise<string[]> {
  if (!isSanityConfigured()) {
    return mockPosts.map((p) => p.slug);
  }
  const slugs = await client.fetch<{ slug: string }[]>(postSlugsQuery);
  return slugs.map((s) => s.slug);
}

export async function getCategories(): Promise<Category[]> {
  if (!isSanityConfigured()) return mockCategories;
  return client.fetch(categoriesQuery);
}

export async function getAuthors(): Promise<Author[]> {
  if (!isSanityConfigured()) return mockAuthors;
  return client.fetch(authorsQuery);
}

export async function getPostsByCategory(slug: string): Promise<Post[]> {
  if (!isSanityConfigured()) {
    return mockPosts.filter((p) => p.categories.some((c) => c.slug === slug));
  }
  return client.fetch(postsByCategoryQuery, { slug });
}

export async function getRelatedPosts(slug: string): Promise<Post[]> {
  if (!isSanityConfigured()) {
    const current = mockPosts.find((p) => p.slug === slug);
    if (!current) return [];
    return mockPosts
      .filter(
        (p) =>
          p.slug !== slug &&
          p.categories.some((c) => current.categories.some((cc) => cc._id === c._id)),
      )
      .slice(0, 3);
  }
  return client.fetch(relatedPostsQuery, { slug });
}
