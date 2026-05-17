import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "color",
      title: "Accent Color",
      type: "string",
      description: "Tailwind color name (e.g. amber, teal, rose)",
      options: {
        list: [
          { title: "Amber", value: "amber" },
          { title: "Teal", value: "teal" },
          { title: "Rose", value: "rose" },
          { title: "Violet", value: "violet" },
          { title: "Sky", value: "sky" },
          { title: "Emerald", value: "emerald" },
        ],
      },
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
