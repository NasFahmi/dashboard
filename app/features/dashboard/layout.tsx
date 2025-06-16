import { useState } from "react";
import Header from "./partials/header";
import Sidebar from "./partials/sidebar";
import { Outlet } from "react-router";

export default function DashbaordLayout() {
  const [isSideBarOpen, setisSideBarOpen] = useState(false)
  return (
    <div className="h-screen block md:flex overflow-hidden bg-[#F5F7FA]">

      {/* SideBar */}
      <Sidebar isOpen={isSideBarOpen} onClose={() => setisSideBarOpen(false)} />

      {/* main content */}
      <div className="relative flex flex-col w-screen h-screen overflow-hidden bg-[#F5F7FA]">

        <Header onToggleSidebar={() => setisSideBarOpen(true)} />
        <div className="flex-1 overflow-y-auto">
          <Outlet />

        </div>

      </div>
    </div>
  );
}