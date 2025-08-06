import React from 'react'
import HeaderIndex from '../Headers/HeaderIndex'
import { Outlet } from 'react-router-dom'
import Footer from '../Common/Footer'

function UserLayout() {
  return (
    <div>
        <HeaderIndex/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserLayout