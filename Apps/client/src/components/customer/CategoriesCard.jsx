import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";  

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${category.name}`}
      className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
    >
      <div className="overflow-hidden">

        <img
          src={category.image?.url}
          alt={category.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
        />

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">

          {category.name}

        </h3>

        <p className="text-gray-500 mt-3">

          {category.description}

        </p>

        <div className="flex items-center gap-2 mt-5 text-green-700 font-semibold">

          Explore

          <ArrowRight size={18} />

        </div>

      </div>

    </Link>
  );
};

export default CategoryCard;