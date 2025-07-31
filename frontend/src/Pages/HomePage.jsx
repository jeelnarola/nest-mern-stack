import React from 'react'
import HeaderIndex from '../Components/Headers/HeaderIndex'
import Login from '../Components/auth/Login'
import Bennare from '../Components/Common/Bennare'
import { Outlet } from 'react-router-dom'
import FeaturedCategories from '../Components/Common/FeaturedCategories'
import SubBannerImage from '../Components/Common/SubBannerImage'
import ListProduct from '../Components/Products/ListProduct'

function HomePage() {
  return (
    <div>
        
        <Bennare/>
        <FeaturedCategories/>
        <SubBannerImage/>
        <ListProduct/>
        {/* <Login/> */}
    </div>
  )
}

export default HomePage