import { useState, useEffect } from "react";

export default function CarouselImages({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Carousel"
          className="w-[450px]  object-cover transition-all duration-500 ease-in-out"
        />
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
