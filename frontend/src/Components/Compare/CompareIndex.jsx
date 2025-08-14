import React from "react";

const products = [
  {
    img: "https://cdn.dummyjson.com/product-images/groceries/cashew.webp",
    name: "J.Crew Mercantile Women’s Short",
    price: 12.0,
    rating: 4,
    reviews: 121,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    stock: "In Stock",
    weight: "320 gram",
    dimensions: "N/A",
  },
  {
    img: "https://cdn.dummyjson.com/product-images/groceries/dandy-blend.webp",
    name: "Amazon Essentials Women’s Tanks",
    price: 14.0,
    rating: 4,
    reviews: 35,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    stock: "Out of Stock",
    weight: "370 gram",
    dimensions: "N/A",
  },
  {
    img: "https://cdn.dummyjson.com/product-images/groceries/veggie-pops.webp",
    name: "Amazon Brand - Daily Ritual Wom",
    price: 15.0,
    rating: 4,
    reviews: 125,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    stock: "In Stock",
    weight: "380 gram",
    dimensions: "N/A",
  },
];

export default function CompareIndex() {
  return (
    <div className="container mx-auto py-10">
      <div className="px-4 lg:pl-20">
        <h1 className="text-3xl lg:text-5xl">Products Compare</h1>
        <p className="text-lg lg:text-xl text-gray-500 pt-2 font-medium">
          There are {products.length} products to compare
        </p>

        {/* Desktop Table */}
        <div className="hidden lg:block p-6 bg-white overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="p-4 text-left border border-gray-300">Preview</th>
                {products.map((p, i) => (
                  <th key={i} className="p-4 text-center border border-gray-300">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="mx-auto h-48 object-contain"
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Name", key: "name" },
                { label: "Price", key: "price", format: (v) => `$${v.toFixed(2)}` },
                {
                  label: "Rating",
                  key: "rating",
                  format: (v, p) => `⭐`.repeat(v) + ` (${p.reviews})`,
                },
                { label: "Description", key: "description" },
                {
                  label: "Stock status",
                  key: "stock",
                  format: (v) => (
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        v.toLowerCase().includes("in stock")
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {v}
                    </span>
                  ),
                },
                { label: "Weight", key: "weight" },
                { label: "Dimensions", key: "dimensions" },
              ].map((row, idx) => (
                <tr key={idx} className="border border-gray-300">
                  <td className="p-4 font-semibold text-gray-500 border border-gray-300">
                    {row.label}
                  </td>
                  {products.map((p, i) => (
                    <td
                      key={i}
                      className="p-4 text-center border border-gray-300"
                    >
                      {row.format
                        ? row.format(p[row.key], p)
                        : p[row.key]}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Buy Now */}
              <tr className="border border-gray-300">
                <td className="p-4 font-semibold text-gray-500 border border-gray-300">
                  Buy now
                </td>
                {products.map((p, i) => (
                  <td
                    key={i}
                    className="p-4 text-center border border-gray-300"
                  >
                    {p.stock.toLowerCase().includes("in stock") ? (
                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mx-auto">
                        🛒 Add to cart
                      </button>
                    ) : (
                      <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded mx-auto">
                        📞 Contact Us
                      </button>
                    )}
                  </td>
                ))}
              </tr>

              {/* Remove */}
              <tr className="border border-gray-300">
                <td className="p-4 font-semibold text-gray-500 border border-gray-300"></td>
                {products.map((_, i) => (
                  <td
                    key={i}
                    className="p-4 text-center text-gray-400 hover:text-red-500 cursor-pointer border border-gray-300"
                  >
                    🗑 Remove
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 gap-6 lg:hidden mt-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-40 mx-auto object-contain"
              />
              <h2 className="text-lg font-bold mt-2">{p.name}</h2>
              <p className="text-green-600 font-semibold text-lg">
                ${p.price.toFixed(2)}
              </p>
              <p>
                {"⭐".repeat(p.rating)}{" "}
                <span className="text-gray-500">({p.reviews})</span>
              </p>
              <p className="text-gray-500 text-sm mt-2">{p.description}</p>
              <p className="mt-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    p.stock.toLowerCase().includes("in stock")
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {p.stock}
                </span>
              </p>
              <p className="text-sm mt-1">Weight: {p.weight}</p>
              <p className="text-sm">Dimensions: {p.dimensions}</p>
              <div className="mt-3">
                {p.stock.toLowerCase().includes("in stock") ? (
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full">
                    🛒 Add to cart
                  </button>
                ) : (
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded w-full">
                    📞 Contact Us
                  </button>
                )}
              </div>
              <button className="mt-2 text-gray-400 hover:text-red-500 w-full">
                🗑 Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
