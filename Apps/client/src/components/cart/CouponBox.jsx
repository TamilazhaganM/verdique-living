import { useState } from "react";

const CouponBox = () => {

    const [coupon, setCoupon] = useState("");

    const handleApplyCoupon = () => {

        if (!coupon.trim()) {

            return alert("Please enter a coupon code.");

        }

        alert("Coupon feature will be connected later.");

    };

    return (

        <div className="bg-white rounded-2xl shadow-sm border p-6 mt-8">

            <h3 className="text-xl font-bold">

                Have a Coupon?

            </h3>

            <p className="text-gray-500 mt-2">

                Enter your coupon code if you have one.

            </p>

            <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="
                w-full
                mt-5
                border
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-green-700
                "
            />

            <button
                onClick={handleApplyCoupon}
                className="
                w-full
                mt-5
                bg-green-700
                hover:bg-green-800
                text-white
                py-3
                rounded-xl
                transition
                "
            >

                Apply Coupon

            </button>

        </div>

    );

};

export default CouponBox;