import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import VerifyEmail from "../pages/auth/VerifyEmail";
import Forgotpassword from "../pages/auth/Forgotpassword";
import Resetpassword from "../pages/auth/Resetpassword";
import ProtectedRoute from "./ProtectedRoute";
import CheckEmail from "../pages/auth/CheckEmail";
import Dashboard from "../pages/dashboard/Dashboard";
import Order from "../pages/dashboard/Order";
import Product from "../pages/dashboard/Product";
import Setting from "../pages/dashboard/Setting";
import AdminLayout from "../layouts/AdminLayout";
import AddProduct from "../pages/products/AddProduct";
import EditProduct from "../pages/products/EditProduct";
import CustomerLayout from "../layouts/CustomerLayout"
import Home from "../pages/customer/Home";
import Shop from "../pages/customer/Shop";
import ProductDetails from "../pages/customer/ProductDetails";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route element={<CustomerLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          {/* <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> */}
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
