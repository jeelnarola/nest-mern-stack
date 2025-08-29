import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Jones Men's T-shirt (Blue)",
    price: 39,
    stock: 98,
    image: "https://via.placeholder.com/200x200?text=Blue+T-Shirt",
  },
  {
    id: 2,
    name: "Brown Hoodie for men",
    price: 98,
    stock: 23,
    image: "https://via.placeholder.com/200x200?text=Brown+Hoodie",
  },
  {
    id: 3,
    name: "Designer Awesome T-Shirt",
    price: 49,
    stock: 235,
    image: "https://via.placeholder.com/200x200?text=Pink+T-Shirt",
  },
  {
    id: 4,
    name: "Jones Awesome T-Shirt",
    price: 29,
    stock: 385,
    image: "https://via.placeholder.com/200x200?text=Light+Blue+T-Shirt",
  },
  {
    id: 5,
    name: "Jones Awesome T-Shirt",
    price: 29,
    stock: 385,
    image: "https://via.placeholder.com/200x200?text=Light+Blue+T-Shirt",
  },
];
function ProductBox() {
    const [search, setSearch] = useState("");
  return (
    <>
       <div className="h-[60vh]  overflow-y-auto">
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-black">
        {products
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <div className="flex items-center text-yellow-500 my-2">
                {"⭐".repeat(5)}
              </div>
              <p className="text-gray-600 text-sm">Stocks : {product.stock} pcs</p>
              <div className="text-right mt-2">
                <span className="bg-gray-100 px-3 py-1 rounded-lg font-bold text-gray-700">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
      </div>
       </div>
    </>
  ) 
}

export default ProductBox
