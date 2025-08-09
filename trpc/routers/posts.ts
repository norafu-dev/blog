import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { z } from "zod";
import type { Where } from "payload";

export const postsRouter = createTRPCRouter({
  getMany: baseProcedure
    .input(
      z.object({
        category: z.string().nullable().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      if (input.category) {
        const posts = await ctx.payload.find({
          collection: "categories",
          where: {
            slug: {
              equals: input.category,
            },
          },
          depth: 1,
          joins: {
            posts: {
              where: {
                status: {
                  equals: "published",
                },
              },
              // 时间新到旧
              sort: "-createAt",
            },
          },
        });
        return posts;
      }

      const posts = await ctx.payload.find({
        collection: "posts",
        where: {
          status: { equals: "published" },
        },
        sort: "-createAt",
        depth: 1,
        select: {
          title: true,
          slug: true,
          description: true,
          createAt: true,
          backgroundImage: true, // 这会自动展开
        },
      });
      return posts;
    }),
});
