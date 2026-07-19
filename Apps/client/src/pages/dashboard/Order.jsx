import { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import { getAllOrders } from "../../services/adminOrder.service";
import OrderTable from "../../components/admin/OrderTable";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await getAllOrders();
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <Container>
        <div className="py-20 text-center text-lg sm:text-xl font-semibold">
          Loading Orders...
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-6 sm:py-8 lg:py-10">

      {/* Header */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
          mb-8
        "
      >
        <div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Orders
          </h1>

          <p className="text-gray-500 mt-1 text-sm sm:text-base">
            Manage customer orders.
          </p>

        </div>

        <input
          type="text"
          placeholder="Search Orders..."
          className="
            w-full
            sm:w-72
            border
            rounded-xl
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-green-600
          "
        />
      </div>

      <OrderTable
        orders={orders}
        refreshOrders={fetchOrders}
      />

    </Container>
  );
};

export default Orders;