import React from 'react'

function YourOrders() {
    const orders = [
        { id: "#1357", date: "March 45, 2020", status: "Processing", total: "$125.00 for 2 item" },
        { id: "#2468", date: "June 29, 2020", status: "Completed", total: "$364.00 for 5 item" },
        { id: "#2366", date: "August 02, 2020", status: "Completed", total: "$280.00 for 3 item" },
    ];
    return (
        <>
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Orders</h2>
                <div className="w-[80%] border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr className="text-left text-gray-700 font-semibold">
                                <th className="px-6 py-3 border-b">Order</th>
                                <th className="px-6 py-3 border-b">Date</th>
                                <th className="px-6 py-3 border-b">Status</th>
                                <th className="px-6 py-3 border-b">Total</th>
                                <th className="px-6 py-3 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition">
                                    <td className="px-6 py-3">{order.id}</td>
                                    <td className="px-6 py-3">{order.date}</td>
                                    <td className="px-6 py-3">{order.status}</td>
                                    <td className="px-6 py-3">{order.total}</td>
                                    <td className="px-6 py-3">
                                        <button className="text-green-500 hover:underline">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default YourOrders