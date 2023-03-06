import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Portfolio } from "./Portfolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio/>,
  },
  {
    path: "about",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
