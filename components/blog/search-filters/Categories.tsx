import { Button } from "@/components/ui/button";
import { Category } from "@/payload-types";
import Link from "next/link";

interface props {
  categories: Category[];
}

const Categories = ({ categories }: props) => {
  return (
    <div className="flex gap-4">
      {categories.map((category: Category) => (
        <Button variant="outline" key={category.id}>
          <Link href={`/blog/${category.slug}`} className="w-full">
            {category.name}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default Categories;
