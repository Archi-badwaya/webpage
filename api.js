import axios from "axios";
export const API_URL = "http://localhost:5000/products";

export const fetchProducts = async (params) => (await axios.get(API_URL,{params})).data;
export const addProduct = async (product) => (await axios.post(API_URL, product)).data;
export const updateProduct = async (id, product) => (await axios.put(`${API_URL}/${id}`, product)).data;
export const deleteProduct = async (id) => (await axios.delete(`${API_URL}/${id}`)).data;
