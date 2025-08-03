import { Category } from "@/payload-types";
import CategoryDropdown from "./CategoryDropdown";

interface props {
  categories: any;
}

const Categories = ({ categories }: props) => {
  return (
    <div>
      {categories.map((category: Category) => (
        <div key={category.id}>
          <CategoryDropdown
            category={category}
            isActive={false}
            isNavigationHovered={false}
          />
        </div>
      ))}
    </div>
  );
};

export default Categories;
