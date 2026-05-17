import { AuthorAvatar } from "@/components/blog/AuthorAvatar";
import { formatDate, formatReadingTime, cn } from "@/lib/utils";
import type { Author } from "@/types/blog";

interface PostBylineProps {
  author: Author;
  publishedAt: string;
  readingTime?: number;
  showAvatar?: boolean;
  avatarSize?: "sm" | "md";
  className?: string;
  variant?: "default" | "light";
}

export function PostByline({
  author,
  publishedAt,
  readingTime,
  showAvatar = true,
  avatarSize = "sm",
  className,
  variant = "default",
}: PostBylineProps) {
  const isLight = variant === "light";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 text-sm",
        isLight ? "text-stone-300" : "text-stone-500",
        className,
      )}
    >
      {showAvatar && (
        <div className="flex items-center gap-2">
          <AuthorAvatar author={author} size={avatarSize} />
          <span className={cn("font-medium", isLight ? "text-stone-200" : "text-stone-800")}>
            {author.name}
          </span>
        </div>
      )}
      {!showAvatar && (
        <span className={cn("font-medium", isLight ? "text-stone-200" : "text-stone-800")}>
          {author.name}
        </span>
      )}
      <span aria-hidden>·</span>
      <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
      {readingTime != null && readingTime > 0 && (
        <>
          <span aria-hidden>·</span>
          <span>{formatReadingTime(readingTime)}</span>
        </>
      )}
    </div>
  );
}
