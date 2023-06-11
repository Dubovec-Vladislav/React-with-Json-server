import axios from "axios"

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
});

export const CarService = {
  async getAll() {
    const response = await instance.get('http://localhost:3001/cars');
    return response.data;
  },
  async getById(carId) {
    const response = await instance.get(`http://localhost:3001/cars/${carId}`);
    return response.data;
  },
  async create(data) {
    return axios.post(`http://localhost:3001/cars`, data);
  },
}