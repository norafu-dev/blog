import BlogNav from "@/components/navbar/BlogNav";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <BlogNav />
      </header>
      <main>{children}</main>
    </>
  );
};

export default BlogLayout;
