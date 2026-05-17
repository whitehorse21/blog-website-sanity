import type { Author, SanityImage } from "@/types/blog";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "h-8 w-8 ring-2",
  md: "h-10 w-10 ring-2",
  lg: "h-20 w-20 ring-4",
  xl: "h-24 w-24 ring-4",
} as const;

interface AuthorAvatarProps {
  author?: Pick<Author, "name"> & { image?: SanityImage };
  image?: SanityImage;
  name?: string;
  size?: keyof typeof sizeClasses;
  className?: string;
}

export function AuthorAvatar({
  author,
  image: imageProp,
  name: nameProp,
  size = "sm",
  className,
}: AuthorAvatarProps) {
  const image = imageProp ?? author?.image;
  const name = nameProp ?? author?.name ?? "";
  const url = image?.asset?.url;

  if (!url) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt={image?.alt || name}
      className={cn(
        "rounded-full object-cover ring-stone-100",
        sizeClasses[size],
        className,
      )}
      suppressHydrationWarning
    />
  );
}
