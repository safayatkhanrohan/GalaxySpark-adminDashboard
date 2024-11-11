// src/api/apiService.js
import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://your-api-url.com/api", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to handle project creation
export const createProject = async (projectData) => {
  try {
    const response = await api.post("/projects/create", projectData);
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

export default api;
