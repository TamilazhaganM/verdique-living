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
import Orders from "../pages/dashboard/Order";
import Product from "../pages/dashboard/Product";
import AdminLayout from "../layouts/AdminLayout";
import AddProduct from "../pages/products/AddProduct";
import EditProduct from "../pages/products/EditProduct";
import CustomerLayout from "../layouts/CustomerLayout";
import Home from "../pages/customer/Home";
import Shop from "../pages/customer/Shop";
import Categories from "../pages/customer/Categories"
import About from "../pages/customer/About"
import ProductDetails from "../pages/customer/ProductDetails";
import Cart from "../pages/customer/Cart";
import Checkout from "../pages/customer/Checkout";
import OrderSuccess from "../pages/customer/OrderSuccess";
import MyOrders from "../pages/customer/MyOrders";
import OrderDetails from "../pages/customer/OrderDetails";
import Wishlist from "../pages/customer/Wishlist";
import Customers from "../pages/customer/Customer";
import CustomerDetails from "../pages/customer/CustomerDetails";
import ContactEnquries from "../pages/dashboard/ContactEnqueries"
import Contact from "../pages/customer/Contact";
import CategoryManagement from "../pages/dashboard/CategoryManagement";


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
        <Route element={<CustomerLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/my-orders/:id" element={<OrderDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/About" element={<About/>}/>
          <Route path= "/contact" element={<Contact/>}/>
          
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard/stats" element={<Dashboard />} />
          <Route path="/admin/products" element={<Product />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/customers/:id" element={<CustomerDetails />} />
          <Route path="/admin/products/add" element={<AddProduct />} />
          <Route path="/admin/products/:id" element={<EditProduct />} />
          <Route path="/admin/contact-enquiries" element ={<ContactEnquries/>}/>
          <Route path="/admin/categories" element ={<CategoryManagement/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
