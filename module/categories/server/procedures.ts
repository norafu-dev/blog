import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
  getCategories: baseProcedure.query(async () => {
    return [123];
  }),
});
