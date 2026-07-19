import { LayoutGrid } from "lucide-react";
import CategoryRow from "./CategoryRow";
import CategoryCard from "./CategoryCard";

const CategoryTable = ({
  categories,
  onEdit,
  onDelete,
}) => {
  if (categories.length === 0) {
    return (
      <div className="py-16 text-center">
        <LayoutGrid
          size={60}
          className="mx-auto text-gray-300"
        />

        <h2 className="text-2xl font-semibold mt-4">
          No Categories Yet
        </h2>

        <p className="text-gray-500 mt-2">
          Click "Add Category" to create your first category.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table */}

      <div className="hidden lg:block bg-white rounded-2xl shadow border overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-4">
                Image
              </th>

              <th className="text-left">
                Name
              </th>

              <th className="text-left">
                Description
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {categories.map((category) => (

              <CategoryRow
                key={category._id}
                category={category}
                onEdit={onEdit}
                onDelete={onDelete}
              />

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}

      <div className="lg:hidden space-y-5">

        {categories.map((category) => (

          <CategoryCard
            key={category._id}
            category={category}
            onEdit={onEdit}
            onDelete={onDelete}
          />

        ))}

      </div>
    </>
  );
};

export default CategoryTable;