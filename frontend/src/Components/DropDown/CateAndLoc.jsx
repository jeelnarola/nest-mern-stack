import React from 'react'
import { useState } from 'react';

function CateAndLoc({ item, handelSetvalue, selected, closeDropdown }) {
    const [searchTerm, setSearchTerm] = useState("")
    const filteredItems = item.filter(ele =>
        ele.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return (
        <div className='bg-white p-2 rounded-lg shadow-md' >
            <input type="text" className="w-full mb-2 px-2 py-1 border rounded focus:outline-none" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onClick={(e) => e.stopPropagation()} />
            {filteredItems.length > 0 ? (
                filteredItems.map((ele, index) => (
                    <li
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation()
                            handelSetvalue(ele)
                            closeDropdown()
                        }}
                        className={`list-none text-smd px-1 py-1 cursor-pointer rounded
              ${selected === ele
                                ? 'bg-gray-300 text-white'
                                : 'hover:bg-[#3BB77E] hover:text-white'
                            }`}
                    >
                        {ele}
                    </li>
                ))
            ) : (
                <p className="text-gray-400 text-sm px-2 py-1">No match found</p>
            )}
        </div>
    )
}

export default CateAndLoc