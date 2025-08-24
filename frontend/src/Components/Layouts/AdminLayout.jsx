import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderIndex from '../Headers/HeaderIndex'
import Footer from '../Common/Footer'

function AdminLayout() {
  return (
    <>
        <Outlet/>
    </>
  )
}

export default AdminLayout