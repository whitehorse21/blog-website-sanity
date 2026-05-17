import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface BackLinkProps {
  href?: string;
  label?: string;
  className?: string;
}

export function BackLink({
  href = ROUTES.blog,
  label = "← All articles",
  className,
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium text-amber-700 transition-colors hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300",
        className,
      )}
    >
      {label}
    </Link>
  );
}
