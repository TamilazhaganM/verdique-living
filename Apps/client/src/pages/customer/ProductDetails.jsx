import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container";
import { getProductById } from "../../services/product.service";
import { getProductReviews } from "../../services/review.service";
import ProductInfo from "../../components/shop/ProductInfo";
import ProductCare from "../../components/shop/ProductCare";
import ProductGallery from "../../components/shop/ProductGallery";
import RelatedProducts from "../../components/shop/Relatedproducts";
import Breadcrumb from "../../components/shop/Breadcrumb";
import ReviewForm from "../../components/customer/ReviewForm";
import ReviewList from "../../components/customer/ReviewList";
import {jwtDecode} from "jwt-decode"

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const token = localStorage.getItem("token");

  const currentUser = token ? jwtDecode(token) : null;
  
  useEffect(() => {
    fetchProduct();
    fetchReviews();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const response = await getProductById(id);

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await getProductReviews(id);

      setReviews(response.data);
console.log(response.data);
      setAverageRating(response.averageRating);

      setTotalReviews(response.totalReviews);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <Container>
        <div className="py-24 text-center text-xl">
          Loading Product...
        </div>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <div className="py-24 text-center text-xl">
          Product not found.
        </div>
      </Container>
    );
  }

  return (
   <section className="py-8 md:py-12 lg:py-16">
      <Container>

        <Breadcrumb product={product} />

<div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <ProductGallery product={product} />

          <div>

            <ProductInfo
              product={product}
              averageRating={averageRating}
              totalReviews={totalReviews}
            />

            <ProductCare product={product} />

          </div>

        </div>

        {/* Reviews Section */}

       <div className="mt-12 lg:mt-20">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">

            Customer Reviews

          </h2>

          <p className="text-base md:text-lg text-gray-600 mb-8 lg:mb-10">

            ⭐ {averageRating} ({totalReviews} Reviews)

          </p>

          <ReviewForm
            productId={id}
            refreshReviews={fetchReviews}
          />

          <div className="mt-8 lg:mt-12">

            <ReviewList reviews={reviews}  
            currentUser={currentUser}
            refreshReviews={fetchReviews} />

          </div>

        </div>

        <RelatedProducts product={product} />

      </Container>
    </section>
  );
};

export default ProductDetails;