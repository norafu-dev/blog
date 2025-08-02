import configPromise from "@payload-config";
import { getPayload } from "payload";

const BlogPage = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const categories = await payload.find({
    collection: "categories",
  });

  return (
    <pre>
      <code className="text-sm">{JSON.stringify(categories, null, 2)}</code>
    </pre>
  );
};

export default BlogPage;
