"use client";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { newArrivals } from "../data"; // Example product data
import useCartStore from "../useCartStore"; // Import the useCartStore hook

const Products = () => {
  const addItem = useCartStore((state) => state.addItem); // Access addItem from cart store
  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: null, // You can add size options if necessary
    };
    addItem(productToAdd); // Add the product to the cart
    
    setIsToastVisible(true);

    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <div key={product.id} className="relative fle rigth-0">
             <ProductCard product={product} />
             
            </div>
            
          ))}
                
        </div>
      </div>

     
      
    </section>
  );
};

export default Products;