import { useSelector } from "react-redux";
import Container from "../../components/ui/Container";
import WishlistCard from "../../components/cart/WishlistCard";
import EmptyWishlist from "../../components/cart/Emptywishlist";

const Wishlist = () => {
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  return (
    <section className="py-16 min-h-screen bg-gray-50">
      <Container>

        {/* Header */}

        <div className="mb-12">

          <h1 className="text-4xl font-bold text-gray-800">
            My Wishlist ❤️
          </h1>

          <p className="text-gray-500 mt-3">
            Save your favorite plants and decor items for later.
          </p>

        </div>

        {wishlistItems.length === 0 ? (

          <EmptyWishlist />

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {wishlistItems.map((item) => (

              <WishlistCard
                key={item._id}
                item={item}
              />

            ))}

          </div>

        )}

      </Container>
    </section>
  );
};

export default Wishlist;