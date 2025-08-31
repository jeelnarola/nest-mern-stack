import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage";
import Login from "../Components/auth/Login";
import UserLayout from "../Components/Layouts/UserLayout";
import CompareIndex from "../Components/Compare/CompareIndex";
import WishlistIndex from "../Components/Wishlist/WishlistIndex";
import CartIndex from "../Components/Cart/CartIndex";
import CartOrderDetails from "../Components/Cart/CartOrderDetails";
import ProfileIndex from "../Components/Profile/ProfileIndex";
import DashboardProfile from "../Components/Profile/DashboardProfile";
import YourOrders from "../Components/Profile/YourOrders";
import UserAddress from "../Components/Profile/UserAddress";
import OrdersTracking from "../Components/Profile/OrdersTracking";
import AdminLayout from "../Components/Layouts/AdminLayout";
import AdminDashboard from "../Pages/admin/AdminDashboard";
import ProtectedRoute from "../utils/ProtectedRoute";
import Page404 from "../Pages/page404";
import ProductIndex from "../Pages/admin/product/ProductIndex";
import AddProductForm from "../Components/Admin/Product/AddProductForm";
export const routers = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "", // ✅ remove the leading slash
        element: <HomePage />,
      },
      {
        path: "login", // ✅ remove the leading slash
        element: <Login />,
      },
      {
        path: "compare", // ✅ remove the leading slash
        element: <CompareIndex />,
      },
      {
        path: "wishlist", // ✅ remove the leading slash
        element: <WishlistIndex />,
      },
      {
        path: "cart", // ✅ remove the leading slash
        element: <CartIndex />,
        children: [
          {
            path: "order-details", // ✅ remove the leading slash
            element: <CartOrderDetails />,
          },
        ],
      },
      {
        path: "account",
        element: <ProfileIndex />,
        children: [
          { index: true, element: <DashboardProfile /> }, // default route (/profile)
          { path: "orders", element: <YourOrders /> },
          { path: "orders/track", element: <OrdersTracking /> },
          { path: "address", element: <UserAddress /> },
          //   { path: 'address', element: <Address /> },
          //   { path: 'account', element: <AccountDetails /> }
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> }, // /admin → dashboard
          { path: "dashboard", element: <AdminDashboard /> }, // /admin/dashboard
          {path:"products",element:<ProductIndex/>},
          {path:"addProduct",element:<AddProductForm/>},
          { path: "*", element: <Page404 /> }, // /admin/*
        ],
      },
    ],
  },

  {
    path: "*",
    element: <Page404 />, // 🔥 global fallback for anything not /admin
  },
]);
