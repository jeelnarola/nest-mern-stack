import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { MdDelete } from "react-icons/md";
import { Link, Outlet, useLocation } from 'react-router-dom';

function CartList() {
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    const [show, setShow] = useState(false);

    const isCartPage = location.pathname === "/cart"; // 👈 check current path

    return (
        <div className="container mx-auto my-10 px-3">
            <div className="flex flex-col lg:flex-row w-full gap-6">

                {/* Left Side */}
                <div className="w-full lg:w-[70%]">
                    {isCartPage ? (
                        // 👉 Cart Items only on /cart
                        <div>
                            <div className="w-full h-auto border border-gray-300 rounded-md overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <td className="text-black p-3 border-b border-gray-300 text-lg font-semibold">
                                                Shopping Cart
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-5 flex flex-col sm:flex-row sm:justify-between gap-4">
                                                <img
                                                    alt=".."
                                                    className="border border-gray-300 w-[100px] h-[100px] rounded-md object-cover"
                                                />

                                                <div className="flex-1">
                                                    <ul>
                                                        <li className="text-md font-medium pb-2">
                                                            Cropped Satin Bomber Jacket
                                                        </li>
                                                        <li className="text-red-500 font-bold">$94.00</li>
                                                        <li className="text-gray-700">
                                                            <span className="text-md font-medium text-black pr-2">
                                                                Size:
                                                            </span>
                                                            Small
                                                        </li>
                                                        <li className="text-gray-700">
                                                            <span className="text-md font-medium text-black pr-2">
                                                                Color:
                                                            </span>
                                                            Black
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className='flex items-center gap-4'>
                                                    {/* Quantity Control */}
                                                <div className="flex items-center ">
                                                    <input
                                                        type="text"
                                                        className="w-[40px] h-[45px] border p-1 text-center border-gray-300 focus:outline-none"
                                                        value={quantity}
                                                        readOnly
                                                    />
                                                    <div>
                                                        <button
                                                            className="block p-[2px] border border-gray-300"
                                                            onClick={() => setQuantity(quantity + 1)}
                                                        >
                                                            <IoIosArrowUp />
                                                        </button>
                                                        <button
                                                            className="p-[2px] border border-gray-300"
                                                            onClick={() =>
                                                                quantity > 1 && setQuantity(quantity - 1)
                                                            }
                                                        >
                                                            <IoIosArrowUp className="rotate-180" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Price */}
                                                <div>
                                                    <p className="text-xl text-red-600 font-semibold">$0.00</p>
                                                </div>

                                                {/* Delete */}
                                                <div>
                                                    <MdDelete className="mx-4 cursor-pointer hover:text-red-500 text-2xl" />
                                                </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="py-5 text-md font-medium cursor-pointer hover:underline">
                                Continue shopping
                            </p>
                        </div>
                    ) : (
                        // 👉 For /cart/summary or child routes
                        <Outlet />
                    )}
                </div>

                {/* Right Checkout Summary */}
                <div className="w-full lg:w-[30%] ">
                    <div className="border border-gray-300 rounded-md overflow-hidden">
                        <div className="py-5 px-5 text-red-500 font-medium border-b border-gray-300">
                            <div className="flex justify-between text-md pt-2">
                                <p className="text-black font-medium pb-2">1 item</p>
                                <p>$86.00</p>
                            </div>
                            <div className="flex justify-between text-md">
                                <p className="text-black font-medium">Shipping</p>
                                <p>$7.00</p>
                            </div>
                        </div>

                        <div className="py-5 px-5 text-red-500 font-medium">
                            <div className="flex justify-between text-md">
                                <p className="text-black font-medium pb-2">Total (tax excl.)</p>
                                <p>$93.00</p>
                            </div>
                            <div className="flex justify-between text-md">
                                <p className="text-black font-medium pb-2">Total (tax incl.)</p>
                                <p>$93.00</p>
                            </div>
                            <div className="flex justify-between text-md">
                                <p className="text-black font-medium pb-2">Taxes:</p>
                                <p>$0.00</p>
                            </div>
                            <p className="font-normal underline cursor-pointer">
                                Have a promo code?
                            </p>

                            {isCartPage && (
                                <Link
                                    to={"order-details"}
                                    className="block mx-auto bg-[#e72d23] text-white rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-300 mt-8 cursor-pointer text-lg"
                                >
                                    <div
                                        className="flex items-center justify-center py-3"
                                        onClick={() => setShow(!show)}
                                    >
                                        {show && (
                                            <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                                        )}
                                        <span className="ml-2">Proceed to checkout</span>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CartList;
