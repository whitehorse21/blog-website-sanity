import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schemaTypes } from "../../sanity/schemaTypes";

function requireProjectId(): string {
  if (!projectId || projectId === "your-project-id") {
    throw new Error(
      [
        "Missing Sanity project ID.",
        "Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env or .env.local, then restart the dev server.",
      ].join(" "),
    );
  }
  return projectId;
}

const config = defineConfig({
  name: "inkwell-blog",
  title: "Inkwell Blog",
  projectId: requireProjectId(),
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});

export default config;
