import {
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { addToCart } from "../../redux/slices/cartSlice";

const ProductInfo = ({ product }) => {

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()

 const handleAddToCart = () => {
     console.log("Add to cart clicked");
  dispatch(
    addToCart({
      ...product,
      quantity,
    })
  );
};

  return (
    <div>

      {/* Category */}

      <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">

        {product.category}

      </span>

      {/* Name */}

      <h1 className="text-4xl lg:text-5xl font-bold mt-5">

        {product.name}

      </h1>

      {/* Rating */}

      <div className="flex items-center gap-2 mt-5">

        <div className="text-yellow-500 text-xl">

          ★★★★★

        </div>

        <span className="text-gray-500">

          (24 Reviews)

        </span>

      </div>

      {/* Price */}

      <div className="flex items-center gap-5 mt-8">

        <h2 className="text-4xl font-bold text-green-700">

          ₹{product.price}

        </h2>

        {product.stock > 0 && (

          <span className="flex items-center gap-2 text-green-600">

            <CheckCircle size={18} />

            In Stock

          </span>

        )}

      </div>

      {/* Description */}

      <p className="text-gray-600 leading-8 mt-8">

        {product.description}

      </p>

      {/* Quantity */}

      <div className="flex items-center gap-5 mt-10">

        <span className="font-semibold">

          Quantity

        </span>

        <div className="flex items-center border rounded-xl">

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

      <div className="flex gap-4 mt-10">

        <button  onClick={handleAddToCart} className="flex-1 bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl flex justify-center items-center gap-3 transition">

          <ShoppingCart size={20} />

          Add to Cart

        </button>

        <button className="border rounded-xl px-5 hover:bg-gray-100 transition">

          <Heart />

        </button>

      </div>

    </div>
  );
};

export default ProductInfo;