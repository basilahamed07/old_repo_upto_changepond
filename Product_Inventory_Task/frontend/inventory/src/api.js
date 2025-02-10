// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/products';

export const getProducts = () => axios.get(API_URL);
export const getProduct = (id) => axios.get(`${API_URL}/${id}`);
export const addProduct = (product) => axios.post(API_URL, product);
export const updateProduct = (id, product) => axios.put(`${API_URL}/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
export const buyProduct = (id) => {
  return axios.get(`${API_URL}/${id}`).then(response => {
    const updatedProduct = { ...response.data, stock_quantity: response.data.stock_quantity - 1 };
    return updateProduct(id, updatedProduct);
  });
};
``