import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../ui/Card";
import { useDispatch, useSelector } from "react-redux";
import {addWishlist,removeWishlist,} from "../../redux/slices/wishlistSlice";
import { toggleWishlist } from "../../services/wishlist.service";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

const wishlist = useSelector(
  (state) => state.wishlist.items
);

const isWishlisted = wishlist.some(
  (item) => item.product._id === product._id
);

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
    <Card className="group overflow-hidden p-0 hover:-translate-y-2 transition-all duration-300">

      {/* Image Section */}

      <div className="relative overflow-hidden">

        <img
          src={product.image.url}
          alt={product.name}
          className="w-full h-56 sm:h-64 lg:h-72 object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Wishlist */}

        <button
        onClick={handleWishlist}
          className="
absolute
top-3
right-3
bg-white
p-2
sm:p-2.5
rounded-full
shadow-md
hover:bg-red-50
transition
"
        >
          <Heart
            size={18}
            className={
        isWishlisted
            ? "fill-red-500 text-red-500"
            : "text-gray-500 hover:text-red-500"
    }
          />
        </button>

        {/* Quick View */}

        <Link
          to={`/shop/${product._id}`}
         className="
absolute
bottom-4
left-1/2
-translate-x-1/2
bg-white
px-4
py-2
rounded-full
shadow-md
flex
items-center
gap-2
opacity-100
lg:opacity-0
lg:group-hover:opacity-100
transition-all
duration-300
text-sm
"
        >
          <Eye size={18} />

          View
        </Link>

      </div>

      {/* Details */}

<div className="p-4 sm:p-5 lg:p-6">

        {/* Category */}

        <span
        className="
inline-block
bg-green-100
text-green-700
text-[11px]
sm:text-xs
font-semibold
px-3
py-1
rounded-full
"
        >
          {product.category?.name}
        </span>

        {/* Name */}

        <Link to={`/shop/${product._id}`}>

          <h3
           className="
text-lg
sm:text-xl
font-bold
mt-3
hover:text-green-700
transition
line-clamp-2
"
          >
            {product.name}
          </h3>

        </Link>

        {/* Rating */}

        <div className="flex items-center gap-1 mt-3">

          {[1, 2, 3, 4, 5].map((star) => (

            <Star
              key={star}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />

          ))}

          <span className="text-sm text-gray-500 ml-2">

            (4.9)

          </span>

        </div>

        {/* Price */}

        <div className="mt-4">

          <span className="text-xl sm:text-2xl font-bold text-green-700" >

            ₹{product.price}

          </span>

        </div>

        {/* Stock */}

        <div className="mt-2">

          {product.stock > 0 ? (

            <span className="text-green-600 text-sm">

              In Stock

            </span>

          ) : (

            <span className="text-red-600 text-sm">

              Out of Stock

            </span>

          )}

        </div>

        {/* Button */}

        <button
          className="
mt-5
w-full
bg-green-700
hover:bg-green-800
text-white
py-2.5
sm:py-3
rounded-xl
flex
justify-center
items-center
gap-2
text-sm
sm:text-base
transition
"
        >
          <ShoppingCart size={18} />

          Add to Cart

        </button>

      </div>

    </Card>
  );
};

export default ProductCard;