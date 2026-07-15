import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import {
  getProductById,
  updateProduct,
} from "../../services/product.service";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    sunlight: "",
    watering: "",
    spacing: "",
    plantType: "",
    isFeatured: false,
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await getProductById(id);

      const product = response.data;

      setFormData({
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        stock: product.stock,
        sunlight: product.sunlight,
        watering: product.watering,
        spacing: product.spacing,
        plantType: product.plantType,
        isFeatured: product.isFeatured,
      });

      setPreview(product.image.url);
    } catch (error) {
      console.error(error);
      alert("Failed to load product.");
    } finally {
      setLoading(false);
    }
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("stock", formData.stock);
      data.append("sunlight", formData.sunlight);
      data.append("watering", formData.watering);
      data.append("spacing", formData.spacing);
      data.append("plantType", formData.plantType);
      data.append("isFeatured", formData.isFeatured);

      if (image) {
        data.append("image", image);
      }

      await updateProduct(id, data);

      alert("Product updated successfully!");

      navigate("/products");
    } catch (error) {
      console.error(error);
      alert("Failed to update product.");
    }
  };

  if (loading) {
    return (
      <div className="text-center text-lg font-medium py-20">
        Loading Product...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">

      <div className="mb-8">

        <Link
          to="/products"
          className="flex items-center gap-2 text-green-700 hover:text-green-800 mb-4"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        <h1 className="text-3xl font-bold">
          Edit Product
        </h1>

        <p className="text-gray-500 mt-1">
          Update your product information.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-2xl border p-8"
      >
        <div className="grid md:grid-cols-2 gap-6">

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="border rounded-xl p-3"
          />

          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="border rounded-xl p-3"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="border rounded-xl p-3"
          />

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="border rounded-xl p-3"
          />

          <input
            name="sunlight"
            value={formData.sunlight}
            onChange={handleChange}
            placeholder="Sunlight"
            className="border rounded-xl p-3"
          />

          <input
            name="watering"
            value={formData.watering}
            onChange={handleChange}
            placeholder="Watering"
            className="border rounded-xl p-3"
          />

          <input
            name="spacing"
            value={formData.spacing}
            onChange={handleChange}
            placeholder="Spacing"
            className="border rounded-xl p-3"
          />

          <input
            name="plantType"
            value={formData.plantType}
            onChange={handleChange}
            placeholder="Plant Type"
            className="border rounded-xl p-3"
          />

        </div>

        <textarea
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border rounded-xl p-3 w-full mt-6"
        />

        <div className="mt-6">

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
            />

            Featured Product

          </label>

        </div>

        <div className="mt-8">

          <label className="block mb-3 font-medium">
            Product Image
          </label>

          <label className="border-2 border-dashed rounded-xl p-6 flex flex-col items-center cursor-pointer">

            <Upload size={35} />

            <p className="mt-2">
              Choose New Image (Optional)
            </p>

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

          </label>

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-48 mt-5 rounded-xl border"
            />
          )}

        </div>

        <div className="flex justify-end gap-4 mt-10">

          <button
            type="button"
            onClick={() => navigate("/products")}
            className="border px-6 py-3 rounded-xl"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl"
          >
            Update Product
          </button>

        </div>

      </form>
    </div>
  );
};

export default EditProduct;