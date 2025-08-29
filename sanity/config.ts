import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schema"
import { structure } from "./structure"

export default defineConfig({
  name: "faculty-portfolio",
  title: "Faculty Portfolio CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    // Remove 'create' and 'delete' actions for profile to ensure only one exists
    actions: (prev, context) => {
      if (context.schemaType === "profile") {
        return prev.filter(({ action }) => !["create", "delete"].includes(action || ""))
      }
      return prev
    },
  },
})
