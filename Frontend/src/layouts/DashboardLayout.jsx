import SideBar from "../components/sideBar";
import TopBar from "../components/topbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex flex-row min-h-screen">
      {/* SIDEBAR */}
      <SideBar />

      {/* RIGHT CONTENT */}
      <div className="flex flex-col w-full">
        {/* TOPBAR */}
        <TopBar />

        {/* PAGE CONTENT */}
        <div className="bg-[#F1F7F5] flex-1">
          <div className="container mx-auto mt-14 px-4 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
