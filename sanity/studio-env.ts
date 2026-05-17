/// <reference types="vite/client" />

/**
 * Env for Sanity CLI and hosted Studio (Vite).
 * Use static `process.env.NEXT_PUBLIC_*` access — Next does not inline dynamic keys.
 */

const viteProjectId = import.meta.env.SANITY_STUDIO_PROJECT_ID as string | undefined;
const viteDataset = import.meta.env.SANITY_STUDIO_DATASET as string | undefined;
const viteApiVersion = import.meta.env.SANITY_STUDIO_API_VERSION as string | undefined;

export const studioProjectId =
  viteProjectId ||
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  "";

export const studioDataset =
  viteDataset ||
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

export const studioApiVersion =
  viteApiVersion ||
  process.env.SANITY_STUDIO_API_VERSION ||
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  "2025-05-17";

export function getStudioProjectId(): string {
  if (!studioProjectId || studioProjectId === "your-project-id") {
    throw new Error(
      [
        "Missing Sanity project ID.",
        "Set NEXT_PUBLIC_SANITY_PROJECT_ID (or SANITY_STUDIO_PROJECT_ID) in .env or .env.local.",
      ].join(" "),
    );
  }
  return studioProjectId;
}
