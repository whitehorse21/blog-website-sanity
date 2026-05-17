import "./sanity/mirror-env";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { getStudioProjectId, studioApiVersion, studioDataset } from "./sanity/studio-env";

export default defineConfig({
  name: "inkwell-blog",
  title: "Inkwell Blog",
  projectId: getStudioProjectId(),
  dataset: studioDataset,
  apiVersion: studioApiVersion,
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
