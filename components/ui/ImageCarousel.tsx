import React, { useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-auto">
      <img
        src={images[currentIndex]}
        alt={`carousel-image-${currentIndex}`}
        className="w-full h-auto object-cover rounded-lg"
      />

      {/* Previous Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full"
        onClick={handlePrev}
      >
        Prev
      </button>

      {/* Next Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
