import React, { useState } from 'react'
import CateAndLoc from '../DropDown/CateAndLoc'
import { useRef } from 'react'
import { useEffect } from 'react'
const dropDownItem = [
    "All Categories", "Wines & Alcohol", "Clothing & Beauty", "Pet Foods & Toy", "Fast food", "Baking material", "Vegetables", "Fresh Seafood", "Noodles & Rice", "Ice cream"
]
function SearchBox() {
    const [selectcat, setSelectCat] = useState("All Categories")
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
            <div className='border border-[#3BB77E] rounded-md ' >
                <div className="flex items-center xl:w-[600px] relative" ref={dropdownRef}>
                    <div
                        className='border-r border-gray-300 pr-5 pl-5  cursor-pointer relative w-[170px]'
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <span>
                            {selectcat.length > 14 ? selectcat.slice(0, 12) + "..." : selectcat}
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

                    <input
                        type="text"
                        placeholder='Search for items...'
                        className='p-2 pl-5 w-full focus:outline-none'
                    />
                </div>
            </div>

        </>
    )
}

export default SearchBox