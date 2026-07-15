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
        className="w-24 h-24 rounded-xl object-cover"
      />

      {/* Details */}

      <div className="flex-1">

        <h3 className="font-semibold">

          {item.name}

        </h3>

        <p className="text-green-700 font-bold mt-2">

          ₹{item.price}

        </p>

        {/* Quantity */}

        <div className="flex items-center gap-3 mt-4">

          <button
            onClick={() =>
              dispatch(decreaseQuantity(item._id))
            }
            className="border rounded-lg p-2"
          >

            <Minus size={16} />

          </button>

          <span>

            {item.quantity}

          </span>

          <button
            onClick={() =>
              dispatch(increaseQuantity(item._id))
            }
            className="border rounded-lg p-2"
          >

            <Plus size={16} />

          </button>

        </div>

      </div>

      {/* Remove */}

      <button
        onClick={() =>
          dispatch(removeFromCart(item._id))
        }
      >

        <Trash2 className="text-red-500" />

      </button>

    </div>

  );

};

export default CartItem;