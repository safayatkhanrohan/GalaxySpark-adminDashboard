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

// Function to homepage creation
export const createHomepage = async (projectData) => {
  try {
    const response = await api.post("/home-page", projectData, {
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


// Function to handle team member creation

export const addTeamMember = async (teamMemberData) => {
  try {
    const response = await api.post("/team", teamMemberData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding team member:", error);
    throw error;
  }
}

// Function to fetch all projects

export const getProjects = async () => {
  try {
    const response = await api.get("/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}



export default api;
