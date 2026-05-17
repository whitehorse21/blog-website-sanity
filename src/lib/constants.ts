export const ROUTES = {
  home: "/",
  blog: "/blog",
  about: "/about",
  studio: "/studio",
  blogPost: (slug: string) => `/blog/${slug}`,
  blogCategory: (slug: string) => `/blog/category/${slug}`,
} as const;

/** ISR revalidation interval (seconds) for CMS-backed routes. */
export const CMS_REVALIDATE_SECONDS = 60;
