import { AuthorAvatar } from "@/components/blog/AuthorAvatar";
import { cn } from "@/lib/utils";
import type { Author } from "@/types/blog";

interface TeamMemberCardProps {
  author: Author;
}

export function TeamMemberCard({ author }: TeamMemberCardProps) {
  return (
    <div className="group rounded-2xl border border-stone-200/80 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
      <AuthorAvatar author={author} size="xl" className="mx-auto ring-stone-50" />
      <h3
        className={cn(
          "font-display text-xl font-semibold text-stone-900",
          author.image?.asset?.url ? "mt-5" : "mt-0",
        )}
      >
        {author.name}
      </h3>
      {author.role && <p className="text-sm text-amber-700">{author.role}</p>}
      {author.bio && (
        <p className="mt-3 text-sm leading-relaxed text-stone-600">{author.bio}</p>
      )}
    </div>
  );
}
