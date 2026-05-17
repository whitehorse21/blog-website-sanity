import { Hero } from "@/components/home/Hero";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { Newsletter } from "@/components/home/Newsletter";
import { getCategories, getFeaturedPosts, getPosts } from "@/lib/data";

export const revalidate = 60;

export default async function HomePage() {
  const [featuredPosts, allPosts, categories] = await Promise.all([
    getFeaturedPosts(),
    getPosts(),
    getCategories(),
  ]);

  return (
    <>
      <Hero />
      <FeaturedSection featuredPosts={featuredPosts} recentPosts={allPosts} />
      <CategoriesSection categories={categories} />
      <Newsletter />
    </>
  );
}
