"use client";

import { trpc } from "@/trpc/client";

export const PostList = ({ category }: { category?: string }) => {
  const { data, isLoading, error } = trpc.posts.getMany.useQuery({
    category: category || null,
  });

  if (isLoading) return <PostListSkeleton />;

  return (
    <div>
      {category && <div>category: {category}</div>}
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export const PostListSkeleton = () => {
  return <div>Loading...</div>;
};
