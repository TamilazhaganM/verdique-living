import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../services/product.service";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [sort, setSort] = useState("");

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const limit = 10;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts({
          page,
          limit,
          search,
          category,
          sort,
        });
        setProducts(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [page, search, category, sort]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteProduct(id);

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id),
      );

      alert("Product deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete product.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>

          <p className="text-gray-500 mt-1">Manage all your products.</p>
        </div>

        <Link
          to="/products/add"
          className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl transition"
        >
          <Plus size={18} />
          Add Product
        </Link>
      </div>

      {/* Filters */}

      <div className="bg-white rounded-2xl shadow-sm border p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="border rounded-xl px-4 py-3"
          />

          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
            className="border rounded-xl px-4 py-3"
          >
            <option value="">All Categories</option>
            <option value="Indoor Plant">Indoor Plant</option>
            <option value="Outdoor Plant">Outdoor Plant</option>
            <option value="Pot">Pot</option>
            <option value="Fertilizer">Fertilizer</option>
            <option value="Gardening Tool">Gardening Tool</option>
          </select>

          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
            className="border rounded-xl px-4 py-3"
          >
             <option value="latest">Newest</option>
  <option value="oldest">Oldest</option>
  <option value="price_asc">Price Low → High</option>
  <option value="price_desc">Price High → Low</option>
  <option value="name_asc">Name A-Z</option>
  <option value="name_desc">Name Z-A</option>
          </select>
        </div>
      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">Image</th>

              <th className="text-left">Name</th>

              <th className="text-left">Category</th>

              <th className="text-left">Price</th>

              <th className="text-left">Stock</th>

              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-10 text-gray-500 text-lg"
                >
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4">
                    <img
                      src={product.image.url}
                      alt={product.name}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                  </td>

                  <td>{product.name}</td>

                  <td>{product.category}</td>

                  <td>₹{product.price}</td>

                  <td>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {product.stock}
                    </span>
                  </td>

                  <td>
                    <div className="flex justify-center gap-3">
                      <Link
                        to={`/products/${product._id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}

      {/* Pagination */}

<div className="flex items-center justify-between mt-6">

  <p className="text-sm text-gray-500">
    Page {page} of {totalPages}
  </p>

  <div className="flex items-center gap-3">

    <button
  disabled={page === 1}
  onClick={() => setPage(page - 1)}
  className="px-4 py-2 rounded-lg bg-white border shadow-sm hover:shadow-md hover:border-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
>
  ← Previous
</button>

    <button
  disabled={page === totalPages}
  onClick={() => setPage(page + 1)}
  className="px-4 py-2 rounded-lg bg-green-700 text-white shadow-sm hover:bg-green-800 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition"
>
  Next →
</button>

  </div>

</div>
    </div>
  );
};

export default Products;
