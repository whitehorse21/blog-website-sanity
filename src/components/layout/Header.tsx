"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
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
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#FAF8F5]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href={ROUTES.home} className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-stone-900 text-sm font-bold tracking-tight text-amber-50 transition-transform group-hover:scale-105">
            In
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-stone-900">
            Inkwell
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-stone-900 text-stone-50"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={ROUTES.studio}
            className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-800"
          >
            Studio
          </Link>
          <Button href={ROUTES.blog} variant="secondary" className="!px-5 !py-2.5 text-sm">
            Read latest
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-700 hover:bg-stone-100 md:hidden"
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

      {mobileOpen && (
        <nav
          className="border-t border-stone-200/80 bg-[#FAF8F5] px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium",
                  pathname === link.href
                    ? "bg-stone-900 text-stone-50"
                    : "text-stone-700 hover:bg-stone-100",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ROUTES.studio}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-stone-500 hover:bg-stone-100"
            >
              Sanity Studio
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
