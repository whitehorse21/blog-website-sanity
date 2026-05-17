"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.blog, label: "Articles" },
  { href: ROUTES.about, label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <Link href={ROUTES.home} className="group flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900 text-sm font-bold tracking-tight text-amber-50 shadow-md transition-transform group-hover:scale-105 dark:bg-amber-500 dark:text-stone-950">
            In
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            Inkwell
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link
            href={ROUTES.studio}
            className="px-2 text-sm font-medium text-subtle-foreground transition-colors hover:text-foreground"
          >
            Studio
          </Link>
          <Button href={ROUTES.blog} variant="secondary" className="!px-5 !py-2.5 text-sm">
            Read latest
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-surface px-5 py-5 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3.5 text-sm font-medium",
                  pathname === link.href
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-surface-muted",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ROUTES.studio}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3.5 text-sm font-medium text-subtle-foreground hover:bg-surface-muted"
            >
              Sanity Studio
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
