import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/product.service";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ product }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchRelatedProducts();
  }, [product]);

  const fetchRelatedProducts = async () => {
    try {
      const response = await getAllProducts({
        category: product.category?._id || product.category,
        limit: 4,
      });

      const filtered = response.data.filter(
        (item) => item._id !== product._id
      );

      setProducts(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  if (products.length === 0) return null;

  return (
    <section className="mt-14 md:mt-20 lg:mt-24">

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 lg:mb-10">

        <div>

          <h2 className="text-2xl sm:text-3xl font-bold">
            You May Also Like
          </h2>

          <p className="text-gray-500 mt-2">
            Similar products you might love.
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">

        {products.map((item) => (
          <ProductCard
            key={item._id}
            product={item}
          />
        ))}

      </div>

    </section>
  );
};

export default RelatedProducts;