import axios from "./api";

export const getProducts = () => {
  return axios.get(`/products`);
};
