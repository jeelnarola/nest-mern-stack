import React from 'react'
import { useState } from 'react';

function ProductFilter() {
    const [search, setSearch] = useState("");
  return (
    <>
        <div className="bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 shadow rounded-lg px-6 p-4">
        <div>
            <input
          type="text"
          placeholder="Search..."
          className="border-1 border-gray-300 rounded-lg px-4 py-2  mr-2 focus:outline-none focus:ring focus:ring-blue-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="border border-gray-300 rounded-lg p-2 w-[100px] text-gray-500">
          <option value="all">All</option>
          <option value="priceLow">Price Low → High</option>
          <option value="priceHigh">Price High → Low</option>
          <option value="priceHigh">Price High → Low</option>
        </select>
        </div>

        <div className="flex space-x-3">
          <button className="bg-green-400 text-white px-4 py-2 rounded-lg shadow hover:bg-green-500 cursor-pointer">
            ⚙️
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 cursor-pointer">
            ➕ Add New
          </button>
        </div>
      </div>
      </div>
    </>
  )
}

export default ProductFilter
