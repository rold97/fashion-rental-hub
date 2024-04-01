import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductDetail";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/products", element: <Products /> },
      { path: "/product/:id", element: <ProductsDetail /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
