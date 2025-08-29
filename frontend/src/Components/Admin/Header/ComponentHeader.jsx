import React from 'react'

function ComponentHeader({title}) {
  return (
    <div>
    <h1 className='text-2xl uppercase font-semibold tracking-widest my-3 mb-5'>{title}</h1>
    </div>
  )
}

export default ComponentHeader
