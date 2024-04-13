import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Components/Router";
import AuthProvider from "./Components/AuthProvider";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Router}></RouterProvider>
        <Toaster></Toaster>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
