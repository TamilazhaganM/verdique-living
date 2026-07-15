const RecentProducts = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <div className="flex justify-between mb-5">

        <h2 className="text-xl font-semibold">
          Recent Products
        </h2>

        <button className="text-green-700 font-medium">
          View All →
        </button>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-3">Name</th>

            <th className="text-left">Price</th>

            <th className="text-left">Stock</th>

          </tr>

        </thead>

        <tbody>

          <tr className="border-b">

            <td className="py-4">Snake Plant</td>

            <td>₹499</td>

            <td>20</td>

          </tr>

          <tr className="border-b">

            <td className="py-4">Money Plant</td>

            <td>₹399</td>

            <td>15</td>

          </tr>

          <tr>

            <td className="py-4">Aloe Vera</td>

            <td>₹299</td>

            <td>10</td>

          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default RecentProducts;