// src/api/apiService.js
import axios from "axios";

// Create an Axios instance
const api = axios.create({
      baseURL: "http://localhost:5000/api/v1",
});

// Function to handle project creation
export const createProject = async (projectData) => {
      try {
            const response = await api.post("/projects/create", projectData, {
                  headers: {
                        "Content-Type": "multipart/form-data",
                  },
            });
            return response.data;
      } catch (error) {
            console.error("Error creating project:", error);
            throw error;
      }
};

