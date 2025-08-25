import React from "react";
import { HiOutlineMenu, HiOutlineBell, HiOutlineSun } from "react-icons/hi";

function AdminHeader({ toggleSidebar }) {
  return (
    <header className="flex items-center justify-between bg-gray-800 text-white px-6 py-4 shadow">
      <div className="flex items-center space-x-4">
        <HiOutlineMenu
          className="w-6 h-6 cursor-pointer"
          onClick={toggleSidebar} // Toggle sidebar
        />
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded text-black"
        />
      </div>

      <div className="flex items-center space-x-4">
        <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-6 h-6 rounded" />
        <HiOutlineBell className="w-6 h-6 cursor-pointer relative">
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </HiOutlineBell>
        <HiOutlineSun className="w-6 h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/30"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span>Geneva</span>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
