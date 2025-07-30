import { useState } from "react";
import { FaExchangeAlt, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import SubMenu from "../DropDown/SubMenu";
import CartDropDown from "../Cart/CartDropDown";
const icons = [
    { icon: <FaExchangeAlt />, label: "Compare", count: 3 },
    { icon: <FaHeart />, label: "Wishlist", count: 6, },
    { icon: <FaShoppingCart />, label: "Cart", count: 2, hasSubmenu: true },
    { icon: <FaUser />, label: "Account", hasSubmenu: true },
];
function HeaderActionicon() {
    const [hovered, setHovered] = useState(null);
    return (
        <>
            <div className="flex md:gap-8 gap-3 text-[#253D4E]">
                {icons.map(({ icon, label, count, hasSubmenu }, idx) => {
                    // Hide Wishlist and Cart on xl+ screens
                    const isHiddenOnXL = label === "Wishlist" || label === "Cart";

                    return (
                        <div
                            key={idx}
                           className={`relative flex flex-col items-center text-sm cursor-pointer ${isHiddenOnXL ? "" : "hidden lg:block"}`}
                            onMouseEnter={() => hasSubmenu && setHovered(label)}
                            onMouseLeave={() => hasSubmenu && setHovered(null)}
                        >
                            <div className="text-2xl">{icon}</div>

                            {count !== undefined && (
                                <span className="absolute -top-2 -right-2 bg-[#3BB77E] text-white text-xs font-semibold h-5 w-5 rounded-full flex items-center justify-center shadow-md">
                                    {count}
                                </span>
                            )}

                            <span className={`mt-1 ${isHiddenOnXL ? "hidden lg:block" : ""}`}>{label}</span>

                            {/* Submenu */}
                            {hovered === label && (
                                <div
                                    className={`absolute top-[50px] bg-white shadow-lg border  border-gray-200 rounded-md text-sm z-10 ${label === "Cart" ? "w-[300px] md:w-[400px] h-80 p-5 right-0 xl:right-auto" : "w-44 p-3 -right-10"
                                        }`}
                                >
                                    {label === "Cart" ? <CartDropDown /> : <SubMenu />}
                                </div>
                            )}
                        </div>
                    );
                })}

            </div>

        </>
    )
}

export default HeaderActionicon