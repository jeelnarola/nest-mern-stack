import { CiUser, CiLocationOn, CiHeart, CiSettings } from "react-icons/ci";
// import {  } from "react-icons/ci";
import { GoSignOut } from "react-icons/go";
const dataMenu = [
    { icon: <CiUser />, label: "My Account", count: 3 },
    { icon: <CiLocationOn />, label: "Order Tracking", count: 6, },
    { icon: <CiHeart />, label: "My Voucher", count: 2 },
    { icon: <CiHeart />, label: "My Wishlist" },
    { icon: <CiSettings />, label: "Setting" },
    { icon: <GoSignOut />, label: "Sign out" },
];
function SubMenu() {
    return (
        <>
            <ul>
                {
                    dataMenu.map((ele, index) => {
                        return (
                            <div className="flex items-center p-2 hover:text-[#3BB77E]">
                                <li className="pr-3 text-xl">{ele.icon}</li>
                                <li>{ele.label}</li>
                            </div>
                        )
                    })

                }
            </ul>
        </>
    )
}

export default SubMenu