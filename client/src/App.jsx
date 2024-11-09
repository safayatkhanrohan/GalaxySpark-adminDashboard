import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HomeSettings from "./pages/HomeSettings";
import { Toaster } from "react-hot-toast";
import CreateNewProject from "./pages/CreateNewProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "pages/home",
    element: <HomeSettings />,
  },
  {
    path: "/projects/create",
    element: <CreateNewProject />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

const App = () => {
      return (
        <>
          <RouterProvider router={router} />
          <Toaster position="bottom-center" reverseOrder={false} />
        </>
      );
};

export default App;
