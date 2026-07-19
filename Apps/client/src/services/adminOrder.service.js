import api from "./axios"

export const getAllOrders = async () => {
  const response = await api.get("/orders");

  return response.data;
};

export const updateOrderStatus = async (id, status) => {
  const response = await api.patch(`/orders/${id}/status`, {
    status,
  });

  return response.data;
}