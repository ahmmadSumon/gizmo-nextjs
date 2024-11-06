import Link from "next/link";
import useCartStore from "../app/useCartStore"; // Adjust the import path
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent any click event from propagating
    addItem(product); // Add the product to the cart

    // Trigger toast notification
    toast(`${product.name} added to cart.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg">
      {/* Wrap only the parts you want to navigate */}
      <Link href={`/products/${product.id}`} passHref>
        <div className="cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-lg font-bold mt-4">{product.name}</h3>
        </div>
      </Link>
      <p className="text-gray-600 mt-2">
        {product.description.substring(0, 25)}...
      </p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-green-600">
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={handleAddToCart} // Add to cart button, does not trigger navigation
          className="  bg-black text-white px-4 py-2 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
