import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, parseISO } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return format(parseISO(date), "MMMM d, yyyy");
}

export function formatShortDate(date: string) {
  return format(parseISO(date), "MMM d, yyyy");
}

const categoryColorMap: Record<string, string> = {
  amber:
    "bg-amber-100 text-amber-800 ring-amber-200/60 dark:bg-amber-950/60 dark:text-amber-300 dark:ring-amber-800/50",
  teal: "bg-teal-100 text-teal-800 ring-teal-200/60 dark:bg-teal-950/60 dark:text-teal-300 dark:ring-teal-800/50",
  rose: "bg-rose-100 text-rose-800 ring-rose-200/60 dark:bg-rose-950/60 dark:text-rose-300 dark:ring-rose-800/50",
  violet:
    "bg-violet-100 text-violet-800 ring-violet-200/60 dark:bg-violet-950/60 dark:text-violet-300 dark:ring-violet-800/50",
  sky: "bg-sky-100 text-sky-800 ring-sky-200/60 dark:bg-sky-950/60 dark:text-sky-300 dark:ring-sky-800/50",
  emerald:
    "bg-emerald-100 text-emerald-800 ring-emerald-200/60 dark:bg-emerald-950/60 dark:text-emerald-300 dark:ring-emerald-800/50",
};

export function getCategoryColorClass(color?: string) {
  return categoryColorMap[color ?? "amber"] ?? categoryColorMap.amber;
}

export function formatArticleCount(count: number) {
  return `${count} ${count === 1 ? "article" : "articles"}`;
}

export function formatReadingTime(minutes: number) {
  return `${minutes} min read`;
}
