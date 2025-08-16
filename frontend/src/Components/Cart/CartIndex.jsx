import React from 'react'
import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io'
import { MdDelete } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import CartList from './CartList';
function CartIndex() {
    const location = useLocation();
    const [show, setShow] = useState(true);

    function ShopingCart() {
        const [quantity, setQuantity] = useState(1)
        const handleChange = (e) => {
            const value = e.target.value;
            // Optional: allow only numbers
            if (/^\d*$/.test(value)) {
                setQuantity(value);
            }
        }

    }
    return (
        <>
            <CartList/>
        </>
    )
}

export default CartIndex;