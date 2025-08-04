import { trpc } from "@/trpc/server";

const BlogPage = async () => {
  const categories = await trpc.categories.getCategories();
  return <div>{JSON.stringify(categories)}</div>;
};

export default BlogPage;
