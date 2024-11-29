import React, { useEffect } from "react";
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
import CheckAuth from "./components/common/CheckAuth";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/auth-slice/authSlice";
import { Skeleton } from "./components/ui/skeleton";

const App = () => {
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading)
    return (
      <Skeleton className="w-full max-w-[800px] h-[20px] rounded-full bg-gray-300 animate-pulse shadow-lg" />
    );

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* Define application routes */}
      <Routes>
        {/* Authentication Routes */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          {/* Login and Register nested routes under /auth */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Admin Panel Routes */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          {/* Admin-specific views */}
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeature />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        {/* Shopping View Routes */}
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
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
