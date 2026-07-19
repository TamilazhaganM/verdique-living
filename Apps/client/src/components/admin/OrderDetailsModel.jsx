import { useState } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Package,
  Save,
} from "lucide-react";
import { updateOrderStatus } from "../../services/adminOrder.service";

const OrderDetailsModal = ({
  order,
  closeModal,
  refreshOrders,
}) => {
  const [status, setStatus] = useState(order.status);
  const [loading, setLoading] = useState(false);

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

  const handleSave = async () => {
    try {
      setLoading(true);

      await updateOrderStatus(order._id, status);

      refreshOrders();

      closeModal();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-6">

      <div className="bg-slate-50 rounded-3xl w-full max-w-5xl max-h-[92vh] overflow-y-auto">

        {/* Header */}

        <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between items-center rounded-t-3xl">

          <div>

            <h1 className="text-3xl font-bold">
              Order Details
            </h1>

            <p className="text-gray-500 mt-2">
              #{order._id.slice(-8).toUpperCase()}
            </p>

          </div>

          <div className="flex items-center gap-4">

            <span
              className={`px-4 py-2 rounded-full font-semibold ${getStatusColor(
                order.status
              )}`}
            >
              {order.status}
            </span>

            <button
              onClick={closeModal}
              className="hover:bg-gray-100 p-2 rounded-full"
            >
              <X size={28} />
            </button>

          </div>

        </div>

        <div className="p-8 space-y-8">

          {/* Cards */}

          <div className="grid lg:grid-cols-2 gap-6">

            {/* Customer */}

            <div className="bg-white rounded-2xl shadow-sm border p-6">

              <h2 className="text-xl font-bold flex items-center gap-2 mb-6">

                <User size={22} />

                Customer

              </h2>

              <div className="space-y-4">

                <div className="flex gap-3 items-center">

                  <User size={18} className="text-green-700" />

                  <span>{order.customer?.name}</span>

                </div>

                <div className="flex gap-3 items-center">

                  <Mail size={18} className="text-green-700" />

                  <span>{order.customer?.email}</span>

                </div>

                <div className="flex gap-3 items-center">

                  <Phone size={18} className="text-green-700" />

                  <span>{order.shippingAddress.phone}</span>

                </div>

              </div>

            </div>

            {/* Shipping */}

            <div className="bg-white rounded-2xl shadow-sm border p-6">

              <h2 className="text-xl font-bold flex items-center gap-2 mb-6">

                <MapPin size={22} />

                Shipping Address

              </h2>

              <div className="space-y-2 text-gray-700">

                <p>{order.shippingAddress.fullName}</p>

                <p>{order.shippingAddress.address}</p>

                <p>
                  {order.shippingAddress.city},{" "}
                  {order.shippingAddress.state}
                </p>

                <p>
                  {order.shippingAddress.country} -{" "}
                  {order.shippingAddress.pincode}
                </p>

              </div>

            </div>

          </div>

          {/* Summary */}

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-2xl shadow-sm border p-6">

              <h3 className="font-semibold text-gray-500">
                Payment Method
              </h3>

              <div className="flex items-center gap-3 mt-4">

                <CreditCard className="text-green-700" />

                <span className="text-xl font-bold uppercase">

                  {order.paymentMethod}

                </span>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-sm border p-6">

              <h3 className="font-semibold text-gray-500">

                Total Amount

              </h3>

              <h2 className="text-3xl font-bold text-green-700 mt-4">

                ₹{order.totalAmount.toLocaleString()}

              </h2>

            </div>

          </div>

          {/* Products */}

          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">

              <Package />

              Ordered Products

            </h2>

            <div className="space-y-5">

              {order.orderItems.map((item) => (

                <div
                  key={item._id}
                  className="flex items-center justify-between border rounded-2xl p-5 hover:shadow-md transition"
                >

                  <div className="flex items-center gap-5">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-2xl object-cover"
                    />

                    <div>

                      <h3 className="font-bold text-lg">

                        {item.name}

                      </h3>

                      <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                        Qty : {item.quantity}

                      </span>

                    </div>

                  </div>

                  <div className="text-right">

                    <p className="text-gray-500">

                      Price

                    </p>

                    <h3 className="text-2xl font-bold">

                      ₹{item.price}

                    </h3>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Status */}

          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <label className="font-bold text-lg">

              Update Order Status

            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-xl p-4 mt-4"
            >
              <option>Pending</option>
              <option>Preparing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>

            <button
              onClick={handleSave}
              disabled={loading}
              className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl flex justify-center items-center gap-3 font-semibold"
            >
              <Save size={20} />

              {loading ? "Saving..." : "Save Changes"}

            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default OrderDetailsModal;