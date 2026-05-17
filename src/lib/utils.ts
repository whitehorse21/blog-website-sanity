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
  amber: "bg-amber-100 text-amber-800 ring-amber-200/60",
  teal: "bg-teal-100 text-teal-800 ring-teal-200/60",
  rose: "bg-rose-100 text-rose-800 ring-rose-200/60",
  violet: "bg-violet-100 text-violet-800 ring-violet-200/60",
  sky: "bg-sky-100 text-sky-800 ring-sky-200/60",
  emerald: "bg-emerald-100 text-emerald-800 ring-emerald-200/60",
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
