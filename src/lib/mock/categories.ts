import type { Category } from "@/types/blog";

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
