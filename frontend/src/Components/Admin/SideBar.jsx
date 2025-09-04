import logo from "../../assets/logo.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdShoppingCart, MdPeople, MdAddBox, MdStore } from "react-icons/md";
import { FaBoxOpen, FaReceipt } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function SideBar({ isOpen, setIsOpen }) {
  const [hoverOpen, setHoverOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "dashboard", icon: <MdDashboard size={22} /> },
    { name: "Products", path: "products", icon: <FaBoxOpen size={22} /> },
    { name: "Product Detail", path: "product-detail", icon: <AiOutlineShopping size={22} /> },
    { name: "Add Product", path: "addproduct", icon: <MdAddBox size={22} /> },
    { name: "Customers", path: "customers", icon: <MdPeople size={22} /> },
    { name: "Orders", path: "orders", icon: <FaReceipt size={22} /> },
    { name: "Order Detail", path: "order-detail", icon: <FaReceipt size={22} /> },
    { name: "Sellers", path: "sellers", icon: <MdStore size={22} /> },
    { name: "Shopping Cart", path: "cart", icon: <MdShoppingCart size={22} /> },
    { name: "Checkout", path: "checkout", icon: <AiOutlineShopping size={22} /> },
  ];

 return (
    <div
      className={`h-screen bg-white shadow-lg transition-all duration-300 relative 
        ${isOpen || hoverOpen ? "w-64" : "w-20"}`}
      onMouseEnter={() => !isOpen && setHoverOpen(true)}
      onMouseLeave={() => setHoverOpen(false)}
    >
      <div className="flex items-center justify-between p-4">
        <img
          src={logo}
          alt="logo"
          className={`cursor-pointer ${isOpen || hoverOpen ? 'h-10':'w-full'}`}
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Menu Items */}
      <ul className="mt-6 space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-2 text-gray-600 hover:text-indigo-600 transition cursor-pointer ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              {item.icon}
              {(isOpen || hoverOpen) && <span>{item.name}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
