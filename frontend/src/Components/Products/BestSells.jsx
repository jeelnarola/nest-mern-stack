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
    Sold:10,
    quantity:120
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
    sold:3,
    quantity:100
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
    sold:40,
    quantity:50
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
    sold:30,
    quantity:120
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
    sold:30,
    quantity:120
  },
  
  // Add more objects here...
];

import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
        <div className='w-[25%]  overflow-hidden p-5 relative h-full'>
            <img src={banner4} alt="" className='w-full h-full rounded-2xl '/>
            <h1 className='absolute top-10 p-10 pr-20 text-4xl'>Bring nature into your home</h1>
        </div>
        <div className='w-[70%] p-5'>
          {/* <div className="grid grid-cols-3 gap-5">
        {dummyProducts.map((product, index) => (
          <ListProduct key={index} product={product} />
        ))}
      </div> */}
       <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          modules={[Pagination, Scrollbar, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={900}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          <div className="">
            {dummyProducts.map((product, index) => (
              <SwiperSlide>

                <ListProduct key={index} product={product} props = 'Best Sells' />
              </SwiperSlide>
        ))}
            {/* {categories.map((category, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  className="px-4 py-10 bg-white shadow-lg rounded-lg flex flex-col items-center hover:border-1 group hover:border-gray-200 cursor-pointer"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-20 w-20 mb-2 hover:scale-110 scale-100 transition-all duration-700"
                  />
                  <h3 className="text-md font-semibold group-hover:text-[#3BB77E] transition-all duration-100">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.items} items</p>
                </div>
              </SwiperSlide>
            ))} */}
          </div>
        </Swiper>
        </div>
      </div>
    </div>
   </>
  )
}

export default BestSells