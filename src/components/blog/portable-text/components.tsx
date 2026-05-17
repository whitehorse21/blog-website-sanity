import type { PortableTextComponents } from "@portabletext/react";
import { ContentImage } from "@/components/blog/ContentImage";
import type { SanityImage } from "@/types/blog";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-display mt-12 mb-4 text-3xl font-semibold tracking-tight text-stone-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display mt-10 mb-3 text-2xl font-semibold text-stone-900">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-display mt-8 mb-2 text-xl font-semibold text-stone-900">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-lg leading-relaxed text-stone-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 border-l-4 border-amber-500 pl-6 font-display text-2xl font-medium italic leading-snug text-stone-800">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-lg text-stone-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-lg text-stone-700">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-stone-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-sm text-amber-800">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          className="font-medium text-amber-700 underline decoration-amber-300 underline-offset-4 transition-colors hover:text-amber-900"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <ContentImage
          image={value as SanityImage}
          alt={value.alt || ""}
          caption={value.caption}
        />
      );
    },
  },
};
