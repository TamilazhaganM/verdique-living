import { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/category.service";

const CategorySection = ({ category, setCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await getAllCategories();
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-8">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        <button
          onClick={() => setCategory("")}
          className={`rounded-2xl overflow-hidden border transition hover:shadow-lg
          ${
            category === ""
              ? "border-green-700 ring-2 ring-green-700"
              : "border-gray-200"
          }`}
        >
          <div className="h-36 bg-gray-100 flex items-center justify-center">
            <span className="text-5xl">🌿</span>
          </div>

          <div className="p-4 font-semibold">
            All
          </div>
        </button>

        {categories.map((item) => (
          <button
            key={item._id}
            onClick={() => setCategory(item._id)}
            className={`rounded-2xl overflow-hidden border transition hover:shadow-lg
            ${
              category === item._id
                ? "border-green-700 ring-2 ring-green-700"
                : "border-gray-200"
            }`}
          >
            <img
              src={item.image.url}
              alt={item.name}
              className="h-36 w-full object-cover"
            />

            <div className="p-4 font-semibold">
              {item.name}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;