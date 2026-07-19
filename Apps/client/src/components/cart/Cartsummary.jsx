import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CartSummary = ({ subtotal, totalItems }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5 sm:p-6">

      <h2 className="text-xl sm:text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between text-gray-600 text-sm sm:text-base">

          <span>Items</span>

          <span>{totalItems}</span>

        </div>

        <div className="flex justify-between text-gray-600 text-sm sm:text-base">

          <span>Subtotal</span>

          <span>₹{subtotal.toLocaleString()}</span>

        </div>

        <div className="flex justify-between text-sm sm:text-base">

          <span className="text-gray-600">
            Shipping
          </span>

          <span className="font-semibold text-green-700">
            FREE
          </span>

        </div>

        <hr />

        <div className="flex justify-between items-center">

          <span className="text-lg sm:text-2xl font-bold">
            Total
          </span>

          <span className="text-xl sm:text-2xl font-bold text-green-700">
            ₹{subtotal.toLocaleString()}
          </span>

        </div>

      </div>

      {/* Checkout */}

      <Link
        to="/checkout"
        className="
          block
          w-full
          mt-8
          bg-green-700
          hover:bg-green-800
          text-white
          text-center
          py-3.5
          rounded-xl
          font-semibold
          transition
        "
      >
        Proceed to Checkout
      </Link>

      {/* Continue Shopping */}

      <Link
        to="/shop"
        className="
          flex
          justify-center
          items-center
          gap-2
          mt-5
          text-green-700
          hover:gap-3
          transition-all
          text-sm
          sm:text-base
        "
      >
        <ArrowLeft size={18} />
        Continue Shopping
      </Link>

    </div>
  );
};

export default CartSummary;