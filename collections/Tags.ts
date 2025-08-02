import { CollectionConfig } from "payload";

export const Tags: CollectionConfig = {
  slug: "tags",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
    },
  ],
  admin: {
    useAsTitle: "name",
  },
};
