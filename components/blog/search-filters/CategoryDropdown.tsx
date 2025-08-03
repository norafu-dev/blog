import { Button } from "@/components/ui/button";
import { Category } from "@/payload-types";
import { cn } from "@/lib/utils";

interface props {
  category: Category;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: props) => {
  return (
    <Button variant="outline" className={cn(isActive && "bg-primary")}>
      {category.name}
    </Button>
  );
};

export default CategoryDropdown;
