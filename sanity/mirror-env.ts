/**
 * Load .env files and copy NEXT_PUBLIC_* → SANITY_STUDIO_* for Sanity CLI (Node only).
 * Imported from sanity.config.ts and sanity.cli.ts.
 *
 * Next.js defines a browser `process` shim — do not use `typeof process` alone.
 */
function isNodeJs(): boolean {
  return (
    typeof process !== "undefined" &&
    typeof process.versions === "object" &&
    typeof process.versions?.node === "string"
  );
}

if (isNodeJs()) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./load-env").loadEnvFiles();

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
