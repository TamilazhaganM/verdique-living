import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductToolbar from "../../components/shop/ProductToolbar";
import ProductFilters from "../../components/shop/ProductFilter";
import ProductGrid from "../../components/shop/ProductGrid";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Pagination from "../../components/customer/Pagination";
import { getAllProducts } from "../../services/product.service";
import { getAllCategories } from "../../services/category.service";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [debouncedSearch, setDebouncedSearch] = useState(
    searchParams.get("search") || "",
  );
  const [sort, setSort] = useState(searchParams.get("sort") || "-createdAt");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [minPrice, setMinPrice] = useState(
    Number(searchParams.get("minPrice")) || 0,
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(searchParams.get("maxPrice")) || 5000,
  );
  const [inStock, setInStock] = useState(
    searchParams.get("inStock") === "true",
  );
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

              // Categories Fetching and Storing //

  const fetchCategories = async () => {
    try {
      const response = await getAllCategories();

      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

                /// 


                // Page Reset //
 useEffect(() => {
    if (page !== 1) {
      setPage(1);
    }
  }, [debouncedSearch, category, sort, minPrice, maxPrice, inStock]);
                ///

  useEffect(() => {
    const params = new URLSearchParams();

    if (debouncedSearch) params.set("search", debouncedSearch);

    if (category) params.set("category", category);

    if (sort !== "latest") params.set("sort", sort);

    if (page > 1) params.set("page", page.toString());

    if (minPrice > 0) params.set("minPrice", minPrice.toString());

    if (maxPrice < 5000) params.set("maxPrice", maxPrice.toString());

    if (inStock) params.set("inStock", "true");

    // Prevent unnecessary URL updates
    if (params.toString() !== searchParams.toString()) {
      setSearchParams(params);
    }
  }, [
    debouncedSearch,
    category,
    sort,
    page,
    minPrice,
    maxPrice,
    inStock,
    searchParams,
    setSearchParams,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

   
                // Product Fetch //
  
 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await getAllProducts({
          page,
          limit: 9,
          search: debouncedSearch,
          category,
          sort,
          minPrice,
          maxPrice,
          inStock,
        });

        setProducts(response.data);

        setTotalPages(response.totalPages);

        setTotalProducts(response.totalProducts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedSearch, category, sort, page, minPrice, maxPrice, inStock]);

                        ///


  // Clear Filters //
  const clearFilters = () => {
    setSearch("");
    setDebouncedSearch("");
    setCategory("");
    setSort("latest");
    setMinPrice(0);
    setMaxPrice(5000);
    setInStock(false);
    setPage(1);

    setSearchParams({});
  };
                   ///
  return (
    <>
      <Container>
        <SectionTitle
          title="Shop Our Collection"
          subtitle="Discover premium plants and gardening essentials."
        />

        <ProductToolbar
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
          totalProducts={totalProducts}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 lg:mt-10">
          {/* Filters */}
          <div className="lg:col-span-1">
            <ProductFilters
              categories={categories}
              category={category}
              setCategory={setCategory}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              inStock={inStock}
              setInStock={setInStock}
              clearFilters={clearFilters}
            />
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <ProductGrid
              products={products}
              loading={loading}
              clearFilters={clearFilters}
            />

            <Pagination page={page} totalPages={totalPages} setPage={setPage} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Shop;
