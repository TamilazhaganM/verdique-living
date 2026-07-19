import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProductCard from "../shop/ProductCard";

import { getAllProducts } from "../../services/product.service";

const FEATURED_PRODUCTS_LIMIT = 8;

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts({
        page: 1,
        limit: FEATURED_PRODUCTS_LIMIT,
        sort: "-createdAt",
      });

      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionTitle
          center
          title="Featured Products"
          subtitle="Discover our most loved plants and gardening essentials."
        />

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse"
              >
                <div className="h-72 bg-gray-200"></div>

                <div className="p-5 space-y-4">
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>

                  <div className="h-6 w-40 bg-gray-200 rounded"></div>

                  <div className="h-4 w-20 bg-gray-200 rounded"></div>

                  <div className="h-8 w-24 bg-gray-200 rounded"></div>

                  <div className="h-12 w-full bg-gray-200 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {products.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold text-gray-700">
                  No Products Found
                </h3>

                <p className="text-gray-500 mt-2">
                  Please add some products from the admin panel.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                  {products.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                    />
                  ))}
                </div>

                <div className="flex justify-center mt-14">
                  <Link
                    to="/shop"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      bg-green-700
                      hover:bg-green-800
                      text-white
                      px-8
                      py-3
                      rounded-xl
                      transition-all
                      duration-300
                      hover:gap-4
                    "
                  >
                    View All Products

                    <ArrowRight size={18} />
                  </Link>
                </div>
              </>
            )}
          </>
        )}
      </Container>
    </section>
  );
};

export default FeaturedProducts;