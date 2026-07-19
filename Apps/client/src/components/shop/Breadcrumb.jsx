import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ product }) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 my-10">

      <Link
        to="/"
        className="hover:text-green-700 transition"
      >
        Home
      </Link>

      <ChevronRight size={16} />

      <Link
        to="/shop"
        className="hover:text-green-700 transition"
      >
        Shop
      </Link>

      <ChevronRight size={16} />

      <span className="text-gray-400">
        {product.category}
      </span>

      <ChevronRight size={16} />

      <span className="font-semibold text-gray-800">
        {product.name}
      </span>

    </nav>
  );
};

export default Breadcrumb;