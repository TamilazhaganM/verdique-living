import { useState, useEffect } from "react";

const ProductGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (product?.image?.url) {
      setSelectedImage(product.image.url);
    }
  }, [product]);

  return (
    <div>

      {/* Main Image */}

      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">

        <img
          src={selectedImage}
          alt={product.name}
          className="
          w-full
          h-[550px]
          object-cover
          hover:scale-105
          duration-500
          "
        />

      </div>

      {/* Thumbnail */}

      <div className="flex gap-4 mt-5">

        <button
          onClick={() => setSelectedImage(product.image.url)}
          className={`
            w-24
            h-24
            rounded-xl
            overflow-hidden
            border-2
            transition
            ${
              selectedImage === product.image.url
                ? "border-green-700"
                : "border-gray-200"
            }
          `}
        >

          <img
            src={product.image.url}
            alt={product.name}
            className="w-full h-full object-cover"
          />

        </button>

      </div>

    </div>
  );
};

export default ProductGallery;