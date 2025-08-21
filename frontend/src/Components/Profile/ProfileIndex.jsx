import React from "react";
import SidebarProfile from "./SidebarProfile";
import { Outlet } from "react-router-dom";

function ProfileIndex() {

      return (

        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row gap-6">

            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <SidebarProfile />
            </div>

            {/* Content */}
            <div className="pt-5">
              <Outlet />
            </div>
          </div>
        </div>
      );
}

export default ProfileIndex;
