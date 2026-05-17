import "./sanity/mirror-env";
import { defineCliConfig } from "sanity/cli";
import { getStudioProjectId, studioDataset } from "./sanity/studio-env";

export default defineCliConfig({
  api: { projectId: getStudioProjectId(), dataset: studioDataset },
  deployment: {
    appId: "ra67n21lkwidayuanpynd3wr",
  },
});
