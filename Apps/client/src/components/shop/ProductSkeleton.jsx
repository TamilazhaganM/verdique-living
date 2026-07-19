const ProductSkeleton = () => {
  return (
    <div className="lg:col-span-3">

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

        {[...Array(9)].map((_, index) => (

          <div key={index} className="animate-pulse bg-white rounded-2xl border overflow-hidden">

    {/* Image */}

    <div className="h-64 bg-gray-200"></div>

    <div className="p-5">

        {/* Category */}

        <div className="w-24 h-4 bg-gray-200 rounded mb-4"></div>

        {/* Title */}

        <div className="w-3/4 h-6 bg-gray-200 rounded mb-3"></div>

        {/* Description */}

        <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>

        <div className="w-2/3 h-4 bg-gray-200 rounded mb-6"></div>

        <div className="flex justify-between items-center">

            {/* Price */}

            <div className="w-20 h-7 bg-gray-200 rounded"></div>

            {/* Button */}

            <div className="w-28 h-10 bg-gray-200 rounded-xl"></div>

        </div>

    </div>

</div>

        ))}

      </div>

    </div>
  );
};

export default ProductSkeleton;