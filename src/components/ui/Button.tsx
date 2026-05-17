import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-stone-900 text-stone-50 hover:bg-stone-800 shadow-sm shadow-stone-900/10",
  secondary:
    "bg-amber-600 text-white hover:bg-amber-700 shadow-sm shadow-amber-600/20",
  ghost: "text-stone-700 hover:bg-stone-100 hover:text-stone-900",
  outline:
    "border border-stone-300 text-stone-800 hover:border-stone-400 hover:bg-stone-50",
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
