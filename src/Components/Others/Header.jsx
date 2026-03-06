import React from 'react'


const Header = () => {
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl font-medium'>hello <br /><span className='text-3xl font-semibold'>Usman</span></h1>
        <button className='bg-red-600 text-large font-medium text-white px-4 py-2 rounded-sm'>Logout</button>

    </div>
  )
}

export default Header