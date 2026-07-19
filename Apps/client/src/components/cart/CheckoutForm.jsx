import { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import { createOrder } from "../../services/order.service";
import { clearCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    address: "",
    paymentMethod: "COD",
  });
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
  newErrors.email = "Email is required";
} else if (
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
) {
  newErrors.email = "Please enter a valid email address";
}

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,

      [name]: value,
    });

    setErrors((prev) => ({
      ...prev,

      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      try {
        const orderData = {
          orderItems: cartItems.map((item) => ({
            product: item._id,
            quantity: item.quantity,
          })),

          shippingAddress: {
            fullName: formData.fullName,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
            country: formData.country,
          },

          paymentMethod: formData.paymentMethod,
        };

        await createOrder(orderData);

        dispatch(clearCart());

        navigate("/order-success",{
  state: { order }
});
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-8">
      <h2 className="text-2xl font-bold mb-8">Shipping Details</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state}</p>
          )}
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>
        {errors.pincode && (
          <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
        )}
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country}</p>
        )}
        <textarea
          rows="4"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Street Address"
          className="w-full border rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
        <PaymentMethod
  formData={formData}
  handleChange={handleChange}
/>
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-4 rounded-xl hover:bg-green-800 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
