import { Search } from "lucide-react";

const ProductToolbar = ({
  search,
  setSearch,
  sort,
  setSort,
  totalProducts,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5 mt-10">

      <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">

        {/* Search */}

        <div className="relative w-full lg:w-96">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search plants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            w-full
            border
            rounded-xl
            py-3
            pl-12
            pr-4
            outline-none
            focus:ring-2
            focus:ring-green-600
            "
          />

        </div>

        {/* Results */}

        <div className="text-gray-500 font-medium">

          {totalProducts} Products Found

        </div>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="
          border
          rounded-xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-green-600
          "
        >
          <option value="latest">
            Newest
          </option>

          <option value="oldest">
            Oldest
          </option>

          <option value="price_asc">
            Price Low → High
          </option>

          <option value="price_desc">
            Price High → Low
          </option>

          <option value="name_asc">
            Name A-Z
          </option>

          <option value="name_desc">
            Name Z-A
          </option>

        </select>

      </div>

    </div>
  );
};

export default ProductToolbar;