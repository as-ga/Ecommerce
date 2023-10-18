import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";

import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import Allproducts from "./pages/allproducts/Allproducts";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/updateproduct" element={<UpdateProduct />} />
        <Route path="/*" element={<NoPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
