import React from 'react'


const Header = () => {
  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-black text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Sumit🙌</span></h1>
      <button className='text-white text-xl bg-red-600 px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
