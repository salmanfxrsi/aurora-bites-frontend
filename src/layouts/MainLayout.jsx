import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const { pathname } = useLocation();
  const no_navbar_footer = pathname === "/login" || pathname === "/register";

  return (
    <div>
      <Toaster position="top-right" />
      {!no_navbar_footer && <Navbar></Navbar>}
      <Outlet></Outlet>
      {!no_navbar_footer && <Footer></Footer>}
    </div>
  );
};
export default MainLayout;
