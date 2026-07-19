import { Plus } from "lucide-react";

const CategoryHeader = ({ onAdd }) => {
  return (
    <div
      className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-4
      "
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Categories
        </h1>

        <p className="text-gray-500 mt-2">
          Manage product categories for your store.
        </p>
      </div>

      <button
        onClick={onAdd}
        className="
          flex
          items-center
          justify-center
          gap-2
          w-full
          sm:w-auto
          bg-green-700
          hover:bg-green-800
          text-white
          px-5
          py-3
          rounded-xl
          transition
          shadow-sm
          hover:shadow-md
        "
      >
        <Plus size={20} />
        Add Category
      </button>
    </div>
  );
};

export default CategoryHeader;