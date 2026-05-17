import { isSanityConfigured } from "../../../sanity/env";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/types/blog";
import { cn } from "@/lib/utils";

interface PostImageProps {
  image?: SanityImage;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

function getImageUrl(image?: SanityImage): string | null {
  if (!image?.asset?.url) return null;
  if (isSanityConfigured() && image.asset._id && !image.asset.url.includes("unsplash")) {
    return urlFor(image).width(1600).height(900).auto("format").url();
  }
  return image.asset.url;
}

export function PostImage({
  image,
  alt,
  fill = true,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: PostImageProps) {
  const src = getImageUrl(image);

  if (!src) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-stone-200 to-stone-300",
          fill && "absolute inset-0",
          className,
        )}
      >
        <span className="text-sm text-stone-500">No image</span>
      </div>
    );
  }

  const altText = image?.alt || alt;

  const imgProps = {
    src,
    alt: altText,
    sizes,
    decoding: "async" as const,
    fetchPriority: priority ? ("high" as const) : ("auto" as const),
    loading: priority ? ("eager" as const) : ("lazy" as const),
    // Extensions (e.g. privacy tools) may inject inline styles like filter: blur(3px) before hydration.
    suppressHydrationWarning: true,
  };

  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        {...imgProps}
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...imgProps}
      width={1600}
      height={900}
      className={cn("h-auto w-full object-cover", className)}
    />
  );
}
