import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <h1>404 Not Found</h1>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
