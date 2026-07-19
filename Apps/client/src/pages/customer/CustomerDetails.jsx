import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../services/user.service";

const CustomerDetails = () => {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = async () => {
    try {
      const response = await getUserById(id);
      setCustomer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!customer) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Customer Details
        </h1>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white shadow rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            Profile
          </h2>

          <p>
            <strong>Name:</strong> {customer.user.name}
          </p>

          <p>
            <strong>Email:</strong> {customer.user.email}
          </p>

          <p>
            <strong>Role:</strong> {customer.user.role}
          </p>

          <p>
            <strong>Joined:</strong>{" "}
            {new Date(
              customer.user.createdAt
            ).toLocaleDateString()}
          </p>

        </div>

        <div className="bg-white shadow rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            Statistics
          </h2>

          <p>
            <strong>Total Orders:</strong>{" "}
            {customer.totalOrders}
          </p>

          <p>
            <strong>Total Spent:</strong> ₹
            {customer.totalSpent}
          </p>

        </div>

      </div>

      <div className="bg-white shadow rounded-2xl p-6">

        <h2 className="text-xl font-semibold mb-6">
          Recent Orders
        </h2>

        {customer.orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table className="w-full">

            <thead>

              <tr>

                <th className="text-left p-3">
                  Order ID
                </th>

                <th className="text-left">
                  Status
                </th>

                <th className="text-left">
                  Amount
                </th>

              </tr>

            </thead>

            <tbody>

              {customer.orders.map((order) => (

                <tr
                  key={order._id}
                  className="border-t"
                >

                  <td className="p-3">
                    {order._id.slice(-6)}
                  </td>

                  <td>
                    {order.status}
                  </td>

                  <td>
                    ₹{order.totalAmount}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>
        )}

      </div>

    </div>
  );
};

export default CustomerDetails;