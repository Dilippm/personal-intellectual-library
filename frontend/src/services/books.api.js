import api from "./axios";


export const getBooks = async (page=1, limit=4,search='') => {
  try {
     const response = await api.get(`/books/get-books?page=${page}&limit=${limit}&search=${search}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addBook = async (bookData) => {
  try {
    const response = await api.post("/books/add", bookData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};