import React from 'react'
import HeaderIndex from '../Headers/HeaderIndex'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <div>
        <HeaderIndex/>
        <Outlet/>
    </div>
  )
}

export default UserLayout