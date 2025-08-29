import type { StructureBuilder } from "sanity/structure"

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Faculty Portfolio")
    .items([
      // Profile section
      S.listItem()
        .title("Profile")
        .child(S.document().schemaType("profile").documentId("profile").title("Profile Information")),

      S.divider(),

      // Content sections
      S.listItem()
        .title("Education")
        .child(
          S.documentTypeList("education")
            .title("Education")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),

      S.listItem()
        .title("Experience")
        .child(
          S.documentTypeList("experience")
            .title("Experience")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),

      S.listItem()
        .title("Projects")
        .child(
          S.documentTypeList("project")
            .title("Projects")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),

      S.listItem()
        .title("Publications")
        .child(
          S.documentTypeList("publication")
            .title("Publications")
            .defaultOrdering([{ field: "year", direction: "desc" }]),
        ),
    ])
