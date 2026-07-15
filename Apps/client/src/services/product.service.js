import { useEffect, useState } from "react";
import api from "./axios";

const getAllProducts = async ({
  page = 1,
  limit = 10,
  search = "",
  category = "",
  sort = "",
  minPrice = 0,
  maxPrice = 5000,
  inStock = false,
}) => {
  const response = await api.get("/products", {
    params: {
      page,
      limit,
      search,
      category,
      sort,
      minPrice,
      maxPrice,
      inStock,
    },
  });
  return response.data;
};
const deleteProduct = async (id) => {
  const response = await api.delete(`products/${id}`);
  return response.data;
};
const createProducts = async (formData) => {
  const response = await api.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

const updateProduct = async (id, formData) => {
  const response = await api.put(`/products/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export {
  getAllProducts,
  deleteProduct,
  createProducts,
  getProductById,
  updateProduct,
};
