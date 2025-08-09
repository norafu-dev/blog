import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      index: true,
    },

    {
      name: "status",
      type: "select",
      options: ["draft", "published"],
      defaultValue: "draft",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "views",
      type: "number",
      defaultValue: 0,
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "createAt",
      type: "date",
    },

    {
      name: "updateAt",
      type: "date",
    },
    {
      name: "content",
      type: "richText",
    },
  ],
  admin: {
    useAsTitle: "title",
  },
};
