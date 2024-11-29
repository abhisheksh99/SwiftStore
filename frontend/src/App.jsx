import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AdminLayout from "./components/admin-view/AdminLayout";
import ShoppingLayout from "./components/shopping-view/ShoppingLayout";
import AdminDashboard from "./pages/admin-view/AdminDashboard";
import AdminOrders from "./pages/admin-view/AdminOrders";
import AdminFeature from "./pages/admin-view/AdminFeature";
import AdminProducts from "./pages/admin-view/AdminProducts";
import NotFound from "./pages/Not-Found/NotFound";
import UnauthPage from "./pages/UnAuthorized/UnauthPage";
import Home from "./pages/shopping-view/Home";
import ProductsListing from "./pages/shopping-view/ProductsListing";
import Checkout from "./pages/shopping-view/Checkout";
import Account from "./pages/shopping-view/Account";

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* Define application routes */}
      <Routes>
        {/* Authentication Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          {/* Login and Register nested routes under /auth */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Admin Panel Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Admin-specific views */}
          <Route path="dashoard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeature />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        {/* Shopping View Routes */}
        <Route path="/shop" element={<ShoppingLayout />}>
          {/* Shopping-related views */}
          <Route path="home" element={<Home />} />
          <Route path="listing" element={<ProductsListing />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<Account />} />
        </Route>

        {/* Fallback for unmatched routes */}
        <Route path="*" element={<NotFound />} />

        {/* Unauthorized Page Route */}
        <Route path="/unauth-page" element={<UnauthPage />} />
      </Routes>
    </div>
  );
};

export default App;
