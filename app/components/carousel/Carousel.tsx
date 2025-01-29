"use client";

import Image from "next/image";
import { useState } from "react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="carousel min-w-[40%] min-h-[35%] max-w-[44%] max-h-[35%] flex flex-col justify-center items-center">
      <div className="carousel-item w-full bg-neutral-100 rounded-lg overflow-hidden flex justify-center items-center">
        <Image
          src={images[currentIndex]}
          alt={images[currentIndex]}
          width={500}
          height={500}
          priority={true}
          className="transition duration-500 ease-in-out object-fill"
        />
      </div>
      <div className="flex justify-between items-center space-x-4 pt-4">
        <button type="button" onClick={handlePrev} className="btn btn-circle">
          ❮
        </button>
        <div className="flex gap-2">
          {images.map((_image, index) => (
            <button
              key={index}
              type="button"
              className={`btn btn-xs size-4 ${
                currentIndex === index ? "bg-primary text-white" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
        <button type="button" onClick={handleNext} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
}
