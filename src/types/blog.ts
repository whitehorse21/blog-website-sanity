import type { PortableTextBlock } from "@portabletext/types";

export interface SanityImage {
  asset?: { _id: string; url: string };
  alt?: string;
}

export interface Author {
  _id: string;
  name: string;
  slug: string;
  role?: string;
  bio?: string;
  image?: SanityImage;
  twitter?: string;
  linkedin?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  color?: string;
  postCount?: number;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  featured?: boolean;
  readingTime?: number;
  mainImage?: SanityImage;
  author: Author;
  categories: Category[];
  body?: PortableTextBlock[];
}
