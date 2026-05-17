import { isSanityConfigured } from "@/sanity/env";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/types/blog";

export interface ResolveImageUrlOptions {
  width?: number;
  height?: number;
}

function isExternalDemoUrl(url: string) {
  return url.includes("unsplash.com");
}

/** Builds a CDN URL for Sanity assets; passes through demo/external URLs unchanged. */
export function resolveImageUrl(
  image?: SanityImage | null,
  options: ResolveImageUrlOptions = {},
): string | null {
  const url = image?.asset?.url;
  if (!url) return null;

  const { width = 1600, height } = options;

  if (isSanityConfigured() && image.asset?._id && !isExternalDemoUrl(url)) {
    let builder = urlFor(image).width(width).auto("format");
    if (height) builder = builder.height(height);
    return builder.url();
  }

  return url;
}
