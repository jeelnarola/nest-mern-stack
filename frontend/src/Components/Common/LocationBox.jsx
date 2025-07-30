import React from 'react'
import CateAndLoc from '../DropDown/CateAndLoc'
import { useState } from 'react'
import { useRef } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { useEffect } from 'react';
const dropDownItem = [
    "Your Location", "Alabama", "Alaska", "Arizona", "Delaware", "Florida", "Georgia", "Hawaii", "Indiana", "Maryland", "Nevadas", "New Jersey", "New Mexico", "New York"
]
function LocationBox() {
    const [selectcat, setSelectCat] = useState("Your Location")
    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownRef = useRef(null)
    const handelSetvalue = (val) => {
        setSelectCat(val)
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])
    return (
        <>
            <div className='rounded-md ' >
                <div className="flex items-center relative" ref={dropdownRef}>
                    <div
                        className='pr-5 pl-5 shadow-xl border border-gray-200 bg-white cursor-pointer relative w-[170px] p-2'
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <span className='flex items-center text-[15px]'>
                            <CiLocationOn className='mr-5' />{selectcat}
                        </span>

                        {/* Dropdown box */}
                        <div
                            className={`absolute top-[48px] left-0 w-[250px] max-h-[300px] overflow-y-scroll z-10 
          transition-all duration-300 origin-top transform 
          ${showDropdown ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
                        >
                            <CateAndLoc
                                item={dropDownItem}
                                handelSetvalue={handelSetvalue}
                                selected={selectcat}
                                closeDropdown={() => setShowDropdown(false)}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LocationBox