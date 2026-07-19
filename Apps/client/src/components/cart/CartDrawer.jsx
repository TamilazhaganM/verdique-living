import { X, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../redux/slices/uiSlice";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const cartOpen = useSelector((state) => state.ui.cartOpen);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => dispatch(closeCart())}
        className={`
          fixed inset-0
          bg-black/40 backdrop-blur-sm
          z-40
          transition-all duration-300

          ${
            cartOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Drawer */}

      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-full
          max-w-md
          bg-white
          shadow-2xl
          z-50
          flex
          flex-col
          transition-transform
          duration-300

          ${
            cartOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* Header */}

        <div className="flex items-center justify-between px-5 sm:px-6 py-5 border-b">

          <h2 className="text-xl sm:text-2xl font-bold">
            Shopping Cart ({totalItems})
          </h2>

          <button
            onClick={() => dispatch(closeCart())}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X />
          </button>

        </div>

        {/* Body */}

        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5">

          {cartItems.length === 0 ? (

            <div className="h-full flex flex-col justify-center items-center text-center">

              <ShoppingCart
                size={70}
                className="text-gray-300"
              />

              <h3 className="text-2xl font-semibold mt-6">
                Your Cart is Empty
              </h3>

              <p className="text-gray-500 mt-3 max-w-xs">
                Looks like you haven't added any beautiful plants yet.
              </p>

              <button
                onClick={() => dispatch(closeCart())}
                className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl"
              >
                Continue Shopping
              </button>

            </div>

          ) : (

            <div className="space-y-5">

              {cartItems.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                />
              ))}

            </div>

          )}

        </div>

        {/* Footer */}

        {cartItems.length > 0 && (

          <div className="border-t bg-white px-5 sm:px-6 py-1">

            <div className="space-y-4">

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Subtotal ({totalItems} items)
                </span>

                <span className="font-semibold">
                  ₹{subtotal.toLocaleString()}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Shipping
                </span>

                <span className="text-green-700 font-semibold">
                  FREE
                </span>

              </div>

              <hr />

              <div className="flex justify-between text-lg font-bold">

                <span>Total</span>

                <span>
                  ₹{subtotal.toLocaleString()}
                </span>

              </div>

            </div>

            <Link
              to="/cart"
              onClick={() => dispatch(closeCart())}
              className="
                mt-2
                w-full
                block
                text-center
                bg-green-700
                hover:bg-green-800
                text-white
                py-2
                rounded-xl
                font-medium
                transition
              "
            >
              View Cart
            </Link>

          </div>

        )}

      </div>
    </>
  );
};

export default CartDrawer;