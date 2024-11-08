"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Sample image URLs for the carousel and product images
const carouselImages = [
  "/ban1.webp",
  "/ban3.webp",
  "/ban4.webp",
  "/ban2.webp",
];

const productsItems = [
  { name: "Earbuds", image: "/earbuds.webp", link: "/product/1" },
  { name: "Cases", image: "/Cases_100_100.webp", link: "/product/2" },
  { name: "Smartwatch", image: "/Smartwatch_100_100.webp", link: "/product/3" },
  { name: "Powerbank", image: "/Powerbank.webp", link: "/product/4" },
  { name: "Sunglass", image: "/Sunglass_100_100.webp", link: "/product/5" },
  { name: "Cases2", image: "/Cases_100_100.webp", link: "/product/6" },
  { name: "Product 7", image: "/Cases_100_100.webp", link: "/product/7" },
  { name: "Product 8", image: "/Cases_100_100.webp", link: "/product/8" },
  { name: "Product 9", image: "/Cases_100_100.webp", link: "/product/9" },
  { name: "Product 10", image: "/Cases_100_100.webp", link: "/product/10" },
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 4; // Number of product items to show at once

  // Automatic image change every 3 seconds for the main carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Move the product carousel to the next set of products
  const nextSlide = () => {
    if (currentIndex < products.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Move the product carousel to the previous set of products
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="mt-40 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Hero Section (Main Image Carousel) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Carousel takes up 70% width */}
          <div className="col-span-1 lg:col-span-2 w-full h-[400px] overflow-hidden rounded-lg shadow-lg relative">
            <Image
              src={carouselImages[currentImageIndex]}
              alt="carousel"
              width={840}
              height={400}
              className="w-full h-full object-cover transition-transform duration-1000"
            />
          </div>

          {/* Right Column (Two Image Grid) */}
          <div className="col-span-1 lg:col-span-1 flex flex-col gap-4">
            <div className="w-full h-[190px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/ban4.webp"
                alt="image 4"
                width={266}
                height={190}
              
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[190px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/ban2.webp"
                alt="image 5"
                width={266}
                height={190}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Product Carousel Section */}
        <div className="relative mt-12">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Shop by Categories</h2>
          <div className="flex items-center space-x-2
           overflow-hidden">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
            >
              <span className="text-xl">&lt;</span>
            </button>

            {/* Product items */}
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 220}px)` }}>
              {productsItems.map((product) => (
                <div key={product.name} className="text-center w-[100px] md:w-[200px] flex-shrink-0">
                  <a href={product.link}>
                    <div className="flex justify-center items-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="w-[50px] h-[50px] object-cover rounded-lg mb-2"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-600">{product.name}</p>
                  </a>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
            >
              <span className="text-xl">&gt;</span>
            </button>
          </div>

          {/* Optional: Add a "Show More" button */}
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
