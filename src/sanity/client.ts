import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../../sanity/env";

export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  stega: {
    enabled: process.env.NEXT_PUBLIC_SANITY_STEGA === "true",
    studioUrl: "/studio",
  },
});
