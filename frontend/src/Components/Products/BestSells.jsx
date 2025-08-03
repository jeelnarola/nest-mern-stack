import React from 'react'
import { useState } from 'react';
import banner4 from '../../assets/banner-4.png'
import ListProduct from './ListProduct';

import product1 from '../../assets/product-1-1.jpg'
import product2 from '../../assets/product-1-2.jpg'
const ProductNav = ['Featured', 'Popular', 'New added']
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
function BestSells() {
      const [activeIndex, setActiveIndex] = useState(0);
    
  return (
   <>
    <div className="container mx-auto py-10">
        <div className="flex items-center justify-between">
        <h1 className="text-3xl">Daily Best Sells</h1>
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
      <div className='w-full flex '>
        <div className='w-[25%]  overflow-hidden p-5 relative'>
            <img src={banner4} alt="" className='w-full  rounded-2xl '/>
            <h1 className='absolute top-10 p-10 pr-20 text-4xl'>Bring nature into your home</h1>
        </div>
        <div className='w-[70%] p-5'>
          <div className="grid grid-cols-3 gap-5">
        {dummyProducts.map((product, index) => (
          <ListProduct key={index} product={product} />
        ))}
      </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default BestSells