import { resolveImageUrl } from "@/sanity/lib/resolve-image-url";
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

export function PostImage({
  image,
  alt,
  fill = true,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: PostImageProps) {
  const src = resolveImageUrl(image, { width: 1600, height: 900 });
  const altText = image?.alt || alt;

  if (!src) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-surface-muted to-border",
          fill && "absolute inset-0",
          className,
        )}
      >
        <span className="text-sm text-subtle-foreground">No image</span>
      </div>
    );
  }

  const imgProps = {
    src,
    alt: altText,
    sizes,
    decoding: "async" as const,
    fetchPriority: priority ? ("high" as const) : ("auto" as const),
    loading: priority ? ("eager" as const) : ("lazy" as const),
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
