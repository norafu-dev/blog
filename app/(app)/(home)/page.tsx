"use client";

import { trpc } from "@/trpc/client";

export default function Home() {
  const { data, isLoading, error } = trpc.categories.getCategories.useQuery();
  return <main>{JSON.stringify(data)}</main>;
}
