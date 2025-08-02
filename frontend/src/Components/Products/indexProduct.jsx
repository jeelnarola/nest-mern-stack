import ListProduct from "./ListProduct";
import product1 from '../../assets/product-1-1.jpg'
import product2 from '../../assets/product-1-2.jpg'
import { useState } from "react";
const dummyProducts = [
  {
    image: [product1, product2], // import or public path
    badge: 'Hot',
    badgeColor: 'bg-pink-500',
    category: 'Snack',
    title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    rating: 4.0,
    brand: 'NestFood',
    price: 28.85,
    originalPrice: 32.8,
  },
  {
    image: [product1, product2], // import or public path
    badge: 'Hot',
    badgeColor: 'bg-pink-500',
    category: 'Snack',
    title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    rating: 4.0,
    brand: 'NestFood',
    price: 28.85,
    originalPrice: 32.8,
  },
  {
    image: [product1, product2], // import or public path
    badge: 'Hot',
    badgeColor: 'bg-pink-500',
    category: 'Snack',
    title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    rating: 4.0,
    brand: 'NestFood',
    price: 28.85,
    originalPrice: 32.8,
  },
  {
    image: [product1, product2], // import or public path
    badge: 'Hot',
    badgeColor: 'bg-pink-500',
    category: 'Snack',
    title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    rating: 4.0,
    brand: 'NestFood',
    price: 28.85,
    originalPrice: 32.8,
  },
  {
    image: [product1, product2], // import or public path
    badge: 'Hot',
    badgeColor: 'bg-pink-500',
    category: 'Snack',
    title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    rating: 4.0,
    brand: 'NestFood',
    price: 28.85,
    originalPrice: 32.8,
  },
  
  // Add more objects here...
];

const ProductNav = ['All', 'Milks & Dairies', 'Coffes & Teas', 'Pet Foods', 'Meats', 'Vegetables', 'Fruits']
function IndexProduct() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="container mx-auto my-10">

      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Popular Products</h1>
        <ul className="flex">
          {
            ProductNav.map((ele, index) => {
              return <li key={index} onClick={() => setActiveIndex(index)} className={`text-lg p-2 cursor-pointer transition-all duration-300 ${activeIndex === index
                  ? 'text-[#3BB77E] border-b-2 border-[#3BB77E] font-semibold'
                  : 'text-gray-600 hover:text-[#3BB77E]'
                }`}>{ele}</li>
            })
          }
        </ul>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {dummyProducts.map((product, index) => (
          <ListProduct key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default IndexProduct