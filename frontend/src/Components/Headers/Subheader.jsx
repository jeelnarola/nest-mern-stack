import React from 'react'
import logo from '../../assets/logo.svg'
import SearchBox from '../Common/SearchBox'
import LocationBox from '../Common/LocationBox'
import HeaderActionicon from './HeaderActionicon'
import { IoMdMenu } from "react-icons/io";
function Subheader() {
  return (
    <>
      <div className='md:border-b-1 md:border-gray-300 p-5'>
        <div className="container mx-auto ">
          <div className='flex justify-between items-center'>
            <div className='block lg:hidden text-3xl'>
              <IoMdMenu />
            </div>
            <div>
              <img src={logo} alt="Logo Loading..." className='w-34 md:w-auto' />
            </div>
            <div className='hidden lg:block'>
              <SearchBox />
            </div>
            <div className='hidden xl:block'>
              <LocationBox />
            </div>
            <div>
              <HeaderActionicon />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Subheader