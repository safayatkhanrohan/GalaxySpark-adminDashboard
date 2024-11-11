// src/api/apiService.js
import axios from "axios";

// Create an Axios instance
const api = axios.create({
      baseURL: "http://localhost:5000/api/v1", // Replace with your API base URL
      headers: {
            "Content-Type": "application/json",
      },
});

// Function to handle project creation
export const createProject = async (projectData) => {
      console.log("projectData", projectData);
      try {
            const response = await api.post("/projects/create", projectData);
            return response.data;
      } catch (error) {
            console.error("Error creating project:", error);
            throw error;
      }
};

export default api;
