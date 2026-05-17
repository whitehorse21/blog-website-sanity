import { config } from "dotenv";

/**
 * Load environment variables for Node scripts and Sanity CLI.
 * Supports `.env` only, `.env.local` only, or both (local overrides).
 */
export function loadEnvFiles(): void {
  config({ path: ".env" });
  config({ path: ".env.local", override: true });
}
