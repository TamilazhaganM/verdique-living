import React, { useState,useEffect } from 'react'
import ProductToolbar from "../../components/customer/ProductToolbar";
import ProductFilters from "../../components/customer/ProductFilter";
import ProductGrid from '../../components/customer/ProductGrid';
import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import { getAllProducts } from '../../services/product.service';

const Shop = () => {
    const [search, setSearch] = useState("");

    const [debouncedSearch, setDebouncedSearch] = useState("");

  const [sort, setSort] = useState("-createdAt");

const [category, setCategory] = useState("");

const [minPrice, setMinPrice] = useState(0);

const [maxPrice, setMaxPrice] = useState(5000);

const [inStock, setInStock] = useState(false);
const [products, setProducts] = useState([]);

const [loading, setLoading] = useState(true);

const [page, setPage] = useState(1);

const [totalPages, setTotalPages] = useState(1);

const [totalProducts, setTotalProducts] = useState(0);

useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 400);

  return () => clearTimeout(timer);
}, [search]);




useEffect(() => {

const fetchProducts = async () => {

  try {

    setLoading(true);

    const response = await getAllProducts({

      page,

      limit: 9,

      search:debouncedSearch,

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

}, [debouncedSearch, category, sort, page,minPrice,maxPrice,inStock]);

const clearFilters = () => {
  setCategory("");
  setMinPrice(0)
  setMaxPrice(5000)
  setInStock(false);
  setSearch("");
  setSort("-createdAt");
  setPage(1);
};


  return (
    <>
  <Container>

    <SectionTitle
      title="Shop Our Collection"
      subtitle="Discover premium plants and gardening essentials."
    />

    <ProductToolbar  search={search}
  setSearch={setSearch}
  sort={sort}
  setSort={setSort}
  totalProducts={totalProducts} />

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10">

   <ProductFilters
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

 <ProductGrid
    products={products}
    loading={loading}
    clearFilters={clearFilters}
/>

    </div>

  </Container>
</>
  )
}

export default Shop