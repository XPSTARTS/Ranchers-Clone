import React from 'react';
import { useCart } from '../../context/CartContext';

const HomeCards = ({ id, name, description, price, imageUrl }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const product = {
            id,
            name,
            description,
            price,
            imageUrl
        };
        addToCart(product);
        
    };

    return (
        <div className='w-70 h-110 bg-black/15 m-10 rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
            <div>
                <img src={imageUrl} className='w-full h-80 object-cover' alt={name}/>
            </div>

            <div className='p-2'>
                <h3 className='text-orange-400 font-bold text-xl'>{name}</h3>
                <p className='font-bold text-sm'>{description}</p>

                <div className='flex justify-between mt-2 items-center'>
                    <p className='text-orange-400 font-bold text-xl'>Rs. {price}</p>
                    <button 
                        className='font-bold bg-red-500 rounded-lg px-4 py-2 text-white hover:bg-orange-400 hover:text-black transition-all transform hover:scale-105'
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeCards;