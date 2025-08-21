import React, { useState } from "react";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();
    console.log("Tracking order:", { orderId, email });
    // ✅ you can call API here
  };

  return (
   <>
     <div className="flex items-start ">
      <div className="w-full max-w-xl bg-white">
        <h2 className="text-4xl font-semibold text-gray-800 mb-5">Orders tracking</h2>
        <p className="text-gray-600 mb-6">
          To track your order please enter your OrderID in the box below and press 
          <span className="font-medium"> "Track"</span> button. This was given to you 
          on your receipt and in the confirmation email you should have received.
        </p>

        <form onSubmit={handleTrack} className="space-y-5">
          {/* Order ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 ">Order ID</label>
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Found in your order confirmation email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              required
            />
          </div>

          {/* Billing Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Billing email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email you used during checkout"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg transition font-medium focus:ring-green-500 focus:border-green-500 hover:bg-green-600 cursor-pointer"
          >
            Track
          </button>
        </form>
      </div>
    </div>
   </>
  );
};

export default OrderTracking;
