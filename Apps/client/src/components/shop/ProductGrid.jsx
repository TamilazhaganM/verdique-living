import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import EmptyProducts from "./EmptyProducts";

const ProductGrid = ({ products, loading ,clearFilters }) => {
  if (loading) {
    return <ProductSkeleton />;
  }

  if (products.length === 0) {
    return <EmptyProducts title="No Plants Found"

            description="We couldn't find any plants matching your search or filters."

            buttonText="Clear Filters"

            onClick={clearFilters}
 />;
  }

  return (
    <div className="lg:col-span-3">

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

        {products.map((product) => (

          <ProductCard
            key={product._id}
            product={product}
          />

        ))}

      </div>

    </div>
  );
};

export default ProductGrid;