import { useEffect, useState } from "react";
import { X, Filter } from "lucide-react";
import { getAllCategories } from "../../services/category.service";

const ProductFilters = ({
  categories,
  category,
  setCategory,
  inStock,
  setInStock,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  clearFilters,
}) => {
  const [showFilters, setShowFilters] = useState(false);


  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-5">
        <button
          onClick={() => setShowFilters(true)}
          className="w-full flex items-center justify-center gap-2 bg-green-700 text-white py-3 rounded-xl"
        >
          <Filter size={18} />
          Filters
        </button>
      </div>

      {/* Overlay */}
      {showFilters && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setShowFilters(false)}
        />
      )}

      <aside
        className={`
        bg-white
        shadow-sm
        border
        p-6
        h-fit

        lg:sticky
        lg:top-28

        fixed
        top-0
        left-0
        h-screen
        w-75
        z-40
        overflow-y-auto
        transition-transform
        duration-300

        ${
          showFilters
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        {/* Mobile Header */}

        <div className="flex items-center justify-between lg:hidden mb-6">
          <h2 className="text-2xl font-bold">Filters</h2>

          <button onClick={() => setShowFilters(false)}>
            <X />
          </button>
        </div>

        {/* Desktop Header */}

        <h2 className="hidden lg:block text-2xl font-bold mb-8">
          Filters
        </h2>

        {/* Categories */}

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Category
          </h3>

          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={category === ""}
                onChange={() => setCategory("")}
              />
              All
            </label>

            {categories.map((item) => (
              <label
                key={item._id}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  checked={category === item._id}
                  onChange={() => setCategory(item._id)}
                />

                {item.name}
              </label>
            ))}
          </div>
        </div>

        <hr className="my-8" />

        {/* Availability */}

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Availability
          </h3>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
            />

            In Stock Only
          </label>
        </div>

        <hr className="my-8" />

        {/* Price */}

        <div>
          <h3 className="font-semibold text-lg mb-5">
            Price Range
          </h3>

          <div className="flex justify-between mb-6">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-medium">
              ₹{minPrice}
            </span>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-medium">
              ₹{maxPrice}
            </span>
          </div>

          <div className="mb-6">
            <label className="text-sm text-gray-500 block mb-2">
              Minimum Price
            </label>

            <input
              type="range"
              min="0"
              max="5000"
              step="50"
              value={minPrice}
              onChange={(e) => {
                const value = Number(e.target.value);

                if (value <= maxPrice) {
                  setMinPrice(value);
                }
              }}
              className="w-full accent-green-700"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 block mb-2">
              Maximum Price
            </label>

            <input
              type="range"
              min="0"
              max="5000"
              step="50"
              value={maxPrice}
              onChange={(e) => {
                const value = Number(e.target.value);

                if (value >= minPrice) {
                  setMaxPrice(value);
                }
              }}
              className="w-full accent-green-700"
            />
          </div>
        </div>

        <button
          onClick={() => {
            clearFilters();
            setShowFilters(false);
          }}
          className="w-full mt-10 py-3 rounded-xl border hover:bg-green-700 hover:text-white transition"
        >
          Clear Filters
        </button>
      </aside>
    </>
  );
};

export default ProductFilters;