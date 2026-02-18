import React from 'react'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

const FooterFirst = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">

        <div className="flex justify-center sm:justify-end">
          <img 
            src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9137e136.png&w=400&q=75" 
            alt="Logo" 
            className="w-32 sm:w-40 md:w-48" 
          />
        </div>

        <div className="flex flex-col items-center sm:items-start md:ml-6">
          <h5 className="font-bold text-xl mb-3">Follow Us</h5>  
          <div className="flex gap-6">
            <Link to="/" className="transition-transform hover:scale-110 duration-200">
              <FontAwesomeIcon 
                icon={faInstagram} 
                size="2x" 
                className="text-black hover:text-orange-500" 
              />
            </Link>
            <Link to="/" className="transition-transform hover:scale-110 duration-200">
              <FontAwesomeIcon 
                icon={faFacebook} 
                size="2x" 
                className="text-black hover:text-orange-500"
              />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FooterFirst