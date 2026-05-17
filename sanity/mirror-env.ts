/**
 * Load .env and copy NEXT_PUBLIC_* → SANITY_STUDIO_* for Vite (Node only).
 * Imported from sanity.config.ts and sanity.cli.ts.
 * Skipped in the browser — `process` is undefined there.
 */
if (typeof process !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { config } = require("dotenv") as typeof import("dotenv");
  config({ path: ".env.local" });
  config({ path: ".env" });

  const pairs: [studio: string, next: string][] = [
    ["SANITY_STUDIO_PROJECT_ID", "NEXT_PUBLIC_SANITY_PROJECT_ID"],
    ["SANITY_STUDIO_DATASET", "NEXT_PUBLIC_SANITY_DATASET"],
    ["SANITY_STUDIO_API_VERSION", "NEXT_PUBLIC_SANITY_API_VERSION"],
  ];

  for (const [studioKey, nextKey] of pairs) {
    const nextValue = process.env[nextKey];
    if (nextValue && !process.env[studioKey]) {
      process.env[studioKey] = nextValue;
    }
  }
}
