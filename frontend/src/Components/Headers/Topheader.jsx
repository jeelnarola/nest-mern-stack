import React from 'react'

function Topheader() {
  return (
    <>
      <div className='md:border-b-1 md:border-gray-300 md:bg-[#3BB77E] md:text-white lg:bg-white md:p-2 lg:text-gray-400'>
        <div className="container mx-auto">
          <div className='flex lg:justify-between justify-center'>
            <div className='hidden lg:block'>
              <ul className='flex gap-2 text-[13px] text-gray-400'>
                <li className='hover:text-black cursor-pointer border-r-1 border-gray-300 pr-2'>About Us</li>
                <li className='hover:text-black cursor-pointer border-r-1 border-gray-300 pr-2'>My Account</li>
                <li className='hover:text-black cursor-pointer border-r-1 border-gray-300 pr-2'>Wishlist</li>
                <li className='hover:text-black cursor-pointer  pr-2'>Order Tracking</li>
              </ul>
            </div>
            <div className='text-[18px] lg:text-[13px] hidden md:block '>
              <p>100% Secure delivery without contacting the courier
              </p>
            </div>
            <div className='hidden lg:block'>
              <ul className='flex gap-2 text-[13px]  text-gray-400'>
                <li className='hover:text-black cursor-pointer border-r-1 border-gray-300 pr-2'>Need help? Call Us:
                  <span className='texColor font-bold'>+ 1800 900</span></li>
                <li className='hover:text-black cursor-pointer border-r-1 border-gray-300 pr-2'>English</li>
                <li className='hover:text-black cursor-pointer  pr-2'>INR</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topheader