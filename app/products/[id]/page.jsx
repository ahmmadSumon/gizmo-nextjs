"use client";

import { useParams } from "next/navigation"; // Import from next/navigation
import { useEffect, useState } from "react";
import { newArrivals } from "../../data"; // Adjust the path as needed
import Image from "next/image";
import useCartStore from "../../useCartStore"; // Import the cart store

const ProductDetails = () => {
  const { id } = useParams();  // Get the id from URL params using useParams
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addItem = useCartStore((state) => state.addItem); // Access addItem from cart store

  useEffect(() => {
    if (!id) return;  // Ensure id is available before fetching product

    const foundProduct = newArrivals.find((product) => product.id.toString() === id);

    if (foundProduct) {
      setProduct(foundProduct);
      setLoading(false);
    } else {
      setError("Product not found!");
      setLoading(false);
    }
  }, [id]); // Re-run when `id` changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: null, // You can adjust this based on your product options
    };
    addItem(productToAdd); // Add the product to the cart
  };

  return (
    <section className="mt-40 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>
            <p className="text-2xl font-semibold text-gray-800 mb-6">${product.price}</p>
            <button
              onClick={handleAddToCart} // Add to cart button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Add to Cart
            </button>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
