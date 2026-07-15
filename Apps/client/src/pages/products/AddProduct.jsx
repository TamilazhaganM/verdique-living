import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import { createProducts } from "../../services/product.service";

const AddProduct = () => {
  const navigate = useNavigate();

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

  const handleSubmit = async(e) => {
    e.preventDefault();
   

    console.log(formData);
    console.log(image);
    const data = new FormData();
    data.append("name",formData.name);
    data.append("description", formData.description);
data.append("price", formData.price);
data.append("category", formData.category);
data.append("stock", formData.stock);
data.append("sunlight", formData.sunlight);
data.append("watering", formData.watering);
data.append("spacing", formData.spacing);
data.append("plantType", formData.plantType);
data.append("isFeatured", formData.isFeatured);
data.append("image", image);
 const response = await createProducts(data)
 alert("Product added Successfully")
 navigate("/products")

  };

  return (
    <div className="max-w-6xl mx-auto">

      <div className="flex items-center justify-between mb-8">

        <div>

          <Link
            to="/products"
            className="flex items-center gap-2 text-green-700 hover:text-green-800 mb-3"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>

          <h1 className="text-3xl font-bold">
            Add Product
          </h1>

          <p className="text-gray-500 mt-1">
            Create a new product for your store.
          </p>

        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow border p-8"
      >

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="block mb-2 font-medium">
              Product Name
            </label>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            >
              <option value="">Select Category</option>
              <option>Indoor Plant</option>
              <option>Outdoor Plant</option>
              <option>Pot</option>
              <option>Fertilizer</option>
              <option>Tool</option>
            </select>

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Stock
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Sunlight
            </label>

            <input
              name="sunlight"
              value={formData.sunlight}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Watering
            </label>

            <input
              name="watering"
              value={formData.watering}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Spacing
            </label>

            <input
              name="spacing"
              value={formData.spacing}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Plant Type
            </label>

            <input
              name="plantType"
              value={formData.plantType}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />

          </div>

        </div>

        <div className="mt-6">

          <label className="block mb-2 font-medium">
            Description
          </label>

          <textarea
            rows={5}
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

        </div>

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

          <label className="border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-green-600 transition">

            <Upload size={35} />

            <p className="mt-3">
              Click to Upload
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
              className="mt-5 w-48 rounded-xl border"
            />

          )}

        </div>

        <div className="flex justify-end gap-4 mt-10">

          <button
            type="button"
            onClick={() => navigate("/products")}
            className="px-6 py-3 border rounded-xl"
          >
            Cancel
          </button>

          <button
          
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl"
          >
            Save Product
          </button>

        </div>

      </form>

    </div>
  );
};

export default AddProduct;