import React from 'react'

const MiniNavbar = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className='h-15 flex gap-10 justify-center text-2xl font-bold bg-gray-600/20 items-center'>

      <button onClick={() => scrollToSection("deals")} className="hover:text-orange-400 hover:border-b-2 hover:border-b-orange-400">Deals</button>

      <button onClick={() => scrollToSection("chicken")} className="hover:text-orange-400 hover:border-b-2 hover:border-b-orange-400">Chicken Burgers</button>

      <button onClick={() => scrollToSection("beef")} className="hover:text-orange-400 hover:border-b-2 hover:border-b-orange-400">Beef Burgers</button>

      <button onClick={() => scrollToSection("pizza")} className="hover:text-orange-400 hover:border-b-2 hover:border-b-orange-400">Pizza</button>

      <button onClick={() => scrollToSection("quick")} className="hover:text-orange-400 hover:border-b-2 hover:border-b-orange-400">Quick Bites</button>

      <button onClick={() => scrollToSection("fries")} className="hover:text-orange-400 hover:border-b-2 hover:border-b-orange-400">Fries</button>

    </div>
  )
}

export default MiniNavbar