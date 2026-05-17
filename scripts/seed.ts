/**
 * Seed Inkwell blog content into Sanity.
 *
 * Usage:
 *   npm run seed          # create or update seed documents
 *   npm run seed:clear    # remove seed documents, then seed
 *
 * Requires in .env or .env.local:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET
 *   SANITY_API_TOKEN (Editor permissions)
 */

import { createClient, type SanityClient } from "@sanity/client";
import { loadEnvFiles } from "../sanity/load-env";
import { mockAuthors, mockCategories, mockPosts } from "../src/lib/mock";
import { unsplashPhotos } from "../src/lib/unsplash";
import type { Post } from "../src/types/blog";

loadEnvFiles();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-05-17";
const token = process.env.SANITY_API_TOKEN;

const shouldClear = process.argv.includes("--clear");

function requireEnv() {
  if (!projectId || projectId === "your-project-id") {
    throw new Error("Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env or .env.local");
  }
  if (!token) {
    throw new Error(
      "Set SANITY_API_TOKEN in .env or .env.local (create at sanity.io/manage → API → Tokens, Editor role)",
    );
  }
}

function seedId(type: "author" | "category" | "post", slug: string) {
  return `seed-${type}-${slug}`;
}

function ref(id: string) {
  return { _type: "reference" as const, _ref: id };
}

function slugField(current: string) {
  return { _type: "slug" as const, current };
}

function collectSeedImageUrls(): string[] {
  const urls = new Set<string>();
  for (const author of mockAuthors) {
    if (author.image?.asset?.url) urls.add(author.image.asset.url);
  }
  for (const post of mockPosts) {
    if (post.mainImage?.asset?.url) urls.add(post.mainImage.asset.url);
  }
  return [...urls];
}

async function validateImageUrls(urls: string[]) {
  console.log(`Validating ${urls.length} image URL(s)...`);
  const failures: { url: string; status: number }[] = [];

  await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url, { method: "GET", redirect: "follow" });
      if (!response.ok) failures.push({ url, status: response.status });
    }),
  );

  if (failures.length > 0) {
    console.error("\nBroken image URLs:");
    for (const { url, status } of failures) {
      console.error(`  ${status} ${url}`);
    }
    console.error(
      "\nUpdate photo IDs in src/lib/unsplash.ts (see unsplashPhotos) and re-run seed.",
    );
    throw new Error(`${failures.length} image URL(s) returned errors`);
  }

  console.log("  ✓ All image URLs reachable\n");
}

async function uploadImageFromUrl(
  client: SanityClient,
  cache: Map<string, string>,
  url: string,
  filename: string,
): Promise<string> {
  const cached = cache.get(url);
  if (cached) return cached;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch image (${response.status}): ${url}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const asset = await client.assets.upload("image", buffer, { filename });
  cache.set(url, asset._id);
  return asset._id;
}

async function imageField(
  client: SanityClient,
  cache: Map<string, string>,
  url: string | undefined,
  alt: string,
  filename: string,
) {
  if (!url) return undefined;

  const assetId = await uploadImageFromUrl(client, cache, url, filename);
  return {
    _type: "image" as const,
    alt,
    asset: { _type: "reference" as const, _ref: assetId },
  };
}

async function clearSeedDocuments(client: SanityClient) {
  const ids = await client.fetch<string[]>(
    `*[_type in ["author", "category", "post"] && _id match "seed-*"]._id`,
  );

  if (ids.length === 0) {
    console.log("No existing seed documents to remove.");
    return;
  }

  console.log(`Removing ${ids.length} seed document(s)...`);
  const tx = client.transaction();
  for (const id of ids) {
    tx.delete(id);
    tx.delete(`drafts.${id}`);
  }
  await tx.commit();
}

async function seedAuthors(client: SanityClient, cache: Map<string, string>) {
  console.log("\nAuthors");
  for (const author of mockAuthors) {
    const id = seedId("author", author.slug);
    const doc = {
      _id: id,
      _type: "author",
      name: author.name,
      slug: slugField(author.slug),
      role: author.role,
      bio: author.bio,
      twitter: author.twitter,
      linkedin: author.linkedin,
      image: await imageField(
        client,
        cache,
        author.image?.asset?.url,
        author.image?.alt || author.name,
        `${author.slug}.jpg`,
      ),
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ ${author.name}`);
  }
}

async function seedCategories(client: SanityClient) {
  console.log("\nCategories");
  for (const category of mockCategories) {
    const id = seedId("category", category.slug);
    const doc = {
      _id: id,
      _type: "category",
      title: category.title,
      slug: slugField(category.slug),
      description: category.description,
      color: category.color,
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ ${category.title}`);
  }
}

async function seedPosts(client: SanityClient, cache: Map<string, string>) {
  console.log("\nPosts");
  for (const post of mockPosts) {
    await seedPost(client, cache, post);
  }
}

async function seedPost(client: SanityClient, cache: Map<string, string>, post: Post) {
  const id = seedId("post", post.slug);
  const authorId = seedId("author", post.author.slug);
  const categoryIds = post.categories.map((c) => seedId("category", c.slug));

  const doc = {
    _id: id,
    _type: "post",
    title: post.title,
    slug: slugField(post.slug),
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    featured: post.featured ?? false,
    readingTime: post.readingTime,
    author: ref(authorId),
    categories: categoryIds.map(ref),
    mainImage: await imageField(
      client,
      cache,
      post.mainImage?.asset?.url,
      post.mainImage?.alt || post.title,
      `${post.slug}.jpg`,
    ),
    body: post.body?.map((block, index) => ({
      ...block,
      _key: block._key || `block-${post.slug}-${index}`,
    })),
  };

  await client.createOrReplace(doc);
  console.log(`  ✓ ${post.title}`);
}

async function main() {
  requireEnv();

  const client = createClient({
    projectId: projectId!,
    dataset,
    apiVersion,
    token: token!,
    useCdn: false,
  });

  console.log(`Seeding Sanity project "${projectId}" / dataset "${dataset}"`);
  console.log(`Using ${Object.keys(unsplashPhotos).length} curated Unsplash photos\n`);

  await validateImageUrls(collectSeedImageUrls());

  if (shouldClear) {
    await clearSeedDocuments(client);
  }

  const imageCache = new Map<string, string>();

  await seedAuthors(client, imageCache);
  await seedCategories(client);
  await seedPosts(client, imageCache);

  console.log("\nDone! Open Studio to review content:");
  console.log("  npm run dev  →  http://localhost:3000/studio");
  console.log(`\nSeeded ${mockAuthors.length} authors, ${mockCategories.length} categories, ${mockPosts.length} posts.`);
}

main().catch((error) => {
  console.error("\nSeed failed:", error.message || error);
  process.exit(1);
});
