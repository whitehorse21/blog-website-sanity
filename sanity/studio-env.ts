/// <reference types="vite/client" />

type StudioEnvKey =
  | "SANITY_STUDIO_PROJECT_ID"
  | "SANITY_STUDIO_DATASET"
  | "SANITY_STUDIO_API_VERSION";

function readStudioEnv(key: StudioEnvKey): string | undefined {
  // Inlined into the hosted Studio bundle at build time
  const fromMeta = import.meta.env[key];
  if (fromMeta) return String(fromMeta);

  // Node during `sanity deploy` / `sanity dev` (before bundle)
  if (typeof process !== "undefined" && process.env[key]) {
    return process.env[key];
  }

  return undefined;
}

export const studioProjectId = readStudioEnv("SANITY_STUDIO_PROJECT_ID") ?? "";

export const studioDataset = readStudioEnv("SANITY_STUDIO_DATASET") ?? "production";

export const studioApiVersion = readStudioEnv("SANITY_STUDIO_API_VERSION") ?? "2025-05-17";

export function getStudioProjectId(): string {
  if (!studioProjectId || studioProjectId === "your-project-id") {
    throw new Error(
      [
        "Missing SANITY_STUDIO_PROJECT_ID.",
        "Set NEXT_PUBLIC_SANITY_PROJECT_ID (or SANITY_STUDIO_PROJECT_ID) in .env, then run:",
        "  npm run deploy:studio",
      ].join(" "),
    );
  }
  return studioProjectId;
}
