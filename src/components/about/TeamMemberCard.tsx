import { AuthorAvatar } from "@/components/blog/AuthorAvatar";
import { cn } from "@/lib/utils";
import type { Author } from "@/types/blog";

interface TeamMemberCardProps {
  author: Author;
}

export function TeamMemberCard({ author }: TeamMemberCardProps) {
  return (
    <div className="editorial-card group rounded-2xl p-8 text-center">
      <AuthorAvatar author={author} size="xl" className="mx-auto ring-surface-muted dark:ring-stone-700" />
      <h3
        className={cn(
          "font-display text-xl font-semibold text-foreground",
          author.image?.asset?.url ? "mt-5" : "mt-0",
        )}
      >
        {author.name}
      </h3>
      {author.role && <p className="text-sm text-amber-700 dark:text-amber-400">{author.role}</p>}
      {author.bio && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{author.bio}</p>
      )}
    </div>
  );
}
