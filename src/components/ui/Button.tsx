import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:opacity-90 shadow-sm shadow-stone-900/10 dark:shadow-none",
  secondary:
    "bg-amber-600 text-white hover:bg-amber-500 shadow-sm shadow-amber-600/20 dark:bg-amber-500 dark:hover:bg-amber-400",
  ghost: "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
  outline:
    "border border-border text-foreground hover:border-stone-400 hover:bg-surface-muted dark:hover:border-stone-600",
};

interface ButtonProps {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function Button({
  href,
  variant = "primary",
  className,
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
