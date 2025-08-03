
import { useState } from 'react';
import getAllProducts from '../../services/ProductService';
function ListProduct({ product }) {
  console.log("Product :- ", product);
  const [hovered, setHovered] = useState(false);
  // const [Products,setProducts] = useState([])
  // useEffect(() => {
  //   getAllProducts()
  //    .then(res => setProducts(res.products))
  //     .catch(console.error);
  // }, []);
  // console.log("Product",Products);

  return (
    <>
      <div className="container mx-auto ">

        {/* <div className="grid grid-cols-5 gap-2"> */}
        <div>
          <div className='border-1 border-gray-200 rounded-2xl relative overflow-hidden group ' onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {/* Badge */}
            {product.badge && (
              <div
                className={`absolute -top-1 left-0 px-7 py-2 text-white text-sm font-medium rounded-br-2xl rounded-tl-2xl z-50 ${product.badgeColor}`}
              >
                {product.badge}
              </div>
            )}
            <div className="w-full h-64 grid place-items-center group overflow-hidden cursor-pointer">
              {/* Default Image */}
              <img
                src={product.image[0]}
                alt="product"
                className="w-full h-full object-contain p-10 transition duration-1000 ease-in-out opacity-100 group-hover:opacity-0 group-hover:hidden scale-105 "
              />

              {/* Hover Image */}
              <img
                src={product.image[1]}
                alt="product hover"
                className="w-full h-full object-contain p-10 transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100 group-hover:block scale-100  group-hover:scale-105 group-hover:brightness-110"
              />
            </div>
            <div className='px-5 pt-8'>
              <p className="text-sm text-gray-500 pb-2">{product.category}</p>
              <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-2">
                {product.title}
              </h3>
              <div className="flex items-center text-sm text-yellow-500 mb-2">
                {'⭐'.repeat(Math.floor(product.rating))}
                <span className="ml-1 text-gray-600 ">({product.rating.toFixed(1)})</span>
              </div>
              <p className="text-sm text-gray-500">By <span className="text-green-500 font-medium">{product.brand}</span></p>
              <div className="flex items-center justify-between mt-3 pb-5">
                <div className='flex items-center '>
                  <p className="text-xl font-semibold text-green-600">${product.price.toFixed(2)}</p>
                  <p className="text-md text-gray-400 line-through pl-3 pr-4">${product.originalPrice.toFixed(2)}</p>
                </div>
                <button className="m-3 cursor-pointer mt-3 w-[80%] bg-green-100 text-green-700 font-semibold py-1 rounded flex justify-center items-center gap-1 hover:bg-green-200">
                  🛒 Add
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default ListProduct