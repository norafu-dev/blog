import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const categories = await ctx.payload.find({
      collection: "categories",
      depth: 1,
      pagination: false,
      where: {
        main_category: {
          exists: false,
        },
      },
    });
    return categories;
  }),
});
