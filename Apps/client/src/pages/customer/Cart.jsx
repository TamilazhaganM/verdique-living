import { useSelector } from "react-redux";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/Cartsummary";
import CouponBox from "../../components/cart/CouponBox";
import EmptyCart from "../../components/cart/EmptyCart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <section className="py-10 md:py-14 lg:py-16">

      <Container>

        <SectionTitle
          title="Shopping Cart"
          subtitle="Review your selected plants before checkout."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mt-8 md:mt-10 lg:mt-12">

          {/* Left */}

          <div className="lg:col-span-2">

            {cartItems.length === 0 ? (

              <EmptyCart />

            ) : (

              <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">

                {cartItems.map((item) => (

                  <CartItem
                    key={item._id}
                    item={item}
                  />

                ))}

              </div>

            )}

            {cartItems.length > 0 && (

              <div className="mt-6">

                <CouponBox />

              </div>

            )}

          </div>

          {/* Right */}

          {cartItems.length > 0 && (

            <div className="lg:sticky lg:top-28 h-fit">

              <CartSummary
                subtotal={subtotal}
                totalItems={totalItems}
              />

            </div>

          )}

        </div>

      </Container>

    </section>
  );
};

export default Cart;