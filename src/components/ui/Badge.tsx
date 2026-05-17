import Link from "next/link";
import { cn, getCategoryColorClass } from "@/lib/utils";

interface BadgeProps {
  label: string;
  href?: string;
  color?: string;
  className?: string;
}

export function Badge({ label, href, color, className }: BadgeProps) {
  const classes = cn(
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset transition-colors",
    getCategoryColorClass(color),
    href && "hover:opacity-80",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return <span className={classes}>{label}</span>;
}
