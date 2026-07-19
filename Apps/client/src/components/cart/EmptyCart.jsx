import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-16 text-center">

      <div className="flex justify-center">

        <ShoppingCart
          size={80}
          className="text-gray-300"
        />

      </div>

      <h2 className="text-3xl font-bold mt-8">

        Your Cart is Empty

      </h2>

      <p className="text-gray-500 mt-4 max-w-md mx-auto">

        Looks like you haven't added any plants yet.
        Explore our collection and find your perfect green companion.

      </p>

      <Link
        to="/shop"
        className="
        inline-block
        mt-8
        bg-green-700
        hover:bg-green-800
        text-white
        px-8
        py-4
        rounded-xl
        transition
        "
      >

        Continue Shopping

      </Link>

    </div>
  );
};

export default EmptyCart;