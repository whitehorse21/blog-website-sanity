import type { Post } from "@/types/blog";
import { unsplashPhotos, unsplashUrl } from "@/lib/unsplash";
import { mockAuthors } from "./authors";
import { mockCategories } from "./categories";
import { mockBody } from "./portable-text";

export const mockPosts: Post[] = [
  {
    _id: "post-1",
    title: "The Quiet Architecture of Thoughtful Interfaces",
    slug: "quiet-architecture-thoughtful-interfaces",
    excerpt:
      "Great digital products don't shout—they guide. We explore how restraint, rhythm, and intentional whitespace create experiences users trust.",
    publishedAt: "2026-05-10T09:00:00.000Z",
    featured: true,
    readingTime: 8,
    mainImage: {
      asset: { _id: "p1", url: unsplashUrl(unsplashPhotos.postInterfaces, 1600) },
      alt: "Minimal abstract interface design",
    },
    author: mockAuthors[0],
    categories: [mockCategories[0], mockCategories[1]],
    body: mockBody(),
  },
  {
    _id: "post-2",
    title: "Why Slow Journalism Still Matters in a Fast World",
    slug: "slow-journalism-fast-world",
    excerpt:
      "In an era of hot takes and algorithmic feeds, depth has become a radical act. Here's what we've learned from a year of long-form publishing.",
    publishedAt: "2026-05-07T14:30:00.000Z",
    featured: true,
    readingTime: 12,
    mainImage: {
      asset: { _id: "p2", url: unsplashUrl(unsplashPhotos.postJournalism, 1600) },
      alt: "Newspapers and reading glasses on a desk",
    },
    author: mockAuthors[1],
    categories: [mockCategories[2]],
    body: mockBody(),
  },
  {
    _id: "post-3",
    title: "Light Over Lisbon: A Photographer's Golden Hour",
    slug: "light-over-lisbon-golden-hour",
    excerpt:
      "From Alfama's winding alleys to the Tagus at dusk, Lisbon rewards patience. A visual essay on color, shadow, and the city's luminous geometry.",
    publishedAt: "2026-05-03T11:00:00.000Z",
    featured: true,
    readingTime: 6,
    mainImage: {
      asset: { _id: "p3", url: unsplashUrl(unsplashPhotos.postLisbon, 1600) },
      alt: "Lisbon cityscape at sunset",
    },
    author: mockAuthors[2],
    categories: [mockCategories[3], mockCategories[4]],
    body: mockBody(),
  },
  {
    _id: "post-4",
    title: "Building Design Systems That Teams Actually Use",
    slug: "design-systems-teams-actually-use",
    excerpt:
      "A design system is only as good as its adoption. Practical lessons from rolling out tokens, components, and documentation at scale.",
    publishedAt: "2026-04-28T08:00:00.000Z",
    featured: false,
    readingTime: 10,
    mainImage: {
      asset: { _id: "p4", url: unsplashUrl(unsplashPhotos.postDesignSystems, 1600) },
      alt: "Design system components on screen",
    },
    author: mockAuthors[0],
    categories: [mockCategories[0]],
    body: mockBody(),
  },
  {
    _id: "post-5",
    title: "The Ethics of AI-Assisted Creative Work",
    slug: "ethics-ai-assisted-creative-work",
    excerpt:
      "As generative tools reshape creative workflows, studios and solo practitioners face new questions about authorship, labor, and originality.",
    publishedAt: "2026-04-22T16:00:00.000Z",
    featured: false,
    readingTime: 9,
    mainImage: {
      asset: { _id: "p5", url: unsplashUrl(unsplashPhotos.postAiEthics, 1600) },
      alt: "Abstract AI neural network visualization",
    },
    author: mockAuthors[1],
    categories: [mockCategories[1], mockCategories[2]],
    body: mockBody(),
  },
  {
    _id: "post-6",
    title: "Tokyo After Midnight: Notes from a Sleepless City",
    slug: "tokyo-after-midnight",
    excerpt:
      "When the trains stop and neon hums low, Tokyo reveals another rhythm—izakayas, konbini lights, and conversations that stretch until dawn.",
    publishedAt: "2026-04-15T10:00:00.000Z",
    featured: false,
    readingTime: 7,
    mainImage: {
      asset: { _id: "p6", url: unsplashUrl(unsplashPhotos.postTokyo, 1600) },
      alt: "Tokyo street at night with neon signs",
    },
    author: mockAuthors[2],
    categories: [mockCategories[3], mockCategories[2]],
    body: mockBody(),
  },
  {
    _id: "post-7",
    title: "Typography as Voice: Choosing Fonts with Intention",
    slug: "typography-as-voice",
    excerpt:
      "Typefaces carry personality before a single word is read. A guide to pairing, hierarchy, and editorial tone for publication designers.",
    publishedAt: "2026-04-08T09:30:00.000Z",
    featured: false,
    readingTime: 5,
    mainImage: {
      asset: { _id: "p7", url: unsplashUrl(unsplashPhotos.postTypography, 1600) },
      alt: "Typography specimens and letterpress",
    },
    author: mockAuthors[0],
    categories: [mockCategories[0]],
    body: mockBody(),
  },
  {
    _id: "post-8",
    title: "Film Photography in the Digital Age: Why Grain Still Wins",
    slug: "film-photography-digital-age",
    excerpt:
      "Analog isn't nostalgia—it's a different way of seeing. Photographers share why they keep shooting film alongside their mirrorless kits.",
    publishedAt: "2026-04-01T13:00:00.000Z",
    featured: false,
    readingTime: 6,
    mainImage: {
      asset: { _id: "p8", url: unsplashUrl(unsplashPhotos.postFilm, 1600) },
      alt: "Vintage film cameras and polaroid photos",
    },
    author: mockAuthors[2],
    categories: [mockCategories[4]],
    body: mockBody(),
  },
];
