import { Pencil, Trash2 } from "lucide-react";

const CategoryCard = ({
  category,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow border p-5">

      {/* Image */}

      <div className="flex justify-center">

        <img
          src={
            category.image?.url ||
            "https://placehold.co/200x200?text=No+Image"
          }
          alt={category.name}
          className="w-28 h-28 rounded-xl object-cover border"
        />

      </div>

      {/* Details */}

      <div className="mt-5 text-center space-y-3">

        <div>

          <h3 className="text-xl font-bold">
            {category.name}
          </h3>

        </div>

        <div>

          <p className="text-sm text-gray-500 line-clamp-2">
            {category.description}
          </p>

        </div>

        <div>

          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              category.isActive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {category.isActive ? "Active" : "Inactive"}
          </span>

        </div>

      </div>

      {/* Actions */}

      <div className="flex justify-center gap-6 mt-6">

        <button
          onClick={() => onEdit(category)}
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <Pencil size={22} />
        </button>

        <button
          onClick={() => onDelete(category)}
          className="text-red-600 hover:text-red-800 transition"
        >
          <Trash2 size={22} />
        </button>

      </div>

    </div>
  );
};

export default CategoryCard;