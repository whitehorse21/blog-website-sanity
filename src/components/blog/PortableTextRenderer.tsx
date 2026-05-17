import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { portableTextComponents } from "./portable-text/components";

interface PortableTextRendererProps {
  value: PortableTextBlock[];
}

export function PortableTextRenderer({ value }: PortableTextRendererProps) {
  return (
    <div className="prose-custom max-w-none">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  );
}
