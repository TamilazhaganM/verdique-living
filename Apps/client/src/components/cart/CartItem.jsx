import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 py-5 border-b">

      {/* Image */}

      <img
        src={item.image.url}
        alt={item.name}
        className="w-20 h-20 ml-2 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0"
      />

      {/* Details */}

      <div className="flex-1 flex flex-col justify-between">

        <div className="flex justify-between gap-3">

          <div>

            <h3 className="font-semibold text-base sm:text-lg line-clamp-2">
              {item.name}
            </h3>

            <p className="text-green-700 font-bold mt-2">
              ₹{item.price.toLocaleString()}
            </p>

          </div>

          <button
            onClick={() =>
              dispatch(removeFromCart(item._id))
            }
            className="text-red-500 hover:text-red-700 self-start mr-2"
          >
            <Trash2 size={22} />
          </button>

        </div>

        {/* Bottom */}

        <div className="flex items-center justify-between mt-4">

          {/* Quantity */}

          <div className="flex items-center border rounded-xl overflow-hidden">

            <button
              onClick={() =>
                dispatch(decreaseQuantity(item._id))
              }
              className="p-2 hover:bg-gray-100"
            >
              <Minus size={16} />
            </button>

            <span className="px-4 font-semibold">
              {item.quantity}
            </span>

            <button
              onClick={() =>
                dispatch(increaseQuantity(item._id))
              }
              className="p-2 hover:bg-gray-100"
            >
              <Plus size={16} />
            </button>

          </div>

          {/* Item Total */}

          <div className="text-right mr-3">

            <p className="text-sm text-gray-500 ">
              Total
            </p>

            <p className="font-bold text-green-700">
              ₹{(item.price * item.quantity).toLocaleString()}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CartItem;