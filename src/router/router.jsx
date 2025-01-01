import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";

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
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/our-shop",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
