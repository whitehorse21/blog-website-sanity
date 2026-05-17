/**
 * Sanity CLI entry (deploy, schema push). Re-exports the app config from src/.
 * Env: mirror-env runs in Node; NEXT_PUBLIC_* is read via sanity/env.ts.
 */
import "./sanity/mirror-env";

export { default } from "./src/sanity/studio-config";
