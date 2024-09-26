// services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getTasks = async () => {
  return await axios.get(`${API_URL}/tasks`);
};

export const createTask = async (task) => {
  return await axios.post(`${API_URL}/tasks`, task);
};

export const updateTask = async (id, updatedTask) => {
  return await axios.put(`${API_URL}/tasks/${id}`, updatedTask);
};

export const deleteTask = async (id) => {
  return await axios.delete(`${API_URL}/tasks/${id}`);
};
