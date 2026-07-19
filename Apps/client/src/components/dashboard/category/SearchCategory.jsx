import { Search } from "lucide-react";

const SearchCategory = ({ search, setSearch }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5">

      <div className="relative w-full md:w-96">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            border
            rounded-xl
            pl-11
            pr-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-green-600
          "
        />

      </div>

    </div>
  );
};

export default SearchCategory;