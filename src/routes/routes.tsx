import App from "@/App";
import AddProducts from "@/components/admin/AddProducts";
import ManageOrders from "@/components/admin/ManageOrders";
import ManageProducts from "@/components/admin/ManageProducts";
import ManageUser from "@/components/admin/ManageUser";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import UserDashboard from "@/components/dashboard/UserDashboard";
import ProductDetails from "@/components/ProductDetails";
import ManageAccount from "@/components/user/ManageAccount";
import Orders from "@/components/user/Orders";
import OrderVerify from "@/components/user/OrderVerify";
import AboutUs from "@/pages/about/AboutUs";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import AllCars from "@/pages/cars/AllCars";
import Home from "@/pages/home/Home";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./protectedRoutes";
import ReviewPage from "@/pages/review/ReviewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:id",
        element: <ProductDetails />,
      },
      {
        path: "/all-cars",
        element: <AllCars />,
      },
      {
        path: "/admin-dashboard",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="add-products" replace />,
          },
          {
            path: "add-products",
            element: <AddProducts />,
          },
          {
            path: "manage-user",
            element: <ManageUser />,
          },
          {
            path: "manage-orders",
            element: <ManageOrders />,
          },
          {
            path: "manage-products",
            element: <ManageProducts />,
          },
        ],
      },
      {
        path: "/user-dashboard",
        element: (
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Navigate to={"orders"} replace />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "manage-account",
            element: <ManageAccount />,
          },
        ],
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/order/verify",
        element: <OrderVerify />,
      },
      {
        path: "/review",
        element: <ReviewPage />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default router;
