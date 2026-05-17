import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCenter ? "text-center" : "sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className={cn(isCenter && "mx-auto max-w-3xl")}>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">{eyebrow}</p>
        )}
        <h2
          className={cn(
            "font-display font-semibold text-stone-900",
            eyebrow ? "mt-2 text-3xl sm:text-4xl" : "text-3xl sm:text-4xl",
            isCenter && eyebrow && "mt-3",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-lg text-stone-600",
              isCenter ? "sm:text-xl" : "max-w-2xl",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && !isCenter && (
        <Link
          href={action.href}
          className="text-sm font-medium text-amber-700 transition-colors hover:text-amber-900"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
