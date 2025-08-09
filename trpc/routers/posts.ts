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
      const where: Where = {
        status: {
          equals: "published",
        },
      };

      if (input.category) {
        where["category.slug"] = {
          equals: input.category,
        };
      }

      const posts = await ctx.payload.find({
        collection: "posts",
        where,
        depth: 1,
      });

      return posts;
    }),
});
