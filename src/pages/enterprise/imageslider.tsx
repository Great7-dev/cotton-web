import man from "../../assets/bicman.jpeg";
import { SetStateAction, useEffect, useState } from "react";

const slides = [
  {
    url: man,
    quote:
      "Cotton made hiring and management seamless helping us scale faster than ever!",
    author: "Damilare Ojelade",
    position: "CEO, Swift Logistics",
  },
  {
    url: man,
    quote: "The platform transformed our delivery operations completely!",
    author: "Sarah Chen",
    position: "Operations Director, Quick Delivery",
  },
  {
    url: man,
    quote:
      "Cotton made hiring and management seamless helping us scale faster than ever!",
    author: "Marcus Johnson",
    position: "Logistics Manager, Speed Express",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // 5 seconds interval

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Pause auto-slide when user hovers over the slider
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Manual navigation through the dots
  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
    // Reset the timer by briefly pausing and then unpausing
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 50);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <div
        className="h-full md:h-96 w-full relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-64 sm:h-80 md:h-96 bg-center bg-cover duration-700 ease-in-out relative rounded-lg md:rounded-2xl"
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40 rounded-lg md:rounded-2xl"></div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col p-4 sm:p-6 md:px-16 md:pb-8 text-white">
            <p className="text-lg sm:text-xl md:text-3xl font-light mb-2 md:mb-6 line-clamp-3 md:line-clamp-none max-w-2xl font-['InterDisplay']">
              "{slides[currentIndex].quote}"
            </p>
            <div>
              <p className="font-semibold text-sm sm:text-base md:text-lg font-['InterDisplay']">
                {slides[currentIndex].author}
              </p>
              <p className="text-gray-300 text-xs sm:text-sm font-['InterDisplay']">
                {slides[currentIndex].position}
              </p>
            </div>
          </div>
        </div>

        {/* Dots - Positioned for better visibility on mobile */}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 flex space-x-1 md:space-x-1.5">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === index ? "bg-green-500" : "bg-green-300/50"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
