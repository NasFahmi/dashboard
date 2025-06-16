import { useState } from "react";
import Header from "./partials/header";
import Sidebar from "./partials/sidebar";

export default function DashbaordLayout() {
  const [isSideBarOpen, setisSideBarOpen] = useState(true)
  return (
    <div className="h-screen block md:flex overflow-hidden bg-amber-100">

      {/* SideBar */}
      <Sidebar isOpen={isSideBarOpen} onClose={()=>setisSideBarOpen(false)} />

      {/* main content */}
      <div className="relative w-screen flex flex-col overflow-y-auto overflow-x-hidden">

        <Header onToggleSidebar={()=>setisSideBarOpen(true)} />

      </div>
    </div>
  );
}