import { NavLink } from "react-router-dom";
import { FaSlidersH } from "react-icons/fa";
import { FiShoppingBag, FiMapPin, FiUser, FiLogOut, FiTruck, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

function SidebarProfile() {
   const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FaSlidersH />, path: "/profile" },
    { name: "Orders", icon: <FiShoppingBag />, path: "/profile/orders" },
    { name: "Track Your Order", icon: <FiTruck />, path: "/profile/orders/track" },
    { name: "My Address", icon: <FiMapPin />, path: "/profile/address" },
    { name: "Account details", icon: <FiUser />, path: "/profile/account" },
    { name: "Logout", icon: <FiLogOut />, path: "/logout" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white shadow-md">
        <h2 className="text-xl font-semibold">Profile Menu</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
   <div
  className={`bg-white w-64 p-4 space-y-3 md:block h-full z-50 transition-transform transform
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    md:translate-x-0 shadow-lg md:shadow-none`}
>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-4 py-3 rounded-lg border font-medium transition-all ${
                    isActive
                      ? "bg-green-500 text-white border-green-500 shadow-md"
                      : "text-gray-600 hover:bg-gray-100 border-gray-200"
                  }`
                }
                onClick={() => setIsOpen(false)} // Close menu on mobile click
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SidebarProfile;
