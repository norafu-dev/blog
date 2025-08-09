import BlogNav from "@/components/blog/BlogNav";
import SearchFilters from "@/components/blog/search-filters";
import { trpc } from "@/trpc/server";

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
  const categories = await trpc.categories.getMany();

  return (
    <>
      <header className="flex flex-col items-center gap-4">
        <BlogNav />
        <SearchFilters categories={categories.docs} />
      </header>
      <main>{children}</main>
    </>
  );
};

export default BlogLayout;
