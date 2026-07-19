import { CheckCircle, ShoppingBag, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/ui/Container";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-green-50 min-h-[80vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg border p-10 text-center">

          {/* Success Icon */}
          <div className="flex justify-center">
            <CheckCircle
              size={90}
              className="text-green-600"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold mt-6 text-gray-800">
            Your Order Has Been Placed!
          </h1>

          <p className="text-gray-600 mt-4 leading-7">
            Thank you for shopping with
            <span className="font-semibold text-green-700">
              {" "}Verdique Living
            </span>.
            <br />
            We've received your order and will begin preparing it shortly.
          </p>

          {/* Information */}
          <div className="mt-10 space-y-5 text-left border rounded-2xl p-6 bg-gray-50">

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Truck className="text-green-700" />
                <span className="font-medium">
                  Estimated Delivery
                </span>
              </div>

              <span className="font-semibold">
                3 - 5 Business Days
              </span>
            </div>

            <hr />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-green-700" />
                <span className="font-medium">
                  Payment Method
                </span>
              </div>

              <span className="font-semibold">
                Cash on Delivery
              </span>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <button
              onClick={() => navigate("/my-orders")}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl transition font-semibold"
            >
              View My Orders
            </button>

            <button
              onClick={() => navigate("/shop")}
              className="border border-green-700 text-green-700 hover:bg-green-50 px-8 py-4 rounded-xl transition font-semibold"
            >
              Continue Shopping
            </button>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default OrderSuccess;