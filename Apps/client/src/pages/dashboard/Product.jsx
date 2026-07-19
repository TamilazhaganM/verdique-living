import { Plus, Square, SquarePen, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../services/product.service";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../services/category.service";
import toast from "react-hot-toast";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [sort, setSort] = useState("");

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);

const [debouncedSearch, setDebouncedSearch] = useState("");
  const limit = 10;


  useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
    setPage(1);
  }, 500);

  return () => clearTimeout(timer);
}, [search]);

  const fetchProducts = async () => {
  try {
    setLoading(true);

    const response = await getAllProducts({
      page,
      limit,
      search: debouncedSearch,
      category,
      sort,
    });

    setProducts(response.data);
    setTotalPages(response.totalPages);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchCategories();
}, []);

useEffect(() => {
  fetchProducts();
}, [page, debouncedSearch, category, sort]);

const fetchCategories = async () => {
  try {

    const response = await getAllCategories();

    setCategories(response.data);

  } catch (error) {

    console.log(error);

  }
};

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

  toast.success("Product deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to delete product.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
  Products
</h1>

<p className="text-gray-500 mt-1">
  Manage all your products from one place.
</p>
        </div>

        <Link
          to="/admin/products/add"
className="
flex
items-center
justify-center
gap-2
bg-green-700
hover:bg-green-800
text-white
px-5
py-3
rounded-xl
transition
w-full
sm:w-auto
"        >
          <Plus size={18} />
          Add Product
        </Link>
      </div>

      {/* Filters */}

      <div className="bg-white rounded-2xl shadow-sm border p-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="
border
rounded-xl
px-4
py-3
w-full
focus:outline-none
focus:ring-2
focus:ring-green-600
"
          />

         <select
  value={category}
  onChange={(e) => {
    setCategory(e.target.value);
    setPage(1);
  }}
className="
w-full
border
rounded-xl
px-4
py-3
focus:outline-none
focus:ring-2
focus:ring-green-600
"
>
  <option value="">All Categories</option>

  {categories.map((cat) => (
    <option key={cat._id} value={cat._id}>
      {cat.name}
    </option>
  ))}
</select>
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
            className="border rounded-xl px-4 py-3"
          >
             <option value="-createdAt">Newest</option>
  <option value="createdAt">Oldest</option>
  <option value="price_asc">Price Low → High</option>
  <option value="price_desc">Price High → Low</option>
  <option value="name_asc">Name A-Z</option>
  <option value="name_desc">Name Z-A</option>
          </select>
        </div>
      </div>

      {/* Table */}
      {
  loading ? (
    <div className="p-10 text-center text-gray-500">
      Loading products...
    </div>
  ) : (
    // table
<div className="bg-white rounded-2xl shadow-sm border">
<div className="hidden lg:block overflow-x-auto">
        <table className="w-full  ">
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
                  className="text-center py-10 text-gray-500 text-lg "
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
                  <td className="p-4 ">
                    <img
                    src={product.image?.url || "/placeholder.png"}
                      alt={product.name}
             className="
w-12
h-12
sm:w-14
sm:h-14
rounded-lg
object-cover
"
                    />
                  </td>

                  <td className="max-w-[220px] truncate px-4 py-4" title={product.name}> {product.name}</td>

                  <td className="px-4 py-4">{product.category?.name}</td>

                  <td className="px-4 py-4">₹{product.price}</td>

                  <td>
                   <span
  className={`px-3 py-1 rounded-full text-sm ${
    product.stock > 10
      ? "bg-green-100 text-green-700"
      : product.stock > 0
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700"
  }`}
>
  {product.stock}
</span>
                  </td>

                  <td>
                    <div className="flex justify-center items-center gap-3 flex-col
sm:flex-row">
                      <Link
                        to={`/admin/products/${product._id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <SquarePen/>
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                       <Trash/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        </div>

        <div className="lg:hidden divide-y">

  {products.length === 0 ? (

    <div className="p-8 text-center text-gray-500">
      No products found.
    </div>

  ) : (

    products.map((product) => (

      <div
        key={product._id}
        className="p-5"
      >

        <div className="flex gap-4">

          <img
            src={product.image?.url || "/placeholder.png"}
            alt={product.name}
            className="w-32 h-32 rounded-xl object-cover"
          />

          <div className="flex-1">

            <h3 className="font-bold text-lg line-clamp-2 text-center">
              {product.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1 text-center">
              {product.category?.name}
            </p>

            <p className="text-green-700 font-bold mt-2 text-center">
              ₹{product.price}
            </p>

            <div className="flex justify-center mt-3">
  <span
    className={`px-3 py-1 rounded-full text-sm font-medium ${
      product.stock > 10
        ? "bg-green-100 text-green-700"
        : product.stock > 0
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {product.stock > 10
      ? "In Stock"
      : product.stock > 0
      ? "Low Stock"
      : "Out of Stock"}
  </span>
</div>

          </div>

        </div>

        <div className="flex justify-around gap-5  mt-5">

          <Link
            to={`/admin/products/${product._id}`}
            className="text-blue-600"
          >
            <SquarePen size={26} />
          </Link>

          <button
            onClick={() => handleDelete(product._id)}
            className="text-red-600"
          >
            <Trash size={26} />
          </button>

        </div>

      </div>

    ))

  )}

</div>
      </div>
  )
}
      {/* Pagination */}

      {/* Pagination */}

<div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-8">

  <p className="text-gray-500 text-sm">
    Page <strong>{page}</strong> of <strong>{totalPages}</strong>
  </p>

  <div className="flex items-center gap-3">

    <button
      disabled={page === 1}
      onClick={() => setPage((prev) => prev - 1)}
      className="px-5 py-2 border rounded-xl hover:bg-gray-100 disabled:opacity-50"
    >
      Previous
    </button>

    <button
      disabled={page === totalPages}
      onClick={() => setPage((prev) => prev + 1)}
      className="px-5 py-2 bg-green-700 text-white rounded-xl hover:bg-green-800 disabled:opacity-50"
    >
      Next
    </button>

  </div>

</div>
    </div>
  );
};

export default Products;
