import { createTRPCRouter } from "../init";
import { categoriesRouter } from "@/trpc/routers/categories";
import { postsRouter } from "@/trpc/routers/posts";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  posts: postsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
