const RecentOrders = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <div className="flex justify-between mb-5">

        <h2 className="text-xl font-semibold">
          Recent Orders
        </h2>

        <button className="text-green-700 font-medium">
          View All →
        </button>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-3">
              Order
            </th>

            <th className="text-left">
              Customer
            </th>

            <th className="text-left">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          <tr className="border-b">

            <td className="py-4">
              #1001
            </td>

            <td>
              Ravi
            </td>

            <td>

              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                Pending
              </span>

            </td>

          </tr>

          <tr className="border-b">

            <td className="py-4">
              #1002
            </td>

            <td>
              Kumar
            </td>

            <td>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Delivered
              </span>

            </td>

          </tr>

          <tr>

            <td className="py-4">
              #1003
            </td>

            <td>
              Priya
            </td>

            <td>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Processing
              </span>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default RecentOrders;