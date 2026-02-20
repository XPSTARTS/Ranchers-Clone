import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { setIsCartOpen, getTotalItems } = useCart();

    // Add scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-black/95 backdrop-blur-md py-2 shadow-lg' 
                : 'bg-black py-2'
        }`}>
            <div className='flex justify-between items-center px-4 md:px-8'>
                {/* Logo and Navigation */}
                <div className='flex items-center gap-4 md:gap-8'>
                    <Link to={"/"}>
                        <img
                            src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9137e136.png&w=400&q=75"
                            alt="Ranchers Cafe"
                            className='w-16 md:w-20'
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex flex-row gap-5 font-bold ml-6'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `pb-1 transition-all hover:text-orange-500 ${
                                    isActive 
                                        ? 'border-b-2 border-orange-500 text-orange-500' 
                                        : 'text-white'
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/ranchers"
                            className={({ isActive }) =>
                                `pb-1 transition-all hover:text-orange-500 ${
                                    isActive 
                                        ? 'border-b-2 border-orange-500 text-orange-500' 
                                        : 'text-white'
                                }`
                            }
                        >
                            Ranchers Expansion
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `pb-1 transition-all hover:text-orange-500 ${
                                    isActive 
                                        ? 'border-b-2 border-orange-500 text-orange-500' 
                                        : 'text-white'
                                }`
                            }
                        >
                            About Us
                        </NavLink>
                    </div>
                </div>

                {/* Right Side Icons */}
                <div className='flex items-center gap-2 md:gap-4'>
                    <div className='flex gap-2'>
                        <div className='flex gap-4'>
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className='relative text-2xl w-12 h-9 hover:bg-white/10 text-center rounded-lg transition-colors flex items-center justify-center text-white'
                            >
                                🛒
                                {getTotalItems() > 0 && (
                                    <span className='absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold'>
                                        {getTotalItems()}
                                    </span>
                                )}
                            </button>
                            
                            {/* Profile Button */}
                            <button
                                className='text-2xl w-12 h-9 hover:bg-white/10 text-center rounded-lg transition-colors flex items-center justify-center text-white'
                                onClick={() => alert('Profile functionality coming soon!')}
                            >
                                👤
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='md:hidden flex flex-col w-8 h-8 justify-center items-center space-y-1.5 focus:outline-none'
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            isMenuOpen ? 'rotate-45 translate-y-2' : ''
                        }`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            isMenuOpen ? 'opacity-0' : ''
                        }`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`
                md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 transition-all duration-300 overflow-hidden
                ${isMenuOpen ? 'max-h-64' : 'max-h-0'}
            `}>
                <div className='flex flex-col p-4 space-y-3 font-bold'>
                    <NavLink
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `py-2 px-4 rounded-lg transition-all hover:bg-white/10 ${
                                isActive 
                                    ? 'bg-orange-500/20 text-orange-500 border-l-4 border-orange-500' 
                                    : 'text-white hover:text-orange-500'
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/ranchers"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `py-2 px-4 rounded-lg transition-all hover:bg-white/10 ${
                                isActive 
                                    ? 'bg-orange-500/20 text-orange-500 border-l-4 border-orange-500' 
                                    : 'text-white hover:text-orange-500'
                            }`
                        }
                    >
                        Ranchers Expansion
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `py-2 px-4 rounded-lg transition-all hover:bg-white/10 ${
                                isActive 
                                    ? 'bg-orange-500/20 text-orange-500 border-l-4 border-orange-500' 
                                    : 'text-white hover:text-orange-500'
                            }`
                        }
                    >
                        About Us
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;