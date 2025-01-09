import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Shared/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Dashboard */}
      <div className="bg-[#D1A054] w-[280px] h-svh">
        <Dashboard></Dashboard>
      </div>
      {/* Dashboard Outlet */}
      <div className="w-full mt-[50px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
