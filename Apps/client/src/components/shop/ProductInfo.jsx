import {
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  CheckCircle,
} from "lucide-react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../redux/slices/cartSlice";
import {
  addWishlist,
  removeWishlist,
} from "../../redux/slices/wishlistSlice";

import { toggleWishlist } from "../../services/wishlist.service";

const ProductInfo = ({
  product,
  averageRating,
  totalReviews,
}) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const wishlist = useSelector(
    (state) => state.wishlist.items
  );

  const isWishlisted = wishlist.some(
    (item) => item.product._id === product._id
  );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity,
      })
    );
  };

  const handleWishlist = async () => {
    try {
      const response = await toggleWishlist(product._id);

      if (response.wishlisted) {
        dispatch(addWishlist({ product }));
      } else {
        dispatch(removeWishlist(product._id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      {/* Category */}

      <span className="inline-block bg-green-100 text-green-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
        {product.category?.name}
      </span>

      {/* Name */}

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
        {product.name}
      </h1>

      {/* Rating */}

      <div className="flex flex-wrap items-center gap-3 mt-5">

        <div className="text-yellow-500 text-lg font-semibold">
          ⭐ {averageRating}
        </div>

        <span className="text-gray-500 text-sm sm:text-base">
          ({totalReviews} Reviews)
        </span>

      </div>

      {/* Price */}

      <div className="flex flex-wrap items-center gap-4 mt-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-green-700">
          ₹{product.price}
        </h2>

        {product.stock > 0 && (
          <span className="flex items-center gap-2 text-green-600 text-sm sm:text-base">
            <CheckCircle size={18} />
            In Stock
          </span>
        )}

      </div>

      {/* Description */}

      <p className="text-gray-600 leading-7 sm:leading-8 mt-6 text-sm sm:text-base">
        {product.description}
      </p>

      {/* Quantity */}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">

        <span className="font-semibold">
          Quantity
        </span>

        <div className="flex items-center border rounded-xl w-fit">

          <button
            onClick={() =>
              quantity > 1 &&
              setQuantity(quantity - 1)
            }
            className="p-3"
          >
            <Minus size={18} />
          </button>

          <span className="px-6 font-semibold">
            {quantity}
          </span>

          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
            className="p-3"
          >
            <Plus size={18} />
          </button>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex flex-col sm:flex-row gap-4 mt-8">

        <button
          onClick={handleAddToCart}
          className="flex-1 bg-green-700 hover:bg-green-800 text-white py-3 sm:py-4 rounded-xl flex justify-center items-center gap-3 transition"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>

        <button
          onClick={handleWishlist}
          className="border rounded-xl h-14 sm:w-16 flex justify-center items-center hover:bg-gray-100 transition"
        >
          <Heart
            size={22}
            className={
              isWishlisted
                ? "fill-red-500 text-red-500"
                : "text-gray-500"
            }
          />
        </button>

      </div>

    </div>
  );
};

export default ProductInfo;