"use client";
import { useState } from "react";
import ProductCard from "../../components/ProductCard"; // Ensure the path is correct
import newArrivals from "../data";
import useCartStore from "../useCartStore";
import { toast } from "react-toastify"; // Assuming you use react-toastify for notifications

const Products = () => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: null,
    };
    addItem(productToAdd);

    // Trigger toast notification
    toast(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} onAddToCart={() => handleAddToCart(product)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
