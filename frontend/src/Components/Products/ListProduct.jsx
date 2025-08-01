import React, { useEffect } from 'react'
import { getAllUsers } from '../../services/ProductService';

function ListProduct() {
  useEffect(() => {
    getAllUsers()
      .then(setUsers)
      .catch(console.error);
  }, []);
  return (
    <div>ListProduct</div>
  )
}

export default ListProduct