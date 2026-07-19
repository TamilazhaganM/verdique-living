import { Eye } from "lucide-react";
import { useState } from "react";
import OrderDetailsModel from "./OrderDetailsModel";

const OrdersTable = ({ orders, refreshOrders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Preparing":
        return "bg-blue-100 text-blue-700";

      case "Shipped":
        return "bg-purple-100 text-purple-700";

      case "Delivered":
        return "bg-green-100 text-green-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <>
      {/* ================= Mobile View ================= */}

      <div className="lg:hidden space-y-5">

        {orders.map((order) => (

          <div
            key={order._id}
            className="bg-white rounded-2xl shadow border p-5"
          >

            <div className="flex justify-between items-start">

              <div>

                <h2 className="font-bold text-lg">
                  #{order._id.slice(-6).toUpperCase()}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                  order.status
                )}`}
              >
                {order.status}
              </span>

            </div>

            <hr className="my-4" />

            <div className="space-y-4">

              <div>

                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Customer :
                </p>

                <h3 className="font-semibold text-center">
                  {order.customer?.name}
                </h3>

                <p className="text-sm text-gray-500 text-center break-all">
                  {order.customer?.email}
                </p>

              </div>

              <div>

                <p className="text-xs  text-gray-500 uppercase tracking-wide">
                  Amount :
                </p>

                <p className="text-xl text-center font-bold text-green-700">
                  ₹{order.totalAmount.toLocaleString()}
                </p>

              </div>

            </div>

            <button
              onClick={() => setSelectedOrder(order)}
              className="
                w-full
                mt-5
                bg-green-700
                hover:bg-green-800
                text-white
                py-3
                rounded-xl
                flex
                items-center
                justify-center
                gap-2
                transition
              "
            >
              <Eye size={18} />
              View Order
            </button>

          </div>

        ))}

      </div>

      {/* ================= Desktop Table ================= */}

      <div className="hidden lg:block bg-white rounded-2xl shadow border overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left p-4">Order</th>

              <th className="text-left p-4">Customer</th>

              <th className="text-left p-4">Amount</th>

              <th className="text-left p-4">Status</th>

              <th className="text-left p-4">Date</th>

              <th className="text-center p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order._id}
                className="border-t hover:bg-gray-50 transition"
              >

                <td className="p-4 font-semibold">
                  #{order._id.slice(-6).toUpperCase()}
                </td>

                <td className="p-4">

                  <div>

                    <h2 className="font-semibold">
                      {order.customer?.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {order.customer?.email}
                    </p>

                  </div>

                </td>

                <td className="p-4 font-semibold">
                  ₹{order.totalAmount.toLocaleString()}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>

                </td>

                <td className="p-4">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="
                      bg-green-700
                      hover:bg-green-800
                      text-white
                      p-2
                      rounded-lg
                      transition
                    "
                  >
                    <Eye size={18} />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* ================= Modal ================= */}

      {selectedOrder && (
        <OrderDetailsModel
          order={selectedOrder}
          closeModal={() => setSelectedOrder(null)}
          refreshOrders={refreshOrders}
        />
      )}
    </>
  );
};

export default OrdersTable;