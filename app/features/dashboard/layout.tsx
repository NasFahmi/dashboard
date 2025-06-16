import { useState } from "react";
import Header from "./partials/header";
import Sidebar from "./partials/sidebar";
import { isRouteErrorResponse, Outlet } from "react-router";
import type { Route } from "../../routes/+types/dashboard";

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


export function ErrorBoundary({
  error,
}: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error awdadw</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}