import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyWishlist = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg py-20 px-8 text-center">

      <div className="flex justify-center">

        <div className="bg-red-100 p-6 rounded-full">

          <Heart
            size={70}
            className="fill-red-500 text-red-500"
          />

        </div>

      </div>

      <h2 className="text-3xl font-bold mt-8 text-gray-800">
        Your Wishlist is Empty
      </h2>

      <p className="text-gray-500 mt-4 max-w-md mx-auto leading-7">
        Save your favourite plants and home décor items here.
        They'll always be ready whenever you decide to bring
        more greenery into your home.
      </p>

      <Link
        to="/shop"
        className="
          inline-block
          mt-10
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

export default EmptyWishlist;