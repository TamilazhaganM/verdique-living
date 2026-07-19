import { Pencil, Trash2 } from "lucide-react";

const CategoryRow = ({
  category,
  onEdit,
  onDelete,
}) => {
  return (
    <tr className="border-t hover:bg-gray-50 transition">

      {/* Image */}

      <td className="p-4">

        <img
          src={
            category.image?.url ||
            "https://placehold.co/60x60?text=No+Image"
          }
          alt={category.name}
          className="w-14 h-14 rounded-lg object-cover border"
        />

      </td>

      {/* Name */}

      <td className="p-4 font-medium whitespace-nowrap">
        {category.name}
      </td>

      {/* Description */}

      <td
        className="p-4 max-w-xs truncate text-gray-600"
        title={category.description}
      >
        {category.description}
      </td>

      {/* Status */}

      <td className="p-4">

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            category.isActive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {category.isActive ? "Active" : "Inactive"}
        </span>

      </td>

      {/* Actions */}

      <td className="p-4">

        <div className="flex justify-center items-center gap-4">

          <button
            onClick={() => onEdit(category)}
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <Pencil size={20} />
          </button>

          <button
            onClick={() => onDelete(category)}
            className="text-red-600 hover:text-red-800 transition"
          >
            <Trash2 size={20} />
          </button>

        </div>

      </td>

    </tr>
  );
};

export default CategoryRow;