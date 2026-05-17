import type { Author } from "@/types/blog";

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <aside className="rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
        {author.image?.asset?.url && (
          <img
            src={author.image.asset.url}
            alt={author.name}
            className="h-20 w-20 shrink-0 rounded-full object-cover ring-4 ring-white shadow-md"
          />
        )}
        <div className="mt-4 sm:mt-0 sm:ml-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Written by
          </p>
          <h3 className="font-display mt-1 text-xl font-semibold text-stone-900">{author.name}</h3>
          {author.role && <p className="text-sm text-stone-500">{author.role}</p>}
          {author.bio && (
            <p className="mt-3 text-sm leading-relaxed text-stone-600">{author.bio}</p>
          )}
          <div className="mt-4 flex justify-center gap-3 sm:justify-start">
            {author.twitter && (
              <a
                href={author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 transition-colors hover:text-amber-700"
                aria-label={`${author.name} on Twitter`}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 transition-colors hover:text-amber-700"
                aria-label={`${author.name} on LinkedIn`}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
