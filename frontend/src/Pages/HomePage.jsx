import React from 'react'
import HeaderIndex from '../Components/Headers/HeaderIndex'
import Login from '../Components/auth/Login'
import Bennare from '../Components/Common/Bennare'

function HomePage() {
  return (
    <div>
        <HeaderIndex/>
        <Bennare/>
        {/* <Login/> */}
    </div>
  )
}

export default HomePage