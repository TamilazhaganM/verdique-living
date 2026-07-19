import { useEffect, useState } from "react";
import { X, Upload } from "lucide-react";

const CategoryModal = ({
  isOpen,
  onClose,
  onSubmit,
  editingCategory,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    isActive: true,
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (editingCategory) {
      setFormData({
        name: editingCategory.name,
        description: editingCategory.description || "",
        isActive: editingCategory.isActive,
      });

      setPreview(editingCategory.image?.url || "");
      setImage(null);
    } else {
      setFormData({
        name: "",
        description: "",
        isActive: true,
      });

      setPreview("");
      setImage(null);
    }
  }, [editingCategory]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("isActive", formData.isActive);

    if (image) {
      data.append("image", image);
    }

    onSubmit(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">

      <div
        className="
          bg-white
          rounded-2xl
          shadow-xl
          w-full
          max-w-lg
          max-h-[90vh]
          overflow-y-auto
        "
      >
        {/* Header */}

        <div className="sticky top-0 bg-white border-b p-5 flex items-center justify-between z-10">

          <h2 className="text-xl sm:text-2xl font-bold">
            {editingCategory ? "Edit Category" : "Add Category"}
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={22} />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="p-5 space-y-6"
        >
          {/* Name */}

          <div>

            <label className="block font-medium mb-2">
              Category Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter category name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
                w-full
                border
                rounded-xl
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-green-600
              "
            />

          </div>

          {/* Description */}

          <div>

            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
              name="description"
              rows="4"
              placeholder="Enter category description"
              value={formData.description}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                p-3
                resize-none
                focus:outline-none
                focus:ring-2
                focus:ring-green-600
              "
            />

          </div>

          {/* Upload */}

          <div>

            <label className="block font-medium mb-3">
              Category Image
            </label>

            <label
              className="
                border-2
                border-dashed
                rounded-xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                hover:border-green-600
                transition
              "
            >
              <Upload size={34} />

              <p className="mt-3 text-gray-600">
                Click to upload image
              </p>

              <input
                hidden
                type="file"
                accept="image/*"
                onChange={handleImage}
              />

            </label>

            {preview && (
              <div className="flex justify-center mt-5">

                <img
                  src={preview}
                  alt="Preview"
                  className="
                    w-36
                    h-36
                    sm:w-40
                    sm:h-40
                    object-cover
                    rounded-xl
                    border
                  "
                />

              </div>
            )}

          </div>

          {/* Active */}

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
              className="w-4 h-4"
            />

            <span className="font-medium">
              Active Category
            </span>

          </label>

          {/* Footer */}

          <div
            className="
              flex
              flex-col-reverse
              sm:flex-row
              justify-end
              gap-3
              pt-2
            "
          >
            <button
              type="button"
              onClick={onClose}
              className="
                w-full
                sm:w-auto
                border
                rounded-xl
                px-5
                py-3
                hover:bg-gray-100
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                w-full
                sm:w-auto
                bg-green-700
                hover:bg-green-800
                text-white
                rounded-xl
                px-5
                py-3
              "
            >
              {editingCategory ? "Update Category" : "Create Category"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default CategoryModal; 