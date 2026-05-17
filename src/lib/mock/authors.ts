import type { Author } from "@/types/blog";
import { unsplashPhotos, unsplashUrl } from "@/lib/unsplash";

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
