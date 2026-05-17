import { resolveImageUrl } from "@/sanity/lib/resolve-image-url";
import type { SanityImage } from "@/types/blog";
import { cn } from "@/lib/utils";

interface ContentImageProps {
  image: SanityImage;
  alt?: string;
  caption?: string;
  width?: number;
  sizes?: string;
  aspectClassName?: string;
  className?: string;
}

export function ContentImage({
  image,
  alt = "",
  caption,
  width = 1200,
  sizes = "(max-width: 768px) 100vw, 800px",
  aspectClassName = "aspect-[16/10]",
  className,
}: ContentImageProps) {
  const src = resolveImageUrl(image, { width });
  if (!src) return null;

  return (
    <figure className={cn("my-10 overflow-hidden rounded-2xl", className)}>
      <div className={cn("relative", aspectClassName)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={image.alt || alt}
          className="absolute inset-0 h-full w-full object-cover"
          sizes={sizes}
          decoding="async"
          suppressHydrationWarning
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-stone-500">{caption}</figcaption>
      )}
    </figure>
  );
}
