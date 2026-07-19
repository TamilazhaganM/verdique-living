import { useEffect, useState } from "react";
import {
  Package,
  ShoppingBag,
  Users,
  IndianRupee,
  MessageSquare,
  RefreshCcw,
} from "lucide-react";

import { getDashboard } from "../../services/dashboard.service";

import MonthlySalesChart from "../../components/admin/MonthlySalesChart";
import OrderStatusChart from "../../components/admin/OrderStatusChart";
import StatsCard from "../../components/admin/StatCard";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const statusStyles = {
    Pending: "bg-yellow-100 text-yellow-700",

    Processing: "bg-blue-100 text-blue-700",

    Shipped: "bg-indigo-100 text-indigo-700",

    Delivered: "bg-green-100 text-green-700",

    Cancelled: "bg-red-100 text-red-700",
  };

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getDashboard();

      setDashboard(response.data);
    } catch (error) {
      console.log(error);

      setError("Unable to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div
        className="
        flex
        justify-center
        items-center
        h-96
        text-xl
        text-gray-600
      "
      >
        Loading Dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="
        bg-red-100
        text-red-700
        p-5
        rounded-xl
      "
      >
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div
        className="
flex
flex-col
sm:flex-row
justify-between
gap-4
"
      >
        <div>
          <h1
            className="
text-3xl
font-bold
text-gray-800
"
          >
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        <button
          onClick={fetchDashboard}
          className="
flex
items-center
gap-2
bg-green-700
text-white
px-5
py-3
rounded-xl
hover:bg-green-800
transition
"
        >
          <RefreshCcw size={18} />
          Refresh
        </button>
      </div>

      {/* KPI Cards */}

      <div
        className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-5
gap-6
"
      >
        <StatsCard
          icon={IndianRupee}
          title="Total Revenue"
          value={`₹${dashboard?.totalRevenue?.toLocaleString() || 0}`}
          color="text-green-700"
        />

        <StatsCard
          icon={ShoppingBag}
          title="Total Orders"
          value={dashboard?.totalOrders || 0}
          color="text-blue-600"
          onClick={() => navigate("/admin/orders")}
        />

        <StatsCard
          icon={Users}
          title="Customers"
          value={dashboard?.totalCustomers || 0}
          color="text-purple-600"
          onClick={() => navigate("/admin/customers")}
        />

        <StatsCard
          icon={Package}
          title="Products"
          value={dashboard?.totalProducts || 0}
          color="text-orange-600"
          onClick={() => navigate("/admin/products")}
        />

        <StatsCard
          icon={MessageSquare}
          title="New Enquiries"
          value={dashboard?.newEnquiries || 0}
          color="text-indigo-600"
          onClick={() => navigate("/admin/contact-enquiries")}
        />
      </div>

      {/* Charts */}

      <div
        className="
grid
lg:grid-cols-2
gap-8
"
      >
        <MonthlySalesChart data={dashboard.monthlySales} />

        <OrderStatusChart data={dashboard.orderStatus} />
      </div>

      {/* Tables */}

      <div
        className="
grid
lg:grid-cols-2
gap-8
"
      >
        {/* Orders */}

        <div
          className="
bg-white
rounded-2xl
shadow
border
overflow-hidden
"
        >
          <h2
            className="
p-6
text-xl
font-semibold
border-b
"
          >
            Recent Orders
          </h2>

          <div className="overflow-x-auto">
            <table
              className="
min-w-[600px]
w-full
"
            >
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">Customer</th>

                  <th className="text-left">Amount</th>

                  <th className="text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {dashboard.recentOrders?.map((order) => (
                  <tr
                    key={order._id}
                    onClick={() => navigate(`/admin/orders/${order._id}`)}
                    className="
border-t
hover:bg-gray-50
cursor-pointer
"
                  >
                    <td className="p-4">{order.customer?.name}</td>

                    <td>₹{order.totalAmount}</td>

                    <td>
                      <span
                        className={`
px-3
py-1
rounded-full
text-sm
${statusStyles[order.status] || ""}
`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customers */}

        <div
          className="
bg-white
rounded-2xl
shadow
border
overflow-hidden
"
        >
          <h2
            className="
p-6
text-xl
font-semibold
border-b
"
          >
            Latest Customers
          </h2>

          <div className="overflow-x-auto">
            <table
              className="
min-w-[600px]
w-full
"
            >
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">Name</th>

                  <th className="text-left">Email</th>

                  <th className="text-left">Joined</th>
                </tr>
              </thead>

              <tbody>
                {dashboard.recentCustomers?.map((customer) => (
                  <tr
                    key={customer._id}
                    className="
border-t
hover:bg-gray-50
"
                  >
                    <td className="p-4">{customer.name}</td>

                    <td>{customer.email}</td>

                    <td>{new Date(customer.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
