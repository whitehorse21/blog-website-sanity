import type { Author, Category, Post } from "@/types/blog";
import { unsplashPhotos, unsplashUrl } from "./unsplash";

export const mockAuthors: Author[] = [
  {
    _id: "author-1",
    name: "Elena Vasquez",
    slug: "elena-vasquez",
    role: "Editor in Chief",
    bio: "Elena has spent fifteen years covering design, culture, and the craft of storytelling. She leads Inkwell's editorial vision.",
    image: { asset: { _id: "img-1", url: unsplashUrl(unsplashPhotos.authorElena, 400) }, alt: "Elena Vasquez" },
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
  {
    _id: "author-2",
    name: "Marcus Chen",
    slug: "marcus-chen",
    role: "Senior Writer",
    bio: "Marcus writes about technology, urban life, and the quiet revolutions shaping how we work and create.",
    image: { asset: { _id: "img-2", url: unsplashUrl(unsplashPhotos.authorMarcus, 400) }, alt: "Marcus Chen" },
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
  {
    _id: "author-3",
    name: "Amara Okafor",
    slug: "amara-okafor",
    role: "Contributing Editor",
    bio: "Amara explores photography, travel, and the intersections of place and identity across continents.",
    image: { asset: { _id: "img-3", url: unsplashUrl(unsplashPhotos.authorAmara, 400) }, alt: "Amara Okafor" },
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
];

export const mockCategories: Category[] = [
  {
    _id: "cat-1",
    title: "Design",
    slug: "design",
    description: "Visual craft, systems thinking, and the aesthetics of everyday objects.",
    color: "amber",
    postCount: 4,
  },
  {
    _id: "cat-2",
    title: "Technology",
    slug: "technology",
    description: "Tools, trends, and the human side of innovation.",
    color: "teal",
    postCount: 3,
  },
  {
    _id: "cat-3",
    title: "Culture",
    slug: "culture",
    description: "Stories that shape how we see ourselves and each other.",
    color: "rose",
    postCount: 3,
  },
  {
    _id: "cat-4",
    title: "Travel",
    slug: "travel",
    description: "Journeys near and far, with an eye for detail.",
    color: "violet",
    postCount: 2,
  },
  {
    _id: "cat-5",
    title: "Photography",
    slug: "photography",
    description: "Light, composition, and the art of seeing.",
    color: "sky",
    postCount: 2,
  },
];

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
    body: mockBody("interfaces"),
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
    body: mockBody("journalism"),
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
    body: mockBody("lisbon"),
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
    body: mockBody("design-systems"),
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
    body: mockBody("ai-ethics"),
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
    body: mockBody("tokyo"),
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
    body: mockBody("typography"),
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
    body: mockBody("film"),
  },
];

export function mockBody(_topic: string) {
  return [
    {
      _type: "block",
      _key: "b1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "s1",
          text: "Every great story begins with a question worth sitting with. Not the kind that demands an immediate answer, but the kind that reshapes how you notice the world on your walk home.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "b2",
      style: "h2",
      children: [
        {
          _type: "span",
          _key: "s2",
          text: "Finding the thread",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "b3",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "s3",
          text: "The best editorial work doesn't chase trends—it observes them with enough distance to understand what will endure. That discipline takes practice, and a newsroom culture that rewards curiosity over speed.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "b4",
      style: "blockquote",
      children: [
        {
          _type: "span",
          _key: "s4",
          text: "Clarity is a form of generosity. When you write clearly, you respect your reader's time and intelligence.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "b5",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "s5",
          text: "We've found that the pieces our audience returns to share a few qualities: specific detail, honest uncertainty, and a point of view that doesn't pretend to be neutral when it isn't. Those principles guide everything we publish at Inkwell.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "b6",
      style: "h3",
      children: [
        {
          _type: "span",
          _key: "s6",
          text: "What comes next",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "b7",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "s7",
          text: "As we continue this series, we'll bring in practitioners from design, technology, and culture to share their processes—not just their outcomes. If there's a topic you'd like us to explore, we'd love to hear from you.",
          marks: [],
        },
      ],
      markDefs: [],
    },
  ];
}
