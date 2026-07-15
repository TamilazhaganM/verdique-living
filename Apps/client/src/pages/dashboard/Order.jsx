const Orders = () => {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Orders
      </h1>

      <div className="bg-white rounded-xl shadow border">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">Order ID</th>
              <th className="text-left">Customer</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-t">

              <td className="p-4">#1001</td>

              <td>Ravi</td>

              <td>₹499</td>

              <td>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

                  Pending

                </span>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Orders;