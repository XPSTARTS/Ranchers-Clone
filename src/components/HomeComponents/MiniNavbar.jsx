import React from 'react'
import { Link } from 'react-router-dom'

const MiniNavbar = () => {
  return (
    <div className='h-15 flex gap-10 justify-center text-2xl font-bold bg-gray-600/20 items-center '>
        
        <Link className='hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2'>Deals</Link>
        <Link className='hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2'>Chicken Burgers</Link>
        <Link className='hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2'>Beef Burgers</Link>
        <Link className='hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2'>Pizza</Link>
        <Link className='hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2'>Quick Bites</Link>
        <Link className='hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2'>Fries</Link>

    </div>
  )
}

export default MiniNavbar
