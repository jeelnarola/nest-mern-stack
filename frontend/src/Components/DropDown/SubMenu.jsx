import { CiUser, CiLocationOn, CiHeart, CiSettings } from "react-icons/ci";
import { GoSignOut } from "react-icons/go";
import { NavLink } from "react-router-dom";

const dataMenu = [
  { icon: <CiUser />, label: "My Account", path: "/account"},
  { icon: <CiLocationOn />, label: "Order Tracking", path: "/orders", count: 6 },
  { icon: <CiHeart />, label: "My Voucher", path: "/vouchers", count: 2 },
  { icon: <CiHeart />, label: "My Wishlist", path: "/wishlist" },
  { icon: <CiSettings />, label: "Setting", path: "/settings" },
  { icon: <GoSignOut />, label: "Sign out", path: "/logout" },
];

function SubMenu() {
  return (
    <>
      <ul>
        {dataMenu.map((ele, index) => (
          <NavLink
            key={index}
            to={ele.path}
            className={({ isActive }) =>
              `flex items-center p-2 rounded-md transition-colors duration-200 ${
                isActive ? "text-[#3BB77E] font-semibold" : "text-gray-700"
              } hover:text-[#3BB77E]`
            }
          >
            <li className="pr-3 text-xl">{ele.icon}</li>
            <li>{ele.label}</li>
            {ele.count && (
              <span className="ml-auto bg-[#3BB77E] text-white text-xs px-2 py-0.5 rounded-full">
                {ele.count}
              </span>
            )}
          </NavLink>
        ))}
      </ul>
    </>
  );
}

export default SubMenu;
