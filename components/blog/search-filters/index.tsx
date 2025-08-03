import SearchInput from "./SearchInput";
import Categories from "./Categories";
import { Category } from "@/payload-types";

interface props {
  categories: Category[];
}

const SearchFilters = ({ categories }: props) => {
  return (
    <div className="flex flex-col gap-4 w-full border-b px-4 lg:px-12 py-8">
      <SearchInput />
      <Categories categories={categories} />
    </div>
  );
};

export default SearchFilters;
