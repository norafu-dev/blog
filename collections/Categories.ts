import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    // 分类的 slug, 用于生成 URL, 例如: /categories/slug,必须唯一,index: true 表示可以用于搜索
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "color",
      type: "text",
    },
    // 主分类
    {
      name: "main_category",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
    },
    {
      name: "posts",
      type: "join",
      collection: "posts",
      on: "category",
    },
  ],
  // 在集合以及相关联的集合中显示name，而不是id
  admin: {
    useAsTitle: "name",
  },
};
