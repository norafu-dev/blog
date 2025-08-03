import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

interface props {
  disabled?: boolean;
}

const SearchInput = ({ disabled }: props) => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
        <Input
          type="text"
          disabled={disabled}
          placeholder="find your inspiration"
          className="px-10"
        />
      </div>
      {/* TODO: 所有分类 */}
      {/* TODO: 所有分类 */}
    </div>
  );
};

export default SearchInput;
