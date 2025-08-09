import { Suspense } from "react";

import { PostList } from "@/components/blog/post/PostList";

const BlogCategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;

  return <PostList category={category} />;
};

export default BlogCategoryPage;
