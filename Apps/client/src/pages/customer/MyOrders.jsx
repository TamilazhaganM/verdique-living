import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { getMyOrders } from "../../services/order.service";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await getMyOrders();
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20">
        <Container>
          <div className="text-center text-lg font-semibold">
            Loading your orders...
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          title="My Orders"
          subtitle="Track all your purchases from Verdique Living."
        />

        {orders.length === 0 ? (
          <div className="bg-white rounded-3xl shadow border p-12 text-center mt-10">
            <Package
              size={70}
              className="mx-auto text-gray-300"
            />

            <h2 className="text-2xl font-bold mt-6">
              No Orders Yet
            </h2>

            <p className="text-gray-500 mt-3">
              Looks like you haven't placed any orders.
            </p>

            <Link
              to="/shop"
              className="inline-block mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6 mt-10">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-2xl shadow-sm border p-6"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                  <div>
                    <h2 className="text-xl font-bold">
                      Order #{order._id.slice(-6).toUpperCase()}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Date:
                      {" "}
                      {new Date(
                        order.createdAt
                      ).toLocaleDateString()}
                    </p>

                    <p className="text-gray-500 mt-2">
                      Items:
                      {" "}
                      {order.orderItems.length}
                    </p>

                    <p className="text-gray-500 mt-2">
                      Payment:
                      {" "}
                      {order.paymentMethod}
                    </p>
                  </div>

                  <div className="text-right">
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-semibold
                        ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                    >
                      {order.status}
                    </span>

                    <h3 className="text-2xl font-bold mt-5">
                      ₹{order.totalAmount.toLocaleString()}
                    </h3>

                    <Link
                      to={`/my-orders/${order._id}`}
                      className="inline-block mt-6 text-green-700 font-semibold hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default MyOrders;