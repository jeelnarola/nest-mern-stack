import React, { useState } from "react";

function WishlistIndex() {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Field Roast Chao Cheese Creamy Original",
      price: 2.51,
      stock: true,
      rating: 4,
      image:
        "https://cdn.dummyjson.com/product-images/groceries/field-roast-chao-cheese/1.webp",
    },
    {
      id: 2,
      name: "Blue Diamond Almonds Lightly Salted",
      price: 3.2,
      stock: true,
      rating: 2,
      image:
        "https://cdn.dummyjson.com/product-images/groceries/blue-diamond-almonds/1.webp",
    },
    {
      id: 3,
      name: "Fresh Organic Mustard Leaves Bell Pepper",
      price: 2.43,
      stock: true,
      rating: 1,
      image:
        "https://cdn.dummyjson.com/product-images/groceries/mustard-leaves-bell-pepper/1.webp",
    },
    {
      id: 4,
      name: "Angie's Boomchickapop Sweet & Salty",
      price: 3.21,
      stock: false,
      rating: 2,
      image:
        "https://cdn.dummyjson.com/product-images/groceries/boomchickapop/1.webp",
    },
    {
      id: 5,
      name: "Foster Farms Takeout Crispy Classic",
      price: 3.17,
      stock: true,
      rating: 3,
      image:
        "https://cdn.dummyjson.com/product-images/groceries/foster-farms-takeout/1.webp",
    },
  ]);

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-1">
        Your{" "}
        <span className="text-green-600 bg-green-100 px-2">Wishlist</span>
      </h2>
      <p className="text-gray-500 mb-6">
        There are {wishlist.length} products in this list
      </p>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border border-gray-200 rounded-xl">
          <thead className="bg-gray-100 text-left text-gray-600">
            <tr>
              <th className="p-3 w-12">
                <input type="checkbox" />
              </th>
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock Status</th>
              <th className="p-3">Action</th>
              <th className="p-3">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                {/* Checkbox */}
                <td className="p-3">
                  <input type="checkbox" />
                </td>

                {/* Product */}
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-contain rounded"
                  />
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <div className="flex items-center gap-2 text-yellow-500 text-sm">
                      {/* Stars */}
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i}>
                            {i < item.rating ? "★" : "☆"}
                          </span>
                        ))}
                      </div>
                      {/* Numeric rating */}
                      <span className="text-gray-500">
                        ({item.rating.toFixed(1)})
                      </span>
                    </div>
                  </div>
                </td>

                {/* Price */}
                <td className="p-3 font-semibold text-green-600">
                  ${item.price}
                </td>

                {/* Stock */}
                <td className="p-3">
                  {item.stock ? (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded text-sm">
                      Out Stock
                    </span>
                  )}
                </td>

                {/* Action */}
                <td className="p-3">
                  {item.stock ? (
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded text-sm sm:text-base">
                      Add to cart
                    </button>
                  ) : (
                    <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-1 rounded text-sm sm:text-base">
                      Contact Us
                    </button>
                  )}
                </td>

                {/* Remove */}
                <td className="p-3">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-500 hover:text-red-500 cursor-pointer"
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WishlistIndex;
