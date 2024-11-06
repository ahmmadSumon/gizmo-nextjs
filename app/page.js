"use client";

import { useState } from "react";
import Herosection from "@/components/Herosection";
import Products from "./products/page";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  // Toast state
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Show toast message
  const handleAddToCart = (productName) => {
    setToastMessage(`${productName} has been added to your cart!`);
    setIsToastVisible(true);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  return (
    <>
      <ToastContainer />
      <Herosection />
      {/* Pass handleAddToCart to Products */}
      <Products onAddToCart={handleAddToCart} />

      {/* Toast Message */}
  
    </>
  );
}
