import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Admin/SideBar";
import AdminHeader from "../Admin/AdminHeader";

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <AdminHeader toggleSidebar={toggleSidebar} />
        <div className="flex-1 p-6 pb-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
