import { useLocation, Navigate } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  // Redirect unauthenticated users to login page
  if (!isAuthenticated && !(location.pathname.includes("/login") || location.pathname.includes("/register"))) {
    return <Navigate to="/auth/login" />;
  }

  // Redirect authenticated users from login/register pages
  if (isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/register"))) {
    if (user?.role === "Admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // Prevent non-admin users from accessing admin pages
  if (isAuthenticated && user?.role !== "Admin" && location.pathname.includes("admin")) {
    return <Navigate to="/unauth-page" />;
  }

  // Redirect admin users from shop pages to admin dashboard
  if (isAuthenticated && user?.role === "Admin" && location.pathname.includes("shop")) {
    return <Navigate to="/admin/dashboard" />;
  }

  // Render children if all checks pass
  return <>{children}</>;
};

export default CheckAuth;