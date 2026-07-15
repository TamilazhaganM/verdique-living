import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../redux/slices/uiSlice";
import CartItem from "./CartItem";

const CartDrawer = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(
  (state) => state.cart.items
);

    const cartOpen = useSelector(
        (state) => state.ui.cartOpen
    );

    return (

        <>

            {/* Overlay */}

            <div
                onClick={() => dispatch(closeCart())}
                className={`
                fixed
                inset-0
                bg-black/40
                z-40
                transition-opacity
                duration-300

                ${cartOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"}
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
                sm:w-[430px]
                bg-white
                z-50
                shadow-2xl
                transition-transform
                duration-300

                flex
                flex-col

                ${cartOpen
                    ? "translate-x-0"
                    : "translate-x-full"}
                `}
            >

                {/* Header */}

                <div className="flex items-center justify-between p-6 border-b">

                    <h2 className="text-2xl font-bold">

                        Shopping Cart

                    </h2>

                    <button
                        onClick={() => dispatch(closeCart())}
                    >

                        <X />

                    </button>

                </div>

                {/* Body */}

                <div className="flex-1 overflow-y-auto p-6">
{cartItems.length === 0 ? (

    <div className="h-full flex items-center justify-center text-gray-400">

        Your cart is empty.

    </div>

) : (

    cartItems.map((item) => (

        <CartItem
            key={item._id}
            item={item}
        />

    ))

)}

                </div>

                {/* Footer */}

                <div className="border-t p-6">

                    <button
                        className="
                        w-full
                        bg-green-700
                        text-white
                        rounded-xl
                        py-4
                        hover:bg-green-800
                        transition
                        "
                    >

                        Checkout

                    </button>

                </div>

            </div>

        </>

    );

};

export default CartDrawer;