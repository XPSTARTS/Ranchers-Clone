import React from 'react'

const HomeCards = ({ id, name, description, price, imageUrl }) => {
  return (
    <div className='w-70 h-110 bg-black/15 m-10'>
        <div>
            <img src={imageUrl} className='w-full h-80' alt={name}/>
        </div>

        <div className='p-2'>
            <h3 className='text-orange-400 font-bold text-xl'>{name}</h3>
            <p className='font-bold text-sm'>{description}</p>

            <div className='flex justify-between mt-2'>
               <p className='text-orange-400 font-bold text-xl'>Rs. {price}</p>
               <button className='font-bold bg-red-500 rounded-lg w-30 text-lg hover:bg-orange-400 hover:text-black'>
                 Add to Cart
               </button>
            </div>
        </div>
    </div>
  )
}

export default HomeCards