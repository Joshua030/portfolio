import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./queries.css";
import Portfolio  from "./Portfolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
