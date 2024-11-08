"use client";

import { useParams } from "next/navigation"; // Correct way to get dynamic params in Next.js 15
import { useEffect, useState } from "react";
import newArrivals from "../../data"; // Adjust path if needed
import Image from "next/image";
import useCartStore from "../../useCartStore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams(); // Get dynamic route parameter using `useParams`
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

    const foundProduct = newArrivals.find((product) => product.id.toString() === id);

    if (foundProduct) {
      setProduct(foundProduct);
      setLoading(false);
    } else {
      setError("Product not found!");
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleAddToCart = (shouldNavigate = false) => {
    addItem(product);

    toast(`${product.name} added to cart.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    if (shouldNavigate) {
      router.push("/cart");
    }
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
            <div className="flex gap-5">
              <button
                onClick={() => handleAddToCart()}
                className="bg-black text-white py-2 px-4 rounded-lg"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleAddToCart(true)}
                className="bg-green-500 text-white py-2 px-4 rounded-lg"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
