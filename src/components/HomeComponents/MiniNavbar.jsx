import React, { useState, useEffect, useRef } from 'react'

const MiniNavbar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [navbarHeight, setNavbarHeight] = useState(0)
  const miniNavRef = useRef(null)
  const placeholderRef = useRef(null)
  const originalOffsetTop = useRef(0)

  useEffect(() => {
    // Get the main navbar height
    const mainNavbar = document.querySelector('nav')
    if (mainNavbar) {
      setNavbarHeight(mainNavbar.offsetHeight)
    }

    // Store the original position of the miniNavbar
    if (miniNavRef.current) {
      originalOffsetTop.current = miniNavRef.current.offsetTop
    }

    const handleScroll = () => {
      // Recalculate navbar height in case it changed (e.g., py-2 vs py-4 transition)
      const currentNavbar = document.querySelector('nav')
      const currentNavbarHeight = currentNavbar ? currentNavbar.offsetHeight : 0
      setNavbarHeight(currentNavbarHeight)

      // Use the placeholder's position if sticky, otherwise use the miniNav's position
      const referenceTop = isSticky
        ? placeholderRef.current?.offsetTop
        : miniNavRef.current?.offsetTop

      if (referenceTop !== undefined && window.scrollY + currentNavbarHeight >= referenceTop) {
        if (!isSticky) {
          // Save original offset before going sticky
          originalOffsetTop.current = miniNavRef.current?.offsetTop || 0
          setIsSticky(true)
        }
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [isSticky])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {

      const mainNavbar = document.querySelector('nav')
      const navHeight = mainNavbar ? mainNavbar.offsetHeight : 0
      const miniNavHeight = miniNavRef.current ? miniNavRef.current.offsetHeight : 0
      const totalOffset = navHeight + miniNavHeight + 10 

      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - totalOffset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {isSticky && (
        <div
          ref={placeholderRef}
          style={{ height: miniNavRef.current?.offsetHeight || 0 }}
        />
      )}

      <div
        ref={miniNavRef}
        style={
          isSticky
            ? {
                position: 'fixed',
                top: `${navbarHeight}px`,
                left: 0,
                zIndex: 40,
              }
            : {}
        }
        className='h-auto min-h-15 flex gap-10 justify-center text-2xl font-bold bg-black/95 items-center flex-wrap w-screen'
      >
        <button onClick={() => scrollToSection("deals")} className="hover:text-orange-400 hover:border-b-2 hover:border-b-orange-400 border-b-orange-400 border-b-4">Deals</button>

        <button onClick={() => scrollToSection("chicken")} className="hover:text-orange-400 hover:border-b-2 hover:border-b-orange-400">Chicken Burgers</button>

        <button onClick={() => scrollToSection("beef")} className="hover:text-orange-400 hover:border-b-2 hover:border-b-orange-400">Beef Burgers</button>

        <button onClick={() => scrollToSection("pizza")} className="hover:text-orange-400 hover:border-b-2 hover:border-b-orange-400">Pizza</button>

        <button onClick={() => scrollToSection("quick")} className="hover:text-orange-400 hover:border-b-2 hover:border-b-orange-400">Quick Bites</button>

        <button onClick={() => scrollToSection("fries")} className="hover:text-orange-400 hover:border-b-2 hover:border-b-orange-400">Fries</button>
      </div>
    </>
  )
}

export default MiniNavbar