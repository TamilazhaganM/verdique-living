import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/user.service";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await getAllUsers();
      setCustomers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredCustomers = customers.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-gray-800">
          Customers
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all registered customers.
        </p>

      </div>

      {/* Search */}

      <div>

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            md:w-96
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

      {/* ================= Mobile Cards ================= */}

      <div className="lg:hidden space-y-5">

        {filteredCustomers.length > 0 ? (

          filteredCustomers.map((customer) => (

            <div
              key={customer._id}
              className="bg-white rounded-2xl shadow border p-5"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-lg font-bold">
                    {customer.name}
                  </h2>

                  <p className="text-sm text-gray-500 break-all">
                    {customer.email}
                  </p>

                </div>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {customer.role}
                </span>

              </div>

              <hr className="my-4" />

              <div className="space-y-3">

                <div>

                  <p className="text-xs uppercase text-gray-500">
                    Joined
                  </p>

                  <p className="font-medium">
                    {new Date(customer.createdAt).toLocaleDateString()}
                  </p>

                </div>

              </div>

              <Link
                to={`/admin/customers/${customer._id}`}
                className="
                  w-full
                  mt-5
                  bg-green-700
                  hover:bg-green-800
                  text-white
                  py-3
                  rounded-xl
                  flex
                  justify-center
                  items-center
                  gap-2
                  transition
                "
              >
                <Eye size={18} />
                View Customer
              </Link>

            </div>

          ))

        ) : (

          <div className="bg-white rounded-2xl shadow border p-10 text-center text-gray-500">

            No customers found.

          </div>

        )}

      </div>

      {/* ================= Desktop Table ================= */}

      <div className="hidden lg:block bg-white rounded-2xl shadow border overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Name
              </th>

              <th className="text-left">
                Email
              </th>

              <th className="text-left">
                Role
              </th>

              <th className="text-left">
                Joined
              </th>

              <th className="text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredCustomers.length > 0 ? (

              filteredCustomers.map((customer) => (

                <tr
                  key={customer._id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="p-4 font-medium">
                    {customer.name}
                  </td>

                  <td>
                    {customer.email}
                  </td>

                  <td>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                      {customer.role}

                    </span>

                  </td>

                  <td>

                    {new Date(customer.createdAt).toLocaleDateString()}

                  </td>

                  <td className="text-center">

                    <Link
                      to={`/admin/customers/${customer._id}`}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        bg-green-700
                        hover:bg-green-800
                        text-white
                        p-2
                        rounded-lg
                        transition
                      "
                    >
                      <Eye size={18} />
                    </Link>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="5"
                  className="text-center py-10 text-gray-500"
                >
                  No customers found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Customers;