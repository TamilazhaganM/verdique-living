import api from "./axios";

// GET

export const getAllCategories = async () => {
  const response = await api.get("/category");

  return response.data;
};

// CREATE

export const createCategory = async (data) => {
  const response = await api.post(
    "/category",
    data
  );

  return response.data;
};

// UPDATE

export const updateCategory = async (
  id,
  data
) => {
  const response = await api.put(
    `/category/${id}`,
    data
  );

  return response.data;
};

// DELETE

export const deleteCategory = async (
  id
) => {
  const response = await api.delete(
    `/category/${id}`
  );

  return response.data;
};