import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeWishlist } from "../../redux/slices/wishlistSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import { toggleWishlist } from "../../services/wishlist.service";

const WishlistCard = ({ item }) => {
  const dispatch = useDispatch();

  const product = item.product;

  const handleRemove = async () => {
    try {
      await toggleWishlist(product._id);

      dispatch(removeWishlist(product._id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleMoveToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">

      {/* Image */}

      <img
        src={product.image.url}
        alt={product.name}
        className="w-full h-72 object-cover"
      />

      {/* Details */}

      <div className="p-6">

        <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>

        <h2 className="text-2xl font-bold mt-4">
          {product.name}
        </h2>

        <p className="text-green-700 text-2xl font-bold mt-3">
          ₹{product.price}
        </p>

        <div className="flex gap-3 mt-6">

          {/* View */}

          <Link
            to={`/shop/${product._id}`}
            className="flex-1 border rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-gray-100 transition"
          >
            <Eye size={18} />
            View
          </Link>

          {/* Add to Cart */}

          <button
            onClick={handleMoveToCart}
            className="flex-1 bg-green-700 hover:bg-green-800 text-white rounded-xl py-3 flex justify-center items-center gap-2 transition"
          >
            <ShoppingCart size={18} />
            Cart
          </button>

        </div>

        {/* Remove */}

        <button
          onClick={handleRemove}
          className="mt-4 w-full border border-red-200 text-red-600 rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-red-50 transition"
        >
          <Heart
            size={18}
            className="fill-red-500 text-red-500"
          />
          Remove from Wishlist
        </button>

      </div>

    </div>
  );
};

export default WishlistCard;