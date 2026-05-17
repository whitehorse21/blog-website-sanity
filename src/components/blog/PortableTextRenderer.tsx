import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { isSanityConfigured } from "../../../sanity/env";
import { urlFor } from "@/sanity/lib/image";
import type { PortableTextBlock } from "@portabletext/types";

const components: PortableTextComponents = {
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
      const url =
        isSanityConfigured() && value?.asset
          ? urlFor(value).width(1200).auto("format").url()
          : value?.asset?.url;

      if (!url) return null;

      return (
        <figure className="my-10 overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/10]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={url}
              alt={value.alt || ""}
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              decoding="async"
              suppressHydrationWarning
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-stone-500">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};

interface PortableTextRendererProps {
  value: PortableTextBlock[];
}

export function PortableTextRenderer({ value }: PortableTextRendererProps) {
  return (
    <div className="prose-custom max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
