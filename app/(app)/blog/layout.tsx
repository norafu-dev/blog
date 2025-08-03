import configPromise from "@payload-config";
import { getPayload } from "payload";

import BlogNav from "@/components/blog/BlogNav";
import SearchFilters from "@/components/blog/search-filters";
import { Category } from "@/payload-types";

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const categories = await payload.find({
    collection: "categories",
    // 保证子分类的类型也是 Category
    depth: 1,
    // 获取所有分类
    pagination: false,
    // 只获取主分类
    where: {
      main_category: {
        exists: false,
      },
    },
  });

  const formattedCategories = categories.docs.map((category) => ({
    ...category,
    subCategories: (category.sub_categories?.docs ?? []).map((doc) => ({
      // depth: 1
      ...(doc as Category),
    })),
  }));

  return (
    <>
      <header className="flex flex-col items-center gap-4">
        <BlogNav />
        <SearchFilters categories={formattedCategories} />
      </header>
      <main>{children}</main>
    </>
  );
};

export default BlogLayout;
