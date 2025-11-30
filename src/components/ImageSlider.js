// ImageSlider.jsx
import React, { useState, useEffect, useRef } from "react";
import slide1 from "../assets/review1.png";
import slide2 from "../assets/review2.png";
import slide3 from "../assets/review3.png";
import slide4 from "../assets/review4.png";
import slide5 from "../assets/review5.png";
import slide6 from "../assets/review6.png";
import slide7 from "../assets/review7.png";
import slide8 from "../assets/review8.png";

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];
const visibleCount = 4; // Number of slides visible at a time

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(nextSlide, 3000); // change slide every 3s
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  // Infinite scrolling: duplicate first slides at the end for smooth transition
  const extendedImages = [...images, ...images.slice(0, visibleCount)];

  return (
    <div
      className="relative w-full mx-auto"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Slider container */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
            width: `${(extendedImages.length * 100) / visibleCount}%`,
          }}
        >
          {extendedImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className={`w-[${100 / visibleCount}%] px-4 h-96 object-cover rounded-lg`}
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 z-10"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 z-10"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;
