import React from 'react'
import HeaderIndex from '../Components/Headers/HeaderIndex'
import Login from '../Components/auth/Login'
import Bennare from '../Components/Common/Bennare'
import { Outlet } from 'react-router-dom'
import FeaturedCategories from '../Components/Common/FeaturedCategories'
import SubBannerImage from '../Components/Common/SubBannerImage'
import IndexProduct from '../Components/Products/IndexProduct'
import BestSells from '../Components/Products/BestSells'
import banner10 from '../assets/banner-10.png'
import banner9 from '../assets/banner-9.png'
function HomePage() {
  return (
    <div>
        
        <Bennare/>
        <FeaturedCategories/>
        <SubBannerImage/>
        <IndexProduct/>
        <BestSells/>

        {/* newsletter */}
        <div className="py-10">
  {/* Banner Container */}
  <div className="w-full h-[400px] relative">
    {/* Background Image */}
    <img src={banner10} alt="" className="h-full w-full object-cover rounded-lg" />

    {/* Foreground Image */}
    <img
      src={banner9}
      alt=""
      className="absolute right-20 bottom-0 w-[40%] h-[70%] object-contain"
    />

    {/* Text Content */}
    <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-black max-w-[40%]">
      <h1 className="text-4xl font-bold leading-snug drop-shadow-lg">
        Stay home & get your daily<br />
        needs from our shop
      </h1>
      <p className='pt-5'>Start You'r Daily Shopping with<span className='texColor'> Nest Mart</span></p>
    </div>
  </div>
</div>

        {/* <Login/> */}
    </div>
  )
}

export default HomePage