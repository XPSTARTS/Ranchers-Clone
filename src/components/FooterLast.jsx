import React from 'react'
import { Link } from 'react-router-dom'

const FooterLast = () => {
  return (
    <div className="py-10">
      <div className="
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
        gap-8 sm:gap-10 md:gap-8 lg:gap-6 
        justify-items-center mx-6
      ">

        <div className="text-center">
          <h3 className="font-bold text-xl md:text-2xl pb-4">Menu</h3>
          <ul className="flex flex-col gap-2 font-bold text-base">
            <li><Link className="hover:text-orange-500 transition-colors">Deals</Link></li>
            <li><Link className="hover:text-orange-500 transition-colors">Chicken Burger</Link></li>
            <li><Link className="hover:text-orange-500 transition-colors">Beef Burger</Link></li>
            <li><Link className="hover:text-orange-500 transition-colors">Pizza</Link></li>
            <li><Link className="hover:text-orange-500 transition-colors">Quick Bites</Link></li>
            <li><Link className="hover:text-orange-500 transition-colors">Fries</Link></li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="font-bold text-xl md:text-2xl pb-4">Ranchers</h3>
          <div className="flex flex-col gap-2 font-bold">
            <Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
            <Link to="/ranchers" className="hover:text-orange-500 transition-colors">Ranchers Expansion</Link>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-bold text-xl md:text-2xl pb-4">Locations</h3>
          <div className="flex flex-col gap-2 font-bold">
            <Link className="hover:text-orange-500 transition-colors">Islamabad</Link>
            <Link className="hover:text-orange-500 transition-colors">Rawalpindi</Link>
            <Link className="hover:text-orange-500 transition-colors">Lahore</Link>
            <Link className="hover:text-orange-500 transition-colors">Sialkot</Link>
            <Link className="hover:text-orange-500 transition-colors">Sargodha</Link>
            <Link className="hover:text-orange-500 transition-colors">Gujranwala</Link>
            <Link className="hover:text-orange-500 transition-colors">Peshawar</Link>
            <Link className="hover:text-orange-500 transition-colors">Faisalabad</Link>
          </div>
        </div>

        <div className="
          col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 
          flex flex-col items-center gap-4 mt-6 lg:mt-0 justify-center
        ">
          <Link className="hover:scale-105 transition-transform w-full max-w-45 md:max-w-50">
            <img 
              src="https://rancherscafe.com/_next/static/media/Mobile-play-store-badge.6fd9e9fa.svg" 
              alt="Get it on Google Play" 
              className="h-12 w-full object-contain"
            />
          </Link>
          <Link className="hover:scale-105 transition-transform w-full max-w-40 md:max-w-50">
            <img 
              src="https://rancherscafe.com/_next/static/media/Mobile-app-store-badge.c83f0f3b.svg" 
              alt="Download on the App Store" 
              className="h-12 w-full object-contain"
            />
          </Link>
        </div>

      </div>
    </div>
  )
}

export default FooterLast