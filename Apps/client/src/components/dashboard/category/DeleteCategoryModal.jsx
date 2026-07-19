import { X } from "lucide-react";

const DeleteCategoryModal = ({
  isOpen,
  onClose,
  onConfirm,
  category,
  loading = false,
}) => {
  if (!isOpen || !category) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

      <div
        className="
          bg-white
          rounded-2xl
          shadow-2xl
          w-full
          max-w-md
          max-h-[90vh]
          overflow-y-auto
        "
      >
        {/* Header */}

        <div className="sticky top-0 bg-white border-b px-5 py-4 flex items-center justify-between">

          <h2 className="text-xl sm:text-2xl font-bold text-red-600">
            Delete Category
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="p-5">

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">

            <img
              src={
                category.image?.url ||
                "https://placehold.co/100x100?text=No+Image"
              }
              alt={category.name}
              className="
                w-24
                h-24
                rounded-xl
                object-cover
                border
                shrink-0
              "
            />

            <div className="text-center sm:text-left">

              <h3 className="text-lg font-semibold">
                {category.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-6">
                {category.description || "No description available"}
              </p>

            </div>

          </div>

          {/* Warning */}

          <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4">

            <p className="font-semibold text-red-700">
              ⚠️ This action cannot be undone.
            </p>

            <p className="text-sm text-red-600 mt-2 leading-6">
              This category and its associated image will be permanently
              removed from both the database and Cloudinary.
            </p>

          </div>

          {/* Footer */}

          <div
            className="
              mt-8
              flex
              flex-col-reverse
              sm:flex-row
              justify-end
              gap-3
            "
          >
            <button
              onClick={onClose}
              disabled={loading}
              className="
                w-full
                sm:w-auto
                px-5
                py-3
                border
                rounded-xl
                hover:bg-gray-100
                transition
                disabled:opacity-50
              "
            >
              Cancel
            </button>

            <button
              onClick={onConfirm}
              disabled={loading}
              className="
                w-full
                sm:w-auto
                px-5
                py-3
                bg-red-600
                hover:bg-red-700
                text-white
                rounded-xl
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Deleting..." : "Delete Category"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DeleteCategoryModal;