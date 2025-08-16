import React from 'react'
import { useState } from 'react';

function CartOrderDetails() {
    const [PIActive, setPIActive] = useState(true);

  // State to track which FAQ items are open
  const [faq1Open, setFaq1Open] = useState(false);
  const [faq2Open, setFaq2Open] = useState(false);
  const [faq3Open, setFaq3Open] = useState(false);
  const [faq4Open, setFaq4Open] = useState(false);
  return (
  <>
        <div className="w-[90%] border border-gray-300 rounded-md overflow-hidden p-5 mx-auto">

      {/* FAQ Section with hardcoded stacked questions */}
      <div className="">
        {/* FAQ Item 1 */}
        <div
          className="border border-gray-300 rounded-md p-4 mb-3 cursor-pointer"

        >
          <div className="flex justify-between items-center" onClick={() => setFaq1Open(!faq1Open)}>

            <h1 className="text-xl font-bold mb-4">1 Personal Information</h1>
            <span className="text-xl">{faq1Open ? "−" : "+"}</span>
          </div>
          {faq1Open &&
            <>
              <div>

                <div className="flex font-semibold text-black px-10 pt-5 mb-6">
                  <p
                    className={`${PIActive ? "text-red-500" : "text-black"} cursor-pointer`}
                    onClick={() => setPIActive(true)}
                  >
                    Order as a guest
                  </p>
                  <p className="px-3">|</p>
                  <p
                    className={`${PIActive ? "text-black" : "text-red-500"} cursor-pointer`}
                    onClick={() => setPIActive(false)}
                  >
                    Sign in
                  </p>
                </div>
                {/* {PIActive ? <Register btncontent="continue" /> : <Login btncontent="continue" />} */}
              </div>
            </>
          }
        </div>

        {/* FAQ Item 2 */}
        <div
          className={`border rounded-md p-4 mb-3 ${faq1Open ? "border-gray-300 cursor-pointer" : "border-gray-200 bg-gray-100 cursor-not-allowed text-gray-400"
            }`}
          
        >
          <div className="flex justify-between items-center" onClick={() => {
            if (faq1Open) {
              setFaq2Open(!faq2Open);
            }
          }}>
            <h3 className="text-lg font-medium">
              2 Addresses</h3>
            <span className="text-xl">{faq2Open ? "−" : "+"}</span>
          </div>
          {faq2Open &&
            <>
              <div className="p-5">
                <p className="">The selected address will be used both as your personal address (for invoice) and as your delivery address.</p>
                <form className="max-w-2xl mx-auto p-6 ">
                  <div className="grid grid-cols-1 gap-4">
                    {/* Alias */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Alias <span className="text-xs text-gray-400">(Optional)</span>
                      </label>
                      <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">First name</label>
                      <input type="text" defaultValue="Narola" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last name</label>
                      <input type="text" defaultValue="Sanjaybhai" className="mt-1 w-full bg-blue-50 border border-gray-300 rounded-md px-3 py-2 focus:outline-none" />
                    </div>

                    {/* Company (Optional) */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Company <span className="text-xs text-gray-400">(Optional)</span>
                      </label>
                      <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Address</label>
                      <input
                        type="text"
                        defaultValue="109, second Floor, Sahajanand Society, Near Health Center,"
                        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                      />
                    </div>

                    {/* Address Complement */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Address Complement <span className="text-xs text-gray-400">(Optional)</span>
                      </label>
                      <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">City</label>
                      <input
                        type="text"
                        defaultValue="Surat"
                        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">State</label>
                      <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
                        <option>Please choose</option>
                        <option>Gujarat</option>
                        <option>Maharashtra</option>
                        <option>New York</option>
                        {/* Add more as needed */}
                      </select>
                    </div>

                    {/* Zip/Postal Code */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Zip/Postal Code</label>
                      <input type="text" defaultValue="395004" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Country</label>
                      <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
                        <option>United States</option>
                        <option>India</option>
                        <option>Canada</option>
                        {/* Add more */}
                      </select>
                    </div>

                    {/* Phone (Optional) */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Phone <span className="text-xs text-gray-400">(Optional)</span>
                      </label>
                      <input type="text" defaultValue="08980672209" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center">
                      <input id="invoice" type="checkbox" defaultChecked className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded" />
                      <label htmlFor="invoice" className="ml-2 block text-sm text-red-600 font-medium">
                        Use this address for invoice too
                      </label>
                    </div>

                  </div>
                  <div className="flex justify-end mt-5 ">
                    <button type="submit" className="bg-red-400 p-3 px-7 text-white uppercase rounded-sm hover:text-balck hover:bg-black cursor-pointer">Continue</button>
                  </div>
                </form>
              </div>
            </>
          }
        </div>

        {/* FAQ Item 3 */}
        <div
          className={`border rounded-md p-4 mb-3 ${faq2Open ? "border-gray-300 cursor-pointer" : "border-gray-200 bg-gray-100 cursor-not-allowed text-gray-400"
            }`}
          onClick={() => {
            if (faq2Open) {
              setFaq3Open(!faq3Open);
            }
          }}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">
              3 Shipping Method</h3>
            <span className="text-xl">{faq3Open ? "−" : "+"}</span>
          </div>
          {faq3Open && <p className="mt-2 text-gray-700">You will receive a tracking link via email once your order ships.</p>}
        </div>

        {/* FAQ Item 4 */}
        <div
          className={`border rounded-md p-4 mb-3 ${faq3Open ? "border-gray-300 cursor-pointer" : "border-gray-200 bg-gray-100 cursor-not-allowed text-gray-400"
            }`}
          onClick={() => {
            if (faq3Open) {
              setFaq4Open(!faq4Open);
            }
          }}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">
              4 Payment</h3>
            <span className="text-xl">{faq2Open ? "−" : "+"}</span>
          </div>
          {faq4Open && <p className="mt-2 text-gray-700">You will receive a tracking link via email once your order ships.</p>}
        </div>
      </div>
    </div>
  </>
  )
}

export default CartOrderDetails