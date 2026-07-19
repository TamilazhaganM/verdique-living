import { useSelector } from "react-redux";

const CheckoutSummary = () => {

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (

        <div className="bg-white rounded-2xl shadow-sm border p-6 sticky top-28">

            <h2 className="text-2xl font-bold mb-6">

                Order Summary

            </h2>

            <div className="space-y-5">

                {cartItems.map((item) => (

                    <div
                        key={item._id}
                        className="flex justify-between"
                    >

                        <div>

                            <p className="font-medium">

                                {item.name}

                            </p>

                            <span className="text-sm text-gray-500">

                                Qty: {item.quantity}

                            </span>

                        </div>

                        <span>

                            ₹{(item.price * item.quantity).toLocaleString()}

                        </span>

                    </div>

                ))}

                <hr />

                <div className="flex justify-between">

                    <span>

                        Subtotal

                    </span>

                    <span>

                        ₹{subtotal.toLocaleString()}

                    </span>

                </div>

                <div className="flex justify-between">

                    <span>

                        Shipping

                    </span>

                    <span className="text-green-700">

                        FREE

                    </span>

                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold">

                    <span>

                        Total

                    </span>

                    <span>

                        ₹{subtotal.toLocaleString()}

                    </span>

                </div>

                <button
                    className="
                    w-full
                    mt-6
                    bg-green-700
                    hover:bg-green-800
                    text-white
                    py-4
                    rounded-xl
                    transition
                    "
                >

                    Place Order

                </button>

            </div>

        </div>

    );

};

export default CheckoutSummary; 