import React, { useState, useEffect, useRef } from 'react';

const Corousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideRef = useRef(null);

  const slides = [
    {
      id: 1,
      url: 'https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fapp-banners%2F10Off.jpg&w=1920&q=75',
      alt: 'Mountain landscape',
      title: ''
    },
    {
      id: 2,
      url: 'https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fapp-banners%2Fnew-year-banner.png&w=1920&q=75',
      alt: 'Forest with fog',
      title: ''
    },
    {
      id: 3,
      url: 'https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fapp-banners%2Faward%2B%2Bbanner.png&w=1920&q=75',
      alt: 'Sunset in forest',
      title: ''
    },
    {
      id: 4,
      url: 'https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fapp-banners%2FMidnight%2Bbanner.jpg&w=1920&q=75',
      alt: 'Lake at sunset',
      title: ''
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      autoSlideRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
    }

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isHovered, slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div 
        className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-gray-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full overflow-hidden">

          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="relative flex-none w-full">
                <img 
                  src={slide.url} 
                  alt={slide.alt}
                  className="w-full h-75 sm:h-100 md:h-125 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
                    {slide.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/80 text-white hover:text-gray-800 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Previous slide"
          >
            ❮
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/80 text-white hover:text-gray-800 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Next slide"
          >
            ❯
          </button>

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125 w-4 sm:w-6' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Corousel;