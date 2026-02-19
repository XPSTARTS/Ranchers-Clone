import React from 'react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
    const { 
        cartItems, 
        isCartOpen, 
        setIsCartOpen, 
        removeFromCart, 
        updateQuantity,
        getTotalPrice 
    } = useCart();

    return (
        <>
            {isCartOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-all duration-300"
                    onClick={() => setIsCartOpen(false)}
                />
            )}

            <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white/95 backdrop-blur-md shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
                isCartOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="bg-linear-to-r from-orange-500 to-red-500 p-4 text-white">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🛒</span>
                            <h2 className="text-xl font-bold">Your Cart</h2>
                        </div>
                        <button 
                            onClick={() => setIsCartOpen(false)}
                            className="text-2xl hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
                        >
                            &times;
                        </button>
                    </div>
                </div>

                {/* Cart Items */}
                <div className="grow overflow-y-auto p-4" style={{ maxHeight: 'calc(100vh - 180px)' }}>
                    {cartItems.length === 0 ? (
                        <div className="text-center mt-20">
                            <span className="text-6xl mb-4 block">🛍️</span>
                            <p className="text-gray-500 text-lg">Your cart is empty</p>
                            <button 
                                onClick={() => setIsCartOpen(false)}
                                className="mt-4 text-orange-500 hover:text-orange-600 font-semibold"
                            >
                                Continue Shopping →
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex gap-4 bg-orange-50/50 p-3 rounded-lg border border-orange-100 hover:shadow-md transition-shadow">

                                    <img 
                                        src={item.imageUrl || 'https://via.placeholder.com/80'} 
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-lg border-2 border-orange-200"
                                    />
                                    
                                    <div className="grow">
                                        <h3 className="font-bold text-gray-800">{item.name}</h3>
                                        <p className="text-orange-500 font-semibold">Rs. {item.price}</p>
                                        
                                        <div className="flex items-center gap-2 mt-2">
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-6 h-6 bg-orange-200 text-orange-700 rounded hover:bg-orange-300 transition-colors font-bold"
                                            >
                                                -
                                            </button>
                                            <span className="font-semibold w-6 text-center">{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-6 h-6 bg-orange-200 text-orange-700 rounded hover:bg-orange-300 transition-colors font-bold"
                                            >
                                                +
                                            </button>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                className="ml-2 text-red-500 hover:text-red-700 text-sm font-semibold"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-orange-200 bg-linear-to-t from-orange-50 to-white">
                        
                        <div className="flex justify-between mb-3 text-gray-600">
                            <span>Subtotal:</span>
                            <span>Rs. {getTotalPrice().toFixed(2)}</span>
                        </div>
                        
                        <div className="flex justify-between mb-3 text-gray-600">
                            <span>Delivery:</span>
                            <span>Rs. 50.00</span>
                        </div>
                        
                        <div className="flex justify-between mb-4 text-lg font-bold">
                            <span>Total:</span>
                            <span className="text-orange-600">Rs. {(getTotalPrice() + 50).toFixed(2)}</span>
                        </div>
                        
                        <button 
                            className="w-full bg-linear-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
                            onClick={() => {
                                alert('Checkout functionality coming soon!');
                            }}
                        >
                            Proceed to Checkout
                        </button>
                        
                        <button 
                            onClick={() => setIsCartOpen(false)}
                            className="w-full text-center mt-3 text-gray-500 hover:text-orange-500 text-sm font-semibold"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartSidebar;