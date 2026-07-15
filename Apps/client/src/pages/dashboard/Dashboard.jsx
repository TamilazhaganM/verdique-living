import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Package, Star, AlertTriangle, Plus } from "lucide-react";
import { getDashboard } from "../../services/dashboard.service";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const data = await getDashboard();
      setDashboard(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!dashboard) {
    return (
      <div className="text-center text-xl py-20">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Here's what's happening in your store today.
          </p>

        </div>

        <Link
          to="/products/add"
          className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition"
        >
          <Plus size={18} />
          Add Product
        </Link>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white shadow rounded-2xl p-6 border">

          <Package className="text-green-700 mb-4" size={35} />

          <h2 className="text-gray-500">
            Total Products
          </h2>

          <p className="text-4xl font-bold mt-2">
            {dashboard.totalProducts}
          </p>

        </div>

        <div className="bg-white shadow rounded-2xl p-6 border">

          <Star className="text-yellow-500 mb-4" size={35} />

          <h2 className="text-gray-500">
            Featured Products
          </h2>

          <p className="text-4xl font-bold mt-2">
            {dashboard.featuredProducts}
          </p>

        </div>

        <div className="bg-white shadow rounded-2xl p-6 border">

          <AlertTriangle className="text-red-500 mb-4" size={35} />

          <h2 className="text-gray-500">
            Low Stock
          </h2>

          <p className="text-4xl font-bold mt-2">
            {dashboard.lowStockProducts}
          </p>

        </div>

      </div>

      {/* Recent Products */}

      <div className="bg-white rounded-2xl shadow border">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-semibold">
            Recent Products
          </h2>

        </div>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-4">
                Name
              </th>

              <th className="text-left">
                Category
              </th>

              <th className="text-left">
                Price
              </th>

              <th className="text-left">
                Stock
              </th>

            </tr>

          </thead>

          <tbody>

            {dashboard.recentProducts.map((product) => (

              <tr
                key={product._id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">
                  {product.name}
                </td>

                <td>
                  {product.category}
                </td>

                <td>
                  ₹{product.price}
                </td>

                <td>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                    {product.stock}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Dashboard;