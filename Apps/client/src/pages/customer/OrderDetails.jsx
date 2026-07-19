import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../services/order.service";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

const OrderDetails = () => {

  const { id } = useParams();

  const [order, setOrder] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchOrder();

  }, []);

  const fetchOrder = async () => {

    try {

      const response = await getOrderById(id);

      setOrder(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );

  }

  return (

    <section className="py-16">

      <Container>

        <SectionTitle
          title="Order Details"
          subtitle="Track your purchase"
        />

        <div className="bg-white rounded-3xl shadow border p-8 mt-10">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                Order #{order._id.slice(-6).toUpperCase()}

              </h2>

              <p className="text-gray-500 mt-2">

                {new Date(
                  order.createdAt
                ).toLocaleDateString()}

              </p>

            </div>

            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">

              {order.status}

            </span>

          </div>

          <hr className="my-8"/>

          <h3 className="text-xl font-bold">

            Shipping Address

          </h3>

          <div className="mt-4 space-y-2 text-gray-600">

            <p>{order.shippingAddress.fullName}</p>

            <p>{order.shippingAddress.phone}</p>

            <p>{order.shippingAddress.address}</p>

            <p>

              {order.shippingAddress.city},{" "}
              {order.shippingAddress.state}

            </p>

            <p>

              {order.shippingAddress.country} -
              {" "}
              {order.shippingAddress.pincode}

            </p>

          </div>

          <hr className="my-8"/>

          <h3 className="text-xl font-bold mb-6">

            Ordered Items

          </h3>

          <div className="space-y-5">

            {order.orderItems.map(item => (

              <div
                key={item._id}
                className="flex items-center gap-5 border rounded-xl p-4"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div className="flex-1">

                  <h2 className="font-semibold">

                    {item.name}

                  </h2>

                  <p className="text-gray-500">

                    Quantity : {item.quantity}

                  </p>

                </div>

                <h2 className="font-bold">

                  ₹{item.price}

                </h2>

              </div>

            ))}

          </div>

          <hr className="my-8"/>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>

                Payment

              </span>

              <span>

                {order.paymentMethod}

              </span>

            </div>

            <div className="flex justify-between text-2xl font-bold">

              <span>

                Total

              </span>

              <span>

                ₹{order.totalAmount}

              </span>

            </div>

          </div>

        </div>

      </Container>

    </section>

  );

};

export default OrderDetails;