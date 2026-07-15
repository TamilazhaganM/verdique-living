import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container";
import { getProductById } from "../../services/product.service";
import ProductInfo from "../../components/customer/ProductInfo";
import ProductCare from "../../components/customer/ProductCare";
import ProductGallery from "../../components/customer/ProductGallery";
import RelatedProducts from "../../components/customer/Relatedproducts";
import Breadcrumb from "../../components/customer/Breadcrumb";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
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

  if (loading) {
    return (
      <Container>
        <div className="py-24 text-center">Loading Product...</div>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <div className="py-24 text-center">Product not found.</div>
      </Container>
    );
  }

  return (
    <section className="py-16">
      <Container>
      <Breadcrumb product={product} />
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT */}

          <ProductGallery product={product} />

          {/* RIGHT */}

          {/* RIGHT */}

          <div>
            <ProductInfo product={product} />

            <ProductCare product={product} />
          </div>
        </div>
        <RelatedProducts product={product} />
      </Container>
    </section>
  );
};

export default ProductDetails;
