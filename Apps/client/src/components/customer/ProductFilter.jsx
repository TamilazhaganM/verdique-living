const categories = [
  "Indoor Plant",
  "Outdoor Plant",
  "Pot",
  "Fertilizer",
  "Gardening Tool",
];

const ProductFilters = ({
  category,
  setCategory,
  inStock,
  setInStock,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  setPrice,
  clearFilters,
}) => {
  return (
    <aside className="bg-white rounded-2xl shadow-sm border p-6 h-fit sticky top-28">

      <h2 className="text-2xl font-bold mb-8">

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
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >

              <input
                type="radio"
                name="category"
                checked={category === item}
                onChange={() => setCategory(item)}
              />

              {item}

            </label>

          ))}

        </div>

      </div>

      {/* Divider */}

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

     {/* Price Range */}

<div>

  <h3 className="font-semibold text-lg mb-5">

    Price Range

  </h3>

  {/* Selected Values */}

  <div className="flex justify-between mb-6">

    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-medium">
      ₹{minPrice}
    </span>

    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-medium">
      ₹{maxPrice}
    </span>

  </div>

  {/* Minimum Price */}

  <div className="mb-6">

    <label className="text-sm text-gray-500 block mb-2">
      Minimum Price
    </label>

    <input
      type="range"
      min="0"
      max="5000"
      step="100"
      value={minPrice}
      onChange={(e) => {
        const value = Number(e.target.value);

        if (value <= maxPrice) {
          setMinPrice(value);
        }
      }}
      className="w-full accent-green-700 cursor-pointer"
    />

  </div>

  {/* Maximum Price */}

  <div>

    <label className="text-sm text-gray-500 block mb-2">
      Maximum Price
    </label>

    <input
      type="range"
      min="0"
      max="5000"
      step="100"
      value={maxPrice}
      onChange={(e) => {
        const value = Number(e.target.value);

        if (value >= minPrice) {
          setMaxPrice(value);
        }
      }}
      className="w-full accent-green-700 cursor-pointer"
    />

  </div>

</div>
      <button
        onClick={clearFilters}
        className="
        w-full
        mt-10
        py-3
        rounded-xl
        border
        hover:bg-green-700
        hover:text-white
        transition
        "
      >

        Clear Filters

      </button>

    </aside>
  );
};

export default ProductFilters;