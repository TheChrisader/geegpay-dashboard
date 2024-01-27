import { Input } from "../ui/input";
import SearchIcon from "./icons/search";

const Search = () => {
  return (
    <label
      htmlFor="search"
      className="w-[349px] h-12 bg-mainWhite px-4 border border-darkBorder flex items-center gap-2 rounded-3xl transition-[border,background-color] duration-[250ms] has-[input:hover]:border-darkBorderTouch has-[input:focus]:border-darkBorderTouch max-[810px]:hidden"
    >
      <SearchIcon />
      <Input id="search" type="text" placeholder="Search..." />
    </label>
  );
};

export default Search;
