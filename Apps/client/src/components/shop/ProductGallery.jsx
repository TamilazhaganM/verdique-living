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

      <div className="overflow-hidden rounded-2xl lg:rounded-3xl border bg-white shadow-sm">

        <img
          src={selectedImage}
          alt={product.name}
          className="
          w-full
          h-72
          sm:h-[420px]
          lg:h-[550px]
          object-cover
          hover:scale-105
          duration-500
          "
        />

      </div>

      {/* Thumbnail */}

      <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-5 overflow-x-auto pb-2">

        <button
          onClick={() => setSelectedImage(product.image.url)}
          className={`
            flex-shrink-0
            w-16
            h-16
            sm:w-20
            sm:h-20
            lg:w-24
            lg:h-24
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