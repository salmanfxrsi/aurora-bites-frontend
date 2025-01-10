import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/registration";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import MyCart from "../pages/My Cart/MyCart";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "our-shop",
        element: <OurShop />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
    children: [
      {
        path: "my-cart",
        element: <MyCart />
      },

      // Admin Routes
      {
        path: "all-users",
        element: <AllUsers />
      },
    ]
  }
]);

export default router;
