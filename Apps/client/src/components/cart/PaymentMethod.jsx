const PaymentMethod = ({ formData, handleChange }) => {
  return (
    <div className="pt-4">
      <h3 className="text-xl md:text-2xl font-bold mb-5">
        Payment Method
      </h3>

      <div className="space-y-4">
        <label
          className="
          flex
          items-center
          gap-3
          border
          rounded-xl
          p-4
          cursor-pointer
          hover:border-green-700
          transition
          "
        >
          <input
            type="radio"
            name="paymentMethod"
            value="COD"
            checked={formData.paymentMethod === "COD"}
            onChange={handleChange}
          />

          <span className="text-sm md:text-base">
            Cash on Delivery
          </span>
        </label>

        <label
          className="
          flex
          items-center
          gap-3
          border
          rounded-xl
          p-4
          cursor-pointer
          hover:border-green-700
          transition
          "
        >
          <input
            type="radio"
            name="paymentMethod"
            value="Razorpay"
            checked={formData.paymentMethod === "Razorpay"}
            onChange={handleChange}
          />

          <span className="text-sm md:text-base">
            Razorpay
          </span>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;