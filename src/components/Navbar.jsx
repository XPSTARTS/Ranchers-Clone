import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="relative">
            <div className='flex justify-between items-center px-4 md:px-8 py-2'>

                <div className='flex items-center gap-4 md:gap-8'>
                    <Link to={"/"}>
                        <img
                            src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9137e136.png&w=400&q=75"
                            alt="logo"
                            className='w-16 md:w-20'
                        />
                    </Link>

                    <div className='hidden md:flex flex-row gap-5 font-bold ml-6'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `pb-1 transition-all hover:text-yellow-600 ${isActive
                                    ? 'border-b-4 border-yellow-500 text-yellow-700'
                                    : ''
                                }`
                            }
                        >Home</NavLink>

                        <NavLink
                            to="/ranchers"
                            className={({ isActive }) =>
                                `pb-1 transition-all hover:text-yellow-600 ${isActive
                                    ? 'border-b-4 border-yellow-500 text-yellow-700'
                                    : ''
                                }`
                            }
                        >Ranchers Expansion</NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `pb-1 transition-all hover:text-yellow-600 ${isActive
                                    ? 'border-b-4 border-yellow-500 text-yellow-700'
                                    : ''
                                }`
                            }
                        >About Us</NavLink>
                    </div>
                </div>

                <div className='flex items-center gap-2 md:gap-4'>

                    <div className='flex gap-2'>
                        <div className='flex gap-4'>
                            <div
                                className='bg-gray-400/4 text-2xl w-12 h-9 hover:bg-gray-600 text-center'
                            >&#128722;</div>
                            <div
                                className='bg-gray-400/4 text-2xl w-12 h-9 hover:bg-gray-600 text-center'
                            >&#128100;</div>
                        </div>

                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='md:hidden flex flex-col w-8 h-8 justify-center items-center space-y-1.5 focus:outline-none'
                    >
                        <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            <div className={`
                md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden z-50
                ${isMenuOpen ? 'max-h-64 border-t border-gray-200' : 'max-h-0'}
            `}>
                <div className='flex flex-col p-4 space-y-3 font-bold'>
                    <NavLink
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `py-2 px-4 rounded-lg transition-all hover:bg-yellow-50 ${isActive
                                ? 'bg-yellow-100 text-yellow-700 border-l-4 border-yellow-500'
                                : 'text-gray-800'
                            }`
                        }
                    >Home</NavLink>

                    <NavLink
                        to="/ranchers"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `py-2 px-4 rounded-lg transition-all hover:bg-yellow-50 ${isActive
                                ? 'bg-yellow-100 text-yellow-700 border-l-4 border-yellow-500'
                                : 'text-gray-800'
                            }`
                        }
                    >Ranchers Expansion</NavLink>

                    <NavLink
                        to="/about"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `py-2 px-4 rounded-lg transition-all hover:bg-yellow-50 ${isActive
                                ? 'bg-yellow-100 text-yellow-700 border-l-4 border-yellow-500'
                                : 'text-gray-800'
                            }`
                        }
                    >About Us</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar