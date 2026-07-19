import api from "./axios";

export const getAllContacts = async () => {
  const response = await api.get("/contact");
  return response.data;
};

export const updateContactStatus = async (id, status) => {
  const response = await api.patch(`/contact/${id}`, {
    status,
  });
  return response.data;
};


export const createContact = async (contactData) => {
  const response = await api.post("/contact", contactData);
  return response.data;
};